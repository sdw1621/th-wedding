import React, { useState } from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart';

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
        <div className={`fixed inset-0 bg-stone-900 flex flex-col items-center justify-center transition-opacity duration-1000 z-[150] ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-stone-700/30 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className={`z-10 flex flex-col items-center transition-all duration-1000 transform ${isOpen ? 'scale-110 translate-y-[-30px]' : 'scale-100'}`}>
                <h1 className="text-4xl md:text-5xl font-serif text-stone-200 mb-6 tracking-widest text-center px-6">
                    태구 <span className="text-rose-400 mx-2">&</span> 희영
                </h1>
                <p className="text-stone-400 text-sm tracking-[0.3em] mb-12 font-light">2026. 03. 13. FRI 11:30 AM</p>

                <button
                    onClick={handleOpen}
                    disabled={isProcessing}
                    style={{ touchAction: 'manipulation' }}
                    className="group relative px-12 py-5 bg-stone-800 border border-stone-600 rounded-full overflow-hidden hover:bg-stone-700 active:bg-stone-700 shadow-2xl shadow-black/50 select-none"
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
