import React from 'react';
import { Camera } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
    const [ref, isVisible] = useScrollReveal();

    const images = [
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1544531270-202dd34b6e51?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="gallery" ref={ref}>
            <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8">
                    <Camera className="mx-auto text-stone-400 mb-4" size={24} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">우리의 빛나는 순간</h2>
                    <p className="text-xs text-stone-500 mt-3 animate-pulse font-medium">사진을 좌우로 밀어보세요 ↔</p>
                </div>

                {/* 가로 스크롤 갤러리 */}
                <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 space-x-4 pb-8">
                    {images.map((src, idx) => (
                        <div key={idx} className="flex-none w-[80vw] sm:w-[300px] snap-center">
                            <div className="rounded-xl overflow-hidden shadow-sm aspect-[3/4]">
                                <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
