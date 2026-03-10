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

// VENHT 스타일 데이지 커플 캐릭터 SVG
const DaisyCouple = () => {
    const petals = [0, 45, 90, 135, 180, 225, 270, 315];
    return (
        <svg width="100" height="90" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── 왼쪽 (네이비) ── */}
            <ellipse cx="22" cy="55" rx="19" ry="22" fill="#1d3a72" />
            {/* 머리 번 */}
            <circle cx="15" cy="34" r="5" fill="#162e5a" />
            <circle cx="29" cy="34" r="5" fill="#162e5a" />
            <ellipse cx="22" cy="36" rx="9.5" ry="5" fill="#1d3a72" />
            {/* 리본 */}
            <path d="M13 32 L15 34 L17 32 M13 32 L15 30 L17 32" stroke="#ffb0c8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M27 32 L29 34 L31 32 M27 32 L29 30 L31 32" stroke="#ffb0c8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* 꽃잎 (흰색) */}
            {petals.map((a, i) => (
                <ellipse key={i} cx="22" cy="47" rx="3" ry="8"
                    fill="white" opacity="0.93"
                    transform={`rotate(${a} 22 55)`} />
            ))}
            {/* 꽃 중심 */}
            <circle cx="22" cy="55" r="7" fill="#f5c340" />
            {/* 눈 */}
            <circle cx="20" cy="54" r="1.1" fill="#3a1a00" />
            <circle cx="24" cy="54" r="1.1" fill="#3a1a00" />
            {/* 웃음 */}
            <path d="M19.5 57 Q22 59.5 24.5 57" stroke="#3a1a00" strokeWidth="1" fill="none" strokeLinecap="round" />
            {/* 뺨 홍조 */}
            <ellipse cx="18" cy="57" rx="2.5" ry="1.5" fill="#ff9eb5" opacity="0.45" />
            <ellipse cx="26" cy="57" rx="2.5" ry="1.5" fill="#ff9eb5" opacity="0.45" />
            {/* 왼팔 */}
            <path d="M4 57 Q1 63 3 66" stroke="#1d3a72" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            {/* 오른팔 (손잡기) */}
            <path d="M40 58 Q45 66 50 66" stroke="#1d3a72" strokeWidth="4.8" strokeLinecap="round" fill="none" />

            {/* ── 오른쪽 (화이트) ── */}
            <ellipse cx="78" cy="55" rx="19" ry="22" fill="#f2f2f2" stroke="#e0e0e0" strokeWidth="0.8" />
            {/* 머리 번 */}
            <circle cx="71" cy="34" r="5" fill="#e5e5e5" stroke="#d5d5d5" strokeWidth="0.6" />
            <circle cx="85" cy="34" r="5" fill="#e5e5e5" stroke="#d5d5d5" strokeWidth="0.6" />
            <ellipse cx="78" cy="36" rx="9.5" ry="5" fill="#f2f2f2" />
            {/* 리본 */}
            <path d="M69 32 L71 34 L73 32 M69 32 L71 30 L73 32" stroke="#ffb0c8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            <path d="M83 32 L85 34 L87 32 M83 32 L85 30 L87 32" stroke="#ffb0c8" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            {/* 꽃잎 (파란색) */}
            {petals.map((a, i) => (
                <ellipse key={i} cx="78" cy="47" rx="3" ry="8"
                    fill="#1a68c8" opacity="0.88"
                    transform={`rotate(${a} 78 55)`} />
            ))}
            {/* 꽃 중심 */}
            <circle cx="78" cy="55" r="7" fill="#f5c340" />
            {/* 눈 */}
            <circle cx="76" cy="54" r="1.1" fill="#3a1a00" />
            <circle cx="80" cy="54" r="1.1" fill="#3a1a00" />
            {/* 웃음 */}
            <path d="M75.5 57 Q78 59.5 80.5 57" stroke="#3a1a00" strokeWidth="1" fill="none" strokeLinecap="round" />
            {/* 뺨 홍조 */}
            <ellipse cx="74" cy="57" rx="2.5" ry="1.5" fill="#ff9eb5" opacity="0.45" />
            <ellipse cx="82" cy="57" rx="2.5" ry="1.5" fill="#ff9eb5" opacity="0.45" />
            {/* 오른팔 */}
            <path d="M96 57 Q99 63 97 66" stroke="#d8d8d8" strokeWidth="5.5" strokeLinecap="round" fill="none" />
            {/* 왼팔 (손잡기) */}
            <path d="M60 58 Q55 66 50 66" stroke="#d8d8d8" strokeWidth="4.8" strokeLinecap="round" fill="none" />

            {/* ── 손잡기 + 하트 ── */}
            <circle cx="50" cy="66" r="5.5" fill="#1d3a72" />
            <circle cx="50" cy="66" r="4" fill="#f5c340" />
            {/* 하트 */}
            <path d="M50,60 C46,56 43,54 43.5,52 C44,50 46,49 48,50.5 C49,51.2 50,53 50,53 C50,53 51,51.2 52,50.5 C54,49 56,50 56.5,52 C57,54 54,56 50,60 Z"
                fill="#ff5c80" />
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

            {/* 떠다니는 커플 캐릭터 (왼쪽 하단) */}
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
