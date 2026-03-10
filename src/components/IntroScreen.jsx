import React, { useState } from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart';
import TriangleAlert from 'lucide-react/dist/esm/icons/triangle-alert';

export default function IntroScreen({ onEnter, onStart }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleOpen = () => {
        if (isProcessing) return;
        setIsProcessing(true);
        if (onStart) onStart();

        // Immediate visual change for the button
        setIsOpen(true);

        // Transition to main content slightly faster
        setTimeout(() => {
            onEnter();
        }, 1200);
    };

    return (
        <div className={`fixed inset-0 flex flex-col transition-opacity duration-1000 z-[150] ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} style={{ background: 'linear-gradient(160deg, #1a1015 0%, #12090e 60%, #0e0810 100%)' }}>
            <style>{`
                @keyframes icon-shake {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-3px) rotate(-8deg); }
                    75% { transform: translateY(-3px) rotate(8deg); }
                }
                .icon-shake { animation: icon-shake 1.1s ease-in-out infinite; }
                @keyframes text-warn-pop {
                    0% { transform: scale(1); filter: brightness(1); }
                    35% { transform: scale(1.55); filter: brightness(1.6); }
                    70% { transform: scale(1.05); filter: brightness(1.1); }
                    100% { transform: scale(1); filter: brightness(0.6); }
                }
                @keyframes text-warn {
                    0%, 100% { filter: brightness(0.6); transform: scale(1); }
                    40% { filter: brightness(1.35); transform: scale(1.22); }
                }
                .text-warn {
                    animation: text-warn-pop 1.3s ease-in-out 1,
                               text-warn 1.1s ease-in-out 1.3s infinite;
                }
            `}</style>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-900/25 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-rose-800/15 rounded-full blur-3xl opacity-40"></div>
            </div>

            <div className="warning-flash z-10 w-full flex flex-col items-center pt-24 pb-6 px-4 border-b space-y-3" style={{ background: 'rgba(80, 20, 35, 0.3)', borderColor: 'rgba(120, 40, 60, 0.3)' }}>
                <TriangleAlert size={26} className="text-rose-300 icon-shake" />
                <p className="text-stone-200 text-[16px] font-bold tracking-wide text-center leading-loose">
                    가족식(스몰웨딩)이라<br />
                    <span className="text-warn">하객 없이</span> 진행됩니다.<br />
                    축하 방명록만 남겨주세요. 💌
                </p>
            </div>

            <div className={`z-10 flex-1 flex flex-col items-center justify-start pt-10 transition-all duration-1000 transform ${isOpen ? 'scale-110 translate-y-[-30px]' : 'scale-100'}`}>
                <h1 className="text-4xl md:text-5xl font-serif text-stone-200 mb-6 tracking-widest text-center px-6">
                    태구 <span className="text-rose-400 mx-2">&</span> 희영
                </h1>
                <p className="text-stone-400 text-sm tracking-[0.3em] mb-10 font-light">2026. 03. 13. FRI 11:30 AM</p>

                <button
                    onPointerDown={handleOpen}
                    disabled={isProcessing}
                    style={{ touchAction: 'manipulation' }}
                    className="group relative px-12 py-5 rounded-full overflow-hidden shadow-2xl shadow-black/50 select-none active:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #2d1a24 0%, #3d2230 100%)', border: '1px solid rgba(180, 100, 130, 0.3)' }}
                >
                    <div className="absolute inset-0 bg-rose-500/10 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                    <span className="relative flex items-center space-x-3 text-stone-200">
                        {isProcessing ? (
                            <div className="w-4 h-4 border-2 border-rose-200 border-t-rose-500 rounded-full animate-spin"></div>
                        ) : (
                            <Heart size={20} className="text-rose-400 animate-pulse fill-rose-400/20" />
                        )}
                        <span className="tracking-[0.2em] text-base font-medium">
                            {isProcessing ? '열리는 중...' : '초대장 열어보기'}
                        </span>
                    </span>
                </button>
            </div>
        </div>
    );
}
