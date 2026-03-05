import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import IntroScreen from './components/IntroScreen';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import CoupleQuiz from './components/CoupleQuiz';
import Gallery from './components/Gallery';
import Location from './components/Location';
import AccountInfo from './components/AccountInfo';
import Guestbook from './components/Guestbook';
import BottomNav from './components/BottomNav';

export default function App() {
    const [isEntered, setIsEntered] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '' });

    const showToast = (message) => {
        setToast({ show: true, message });
        setTimeout(() => setToast({ show: false, message: '' }), 3000);
    };

    if (!isEntered) {
        return <IntroScreen onEnter={() => setIsEntered(true)} />;
    }

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-rose-200 relative pb-24">
            <Hero />
            <Greeting />
            <CoupleQuiz />
            <Gallery />
            <Location />
            <AccountInfo showToast={showToast} />
            <Guestbook showToast={showToast} />

            <BottomNav />

            {/* 커스텀 토스트 알림 */}
            <div className={`fixed bottom-24 left-1/2 -translate-x-1/2 bg-stone-800 text-white px-6 py-3 rounded-full shadow-xl transition-all duration-300 z-50 flex items-center space-x-2 ${toast.show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <CheckCircle2 size={18} className="text-emerald-400" />
                <span className="text-sm font-medium">{toast.message}</span>
            </div>
        </div>
    );
}
