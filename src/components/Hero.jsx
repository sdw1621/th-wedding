import React from 'react';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Countdown from './Countdown';

export default function Hero() {
    const [ref, isVisible] = useScrollReveal();

    const addToCalendar = () => {
        const title = "강태구 & 신희영 결혼식";
        const location = "메이필드 호텔 봉래헌";
        const details = "두 사람의 소중한 시작을 축복해 주세요.";
        const startDate = "20260313T113000";
        const endDate = "20260313T143000";

        const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
        window.open(googleCalendarUrl, '_blank');
    };

    return (
        <div className="relative w-full h-[100dvh] overflow-hidden flex flex-col items-center justify-between pb-32 pt-20" id="home">
            <div className="absolute inset-0">
                <img
                    src={`${import.meta.env.BASE_URL}img/main_img.webp`}
                    alt="Wedding Hero"
                    fetchpriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_top] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-white/40 to-white/10 opacity-90"></div>
                <div className="absolute inset-0 bg-white/5"></div>
            </div>

            {/* 상단 정보 */}
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

            {/* 하단 위젯 (얼굴 가리지 않게 하단으로 배치) */}
            <div className={`relative z-10 flex flex-col items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Countdown />

                <button
                    onClick={addToCalendar}
                    className="mt-10 flex items-center space-x-2 px-6 py-2.5 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-full text-stone-600 text-[11px] font-bold hover:bg-white/80 transition-all shadow-sm"
                >
                    <Calendar size={14} />
                    <span>캘린더에 일정 추가</span>
                </button>
            </div>
        </div>
    );
}
