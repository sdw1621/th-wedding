import React, { useState } from 'react';
import Gift from 'lucide-react/dist/esm/icons/gift';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ChevronUp from 'lucide-react/dist/esm/icons/chevron-up';
import Copy from 'lucide-react/dist/esm/icons/copy';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AccountInfo({ showToast }) {
    const [ref, isVisible] = useScrollReveal();
    const [openGroom, setOpenGroom] = useState(true);
    const [openBride, setOpenBride] = useState(true);

    const handleCopy = async (text) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                showToast('계좌번호가 복사되었습니다.');
                return;
            }
        } catch (err) {
            console.warn('Clipboard API failed, falling back to execCommand', err);
        }

        // iFrame 환경 및 구형 기기를 고려한 복사 로직 (카카오톡 대응 등)
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // 보이지 않게 설정
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();
        // iOS에서 전체 텍스트가 선택되도록 보장
        textArea.setSelectionRange(0, 99999);

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
                            style={{ touchAction: 'manipulation' }}
                            className="w-full px-6 py-5 flex justify-between items-center text-left bg-blue-50/50 hover:bg-blue-50 active:bg-blue-100 transition-colors select-none cursor-pointer"
                        >
                            <span className="font-bold text-stone-800">신랑측 계좌번호</span>
                            {openGroom ? <ChevronUp size={20} className="text-stone-500" /> : <ChevronDown size={20} className="text-stone-500" />}
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openGroom ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-stone-100 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">카카오뱅크 3333-01-5650207</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 강태구<span style={{ color: '#2563eb' }} className="ml-1">(신랑)</span></p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("카카오뱅크 3333-01-5650207")}
                                        style={{ touchAction: 'manipulation' }}
                                        className="text-[11px] px-3.5 py-2.5 bg-stone-100 text-stone-700 font-bold rounded-xl flex items-center active:bg-stone-200 select-none"
                                    >
                                        <Copy size={13} className="mr-1.5" /> 복사
                                    </button>
                                </div>
                                <div className="w-full h-px bg-stone-100"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">농협 735080-51-036329</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 김경자<span style={{ color: '#2563eb' }} className="ml-1">(신랑 어머니)</span></p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("농협 735080-51-036329")}
                                        style={{ touchAction: 'manipulation' }}
                                        className="text-[11px] px-3.5 py-2.5 bg-stone-100 text-stone-700 font-bold rounded-xl flex items-center active:bg-stone-200 select-none"
                                    >
                                        <Copy size={13} className="mr-1.5" /> 복사
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 신부측 */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200">
                        <button
                            onClick={() => setOpenBride(!openBride)}
                            style={{ touchAction: 'manipulation' }}
                            className="w-full px-6 py-5 flex justify-between items-center text-left bg-rose-50/50 hover:bg-rose-50 active:bg-rose-100 transition-colors select-none cursor-pointer"
                        >
                            <span className="font-bold text-stone-800">신부측 계좌번호</span>
                            {openBride ? <ChevronUp size={20} className="text-stone-500" /> : <ChevronDown size={20} className="text-stone-500" />}
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openBride ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-stone-100 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">우리은행 1002-837-547920</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 신희영<span style={{ color: '#e11d48' }} className="ml-1">(신부)</span></p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("우리은행 1002-837-547920")}
                                        style={{ touchAction: 'manipulation' }}
                                        className="text-[11px] px-3.5 py-2.5 bg-stone-100 text-stone-700 font-bold rounded-xl flex items-center active:bg-stone-200 select-none"
                                    >
                                        <Copy size={13} className="mr-1.5" /> 복사
                                    </button>
                                </div>
                                <div className="w-full h-px bg-stone-100"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">농협 352-0761-7396-23</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 신현갑<span style={{ color: '#e11d48' }} className="ml-1">(신부 아버지)</span></p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("농협 352-0761-7396-23")}
                                        style={{ touchAction: 'manipulation' }}
                                        className="text-[11px] px-3.5 py-2.5 bg-stone-100 text-stone-700 font-bold rounded-xl flex items-center active:bg-stone-200 select-none"
                                    >
                                        <Copy size={13} className="mr-1.5" /> 복사
                                    </button>
                                </div>
                                <div className="w-full h-px bg-stone-100"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">우리은행 1002-734-796143</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 송현숙<span style={{ color: '#e11d48' }} className="ml-1">(신부 어머니)</span></p>
                                    </div>
                                    <button
                                        onClick={() => handleCopy("우리은행 1002-734-796143")}
                                        style={{ touchAction: 'manipulation' }}
                                        className="text-[11px] px-3.5 py-2.5 bg-stone-100 text-stone-700 font-bold rounded-xl flex items-center active:bg-stone-200 select-none"
                                    >
                                        <Copy size={13} className="mr-1.5" /> 복사
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
