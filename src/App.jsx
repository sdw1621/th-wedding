import React, { useState } from 'react';
import CheckCircle2 from 'lucide-react/dist/esm/icons/check-circle-2';

import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import WeddingSchedule from './components/WeddingSchedule';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AccountInfo from './components/AccountInfo';
import Guestbook from './components/Guestbook';
import Share from './components/Share';
import BottomNav from './components/BottomNav';
import Petals from './components/Petals';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
    const [isEntered, setIsEntered] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    const [shouldMusicPlay, setShouldMusicPlay] = useState(false);

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-rose-200 relative">
            <Petals />
            {/* MusicPlayer는 항상 존재하며, 인트로에서 버튼 클릭 시 소리가 남 */}
            <MusicPlayer forcePlay={shouldMusicPlay} />

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
                        <WeddingSchedule />
                        <Gallery />
                        <Location />
                        <AccountInfo showToast={showToast} />
                        <Guestbook showToast={showToast} />
                        <Share />
                    </div>
                    <BottomNav />
                </>
            )}

            {/* 커스텀 토스트 알림 */}
            <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 z-[300] flex items-center space-x-2 ${toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span className="text-sm font-medium">{toast.message}</span>
            </div>
        </div>
    );
}
