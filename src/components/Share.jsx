import React, { useState, useEffect, useRef, useCallback } from 'react';
import ChevronUp from 'lucide-react/dist/esm/icons/chevron-up';
import ChevronDown from 'lucide-react/dist/esm/icons/chevron-down';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import X from 'lucide-react/dist/esm/icons/x';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useBackButton } from '../hooks/useBackButton';

export default function Share({ onLightboxChange }) {
    const [ref, isVisible] = useScrollReveal();
    const [expanded, setExpanded] = useState(false);

    // 외부에서 "openDevCard" 이벤트로 카드 열기 가능
    useEffect(() => {
        const open = () => setExpanded(true);
        window.addEventListener('openDevCard', open);
        return () => window.removeEventListener('openDevCard', open);
    }, []);

    const dogImages = [
        { src: `${import.meta.env.BASE_URL}img/mocha-1.png`, alt: '모카와 리트리버 축하' },
        { src: `${import.meta.env.BASE_URL}img/mocha-2.png`, alt: '모카와 리트리버 축하2' },
        { src: `${import.meta.env.BASE_URL}img/mocha-3.png`, alt: '모카와 리트리버 축하3' },
        { src: `${import.meta.env.BASE_URL}img/mocha-4.png`, alt: '모카와 리트리버 축하4' },
        { src: `${import.meta.env.BASE_URL}img/mocha-5.png`, alt: '모카와 리트리버 축하5' },
        { src: `${import.meta.env.BASE_URL}img/mocha-6.png`, alt: '모카와 리트리버 축하6' },
    ];

    const [dogSelectedIdx, setDogSelectedIdx] = useState(null);
    const [dogScrollIdx, setDogScrollIdx] = useState(0);
    const dogScrollRef = useRef(null);
    const dogLightboxRef = useRef(null);
    const savedScrollY = useRef(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const touchStartY = useRef(0);
    const isSwiping = useRef(false);

    const closeDogLightbox = useCallback(() => {
        document.body.classList.remove('nav-hidden');
        setDogSelectedIdx(null);
    }, []);

    const dogGoNext = useCallback(() => setDogSelectedIdx((p) => (p + 1) % dogImages.length), [dogImages.length]);
    const dogGoPrev = useCallback(() => setDogSelectedIdx((p) => (p - 1 + dogImages.length) % dogImages.length), [dogImages.length]);

    const handleDogScroll = () => {
        if (!dogScrollRef.current) return;
        const container = dogScrollRef.current;
        const scrollPosition = container.scrollLeft + container.clientWidth / 2;
        let closestIndex = 0, minDistance = Infinity;
        Array.from(container.children).forEach((child, idx) => {
            const dist = Math.abs(scrollPosition - (child.offsetLeft + child.clientWidth / 2));
            if (dist < minDistance) { minDistance = dist; closestIndex = idx; }
        });
        if (closestIndex !== dogScrollIdx) setDogScrollIdx(closestIndex);
    };

    // 부모에 라이트박스 상태 알림 (배지 등 숨김 용도)
    useEffect(() => {
        onLightboxChange?.(dogSelectedIdx !== null);
    }, [dogSelectedIdx, onLightboxChange]);

    // 기기 뒤로가기 지원
    useBackButton(dogSelectedIdx !== null, closeDogLightbox);

    // 닫을 때 스크롤 위치 복원
    const prevDogIdx = useRef(null);
    useEffect(() => {
        if (prevDogIdx.current !== null && dogSelectedIdx === null) {
            requestAnimationFrame(() => {
                window.scrollTo({ top: savedScrollY.current, behavior: 'instant' });
            });
        }
        prevDogIdx.current = dogSelectedIdx;
    }, [dogSelectedIdx]);

    // 가로 스와이프 시 페이지 스크롤 방지
    useEffect(() => {
        const el = dogLightboxRef.current;
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
    }, [dogSelectedIdx]);

    return (
        <section className="pb-8 bg-[#FDFBF7] relative" id="share">
            <div ref={ref} className={`max-w-md mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                {/* Made by Developer 카드 */}
                <div className="px-4 pt-6 mb-4">
                    <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                        <button
                            onPointerDown={() => setExpanded((v) => !v)}
                            style={{ touchAction: 'manipulation' }}
                            className="w-full flex items-center justify-between px-6 py-5 bg-stone-900 select-none active:bg-stone-800"
                        >
                            <span className="font-bold text-white text-[15px]">Made by Developer</span>
                            {expanded ? <ChevronUp size={20} className="text-white/70" /> : <ChevronDown size={20} className="text-white/70" />}
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[620px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="border-t border-stone-100 px-5 py-5 space-y-5">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`${import.meta.env.BASE_URL}img/developer.jpg`}
                                        alt="신동욱"
                                        className="w-14 h-14 rounded-xl object-cover object-top shadow-sm shrink-0"
                                        draggable={false}
                                    />
                                    <div className="text-left flex-1 min-w-0">
                                        <p className="font-bold text-stone-800 text-[15px] leading-tight">신동욱</p>
                                        <p className="text-[12px] text-stone-400 mt-0.5">Shin Dong-wook</p>
                                        <p className="text-[12px] text-rose-400 font-semibold mt-1 leading-tight">AIINTERSYS CEO</p>
                                        <p className="text-[12px] text-rose-400 font-semibold leading-tight">융합공학 박사</p>
                                    </div>
                                    <div className="flex flex-col gap-2 shrink-0">
                                        <a href="tel:01027312579" style={{ touchAction: 'manipulation' }}
                                            className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center shadow-sm active:bg-blue-600 select-none">
                                            <Phone size={19} className="text-white" strokeWidth={2} />
                                        </a>
                                        <a href="mailto:sdw1904@naver.com" style={{ touchAction: 'manipulation' }}
                                            className="w-11 h-11 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-sm active:bg-emerald-600 select-none">
                                            <Mail size={19} className="text-white" strokeWidth={2} />
                                        </a>
                                    </div>
                                </div>

                                <hr className="border-stone-100" />

                                <div className="space-y-3 text-[13px] text-left">
                                    <div className="flex gap-3">
                                        <span className="text-stone-400 w-16 shrink-0">Expertise</span>
                                        <span className="text-stone-700">AI · IT Education · Solution Architect</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <span className="text-stone-400 w-16 shrink-0">Projects</span>
                                        <div className="text-stone-700 flex flex-col">
                                            <span>POLICEBOT (AI Bot)</span>
                                            <span>ONTOLOGYS (RAG) 등</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {[
                                        { href: 'https://www.youtube.com/@sdw1621', handle: '@sdw1621' },
                                        { href: 'https://www.youtube.com/@AIINTERSYSBREND', handle: '@AIINTERSYSBREND' },
                                    ].map(({ href, handle }) => (
                                        <a
                                            key={handle}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ touchAction: 'manipulation', background: 'linear-gradient(135deg, #FFF8F0 0%, #FFF3E8 100%)', borderColor: '#F0E0CC' }}
                                            className="flex items-center gap-4 rounded-xl px-4 py-3 border active:opacity-80 select-none"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-[#FF0000] flex items-center justify-center shrink-0 shadow-sm">
                                                <svg width="28" height="20" viewBox="0 0 24 17" fill="white">
                                                    <path d="M23.495 2.656A3.016 3.016 0 0 0 21.383.516C19.505 0 12 0 12 0S4.495 0 2.617.516A3.016 3.016 0 0 0 .505 2.656 31.808 31.808 0 0 0 0 8.5a31.808 31.808 0 0 0 .505 5.844 3.016 3.016 0 0 0 2.112 2.14C4.495 17 12 17 12 17s7.505 0 9.383-.516a3.016 3.016 0 0 0 2.112-2.14A31.808 31.808 0 0 0 24 8.5a31.808 31.808 0 0 0-.505-5.844zM9.6 12.143V4.857L15.818 8.5 9.6 12.143z" />
                                                </svg>
                                            </div>
                                            <div className="text-left">
                                                <p className="font-bold text-stone-800 text-[13px]">{handle}</p>
                                                <p className="text-[11px] text-stone-500 mt-0.5">YouTube 채널 바로가기</p>
                                            </div>
                                            <svg className="ml-auto text-stone-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M9 18l6-6-6-6" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>

                                <hr className="border-stone-100" />

                                <p className="text-[12px] text-stone-500 text-center leading-relaxed" style={{ animation: 'msg-glow 3.5s ease-in-out infinite' }}>
                                    현장에서 마주하는{' '}
                                    <span className="inline-block font-semibold" style={{ color: '#e03060', animation: 'word-highlight 2.5s ease-in-out infinite' }}>문제</span>를
                                    <br />
                                    누구보다{' '}
                                    <span className="inline-block font-semibold" style={{ color: '#e03060', animation: 'word-highlight 2.5s ease-in-out 0.5s infinite' }}>깊이 고민</span>하고{' '}
                                    <span className="inline-block font-semibold" style={{ color: '#e03060', animation: 'word-highlight 2.5s ease-in-out 1s infinite' }}>해결</span>합니다.
                                </p>
                                <p className="text-[11px] text-stone-300 text-center">© 2026 AI Intersys. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 우리 가족 모카 가로 스크롤 갤러리 */}
                <div className="px-4 pb-4">
                    <p className="text-center text-[11px] text-stone-400 font-medium mb-3 tracking-wide">🐶 우리 가족 모카</p>
                    <div className="relative">
                        <button
                            className={`absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-800/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-white z-30 active:bg-stone-900 select-none transition-opacity duration-200 ${dogScrollIdx === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            style={{ touchAction: 'manipulation' }}
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                dogScrollRef.current?.scrollBy({ left: -dogScrollRef.current.clientWidth * 0.85, behavior: 'smooth' });
                            }}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div ref={dogScrollRef} onScroll={handleDogScroll} className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar space-x-3 pb-1">
                            {dogImages.map((img, idx) => (
                                <div key={idx} className="flex-none w-full snap-center">
                                    <div
                                        className="rounded-2xl overflow-hidden shadow-sm cursor-zoom-in active:opacity-90"
                                        style={{ touchAction: 'manipulation' }}
                                        onPointerDown={() => {
                                            savedScrollY.current = window.scrollY;
                                            document.body.classList.add('nav-hidden');
                                            setDogSelectedIdx(idx);
                                        }}
                                    >
                                        <img src={img.src} alt={img.alt} loading="lazy" decoding="async"
                                            className="w-full h-auto block select-none pointer-events-none" draggable={false} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            className={`absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-800/80 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-white z-30 active:bg-stone-900 select-none transition-opacity duration-200 ${dogScrollIdx === dogImages.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            style={{ touchAction: 'manipulation' }}
                            onPointerDown={(e) => {
                                e.stopPropagation();
                                dogScrollRef.current?.scrollBy({ left: dogScrollRef.current.clientWidth * 0.85, behavior: 'smooth' });
                            }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-3">
                        {dogImages.map((_, i) => (
                            <div key={i} className={`rounded-full transition-all duration-300 ${i === dogScrollIdx ? 'w-5 h-2 bg-rose-400' : 'w-2 h-2 bg-stone-200'}`} />
                        ))}
                    </div>
                </div>
            </div>

            {/* 모카 라이트박스 */}
            {dogSelectedIdx !== null && (
                <div
                    ref={dogLightboxRef}
                    className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center p-4"
                    style={{ touchAction: 'none' }}
                    onClick={(e) => {
                        if (isSwiping.current) return;
                        if (e.target === e.currentTarget) closeDogLightbox();
                    }}
                    onTouchStart={(e) => {
                        touchStartX.current = e.touches[0].clientX;
                        touchStartY.current = e.touches[0].clientY;
                        isSwiping.current = false;
                    }}
                    onTouchEnd={(e) => {
                        touchEndX.current = e.changedTouches[0].clientX;
                        const diff = touchStartX.current - touchEndX.current;
                        if (Math.abs(diff) > 50) {
                            if (diff > 0) dogGoNext(); else dogGoPrev();
                        }
                    }}
                >
                    <button
                        className="absolute top-3 right-3 z-[510] bg-white/95 border border-stone-200 rounded-full shadow-md p-1 select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => { e.stopPropagation(); closeDogLightbox(); }}
                    >
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-stone-800">
                            <X size={18} />
                        </div>
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md text-stone-800 shadow-lg flex items-center justify-center select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => { e.stopPropagation(); dogGoPrev(); }}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md text-stone-800 shadow-lg flex items-center justify-center select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => { e.stopPropagation(); dogGoNext(); }}
                    >
                        <ChevronRight size={24} />
                    </button>

                    <img
                        src={dogImages[dogSelectedIdx].src}
                        alt={dogImages[dogSelectedIdx].alt}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                        {dogImages.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setDogSelectedIdx(i); }}
                                className={`rounded-full transition-all duration-300 ${i === dogSelectedIdx ? 'w-6 h-2.5 bg-rose-400' : 'w-2.5 h-2.5 bg-white/30'} p-1 -m-1`}
                                style={{ touchAction: 'manipulation' }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
