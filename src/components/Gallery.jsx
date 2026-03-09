import React, { useState, useRef, useCallback, useEffect } from 'react';
import Camera from 'lucide-react/dist/esm/icons/camera';
import X from 'lucide-react/dist/esm/icons/x';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Volume2 from 'lucide-react/dist/esm/icons/volume-2';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Gallery() {
    const [ref, isVisible] = useScrollReveal();
    const [selectedIdx, setSelectedIdx] = useState(null);
    const [currentScrollIdx, setCurrentScrollIdx] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const touchStartY = useRef(0);
    const isSwiping = useRef(false);
    const lightboxRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const images = [
        { src: `${import.meta.env.BASE_URL}img/pages/커플_꽃셔츠.webp`, alt: '커플 꽃무늬 셔츠' },
        { src: `${import.meta.env.BASE_URL}img/pages/커플_드레스업.webp`, alt: '커플 드레스업' },
        { src: `${import.meta.env.BASE_URL}img/pages/한복_전통혼례.webp`, alt: '한복 전통혼례' },
        { src: `${import.meta.env.BASE_URL}img/pages/정원_산책.webp`, alt: '정원 산책' },
        { src: `${import.meta.env.BASE_URL}img/pages/가을_은행나무.webp`, alt: '가을 은행나무' },
        { src: `${import.meta.env.BASE_URL}img/pages/한옥_정면컷.webp`, alt: '한옥 정면컷' },
        { src: `${import.meta.env.BASE_URL}img/pages/한옥_마주보기.webp`, alt: '한옥 마주보기' },
        { src: `${import.meta.env.BASE_URL}img/pages/신랑_솔로컷.webp`, alt: '신랑 솔로컷' },
        { src: `${import.meta.env.BASE_URL}img/pages/신부_솔로컷.webp`, alt: '신부 솔로컷' },
        { src: `${import.meta.env.BASE_URL}img/pages/정원_로맨틱.webp`, alt: '정원 로맨틱' },
    ];

    const goNext = useCallback(() => {
        setSelectedIdx(prev => (prev + 1) % images.length);
    }, [images.length]);

    const goPrev = useCallback(() => {
        setSelectedIdx(prev => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
        isSwiping.current = false;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goNext();
            else goPrev();
        }
    };

    const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollLeft + container.clientWidth / 2;
        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, idx) => {
            const childCenter = child.offsetLeft + child.clientWidth / 2;
            const distance = Math.abs(scrollPosition - childCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = idx;
            }
        });

        if (closestIndex !== currentScrollIdx) {
            setCurrentScrollIdx(closestIndex);
        }
    };

    // 라이트박스 스와이프 시 페이지 스크롤 방지 (non-passive touchmove 필요)
    useEffect(() => {
        const el = lightboxRef.current;
        if (!el) return;

        const onTouchMove = (e) => {
            const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
            const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
            if (dx > dy && dx > 10) {
                isSwiping.current = true;
                e.preventDefault();
            }
        };

        el.addEventListener('touchmove', onTouchMove, { passive: false });
        return () => el.removeEventListener('touchmove', onTouchMove);
    }, [selectedIdx]);

    return (
        <section className="py-24 bg-white overflow-hidden" id="gallery" ref={ref}>
            <div className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center mb-8 px-6">
                    <Camera className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">우리의 빛나는 순간</h2>
                </div>

                {/* 영상 영역 (위치 변경) */}
                <div className="text-center mb-6 space-y-1.5 px-6">
                    <p className="text-[11px] text-stone-500 font-medium whitespace-nowrap">크게 보시고 싶으시면 영상 터치 후 Youtube 로고를 눌러주세요 👆</p>
                    <p className="text-[11px] text-stone-500 font-medium flex items-center justify-center whitespace-nowrap">
                        유튜브 영상 볼 때는 좌측 상단의 배경음(<Volume2 size={12} className="mx-1 text-rose-300" />)을 잠시 꺼두세요
                    </p>
                </div>
                <div className="px-6 mb-12 relative z-30">
                    <div className="rounded-2xl overflow-hidden shadow-sm aspect-video bg-stone-100 border border-stone-200 relative z-30">
                        <iframe
                            src="https://www.youtube.com/embed/aBT0gHQ0AwE"
                            title="Wedding Video"
                            className="w-full h-full border-none relative z-30"
                            style={{ pointerEvents: 'auto' }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="text-center mb-4">
                    <p className="text-xs text-stone-500 animate-pulse font-medium">사진을 누르면 크게 보실 수 있어요 📸</p>
                </div>

                {/* 가로 스크롤 갤러리 */}
                <div className="relative group">
                    <button
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-stone-600 z-10 active:bg-white select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            if (scrollContainerRef.current) {
                                const container = scrollContainerRef.current;
                                container.scrollBy({ left: -container.clientWidth * 0.8, behavior: 'smooth' });
                            }
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 space-x-4 pb-6"
                    >
                        {images.map((img, idx) => (
                            <div key={idx} className="flex-none w-[80vw] sm:w-[300px] snap-center">
                                <div
                                    className="rounded-xl overflow-hidden shadow-sm aspect-[4/5] cursor-zoom-in relative active:opacity-90"
                                    style={{ touchAction: 'manipulation' }}
                                    onClick={() => {
                                        document.body.classList.add('music-hidden');
                                        document.body.classList.add('nav-hidden');
                                        setSelectedIdx(idx);
                                    }}
                                >
                                    <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-stone-600 z-10 active:bg-white select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            if (scrollContainerRef.current) {
                                const container = scrollContainerRef.current;
                                container.scrollBy({ left: container.clientWidth * 0.8, behavior: 'smooth' });
                            }
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* 메인 갤러리 하단 분홍 도트 인디케이터 */}
                <div className="flex justify-center items-center gap-2 mb-8">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={`rounded-full transition-all duration-300 ${i === currentScrollIdx
                                ? 'w-6 h-2 bg-rose-400'
                                : 'w-2 h-2 bg-stone-200'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedIdx !== null && (
                <div
                    ref={lightboxRef}
                    className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    style={{ touchAction: 'none' }}
                    onClick={(e) => {
                        // 스와이프 직후에는 닫히지 않도록 방지
                        if (isSwiping.current) return;
                        if (e.target === e.currentTarget) {
                            document.body.classList.remove('music-hidden');
                            document.body.classList.remove('nav-hidden');
                            setSelectedIdx(null);
                        }
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        className="absolute top-6 right-6 z-[510] flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-md text-stone-800 shadow-xl active:bg-white transition-colors select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            document.body.classList.remove('music-hidden');
                            document.body.classList.remove('nav-hidden');
                            setSelectedIdx(null);
                        }}
                    >
                        <X size={24} />
                    </button>

                    {/* 이전 버튼 */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-md text-stone-800 shadow-lg active:bg-white/90 transition-colors select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => { e.stopPropagation(); goPrev(); }}
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* 다음 버튼 */}
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur-md text-stone-800 shadow-lg active:bg-white/90 transition-colors select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => { e.stopPropagation(); goNext(); }}
                    >
                        <ChevronRight size={24} />
                    </button>

                    <img
                        src={images[selectedIdx].src}
                        alt={images[selectedIdx].alt}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* 분홍 도트 인디케이터 */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setSelectedIdx(i); }}
                                className={`rounded-full transition-all duration-300 ${i === selectedIdx
                                    ? 'w-6 h-2.5 bg-rose-400'
                                    : 'w-2.5 h-2.5 bg-white/30'
                                    } p-1 -m-1`}
                                style={{ touchAction: 'manipulation' }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
