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

// VENHT 스타일 데이지 커플 캐릭터 SVG (꽃만, 배경 원 없음)
const DaisyCouple = () => {
    const petals = [0, 45, 90, 135, 180, 225, 270, 315];
    return (
        <svg width="100" height="72" viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ── 왼쪽: 흰 꽃잎 (배경 없음) ── */}
            {petals.map((a, i) => (
                <ellipse key={`lp${i}`} cx="22" cy="28" rx="3.5" ry="9"
                    fill="white" stroke="#e0ccd8" strokeWidth="0.6" opacity="0.97"
                    transform={`rotate(${a} 22 38)`} />
            ))}
            {/* 꽃 중심 */}
            <circle cx="22" cy="38" r="9" fill="#f5c340" />
            {/* 눈 */}
            <circle cx="19.8" cy="37" r="1.2" fill="#3a1a00" />
            <circle cx="24.2" cy="37" r="1.2" fill="#3a1a00" />
            {/* 웃음 */}
            <path d="M19.2 40.5 Q22 43.5 24.8 40.5" stroke="#3a1a00" strokeWidth="1.1" fill="none" strokeLinecap="round" />
            {/* 뺨 홍조 */}
            <ellipse cx="17.5" cy="40" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            <ellipse cx="26.5" cy="40" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            {/* 왼쪽 줄기 팔 */}
            <path d="M4 40 Q0 47 2 51" stroke="#a8c890" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* 오른쪽 줄기 팔 (손잡기) */}
            <path d="M40 41 Q45 50 49 52" stroke="#a8c890" strokeWidth="2.2" strokeLinecap="round" fill="none" />

            {/* ── 오른쪽: 파란 꽃잎 (배경 없음) ── */}
            {petals.map((a, i) => (
                <ellipse key={`rp${i}`} cx="78" cy="28" rx="3.5" ry="9"
                    fill="#2272d8" opacity="0.9"
                    transform={`rotate(${a} 78 38)`} />
            ))}
            {/* 꽃 중심 */}
            <circle cx="78" cy="38" r="9" fill="#f5c340" />
            {/* 눈 */}
            <circle cx="75.8" cy="37" r="1.2" fill="#3a1a00" />
            <circle cx="80.2" cy="37" r="1.2" fill="#3a1a00" />
            {/* 웃음 */}
            <path d="M75.2 40.5 Q78 43.5 80.8 40.5" stroke="#3a1a00" strokeWidth="1.1" fill="none" strokeLinecap="round" />
            {/* 뺨 홍조 */}
            <ellipse cx="73.5" cy="40" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            <ellipse cx="82.5" cy="40" rx="2.2" ry="1.3" fill="#ff9eb5" opacity="0.55" />
            {/* 오른쪽 줄기 팔 */}
            <path d="M96 40 Q100 47 98 51" stroke="#a8c890" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* 왼쪽 줄기 팔 (손잡기) */}
            <path d="M60 41 Q55 50 51 52" stroke="#a8c890" strokeWidth="2.2" strokeLinecap="round" fill="none" />

            {/* ── 가운데 하트 ── */}
            <path d="M50,58 C46,54 43,51 43.5,49 C44,47 46.5,46 48.5,47.5 C49.5,48.2 50,50 50,50 C50,50 50.5,48.2 51.5,47.5 C53.5,46 56,47 56.5,49 C57,51 54,54 50,58 Z"
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
