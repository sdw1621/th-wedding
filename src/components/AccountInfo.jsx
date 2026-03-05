import React, { useState } from 'react';
import { Gift, ChevronDown, ChevronUp, Copy } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AccountInfo({ showToast }) {
    const [ref, isVisible] = useScrollReveal();
    const [openGroom, setOpenGroom] = useState(false);
    const [openBride, setOpenBride] = useState(false);

    const handleCopy = (text) => {
        // iFrame 환경을 고려한 복사 로직 (카카오톡 대응 등)
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
                    <Gift className="mx-auto text-stone-400 mb-4" size={24} />
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
                        <div className={`transition-all duration-300 ease-in-out ${openGroom ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-stone-100 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">카카오뱅크 3333015650207</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 강태구</p>
                                    </div>
                                    <button onClick={() => handleCopy("카카오뱅크 3333015650207")} className="text-xs px-3 py-1.5 bg-stone-100 text-stone-700 font-medium rounded-lg flex items-center hover:bg-stone-200">
                                        <Copy size={14} className="mr-1" /> 복사
                                    </button>
                                </div>
                                <div className="w-full h-px bg-stone-100"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">농협 735080-51-036329</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 김경자</p>
                                    </div>
                                    <button onClick={() => handleCopy("농협 735080-51-036329")} className="text-xs px-3 py-1.5 bg-stone-100 text-stone-700 font-medium rounded-lg flex items-center hover:bg-stone-200">
                                        <Copy size={14} className="mr-1" /> 복사
                                    </button>
                                </div>
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
                        <div className={`transition-all duration-300 ease-in-out ${openBride ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-stone-100 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">우리은행 1002-837-547920</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 신희영</p>
                                    </div>
                                    <button onClick={() => handleCopy("우리은행 1002-837-547920")} className="text-xs px-3 py-1.5 bg-stone-100 text-stone-700 font-medium rounded-lg flex items-center hover:bg-stone-200">
                                        <Copy size={14} className="mr-1" /> 복사
                                    </button>
                                </div>
                                <div className="w-full h-px bg-stone-100"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-xs text-stone-600 mb-1 font-medium">우리은행 1002-734-796143</p>
                                        <p className="text-sm font-bold text-stone-800">예금주: 송현숙</p>
                                    </div>
                                    <button onClick={() => handleCopy("우리은행 1002-734-796143")} className="text-xs px-3 py-1.5 bg-stone-100 text-stone-700 font-medium rounded-lg flex items-center hover:bg-stone-200">
                                        <Copy size={14} className="mr-1" /> 복사
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
