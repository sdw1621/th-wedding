import React, { useState, useEffect, useRef } from 'react';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import { supabase } from './supabaseClient';

import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AccountInfo from './components/AccountInfo';
import Guestbook from './components/Guestbook';
import Share from './components/Share';
import BottomNav from './components/BottomNav';
import Petals from './components/Petals';
import MusicPlayer from './components/MusicPlayer';

/* global __COMMIT_HASH__ */

// 웨딩 커플 SVG (갤러리 섹션에서 사용)
const _WeddingCouple = () => (
    <svg width="124" height="108" viewBox="0 0 124 108" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* ══════════ 왼쪽: 신부 푸들 ══════════ */}

        {/* 베일 (머리 뒤) */}
        <path d="M16 46 Q22 22 38 20 Q54 22 58 46 Q50 36 38 35 Q26 36 16 46Z" fill="white" opacity="0.88" />
        <path d="M18 50 Q23 28 38 24 Q53 28 58 50" stroke="#e8ddd0" strokeWidth="0.7" fill="none" opacity="0.6" />

        {/* 귀 */}
        <ellipse cx="24" cy="60" rx="6" ry="10" fill="#a05828" transform="rotate(-8 24 60)" />
        <ellipse cx="52" cy="60" rx="6" ry="10" fill="#a05828" transform="rotate(8 52 60)" />
        <ellipse cx="24.5" cy="61" rx="3.5" ry="7" fill="#c47a3a" opacity="0.5" transform="rotate(-8 24.5 61)" />
        <ellipse cx="51.5" cy="61" rx="3.5" ry="7" fill="#c47a3a" opacity="0.5" transform="rotate(8 51.5 61)" />

        {/* 곱슬 털 */}
        <circle cx="22" cy="50" r="8" fill="#c47a3a" />
        <circle cx="28" cy="40" r="8.5" fill="#c47a3a" />
        <circle cx="38" cy="37" r="9" fill="#c47a3a" />
        <circle cx="48" cy="40" r="8.5" fill="#c47a3a" />
        <circle cx="54" cy="50" r="8" fill="#c47a3a" />
        {/* 하이라이트 */}
        <circle cx="26" cy="44" r="3" fill="#d98a45" opacity="0.4" />
        <circle cx="38" cy="37" r="3.2" fill="#d98a45" opacity="0.4" />
        <circle cx="50" cy="44" r="3" fill="#d98a45" opacity="0.4" />

        {/* 머리 */}
        <circle cx="38" cy="58" r="16" fill="#c47a3a" />
        <circle cx="38" cy="60" r="13.5" fill="#be722f" opacity="0.28" />

        {/* 꽃 화관 */}
        <circle cx="22" cy="43" r="4" fill="#ffb3cc" />
        <circle cx="28" cy="35" r="4" fill="#ffd6e7" />
        <circle cx="38" cy="32" r="4.5" fill="#ffb3cc" />
        <circle cx="48" cy="35" r="4" fill="#ffd6e7" />
        <circle cx="54" cy="43" r="4" fill="#ffb3cc" />
        <circle cx="22" cy="43" r="2" fill="#fef0b0" />
        <circle cx="28" cy="35" r="2" fill="#fef0b0" />
        <circle cx="38" cy="32" r="2.2" fill="#fef0b0" />
        <circle cx="48" cy="35" r="2" fill="#fef0b0" />
        <circle cx="54" cy="43" r="2" fill="#fef0b0" />

        {/* 주둥이 */}
        <ellipse cx="38" cy="64" rx="7.5" ry="6" fill="#b86820" opacity="0.55" />
        {/* 코 */}
        <ellipse cx="38" cy="61" rx="3" ry="2.2" fill="#1a0800" />
        {/* 눈 */}
        <circle cx="30.5" cy="54" r="3.2" fill="#1a0800" />
        <circle cx="45.5" cy="54" r="3.2" fill="#1a0800" />
        <circle cx="31.5" cy="52.8" r="1.1" fill="white" />
        <circle cx="46.5" cy="52.8" r="1.1" fill="white" />
        {/* 뺨 홍조 */}
        <ellipse cx="27" cy="63" rx="3.5" ry="2.2" fill="#ff9eb5" opacity="0.5" />
        <ellipse cx="49" cy="63" rx="3.5" ry="2.2" fill="#ff9eb5" opacity="0.5" />
        {/* 입+혀 */}
        <path d="M35 66 Q38 70 41 66" stroke="#1a0800" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <ellipse cx="38" cy="69.5" rx="2.8" ry="2.2" fill="#ff7a9a" />

        {/* 드레스 몸통 */}
        <ellipse cx="38" cy="88" rx="18" ry="16" fill="#f8f4ef" />
        <ellipse cx="38" cy="82" rx="13" ry="10" fill="white" />
        {/* 드레스 레이스 라인 */}
        <path d="M22 88 Q30 80 38 78 Q46 80 54 88" stroke="#e8d8c8" strokeWidth="0.8" fill="none" opacity="0.7" />
        <path d="M20 93 Q29 84 38 82 Q47 84 56 93" stroke="#e8d8c8" strokeWidth="0.8" fill="none" opacity="0.5" />
        {/* 앞발 */}
        <ellipse cx="26" cy="100" rx="7" ry="5" fill="#c47a3a" />
        <ellipse cx="50" cy="100" rx="7" ry="5" fill="#c47a3a" />
        {/* 부케 */}
        <circle cx="22" cy="93" r="5.5" fill="#ffb3cc" />
        <circle cx="17" cy="89" r="4.5" fill="#ffd6e7" />
        <circle cx="24" cy="87" r="4.5" fill="#ff9eb5" />
        <circle cx="19" cy="84" r="3.5" fill="#ffd6e7" />
        <circle cx="25" cy="82" r="3" fill="#ffb3cc" />
        <circle cx="22" cy="93" r="2.2" fill="#fef0b0" />
        <circle cx="17" cy="89" r="1.8" fill="#fef0b0" />
        <circle cx="24" cy="87" r="1.8" fill="#fef0b0" />

        {/* ══════════ 오른쪽: 신랑 골든리트리버 ══════════ */}

        {/* 귀 */}
        <ellipse cx="78" cy="48" rx="8" ry="15" fill="#d4a050" transform="rotate(-15 78 48)" />
        <ellipse cx="116" cy="48" rx="8" ry="15" fill="#d4a050" transform="rotate(15 116 48)" />
        <ellipse cx="79" cy="50" rx="4.5" ry="10.5" fill="#e8c070" opacity="0.5" transform="rotate(-15 79 50)" />
        <ellipse cx="115" cy="50" rx="4.5" ry="10.5" fill="#e8c070" opacity="0.5" transform="rotate(15 115 50)" />

        {/* 몸 (턱시도) */}
        <ellipse cx="97" cy="85" rx="19" ry="21" fill="#d4a050" />
        <ellipse cx="97" cy="87" rx="14" ry="17" fill="#1a1a2e" />
        {/* 와이셔츠 */}
        <ellipse cx="97" cy="84" rx="6" ry="11" fill="white" opacity="0.95" />
        {/* 단추 */}
        <circle cx="97" cy="76" r="0.9" fill="#9a9ab0" />
        <circle cx="97" cy="80" r="0.9" fill="#9a9ab0" />
        <circle cx="97" cy="84" r="0.9" fill="#9a9ab0" />
        {/* 앞발 */}
        <ellipse cx="82" cy="103" rx="8" ry="5" fill="#1a1a2e" />
        <ellipse cx="112" cy="103" rx="8" ry="5" fill="#1a1a2e" />
        <ellipse cx="82" cy="105" rx="6" ry="3.5" fill="#c49040" />
        <ellipse cx="112" cy="105" rx="6" ry="3.5" fill="#c49040" />

        {/* 머리 */}
        <circle cx="97" cy="42" r="20" fill="#d4a050" />
        <circle cx="97" cy="45" r="17" fill="#dba850" opacity="0.28" />

        {/* 주둥이 */}
        <ellipse cx="97" cy="52" rx="10" ry="8" fill="#c49040" opacity="0.6" />
        {/* 코 */}
        <ellipse cx="97" cy="48.5" rx="4" ry="3" fill="#1a0800" />
        {/* 눈 */}
        <circle cx="88" cy="38" r="4" fill="#1a0800" />
        <circle cx="106" cy="38" r="4" fill="#1a0800" />
        <circle cx="89.2" cy="36.5" r="1.3" fill="white" />
        <circle cx="107.2" cy="36.5" r="1.3" fill="white" />
        {/* 뺨 홍조 */}
        <ellipse cx="84" cy="50" rx="4.5" ry="2.8" fill="#ff9eb5" opacity="0.38" />
        <ellipse cx="110" cy="50" rx="4.5" ry="2.8" fill="#ff9eb5" opacity="0.38" />
        {/* 입+혀 */}
        <path d="M92.5 55 Q97 60 101.5 55" stroke="#1a0800" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <ellipse cx="97" cy="59.5" rx="3.5" ry="3" fill="#ff7a9a" />

        {/* 보타이 */}
        <path d="M93 68 L89 64.5 L93 61 Z" fill="#0d0d1a" />
        <path d="M101 68 L105 64.5 L101 61 Z" fill="#0d0d1a" />
        <ellipse cx="97" cy="64.5" rx="3.5" ry="3.5" fill="#1a1a3e" />
        <ellipse cx="97" cy="64.5" rx="2" ry="2" fill="#2a2a50" />

        {/* 표지판 */}
        <rect x="74" y="5" width="46" height="26" rx="4" fill="#7a4a28" />
        <rect x="75.5" y="6.5" width="43" height="23" rx="3" fill="#9a6038" opacity="0.8" />
        {/* 표지판 목걸이 줄 */}
        <path d="M85 30 Q97 36 97 64" stroke="#7a4a28" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M109 30 Q97 36 97 64" stroke="#7a4a28" strokeWidth="1.5" strokeLinecap="round" />
        {/* 표지판 텍스트 */}
        <text x="97" y="18" fontSize="7" fill="white" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">태구♥희영</text>
        <text x="97" y="27" fontSize="6.5" fill="#ffd0a0" textAnchor="middle" fontFamily="sans-serif">축하해요!</text>

    </svg>
);

export default function App() {
    const [isEntered, setIsEntered] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });
    const [shouldMusicPlay, setShouldMusicPlay] = useState(false);
    const [todayVisitors, setTodayVisitors] = useState(null);
    const [totalVisitors, setTotalVisitors] = useState(null);
    const [galleryFullscreen, setGalleryFullscreen] = useState(false);
    const galleryCloseRef = useRef(null);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const trackAndFetch = async () => {
            try {
                if (!sessionStorage.getItem('v_tracked')) {
                    sessionStorage.setItem('v_tracked', '1');
                    const { data: existing } = await supabase
                        .from('visitors')
                        .select('count')
                        .eq('date', today)
                        .maybeSingle();
                    if (existing) {
                        await supabase.from('visitors').update({ count: existing.count + 1 }).eq('date', today);
                    } else {
                        await supabase.from('visitors').insert([{ date: today, count: 1 }]);
                    }
                }
                const { data } = await supabase.from('visitors').select('count').eq('date', today).maybeSingle();
                if (data) setTodayVisitors(data.count);
                const { data: all } = await supabase.from('visitors').select('count');
                if (all) setTotalVisitors(all.reduce((sum, row) => sum + (row.count || 0), 0));
            } catch (e) { }
        };
        trackAndFetch();
    }, []);

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-rose-200 relative">
            <Petals />
            {/* MusicPlayer는 항상 존재하며, 인트로에서 버튼 클릭 시 소리가 남 */}
            <MusicPlayer forcePlay={shouldMusicPlay} />

            {/* 뒤로가기 버튼 (메인 페이지에서만 표시) */}
            {isEntered && (
                <button
                    onPointerDown={() => {
                        if (galleryFullscreen && galleryCloseRef.current) {
                            galleryCloseRef.current();
                        } else {
                            setIsEntered(false);
                        }
                    }}
                    style={{ touchAction: 'manipulation' }}
                    className="fixed top-3 left-3 z-[520] flex items-center bg-white/95 border border-stone-200 rounded-full shadow-md p-1 hover:shadow-lg transition-all select-none"
                    title={galleryFullscreen ? '갤러리로 돌아가기' : '인트로로 돌아가기'}
                >
                    <div className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-stone-100 text-stone-500 transition-colors">
                        <ChevronLeft size={18} />
                    </div>
                </button>
            )}

            {/* 방문자 + 버전 (우하단, 같은 너비) - 갤러리 풀스크린 시 숨김 */}
            <div className={`fixed bottom-20 right-3 z-[400] flex flex-col gap-1 items-stretch select-none pointer-events-none font-mono text-[10px] text-stone-400 transition-opacity duration-300 ${galleryFullscreen ? 'opacity-0' : 'opacity-100'}`}>
                {(totalVisitors !== null || todayVisitors !== null) && (
                    <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-stone-100">
                        <span>total : {totalVisitors ?? '-'}, today : {todayVisitors ?? '-'}</span>
                    </div>
                )}
                <div className="flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm border border-stone-100">
                    <span>gh-pages #{__COMMIT_HASH__}</span>
                </div>
            </div>


            {!isEntered ? (
                <IntroScreen
                    onStart={() => setShouldMusicPlay(true)} // 클릭 즉시 소리 재생 시작 명령
                    onEnter={() => setIsEntered(true)}
                />
            ) : (
                <>
                    <div className="pb-28 animate-in fade-in duration-500 relative z-10">
                        <Hero />
                        <Greeting />
                        <Gallery onFullscreenChange={(isOpen, closeFn) => {
                            setGalleryFullscreen(isOpen);
                            galleryCloseRef.current = closeFn || null;
                        }} />
                        <Location />
                        <AccountInfo showToast={showToast} />
                        <Guestbook showToast={showToast} />
                        <Share />
                    </div>
                    <BottomNav />
                </>
            )}

            {/* 커스텀 토스트 알림 */}
            <div className={`fixed top-20 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 z-[300] flex items-center space-x-2 ${toast.show ? 'opacity-100' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span className="text-sm font-medium">{toast.message}</span>
            </div>
        </div>
    );
}
