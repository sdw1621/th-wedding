import React, { useState } from 'react';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import X from 'lucide-react/dist/esm/icons/x';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WeddingSchedule() {
    const [ref, isVisible] = useScrollReveal();
    const [isModalOpen, setIsModalOpen] = useState(false);

    React.useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('nav-hidden');
        } else {
            document.body.classList.remove('nav-hidden');
        }
    }, [isModalOpen]);

    return (
        <section className="py-24 bg-stone-100/50 px-6" id="schedule">
            <div ref={ref} className={`max-w-md mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center mb-8">
                    <FileText className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif text-stone-800 font-bold">결혼식 식순</h2>
                    <p className="text-stone-600 text-sm mt-2 font-medium">따뜻하고 경건한 예식을 준비했습니다.</p>
                </div>

                <div className="flex justify-center">
                    <button
                        onPointerDown={() => setIsModalOpen(true)}
                        style={{ touchAction: 'manipulation' }}
                        className="bg-white/90 border border-stone-200 text-stone-700 px-8 py-3.5 rounded-full text-[14px] font-bold shadow-sm active:bg-stone-100 select-none flex items-center justify-center transform-none"
                    >
                        <FileText size={16} className="mr-2 text-rose-400" />
                        결혼식 식순 미리보기
                    </button>
                </div>
            </div>

            {/* Modal for PDF */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsModalOpen(false);
                    }}
                >
                    <div className="w-full max-w-3xl flex justify-end mb-2">
                        <button className="text-white/70 active:text-white p-2" onClick={() => setIsModalOpen(false)}>
                            <X size={32} />
                        </button>
                    </div>

                    <div className="w-full max-w-3xl flex-1 bg-white rounded-xl overflow-hidden relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
                        <iframe
                            src={
                                window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                                    ? `${import.meta.env.BASE_URL}결혼식 식순 v3.pdf`
                                    : `https://docs.google.com/viewer?url=${encodeURIComponent('https://sdw1621.github.io/th-wedding/결혼식 식순 v3.pdf')}&embedded=true`
                            }
                            className="absolute top-0 left-0 w-full h-full border-none"
                            title="Wedding Schedule"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
