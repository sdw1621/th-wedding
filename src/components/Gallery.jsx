import React, { useState, useRef, useCallback, useEffect } from 'react';
import Camera from 'lucide-react/dist/esm/icons/camera';
import X from 'lucide-react/dist/esm/icons/x';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useBackButton } from '../hooks/useBackButton';

// 작은 벚꽃 한 송이 (5겹 꽃잎 + 노란 중심)
const Blossom = ({ cx, cy, s = 1, op = 0.85, r = 0 }) => (
    <g transform={`translate(${cx},${cy}) scale(${s}) rotate(${r})`}>
        {[0, 72, 144, 216, 288].map((a, i) => (
            <ellipse key={i} cx="0" cy="-7.5" rx="4.8" ry="7"
                fill={i % 2 === 0 ? '#fcd8e8' : '#f8c8df'}
                transform={`rotate(${a})`} opacity={op} />
        ))}
        <circle cx="0" cy="0" r="3.2" fill="#fef0b0" opacity="0.95" />
        <circle cx="0" cy="-1.6" r="0.7" fill="#c87010" opacity="0.6" />
        <circle cx="1.4" cy="-0.7" r="0.7" fill="#c87010" opacity="0.6" />
        <circle cx="-1.4" cy="-0.7" r="0.7" fill="#c87010" opacity="0.6" />
    </g>
);

// 사진 프레임을 감싸는 벚꽃 + 덩굴 오버레이 (4변 장식)
const BlossomFrame = () => (
    <svg viewBox="0 0 100 125" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: '-8px', width: 'calc(100% + 16px)', height: 'calc(100% + 16px)', pointerEvents: 'none', overflow: 'visible', zIndex: 10 }}>
        {/* 상단 가지 */}
        <path d="M-2 7 C15 3 35 2 50 2 C65 2 82 3 102 7" stroke="#7a9860" strokeWidth="0.85" fill="none" opacity="0.55" strokeLinecap="round" />
        <path d="M15 4 C14 8 12 12 10 16" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M35 3 C34 7 32 11 30 15" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M65 3 C64 7 62 11 60 15" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M85 4 C84 8 82 12 80 16" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M18 5 C22 1 28 4 24 8 C22 11 18 10 18 6Z" fill="#93b87a" opacity="0.4" />
        <path d="M50 2 C54 -2 60 1 56 5 C54 8 50 7 50 3Z" fill="#93b87a" opacity="0.38" />
        <Blossom cx={7} cy={5} s={0.26} op={0.82} r={20} />
        <Blossom cx={38} cy={2} s={0.27} op={0.78} r={8} />
        <Blossom cx={52} cy={1.5} s={0.22} op={0.68} r={-5} />
        <Blossom cx={80} cy={3} s={0.24} op={0.72} r={-18} />
        <Blossom cx={93} cy={6} s={0.26} op={0.8} r={10} />
        <Blossom cx={10} cy={16} s={0.19} op={0.6} r={5} />
        <Blossom cx={60} cy={15} s={0.18} op={0.55} r={10} />
        <circle cx="22" cy="3" r="1.9" fill="white" opacity="0.92" />
        <circle cx="20" cy="1" r="1.4" fill="#fdf6f9" opacity="0.87" />
        <circle cx="24" cy="1.5" r="1.6" fill="white" opacity="0.89" />
        <circle cx="66" cy="2" r="1.8" fill="white" opacity="0.90" />
        <circle cx="64" cy="0" r="1.4" fill="#fdf6f9" opacity="0.85" />
        <circle cx="68" cy="0.5" r="1.5" fill="white" opacity="0.88" />
        <circle cx="30" cy="15" r="1.6" fill="white" opacity="0.88" />
        <circle cx="28" cy="13" r="1.2" fill="#fdf6f9" opacity="0.83" />
        <circle cx="80" cy="16" r="1.5" fill="white" opacity="0.86" />
        <circle cx="78" cy="14" r="1.1" fill="#fdf6f9" opacity="0.81" />
        {/* 하단 가지 */}
        <path d="M-2 118 C15 122 35 123 50 123 C65 123 82 122 102 118" stroke="#7a9860" strokeWidth="0.85" fill="none" opacity="0.55" strokeLinecap="round" />
        <path d="M15 121 C14 117 12 113 10 109" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M35 122 C34 118 32 114 30 110" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M65 122 C64 118 62 114 60 110" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M85 121 C84 117 82 113 80 109" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M18 120 C22 124 28 121 24 117 C22 114 18 115 18 119Z" fill="#93b87a" opacity="0.4" />
        <path d="M50 123 C54 127 60 124 56 120 C54 117 50 118 50 122Z" fill="#93b87a" opacity="0.38" />
        <Blossom cx={7} cy={120} s={0.26} op={0.82} r={-20} />
        <Blossom cx={38} cy={123} s={0.27} op={0.78} r={-8} />
        <Blossom cx={52} cy={123.5} s={0.22} op={0.68} r={5} />
        <Blossom cx={80} cy={122} s={0.24} op={0.72} r={18} />
        <Blossom cx={93} cy={119} s={0.26} op={0.8} r={-10} />
        <Blossom cx={10} cy={109} s={0.19} op={0.6} r={-5} />
        <Blossom cx={60} cy={110} s={0.18} op={0.55} r={-10} />
        <circle cx="22" cy="122" r="1.9" fill="white" opacity="0.92" />
        <circle cx="20" cy="124" r="1.4" fill="#fdf6f9" opacity="0.87" />
        <circle cx="24" cy="123.5" r="1.6" fill="white" opacity="0.89" />
        <circle cx="66" cy="123" r="1.8" fill="white" opacity="0.90" />
        <circle cx="64" cy="125" r="1.4" fill="#fdf6f9" opacity="0.85" />
        <circle cx="68" cy="124.5" r="1.5" fill="white" opacity="0.88" />
        <circle cx="30" cy="110" r="1.6" fill="white" opacity="0.88" />
        <circle cx="28" cy="112" r="1.2" fill="#fdf6f9" opacity="0.83" />
        <circle cx="80" cy="109" r="1.5" fill="white" opacity="0.86" />
        <circle cx="78" cy="111" r="1.1" fill="#fdf6f9" opacity="0.81" />
        {/* 왼쪽 가지 */}
        <path d="M7 -2 C3 15 2 35 2 50 C2 70 3 95 7 127" stroke="#7a9860" strokeWidth="0.85" fill="none" opacity="0.55" strokeLinecap="round" />
        <path d="M4 18 C8 16 12 14 16 12" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M3 38 C7 36 11 34 15 32" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M2 58 C6 56 10 54 14 52" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M2 78 C6 76 10 74 14 72" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M3 98 C7 96 11 94 15 92" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M4 115 C8 113 12 111 16 109" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M4 14 C0 10 2 4 7 6 C10 8 9 14 5 14Z" fill="#93b87a" opacity="0.4" />
        <path d="M3 54 C-1 50 1 44 6 46 C9 48 8 54 4 54Z" fill="#93b87a" opacity="0.38" />
        <Blossom cx={4} cy={10} s={0.25} op={0.78} r={15} />
        <Blossom cx={1.5} cy={45} s={0.26} op={0.8} r={20} />
        <Blossom cx={2} cy={80} s={0.24} op={0.74} r={12} />
        <Blossom cx={4} cy={112} s={0.23} op={0.72} r={8} />
        <Blossom cx={16} cy={12} s={0.18} op={0.56} r={-10} />
        <Blossom cx={14} cy={52} s={0.18} op={0.54} r={-8} />
        <Blossom cx={15} cy={92} s={0.17} op={0.52} r={-12} />
        <circle cx="2" cy="27" r="1.9" fill="white" opacity="0.91" />
        <circle cx="0" cy="25" r="1.4" fill="#fdf6f9" opacity="0.86" />
        <circle cx="0.5" cy="29" r="1.5" fill="white" opacity="0.88" />
        <circle cx="2" cy="63" r="1.8" fill="white" opacity="0.90" />
        <circle cx="0" cy="61" r="1.4" fill="#fdf6f9" opacity="0.85" />
        <circle cx="0.5" cy="65" r="1.3" fill="white" opacity="0.87" />
        <circle cx="3" cy="97" r="1.7" fill="white" opacity="0.88" />
        <circle cx="1" cy="95" r="1.3" fill="#fdf6f9" opacity="0.83" />
        <circle cx="15" cy="32" r="1.5" fill="white" opacity="0.86" />
        <circle cx="13" cy="30" r="1.1" fill="#fdf6f9" opacity="0.81" />
        <circle cx="14" cy="72" r="1.4" fill="white" opacity="0.84" />
        <circle cx="16" cy="109" r="1.5" fill="white" opacity="0.85" />
        {/* 오른쪽 가지 */}
        <path d="M93 -2 C97 15 98 35 98 50 C98 70 97 95 93 127" stroke="#7a9860" strokeWidth="0.85" fill="none" opacity="0.55" strokeLinecap="round" />
        <path d="M96 18 C92 16 88 14 84 12" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M97 38 C93 36 89 34 85 32" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M98 58 C94 56 90 54 86 52" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M98 78 C94 76 90 74 86 72" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M97 98 C93 96 89 94 85 92" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.48" strokeLinecap="round" />
        <path d="M96 115 C92 113 88 111 84 109" stroke="#8aae7a" strokeWidth="0.55" fill="none" opacity="0.5" strokeLinecap="round" />
        <path d="M96 14 C100 10 98 4 93 6 C90 8 91 14 95 14Z" fill="#93b87a" opacity="0.4" />
        <path d="M97 54 C101 50 99 44 94 46 C91 48 92 54 96 54Z" fill="#93b87a" opacity="0.38" />
        <Blossom cx={96} cy={10} s={0.25} op={0.78} r={-15} />
        <Blossom cx={98.5} cy={45} s={0.26} op={0.8} r={-20} />
        <Blossom cx={98} cy={80} s={0.24} op={0.74} r={-12} />
        <Blossom cx={96} cy={112} s={0.23} op={0.72} r={-8} />
        <Blossom cx={84} cy={12} s={0.18} op={0.56} r={10} />
        <Blossom cx={86} cy={52} s={0.18} op={0.54} r={8} />
        <Blossom cx={85} cy={92} s={0.17} op={0.52} r={12} />
        <circle cx="98" cy="27" r="1.9" fill="white" opacity="0.91" />
        <circle cx="100" cy="25" r="1.4" fill="#fdf6f9" opacity="0.86" />
        <circle cx="99.5" cy="29" r="1.5" fill="white" opacity="0.88" />
        <circle cx="98" cy="63" r="1.8" fill="white" opacity="0.90" />
        <circle cx="100" cy="61" r="1.4" fill="#fdf6f9" opacity="0.85" />
        <circle cx="99.5" cy="65" r="1.3" fill="white" opacity="0.87" />
        <circle cx="97" cy="97" r="1.7" fill="white" opacity="0.88" />
        <circle cx="99" cy="95" r="1.3" fill="#fdf6f9" opacity="0.83" />
        <circle cx="85" cy="32" r="1.5" fill="white" opacity="0.86" />
        <circle cx="87" cy="30" r="1.1" fill="#fdf6f9" opacity="0.81" />
        <circle cx="86" cy="72" r="1.4" fill="white" opacity="0.84" />
        <circle cx="84" cy="109" r="1.5" fill="white" opacity="0.85" />
        {/* 흩날리는 꽃잎 */}
        <ellipse cx="25" cy="20" rx="2.2" ry="1.3" fill="#fcd8e8" opacity="0.38" transform="rotate(28 25 20)" />
        <ellipse cx="75" cy="18" rx="2" ry="1.2" fill="#f8c5de" opacity="0.33" transform="rotate(-32 75 18)" />
        <ellipse cx="18" cy="105" rx="2.2" ry="1.3" fill="#fcd8e8" opacity="0.36" transform="rotate(15 18 105)" />
        <ellipse cx="82" cy="107" rx="2" ry="1.2" fill="#f8c5de" opacity="0.34" transform="rotate(-18 82 107)" />
        <ellipse cx="12" cy="55" rx="1.8" ry="1.1" fill="#fce0ec" opacity="0.30" transform="rotate(40 12 55)" />
        <ellipse cx="88" cy="75" rx="1.8" ry="1.1" fill="#fce0ec" opacity="0.30" transform="rotate(-35 88 75)" />
    </svg>
);

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

    const closeLightbox = useCallback(() => {
        document.body.classList.remove('music-hidden');
        document.body.classList.remove('nav-hidden');
        setSelectedIdx(null);
    }, []);

    // 풀스크린 상태 변경 시 부모에 알림 (배지 숨김 등)
    useEffect(() => {
        onFullscreenChange?.(selectedIdx !== null);
    }, [selectedIdx !== null, onFullscreenChange]);

    // 라이트박스를 뒤로가기 스택에 올림 (main 위에 쌓임)
    useBackButton(selectedIdx !== null, closeLightbox);

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
                <div className="text-center mb-8 px-6 flex flex-col items-center">
                    <Camera className="mx-auto text-rose-200 mb-3" size={28} strokeWidth={1.5} />
                    <div className="flex justify-center mb-3">
                        <svg viewBox="0 0 240 24" height="24" className="w-56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="12" x2="78" y2="12" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                            <circle cx="83" cy="12" r="1.5" fill="#fca5a5" opacity="0.6" />
                            <path d="M95 9 L98 12 L95 15 L92 12 Z" fill="#fca5a5" />
                            <path d="M120 4 L122.3 9.7 L128 12 L122.3 14.3 L120 20 L117.7 14.3 L112 12 L117.7 9.7 Z" fill="#f87171" />
                            <path d="M145 9 L148 12 L145 15 L142 12 Z" fill="#fca5a5" />
                            <circle cx="157" cy="12" r="1.5" fill="#fca5a5" opacity="0.6" />
                            <line x1="162" y1="12" x2="240" y2="12" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-serif tracking-[0.2em] text-stone-900 font-bold">우리의 빛나는 순간</h2>
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

                {/* 모카 캐릭터 (mocha-0.png) */}
                <div
                    className="w-full mb-8 select-none pointer-events-none"
                    style={{ animation: 'couple-float 3s ease-in-out infinite' }}
                >
                    <img
                        src={`${import.meta.env.BASE_URL}img/mocha-0.png`}
                        alt="모카"
                        className="w-full h-auto block"
                        style={{ mixBlendMode: 'multiply' }}
                        draggable={false}
                    />
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
                                    {/* 벚꽃 프레임 오버레이 */}
                                    <BlossomFrame />
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
                        if (e.target === e.currentTarget) closeLightbox();
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button
                        className="absolute top-3 right-3 z-[510] flex items-center bg-white/95 border border-stone-200 rounded-full shadow-md p-1 active:shadow-lg transition-all select-none"
                        style={{ touchAction: 'manipulation' }}
                        onPointerDown={(e) => {
                            e.stopPropagation();
                            closeLightbox();
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
