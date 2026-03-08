import React, { useState } from 'react';
import Camera from 'lucide-react/dist/esm/icons/camera';
import X from 'lucide-react/dist/esm/icons/x';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
    const [ref, isVisible] = useScrollReveal();
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [
        `${import.meta.env.BASE_URL}img/pages/KakaoTalk_20260305_230912710.webp`,
        `${import.meta.env.BASE_URL}img/pages/KakaoTalk_20260305_232813657.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772719635985.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772719933405.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772719961777.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720241909.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720265226.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720440413.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772720601331.webp`,
        `${import.meta.env.BASE_URL}img/pages/clip1772721300357.webp`
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="gallery" ref={ref}>
            <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8 px-6">
                    <Camera className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">우리의 빛나는 순간</h2>
                    <p className="text-xs text-stone-500 mt-3 animate-pulse font-medium">사진을 누르면 크게 보실 수 있어요 📸</p>
                </div>

                {/* 가로 스크롤 갤러리 */}
                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 space-x-4 pb-8">
                    {images.map((src, idx) => (
                        <div key={idx} className="flex-none w-[80vw] sm:w-[300px] snap-center">
                            <div
                                className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] cursor-zoom-in group relative"
                                onClick={() => setSelectedImg(src)}
                            >
                                <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                            </div>
                        </div>
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
