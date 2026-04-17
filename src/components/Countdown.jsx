import React, { useState, useEffect } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date('2026-03-13T11:30:00');
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const units = [
        { label: 'DAYS', value: timeLeft.days },
        { label: 'HOURS', value: timeLeft.hours },
        { label: 'MIN', value: timeLeft.minutes },
        { label: 'SEC', value: timeLeft.seconds },
    ];

    const isUrgent = timeLeft.days === 0;

    return (
        <div className="relative flex space-x-3 mt-8">
            {units.map((unit, idx) => (
                <div key={idx} className="flex flex-col items-center relative z-10">
                    <div
                        className="w-[62px] h-[62px] rounded-2xl flex items-center justify-center mb-2 border"
                        style={isUrgent ? {
                            background: 'linear-gradient(145deg, #0a0a1a 0%, #0d0d2e 100%)',
                            borderColor: 'rgba(99,179,255,0.35)',
                            boxShadow: '0 0 18px rgba(99,179,255,0.35), inset 0 1px 0 rgba(255,255,255,0.05)',
                            animation: 'urgentDark 2s ease-in-out infinite',
                        } : {
                            background: 'linear-gradient(145deg, #0a0a1a 0%, #0d0d2e 100%)',
                            borderColor: 'rgba(99,179,255,0.2)',
                            boxShadow: '0 0 12px rgba(99,179,255,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
                        }}
                    >
                        <span className="text-2xl font-semibold tabular-nums countdown-num">{String(unit.value).padStart(2, '0')}</span>
                    </div>
                    <span className="text-[10px] tracking-widest font-black text-stone-900">{unit.label}</span>
                </div>
            ))}
        </div>
    );
}
