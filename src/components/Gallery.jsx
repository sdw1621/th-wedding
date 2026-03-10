import React, { useState, useRef, useCallback, useEffect } from 'react';
import Camera from 'lucide-react/dist/esm/icons/camera';
import X from 'lucide-react/dist/esm/icons/x';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { useScrollReveal } from '../hooks/useScrollReveal';

// 웨딩 보태니컬 SVG 코너 장식 (흰 모란 + 초록 잎)
const BotCorner = ({ flipX = false, flipY = false, size = 58 }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none"
        style={{ transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})` }}
        xmlns="http://www.w3.org/2000/svg">
        {/* 줄기 */}
        <path d="M4 4 C16 17 26 26 38 36" stroke="#8ab086" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.85"/>
        <path d="M4 4 C18 10 30 13 42 15" stroke="#8ab086" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
        <path d="M4 4 C10 18 13 30 15 42" stroke="#8ab086" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7"/>
        {/* 잎 */}
        <path d="M15 13 C8 7 13 2 17 5 C16 10 15 13 15 13Z" fill="#a8cea0" opacity="0.8"/>
        <path d="M11 18 C4 12 7 6 11 9 C11 14 11 18 11 18Z" fill="#bddab4" opacity="0.7"/>
        <path d="M20 9 C24 3 29 6 27 10 C23 12 20 9 20 9Z" fill="#a0c898" opacity="0.75"/>
        <path d="M24 21 C17 14 22 9 25 12 C24 17 24 21 24 21Z" fill="#9ec494" opacity="0.68"/>
        <path d="M10 27 C4 21 6 15 10 18 C10 23 10 27 10 27Z" fill="#b4d4ac" opacity="0.62"/>
        <path d="M14 5 C18 1 23 3 21 7 C18 8 14 5 14 5Z" fill="#a8c8a0" opacity="0.7"/>
        {/* 메인 모란 – 겹겹 꽃잎 */}
        <ellipse cx="6" cy="6" rx="8" ry="5" fill="#faf2f5" opacity="0.88" transform="rotate(-45 6 6)"/>
        <ellipse cx="6" cy="6" rx="5" ry="8" fill="#f7eef4" opacity="0.84" transform="rotate(45 6 6)"/>
        <ellipse cx="6" cy="6" rx="7" ry="4" fill="#f3e9f1" opacity="0.8"/>
        <circle cx="6" cy="6" r="3.5" fill="#e8d0de" opacity="0.92"/>
        <circle cx="6" cy="6" r="1.8" fill="#dbbfcf"/>
        {/* 보조 꽃 */}
        <ellipse cx="35" cy="11" rx="4.5" ry="3.5" fill="#faf0f4" opacity="0.85" transform="rotate(15 35 11)"/>
        <ellipse cx="35" cy="11" rx="3" ry="4.5" fill="#f6ecf2" opacity="0.78" transform="rotate(-15 35 11)"/>
        <circle cx="35" cy="11" r="2.2" fill="#e6cedd"/>
        <circle cx="35" cy="11" r="1.1" fill="#d8beca"/>
        {/* 작은 봉오리 */}
        <ellipse cx="12" cy="37" rx="3" ry="3.8" fill="#f8f0f4" opacity="0.78"/>
        <ellipse cx="12" cy="34" rx="2" ry="1.5" fill="#e4d0dc" opacity="0.85"/>
    </svg>
);

export default function Gallery({ onFullscreenChange }) {
    const [ref, isVisible] = useScrollReveal();
    const [selectedIdx, setSelectedIdx] = useState(null);
    const [currentScrollIdx, setCurrentScrollIdx] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const touchStartY = useRef(0);
    const isSwiping = useRef(false);
    const lightboxRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const ytPlayerRef = useRef(null);
    const ytContainerRef = useRef(null);

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

    // 풀스크린 상태 변경 시 부모에 알림
    useEffect(() => {
        if (onFullscreenChange) {
            onFullscreenChange(
                selectedIdx !== null,
                () => {
                    document.body.classList.remove('music-hidden');
                    document.body.classList.remove('nav-hidden');
                    setSelectedIdx(null);
                }
            );
        }
    }, [selectedIdx !== null]);

    // YouTube IFrame API: 플레이어 초기화 + BGM 연동
    useEffect(() => {
        const initYT = () => {
            if (!window.YT || !window.YT.Player) return;
            ytPlayerRef.current = new window.YT.Player('yt-wedding', {
                events: {
                    onStateChange: (e) => {
                        if (e.data === 1) { // PLAYING
                            document.dispatchEvent(new CustomEvent('youtube-playing'));
                        } else if (e.data === 0 || e.data === 2) { // ENDED or PAUSED
                            document.dispatchEvent(new CustomEvent('youtube-stopped'));
                        }
                    }
                }
            });
        };

        if (window.YT && window.YT.Player) {
            initYT();
        } else {
            const prev = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => { prev?.(); initYT(); };
            if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                document.head.appendChild(tag);
            }
        }
    }, []);

    // IntersectionObserver: 화면에 들어오면 자동 재생, 벗어나면 일시정지
    useEffect(() => {
        const container = ytContainerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const player = ytPlayerRef.current;
                    if (!player || typeof player.playVideo !== 'function') return;
                    if (entry.isIntersecting) {
                        player.playVideo();
                    } else {
                        player.pauseVideo();
                    }
                });
            },
            { threshold: 0.4 }
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

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

                {/* 영상 영역 */}
                <div className="text-center mb-4 px-6">
                    <p className="text-[11px] text-stone-500 font-medium whitespace-nowrap">크게 보시고 싶으시면 영상 터치 후 Youtube 로고를 눌러주세요 👆</p>
                </div>
                <div className="px-6 mb-6 relative z-30" ref={ytContainerRef}>
                    {/* 웨딩 엔빌로프 프레임 */}
                    <div className="relative">
                        {/* 로즈골드 그라디언트 테두리 */}
                        <div className="p-[3px] rounded-2xl shadow-lg" style={{ background: 'linear-gradient(135deg, #e8b4b8 0%, #f5dcc8 30%, #e8c4d8 60%, #d4a8c0 100%)' }}>
                            <div className="rounded-[14px] overflow-hidden aspect-video bg-stone-100 relative z-30">
                                <iframe
                                    id="yt-wedding"
                                    src="https://www.youtube.com/embed/aBT0gHQ0AwE?enablejsapi=1"
                                    title="Wedding Video"
                                    className="w-full h-full border-none relative z-30"
                                    style={{ pointerEvents: 'auto' }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* 보태니컬 코너 장식 */}
                        <div className="absolute -top-5 -left-5 pointer-events-none select-none"><BotCorner size={58}/></div>
                        <div className="absolute -top-5 -right-5 pointer-events-none select-none"><BotCorner flipX size={58}/></div>
                        <div className="absolute -bottom-5 -left-5 pointer-events-none select-none"><BotCorner flipY size={58}/></div>
                        <div className="absolute -bottom-5 -right-5 pointer-events-none select-none"><BotCorner flipX flipY size={58}/></div>
                    </div>
                    {/* 하단 라벨 */}
                    <div className="text-center mt-5 space-y-1">
                        <p className="text-[12px] tracking-[0.25em] text-stone-500 font-medium">강태구 ♥ 신희영</p>
                        <p className="text-[10px] tracking-[0.3em] text-stone-300">2 0 2 6 · 0 3 · 1 3</p>
                    </div>
                </div>

                {/* 강아지 + 꽃 캐릭터 */}
                <div className="flex justify-center mb-8 select-none pointer-events-none"
                    style={{ animation: 'couple-float 3s ease-in-out infinite' }}>
                    <svg width="180" height="160" viewBox="0 0 110 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* 강아지 팔 */}
                        <path d="M44 52 Q32 60 26 67" stroke="#c47a3a" strokeWidth="5" strokeLinecap="round" fill="none" />
                        <path d="M66 52 Q78 60 84 67" stroke="#c47a3a" strokeWidth="5" strokeLinecap="round" fill="none" />
                        {/* 왼쪽 흰꽃 */}
                        {[0,45,90,135,180,225,270,315].map((a, i) => (
                            <ellipse key={`lp${i}`} cx="26" cy="70" rx="3.5" ry="9" fill="white" stroke="#e0ccd8" strokeWidth="0.6" opacity="0.97" transform={`rotate(${a} 26 80)`} />
                        ))}
                        <circle cx="26" cy="80" r="9" fill="#f5c340" />
                        <circle cx="23.8" cy="79" r="1.2" fill="#3a1a00" /><circle cx="28.2" cy="79" r="1.2" fill="#3a1a00" />
                        <path d="M23.5 82.5 Q26 85.5 28.5 82.5" stroke="#3a1a00" strokeWidth="1.1" fill="none" strokeLinecap="round" />
                        <ellipse cx="21.5" cy="82" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
                        <ellipse cx="30.5" cy="82" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
                        <line x1="26" y1="70" x2="26" y2="67" stroke="#a8c890" strokeWidth="2.5" strokeLinecap="round" />
                        {/* 오른쪽 파란꽃 */}
                        {[0,45,90,135,180,225,270,315].map((a, i) => (
                            <ellipse key={`rp${i}`} cx="84" cy="70" rx="3.5" ry="9" fill="#2272d8" opacity="0.9" transform={`rotate(${a} 84 80)`} />
                        ))}
                        <circle cx="84" cy="80" r="9" fill="#f5c340" />
                        <circle cx="81.8" cy="79" r="1.2" fill="#3a1a00" /><circle cx="86.2" cy="79" r="1.2" fill="#3a1a00" />
                        <path d="M81.5 82.5 Q84 85.5 86.5 82.5" stroke="#3a1a00" strokeWidth="1.1" fill="none" strokeLinecap="round" />
                        <ellipse cx="79.5" cy="82" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
                        <ellipse cx="88.5" cy="82" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
                        <line x1="84" y1="70" x2="84" y2="67" stroke="#a8c890" strokeWidth="2.5" strokeLinecap="round" />
                        {/* 귀 */}
                        <ellipse cx="40" cy="20" rx="8" ry="12" fill="#a05828" transform="rotate(18 40 20)" />
                        <ellipse cx="70" cy="20" rx="8" ry="12" fill="#a05828" transform="rotate(-18 70 20)" />
                        <ellipse cx="40.5" cy="21" rx="4.5" ry="8" fill="#d4874a" opacity="0.55" transform="rotate(18 40.5 21)" />
                        <ellipse cx="69.5" cy="21" rx="4.5" ry="8" fill="#d4874a" opacity="0.55" transform="rotate(-18 69.5 21)" />
                        {/* 몸 */}
                        <ellipse cx="55" cy="51" rx="13" ry="11" fill="#c47a3a" />
                        <ellipse cx="55" cy="53" rx="8" ry="7" fill="#d4874a" opacity="0.5" />
                        {/* 곱슬 털 */}
                        <circle cx="43" cy="23" r="6.5" fill="#c47a3a" /><circle cx="48" cy="16" r="7" fill="#c47a3a" />
                        <circle cx="55" cy="13" r="7.5" fill="#c47a3a" /><circle cx="62" cy="16" r="7" fill="#c47a3a" /><circle cx="67" cy="23" r="6.5" fill="#c47a3a" />
                        <circle cx="46" cy="19" r="2.8" fill="#d98a45" opacity="0.45" /><circle cx="55" cy="12" r="2.8" fill="#d98a45" opacity="0.45" /><circle cx="64" cy="20" r="2.8" fill="#d98a45" opacity="0.45" />
                        {/* 머리 */}
                        <circle cx="55" cy="32" r="15" fill="#c47a3a" />
                        <circle cx="55" cy="34" r="13" fill="#be722f" opacity="0.3" />
                        {/* 주둥이 */}
                        <ellipse cx="55" cy="38" rx="7" ry="5.5" fill="#b86820" opacity="0.65" />
                        <ellipse cx="55" cy="35.5" rx="3" ry="2.2" fill="#2a0f00" />
                        <path d="M51.5 39.5 Q55 43.5 58.5 39.5" stroke="#2a0f00" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                        <ellipse cx="55" cy="42" rx="3" ry="2.4" fill="#ff7a9a" />
                        {/* 눈 */}
                        <circle cx="48.5" cy="29" r="3" fill="#1a0800" /><circle cx="61.5" cy="29" r="3" fill="#1a0800" />
                        <circle cx="49.5" cy="28" r="1" fill="white" opacity="0.9" /><circle cx="62.5" cy="28" r="1" fill="white" opacity="0.9" />
                        {/* 뺨 */}
                        <ellipse cx="44" cy="36" rx="3.5" ry="2.2" fill="#ff9eb5" opacity="0.45" />
                        <ellipse cx="66" cy="36" rx="3.5" ry="2.2" fill="#ff9eb5" opacity="0.45" />
                    </svg>
                </div>

                <div className="text-center mb-6">
                    <p className="text-xs text-stone-500 animate-pulse font-medium">사진을 누르면 크게 보실 수 있어요 📸</p>
                </div>

                {/* 가로 스크롤 갤러리 */}
                <div className="relative group">
                    <button
                        className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-stone-600 z-10 active:bg-white select-none transition-opacity duration-200 ${currentScrollIdx === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
                                <div className="relative">
                                    {/* 보태니컬 코너 장식 */}
                                    <div className="absolute -top-4 -left-4 pointer-events-none select-none z-10"><BotCorner size={44}/></div>
                                    <div className="absolute -top-4 -right-4 pointer-events-none select-none z-10"><BotCorner flipX size={44}/></div>
                                    <div className="absolute -bottom-4 -left-4 pointer-events-none select-none z-10"><BotCorner flipY size={44}/></div>
                                    <div className="absolute -bottom-4 -right-4 pointer-events-none select-none z-10"><BotCorner flipX flipY size={44}/></div>
                                    {/* 로즈골드 그라디언트 테두리 */}
                                    <div className="p-[2px] rounded-xl" style={{ background: 'linear-gradient(135deg, #e8b4b8 0%, #f5dcc8 50%, #d4a8c0 100%)' }}>
                                        <div
                                            className="rounded-[10px] overflow-hidden shadow-sm aspect-[4/5] cursor-zoom-in relative active:opacity-90"
                                            style={{ touchAction: 'manipulation' }}
                                            onPointerDown={() => {
                                                document.body.classList.add('music-hidden');
                                                document.body.classList.add('nav-hidden');
                                                setSelectedIdx(idx);
                                            }}
                                        >
                                            <img src={img.src} alt={img.alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/70 backdrop-blur-sm shadow-md rounded-full flex items-center justify-center text-stone-600 z-10 active:bg-white select-none transition-opacity duration-200 ${currentScrollIdx === images.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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
                        className="absolute top-3 right-3 z-[510] flex items-center bg-white/95 border border-stone-200 rounded-full shadow-md p-1 active:shadow-lg transition-all select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            document.body.classList.remove('music-hidden');
                            document.body.classList.remove('nav-hidden');
                            setSelectedIdx(null);
                        }}
                    >
                        <div className="w-9 h-9 rounded-full flex items-center justify-center text-stone-500">
                            <X size={18} />
                        </div>
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
