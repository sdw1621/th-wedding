import React, { useState } from 'react';
import Gift from 'lucide-react/dist/esm/icons/gift';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ChevronUp from 'lucide-react/dist/esm/icons/chevron-up';
import Copy from 'lucide-react/dist/esm/icons/copy';
import { useScrollReveal } from '../hooks/useScrollReveal';

// 토스 송금 딥링크
const openToss = (bank, accountNo, holder) => {
    window.open(`supertoss://send?bank=${encodeURIComponent(bank)}&accountNo=${accountNo}&origin=wedding`, '_blank');
};

// 카카오 송금 딥링크
const openKakaoPay = (bank, accountNo) => {
    window.open(`https://qr.kakaopay.com/`, '_blank');
};

// 계좌 항목 하나를 렌더링하는 서브 컴포넌트
function AccountRow({ bankLabel, accountNo, holder, bankCode, showToast, handleCopy }) {
    return (
        <div>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs text-stone-600 mb-1 font-medium">{bankLabel} {accountNo}</p>
                    <p className="text-sm font-bold text-stone-800">예금주: {holder}</p>
                </div>
                <button onClick={() => handleCopy(`${bankLabel} ${accountNo}`)} className="text-xs px-3 py-1.5 bg-stone-100 text-stone-700 font-medium rounded-lg flex items-center hover:bg-stone-200 shrink-0">
                    <Copy size={14} className="mr-1" /> 복사
                </button>
            </div>
            <div className="flex space-x-2 mt-3">
                <button
                    onClick={() => openToss(bankCode, accountNo.replace(/-/g, ''), holder)}
                    className="flex-1 py-2 bg-[#0064FF] text-white text-[11px] font-bold rounded-lg hover:bg-[#0050dd] transition-colors flex items-center justify-center"
                >
                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2V9h-2v8zm0-10h2V5h-2v2z" /></svg>
                    토스로 송금
                </button>
                <button
                    onClick={() => openKakaoPay(bankCode, accountNo.replace(/-/g, ''))}
                    className="flex-1 py-2 bg-[#FAE100] text-[#3C1E1E] text-[11px] font-bold rounded-lg hover:bg-[#f0d700] transition-colors flex items-center justify-center"
                >
                    <svg className="w-3.5 h-3.5 mr-1" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.48 3 2 6.69 2 11.16c0 2.88 1.87 5.41 4.71 6.83l-.97 3.56c-.07.26.22.47.45.33l4.17-2.74c.53.05 1.07.08 1.64.08 5.52 0 10-3.69 10-8.22S17.52 3 12 3z" /></svg>
                    카카오페이
                </button>
            </div>
        </div>
    );
}

export default function AccountInfo({ showToast }) {
    const [ref, isVisible] = useScrollReveal();
    const [openGroom, setOpenGroom] = useState(false);
    const [openBride, setOpenBride] = useState(false);

    const handleCopy = (text) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast('계좌번호가 복사되었습니다.');
        } catch (err) {
            console.error('Copy failed', err);
            showToast('복사에 실패했습니다. 직접 입력해주세요.');
        }
        document.body.removeChild(textArea);
    };

    return (
        <section className="py-24 px-6 bg-stone-50" id="account" ref={ref}>
            <div className={`max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-10">
                    <Gift className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">마음 전하실 곳</h2>
                    <p className="text-sm text-stone-600 mt-4 leading-relaxed font-medium">
                        따뜻한 마음으로 축하해 주시는 모든 분들께 감사드립니다.<br />
                        바르고 지혜롭게 잘 살겠습니다.
                    </p>
                </div>

                <div className="space-y-4">
                    {/* 신랑측 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200">
                        <button
                            onClick={() => setOpenGroom(!openGroom)}
                            className="w-full px-6 py-5 flex justify-between items-center text-left bg-blue-50/50 hover:bg-blue-50 transition-colors"
                        >
                            <span className="font-bold text-stone-800">신랑측 계좌번호</span>
                            {openGroom ? <ChevronUp size={20} className="text-stone-500" /> : <ChevronDown size={20} className="text-stone-500" />}
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openGroom ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-stone-100 space-y-5">
                                <AccountRow bankLabel="카카오뱅크" accountNo="3333015650207" holder="강태구" bankCode="카카오뱅크" showToast={showToast} handleCopy={handleCopy} />
                                <div className="w-full h-px bg-stone-100"></div>
                                <AccountRow bankLabel="농협" accountNo="735080-51-036329" holder="김경자" bankCode="농협" showToast={showToast} handleCopy={handleCopy} />
                            </div>
                        </div>
                    </div>

                    {/* 신부측 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200">
                        <button
                            onClick={() => setOpenBride(!openBride)}
                            className="w-full px-6 py-5 flex justify-between items-center text-left bg-rose-50/50 hover:bg-rose-50 transition-colors"
                        >
                            <span className="font-bold text-stone-800">신부측 계좌번호</span>
                            {openBride ? <ChevronUp size={20} className="text-stone-500" /> : <ChevronDown size={20} className="text-stone-500" />}
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openBride ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-stone-100 space-y-5">
                                <AccountRow bankLabel="우리은행" accountNo="1002-837-547920" holder="신희영" bankCode="우리은행" showToast={showToast} handleCopy={handleCopy} />
                                <div className="w-full h-px bg-stone-100"></div>
                                <AccountRow bankLabel="우리은행" accountNo="1002-734-796143" holder="송현숙" bankCode="우리은행" showToast={showToast} handleCopy={handleCopy} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
