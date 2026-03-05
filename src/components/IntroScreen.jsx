import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export default function IntroScreen({ onEnter }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        setTimeout(() => {
            onEnter();
        }, 1500);
    };

    return (
        <div className={`fixed inset-0 bg-stone-900 flex flex-col items-center justify-center transition-opacity duration-1000 z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-900/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-stone-700/30 rounded-full blur-3xl"></div>
            </div>

            <div className={`z-10 flex flex-col items-center transition-all duration-1000 transform ${isOpen ? 'scale-110 translate-y-[-50px]' : 'scale-100'}`}>
                <h1 className="text-4xl md:text-5xl font-serif text-stone-200 mb-4 tracking-widest text-center">
                    태구 <span className="text-rose-400 mx-2">&</span> 희영
                </h1>
                <p className="text-stone-400 text-sm tracking-widest mb-12">2026. 3. 13. FRI 11:30 AM</p>

                <button
                    onClick={handleOpen}
                    className="group relative px-8 py-4 bg-stone-800 border border-stone-600 rounded-full overflow-hidden transition-all hover:bg-stone-700 active:scale-95"
                >
                    <div className="absolute inset-0 bg-rose-500/10 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                    <span className="relative flex items-center space-x-2 text-stone-200">
                        <Heart size={18} className="text-rose-400 animate-pulse" />
                        <span className="tracking-widest text-sm">초대장 열어보기</span>
                    </span>
                </button>
            </div>
        </div>
    );
}
