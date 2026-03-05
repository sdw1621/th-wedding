import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import mainImg from '../../img/main_img.png';

export default function Hero() {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-start pt-20" id="home">
            <div className="absolute inset-0">
                <img
                    src={mainImg}
                    alt="Wedding Hero"
                    className="w-full h-full object-cover object-[center_top] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-white/50 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-white/10"></div>
            </div>

            <div ref={ref} className={`relative z-10 text-center flex flex-col items-center px-4 max-w-full transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <p className="text-xs md:text-sm tracking-[0.4em] text-stone-700 mb-6 font-medium">WE ARE GETTING MARRIED</p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 mb-3 drop-shadow-sm font-light tracking-widest whitespace-nowrap">
                    강태구 <span className="text-rose-400 text-3xl sm:text-4xl mx-2 font-light">&</span> 신희영
                </h1>

                <div className="flex flex-col items-center gap-1">
                    <p className="text-sm md:text-base tracking-[0.1em] text-stone-800 font-medium">2026년 3월 13일 금요일 오전 11시 30분</p>
                    <p className="text-sm md:text-base text-stone-800 font-medium tracking-wide">메이필드 호텔 봉래헌</p>
                </div>
            </div>
        </div>
    );
}
