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

// VENHT 스타일 데이지 커플 + 강아지 SVG
const DaisyCouple = () => {
    const petals = [0, 45, 90, 135, 180, 225, 270, 315];
    return (
        <svg width="110" height="100" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">

            {/* ── 강아지 (중앙 상단) ── */}
            {/* 귀 (뒤에) */}
            <ellipse cx="38" cy="24" rx="7" ry="11" fill="#a05828" transform="rotate(15 38 24)" />
            <ellipse cx="72" cy="24" rx="7" ry="11" fill="#a05828" transform="rotate(-15 72 24)" />
            {/* 귀 안쪽 */}
            <ellipse cx="38.5" cy="25" rx="4" ry="7.5" fill="#c47a3a" opacity="0.6" transform="rotate(15 38.5 25)" />
            <ellipse cx="71.5" cy="25" rx="4" ry="7.5" fill="#c47a3a" opacity="0.6" transform="rotate(-15 71.5 25)" />

            {/* 몸 */}
            <ellipse cx="55" cy="52" rx="11" ry="9" fill="#c47a3a" />
            {/* 앞발 */}
            <ellipse cx="47" cy="59" rx="5.5" ry="4" fill="#c47a3a" />
            <ellipse cx="63" cy="59" rx="5.5" ry="4" fill="#c47a3a" />
            {/* 발톱 */}
            <ellipse cx="44.5" cy="62" rx="2" ry="1.2" fill="#9a4e1a" opacity="0.7" />
            <ellipse cx="47" cy="62.5" rx="2" ry="1.2" fill="#9a4e1a" opacity="0.7" />
            <ellipse cx="49.5" cy="62" rx="2" ry="1.2" fill="#9a4e1a" opacity="0.7" />
            <ellipse cx="60.5" cy="62" rx="2" ry="1.2" fill="#9a4e1a" opacity="0.7" />
            <ellipse cx="63" cy="62.5" rx="2" ry="1.2" fill="#9a4e1a" opacity="0.7" />
            <ellipse cx="65.5" cy="62" rx="2" ry="1.2" fill="#9a4e1a" opacity="0.7" />
            {/* 꼬리 */}
            <path d="M66 49 Q76 42 74 36 Q72 32 68 34" stroke="#c47a3a" strokeWidth="4.5" fill="none" strokeLinecap="round" />

            {/* 곱슬 털 (머리) */}
            <circle cx="44" cy="22" r="6" fill="#c47a3a" />
            <circle cx="49" cy="16" r="6.5" fill="#c47a3a" />
            <circle cx="55" cy="13" r="7" fill="#c47a3a" />
            <circle cx="61" cy="16" r="6.5" fill="#c47a3a" />
            <circle cx="66" cy="22" r="6" fill="#c47a3a" />
            {/* 곱슬 털 하이라이트 */}
            <circle cx="46" cy="20" r="2.5" fill="#d98a45" opacity="0.5" />
            <circle cx="55" cy="12" r="2.5" fill="#d98a45" opacity="0.5" />
            <circle cx="63" cy="21" r="2.5" fill="#d98a45" opacity="0.5" />

            {/* 머리 */}
            <circle cx="55" cy="30" r="13" fill="#c47a3a" />
            {/* 머리 음영 */}
            <circle cx="55" cy="32" r="11" fill="#be722f" opacity="0.35" />

            {/* 주둥이 */}
            <ellipse cx="55" cy="35" rx="6" ry="4.5" fill="#b86820" opacity="0.7" />
            {/* 코 */}
            <ellipse cx="55" cy="33" rx="2.5" ry="1.8" fill="#3a1500" />
            {/* 콧구멍 */}
            <ellipse cx="53.5" cy="33.2" rx="0.6" ry="0.5" fill="#5a2500" opacity="0.7" />
            <ellipse cx="56.5" cy="33.2" rx="0.6" ry="0.5" fill="#5a2500" opacity="0.7" />
            {/* 입 */}
            <path d="M52 36 Q55 39.5 58 36" stroke="#3a1500" strokeWidth="1" fill="none" strokeLinecap="round" />
            {/* 혀 */}
            <ellipse cx="55" cy="38.5" rx="2.5" ry="2" fill="#ff7a9a" />
            {/* 눈 */}
            <circle cx="49.5" cy="28" r="2.5" fill="#1a0800" />
            <circle cx="60.5" cy="28" r="2.5" fill="#1a0800" />
            {/* 눈 하이라이트 */}
            <circle cx="50.3" cy="27.2" r="0.8" fill="white" opacity="0.9" />
            <circle cx="61.3" cy="27.2" r="0.8" fill="white" opacity="0.9" />
            {/* 뺨 홍조 */}
            <ellipse cx="45.5" cy="33" rx="3" ry="2" fill="#ff9eb5" opacity="0.45" />
            <ellipse cx="64.5" cy="33" rx="3" ry="2" fill="#ff9eb5" opacity="0.45" />

            {/* 💕 */}
            <text x="81" y="16" fontSize="9" textAnchor="middle">💕</text>

            {/* ── 왼쪽 흰꽃 (22, 82 중심) ── */}
            {petals.map((a, i) => (
                <ellipse key={`lp${i}`} cx="22" cy="72" rx="3.5" ry="9"
                    fill="white" stroke="#e0ccd8" strokeWidth="0.6" opacity="0.97"
                    transform={`rotate(${a} 22 82)`} />
            ))}
            <circle cx="22" cy="82" r="9" fill="#f5c340" />
            <circle cx="19.8" cy="81" r="1.2" fill="#3a1a00" />
            <circle cx="24.2" cy="81" r="1.2" fill="#3a1a00" />
            <path d="M19.2 84.5 Q22 87.5 24.8 84.5" stroke="#3a1a00" strokeWidth="1.1" fill="none" strokeLinecap="round" />
            <ellipse cx="17.5" cy="84" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            <ellipse cx="26.5" cy="84" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            {/* 왼쪽 꽃 팔 → 강아지 받치기 */}
            <path d="M30 76 Q36 66 47 59" stroke="#a8c890" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* 왼쪽 바깥 팔 */}
            <path d="M7 78 Q3 85 5 90" stroke="#a8c890" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* ── 오른쪽 파란꽃 (88, 82 중심) ── */}
            {petals.map((a, i) => (
                <ellipse key={`rp${i}`} cx="88" cy="72" rx="3.5" ry="9"
                    fill="#2272d8" opacity="0.9"
                    transform={`rotate(${a} 88 82)`} />
            ))}
            <circle cx="88" cy="82" r="9" fill="#f5c340" />
            <circle cx="85.8" cy="81" r="1.2" fill="#3a1a00" />
            <circle cx="90.2" cy="81" r="1.2" fill="#3a1a00" />
            <path d="M85.2 84.5 Q88 87.5 90.8 84.5" stroke="#3a1a00" strokeWidth="1.1" fill="none" strokeLinecap="round" />
            <ellipse cx="83.5" cy="84" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            <ellipse cx="92.5" cy="84" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            {/* 오른쪽 꽃 팔 → 강아지 받치기 */}
            <path d="M80 76 Q74 66 63 59" stroke="#a8c890" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* 오른쪽 바깥 팔 */}
            <path d="M103 78 Q107 85 105 90" stroke="#a8c890" strokeWidth="2" strokeLinecap="round" fill="none" />

        </svg>
    );
};

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

            {/* 떠다니는 커플 + 강아지 캐릭터 (왼쪽 하단) */}
            {isEntered && (
                <div
                    className="fixed bottom-20 left-1 z-[90] pointer-events-none select-none"
                    style={{ animation: 'couple-float 3s ease-in-out infinite' }}
                >
                    <DaisyCouple />
                </div>
            )}

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
