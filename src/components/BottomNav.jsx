import React from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart';
import Camera from 'lucide-react/dist/esm/icons/camera';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import Gift from 'lucide-react/dist/esm/icons/gift';

export default function BottomNav() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navItems = [
        { id: 'greeting', label: '인사말', icon: Heart },
        { id: 'gallery', label: '영상&갤러리', icon: Camera },
        { id: 'location', label: '오시는길', icon: MapPin },
        { id: 'account', label: '마음전하기', icon: Gift },
        { id: 'guestbook', label: '방명록', icon: MessageSquare },
    ];

    return (
        <div className="fixed bottom-0 w-full max-w-[480px] bg-white/95 border-t border-stone-200 z-40 px-2 pt-1 pb-[max(4px,env(safe-area-inset-bottom))] flex justify-around items-center left-1/2 -translate-x-1/2 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onPointerDown={(e) => {
                        // 모바일에서의 즉각적인 반응을 위해 PointerDown 사용
                        // 단, 스크롤 유발 방지 등을 위해 상황에 맞춰 사용
                        scrollTo(item.id);
                    }}
                    style={{ touchAction: 'manipulation' }}
                    className="flex flex-col items-center justify-center text-rose-300 hover:text-rose-500 active:bg-stone-50 select-none w-[18%] py-3 rounded-xl transition-colors"
                >
                    <item.icon size={20} strokeWidth={1.5} className="mb-1" />
                    <span className="text-[9px] font-bold tracking-tight whitespace-nowrap text-stone-500 uppercase">{item.label}</span>
                </button>
            ))}
        </div>
    );
}
