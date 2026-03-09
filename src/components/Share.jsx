import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Share() {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className="pt-8 pb-4 bg-white" id="share">
            <div ref={ref} className={`max-w-md mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="space-y-4">
                    <p className="text-[28px] font-serif italic text-stone-800 tracking-wider">Thank you!</p>
                    <div className="text-2xl text-stone-900">🖤</div>
                </div>
            </div>
        </section>
    );
}
