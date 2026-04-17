import { useEffect, useRef } from 'react';

// 모듈 레벨 스택: 열려 있는 '닫기 가능한 레이어'의 close 콜백을 쌓는다.
// 기기/브라우저 뒤로가기 1번 = 최상단 레이어 1개 닫기.
//
// 각 entry는 push 직전의 history.state 시퀀스(beforeSeq)를 기억해 두고,
// popstate가 발생했을 때 현재 state가 기대한 beforeSeq와 일치할 때만 닫음으로써,
// 외부 앱(캘린더/네비 등)에서 돌아올 때 발생할 수 있는 스퓨리어스 popstate나
// BFCache 복원 상황에서 엉뚱한 레이어가 닫히는 것을 방지.

const stack = [];
let programmaticPop = false;
let seq = 0;

const getStateSeq = () => {
    const s = window.history.state;
    return s && typeof s === 'object' ? s.__bbSeq ?? null : null;
};

const handlePop = () => {
    // 프로그래매틱 close 시 호출한 history.back()에 의한 popstate는 무시 (재진입 가드)
    if (programmaticPop) {
        programmaticPop = false;
        return;
    }
    const top = stack[stack.length - 1];
    if (!top) return;

    const currentSeq = getStateSeq();
    // 정상 경로: back()으로 우리 최상단 엔트리가 제거되어 현재 state는 그 이전으로 돌아가 있어야 함.
    if (currentSeq === top.beforeSeq) {
        stack.pop();
        top.close();
    }
    // 그 외 (외부 앱 왕복 후 브라우저가 임의 popstate를 쏘거나, BFCache 복원 등):
    // 스택 건드리지 않고 무시. 레이어는 그대로 유지됨.
};

export function useBackButton(isOpen, onClose) {
    // 매 렌더의 최신 onClose를 ref로 유지 (stale closure 방지)
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        if (!isOpen) return;

        const beforeSeq = getStateSeq();
        seq += 1;
        const mySeq = seq;
        const entry = {
            beforeSeq,
            mySeq,
            close: () => onCloseRef.current?.(),
        };
        const wasEmpty = stack.length === 0;
        stack.push(entry);
        if (wasEmpty) {
            window.addEventListener('popstate', handlePop);
        }
        window.history.pushState({ __bbSeq: mySeq }, '');

        return () => {
            const idx = stack.lastIndexOf(entry);
            const wasInStack = idx >= 0;
            const wasTop = wasInStack && idx === stack.length - 1;
            if (wasInStack) stack.splice(idx, 1);

            // 프로그래매틱 close(X 버튼 등): 내가 넣은 history 엔트리를 되돌려서
            // 히스토리 상태와 레이어 상태를 동기화. 단, 현재 state가 실제로 우리 것일 때만.
            if (wasTop && getStateSeq() === mySeq) {
                programmaticPop = true;
                window.history.back();
            }

            if (stack.length === 0) {
                window.removeEventListener('popstate', handlePop);
            }
        };
    }, [isOpen]);
}
