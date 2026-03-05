import React, { useState } from 'react';
import CheckSquare from 'lucide-react/dist/esm/icons/check-square';
import X from 'lucide-react/dist/esm/icons/x';

export default function RSVP({ showToast }) {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [attendance, setAttendance] = useState('참석');
    const [count, setCount] = useState('1명');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim()) {
            showToast('이름을 입력해주세요.');
            return;
        }

        setLoading(true);
        try {
            // 구글 시트 연동 (Guestbook과 동일한 시트 사용)
            const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxOb4nA57HQsWz9dkcKzrvSRkIwvMwJa_ajVAavSiNZI9gzUucDNr6_cgtHpswYKplu/exec";

            await fetch(GOOGLE_SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `[참석] ${name.trim()}`,
                    content: `${attendance} / ${count}`,
                    type: 'UPDATE' // 업데이트 로직 우선 적용
                })
            });

            showToast('참석 의사가 전달되었습니다. 감사합니다!');
            setIsOpen(false);
            setName('');
        } catch (err) {
            console.error(err);
            showToast('연결 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-12 px-6 text-center" id="rsvp">
            <button
                onClick={() => setIsOpen(true)}
                className="w-full max-w-xs mx-auto py-4 bg-rose-50 border border-rose-100 text-rose-600 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-sm hover:shadow-md transition-all"
            >
                <CheckSquare size={20} />
                <span>참석 의사 전달하기</span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-sm rounded-3xl p-8 shadow-2xl relative animate-in zoom-in-95 duration-300">
                        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-stone-400">
                            <X size={24} />
                        </button>

                        <h3 className="text-xl font-serif text-stone-800 mb-2">참석 의사 전달</h3>
                        <p className="text-sm text-stone-500 mb-8">원활한 예식 준비를 위해<br />참석 여부를 알려주시면 감사하겠습니다.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="text-left">
                                <label className="text-xs font-bold text-stone-400 ml-1 mb-2 block">성함</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="성함을 입력해주세요"
                                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-200"
                                />
                            </div>

                            <div className="text-left">
                                <label className="text-xs font-bold text-stone-400 ml-1 mb-2 block">참석 여부</label>
                                <div className="flex space-x-2">
                                    {['참석', '미정', '불참'].map((option) => (
                                        <button
                                            key={option}
                                            type="button"
                                            onClick={() => setAttendance(option)}
                                            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${attendance === option ? 'bg-rose-400 text-white' : 'bg-stone-50 text-stone-400'}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="text-left">
                                <label className="text-xs font-bold text-stone-400 ml-1 mb-2 block">동행 인원</label>
                                <select
                                    value={count}
                                    onChange={(e) => setCount(e.target.value)}
                                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-3 text-stone-800 focus:outline-none"
                                >
                                    {['본인', '2명', '3명', '4명 이상'].map(opt => <option key={opt}>{opt}</option>)}
                                </select>
                            </div>

                            <button
                                disabled={loading}
                                className="w-full py-4 bg-stone-800 text-white rounded-xl font-bold hover:bg-stone-700 transition-all disabled:opacity-50"
                            >
                                {loading ? '전송 중...' : '전달하기'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}
