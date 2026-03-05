import React from 'react';
import { Calendar, Camera, MapPin, Gift } from 'lucide-react';

export default function BottomNav() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-0 w-full max-w-[480px] bg-white/95 backdrop-blur-md border-t border-stone-200 z-40 px-6 pt-3 pb-[max(24px,env(safe-area-inset-bottom))] flex justify-between items-center left-1/2 -translate-x-1/2">
            <button onClick={() => scrollTo('greeting')} className="flex flex-col items-center text-stone-500 hover:text-stone-800 transition-colors w-16">
                <Calendar size={20} className="mb-1" />
                <span className="text-[10px] font-bold">일시</span>
            </button>
            <button onClick={() => scrollTo('gallery')} className="flex flex-col items-center text-stone-500 hover:text-stone-800 transition-colors w-16">
                <Camera size={20} className="mb-1" />
                <span className="text-[10px] font-bold">갤러리</span>
            </button>
            <button onClick={() => scrollTo('location')} className="flex flex-col items-center text-stone-500 hover:text-stone-800 transition-colors w-16">
                <MapPin size={20} className="mb-1" />
                <span className="text-[10px] font-bold">오시는길</span>
            </button>
            <button onClick={() => scrollTo('account')} className="flex flex-col items-center text-stone-500 hover:text-stone-800 transition-colors w-16">
                <Gift size={20} className="mb-1" />
                <span className="text-[10px] font-bold">마음전달</span>
            </button>
        </div>
    );
}
