import React, { useState, useRef, useEffect, useCallback } from 'react';
import Camera from 'lucide-react/dist/esm/icons/camera';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import X from 'lucide-react/dist/esm/icons/x';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
    const [ref, isVisible] = useScrollReveal();
    const [selectedImg, setSelectedImg] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const images = [
        `${import.meta.env.BASE_URL}img/pages/KakaoTalk_20260305_230912710.png`,
        `${import.meta.env.BASE_URL}img/pages/KakaoTalk_20260305_232813657.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772719635985.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772719933405.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772719961777.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720241909.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720265226.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720440413.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720601331.png`,
        `${import.meta.env.BASE_URL}img/pages/clip1772721300357.png`
    ];

    // 현재 보이는 슬라이드 인덱스 추적
    const handleScroll = useCallback(() => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const scrollLeft = container.scrollLeft;
        const childWidth = container.firstElementChild?.offsetWidth || 300;
        const gap = 16; // space-x-4 = 1rem = 16px
        const idx = Math.round(scrollLeft / (childWidth + gap));
        setActiveIndex(Math.min(idx, images.length - 1));
    }, [images.length]);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) {
            el.addEventListener('scroll', handleScroll, { passive: true });
            return () => el.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    // 프로그래밍적 좌/우 스크롤
    const scrollTo = (direction) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const childWidth = container.firstElementChild?.offsetWidth || 300;
        const gap = 16;
        const amount = (childWidth + gap) * direction;
        container.scrollBy({ left: amount, behavior: 'smooth' });
    };

    // 도트 클릭으로 특정 슬라이드로 이동
    const scrollToIndex = (idx) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const childWidth = container.firstElementChild?.offsetWidth || 300;
        const gap = 16;
        container.scrollTo({ left: idx * (childWidth + gap), behavior: 'smooth' });
    };

    return (
        <section className="py-24 bg-white overflow-hidden" id="gallery" ref={ref}>
            <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8 px-6">
                    <Camera className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">우리의 빛나는 순간</h2>
                    <p className="text-xs text-stone-500 mt-3 animate-pulse font-medium">사진을 누르면 크게 보실 수 있어요 📸</p>
                </div>

                {/* 갤러리 컨테이너 + 좌우 화살표 */}
                <div className="relative group/gallery">
                    {/* 좌측 화살표 (PC에서만 표시) */}
                    {activeIndex > 0 && (
                        <button
                            onClick={() => scrollTo(-1)}
                            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-stone-600 hover:bg-white hover:text-stone-900 hover:scale-110 transition-all opacity-0 group-hover/gallery:opacity-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    )}

                    {/* 우측 화살표 (PC에서만 표시) */}
                    {activeIndex < images.length - 1 && (
                        <button
                            onClick={() => scrollTo(1)}
                            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg items-center justify-center text-stone-600 hover:bg-white hover:text-stone-900 hover:scale-110 transition-all opacity-0 group-hover/gallery:opacity-100"
                        >
                            <ChevronRight size={20} />
                        </button>
                    )}

                    {/* 가로 스크롤 갤러리 */}
                    <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 space-x-4 pb-4">
                        {images.map((src, idx) => (
                            <div key={idx} className="flex-none w-[80vw] sm:w-[300px] snap-center">
                                <div
                                    className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] cursor-zoom-in group relative"
                                    onClick={() => setSelectedImg(src)}
                                >
                                    <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 도트 인디케이터 */}
                <div className="flex justify-center items-center space-x-1.5 mt-4 px-6">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToIndex(idx)}
                            className={`rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-5 h-1.5 bg-rose-300' : 'w-1.5 h-1.5 bg-stone-200 hover:bg-stone-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <button className="absolute top-8 right-8 text-white p-2" onClick={() => setSelectedImg(null)}>
                        <X size={32} />
                    </button>
                    <img
                        src={selectedImg}
                        alt="Zoomed"
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                    />
                </div>
            )}
        </section>
    );
}
