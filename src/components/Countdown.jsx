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

    return (
        <div className="flex space-x-4 mt-8">
            {units.map((unit, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <div className="bg-white/40 backdrop-blur-sm border border-white/20 w-12 h-12 rounded-lg flex items-center justify-center shadow-sm mb-1">
                        <span className="text-lg font-serif text-stone-800">{String(unit.value).padStart(2, '0')}</span>
                    </div>
                    <span className="text-[9px] tracking-tighter text-stone-500 font-bold">{unit.label}</span>
                </div>
            ))}
        </div>
    );
}
