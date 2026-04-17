import { useEffect, useRef } from 'react';

// 모듈 레벨 스택: 앱 전체에서 열려 있는 '닫기 가능한 레이어'의 close 콜백을 쌓는다.
// 기기/브라우저 뒤로가기 1번 = 최상단 레이어 1개 닫기.
const stack = [];
let programmaticPop = false;

const handlePop = () => {
    // 프로그래매틱 close 시 호출한 history.back()에 의한 popstate는 무시 (재진입 가드)
    if (programmaticPop) {
        programmaticPop = false;
        return;
    }
    const entry = stack.pop();
    if (entry) entry.close();
};

export function useBackButton(isOpen, onClose) {
    // 매 렌더의 최신 onClose를 ref로 유지 (stale closure 방지)
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    });

    useEffect(() => {
        if (!isOpen) return;

        const entry = { close: () => onCloseRef.current?.() };
        const wasEmpty = stack.length === 0;
        stack.push(entry);
        if (wasEmpty) {
            window.addEventListener('popstate', handlePop);
        }
        window.history.pushState(null, '');

        return () => {
            const idx = stack.lastIndexOf(entry);
            const wasInStack = idx >= 0;
            const wasTop = wasInStack && idx === stack.length - 1;
            if (wasInStack) stack.splice(idx, 1);

            // 프로그래매틱 close(X버튼/확인 등): 내가 넣은 history 엔트리를 되돌려서
            // 히스토리 상태와 레이어 상태를 동기화.
            if (wasTop) {
                programmaticPop = true;
                window.history.back();
            }

            if (stack.length === 0) {
                window.removeEventListener('popstate', handlePop);
            }
        };
    }, [isOpen]);
}
