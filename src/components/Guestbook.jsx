import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Guestbook({ showToast }) {
    const [ref, isVisible] = useScrollReveal();

    // LocalStorage에서 초기 방명록 불러오기
    const [messages, setMessages] = useState(() => {
        try {
            const saved = localStorage.getItem('wedding_guestbook');
            return saved ? JSON.parse(saved) : [
                { name: '김철수', content: '태구야 결혼 진심으로 축하해! 행복하게 잘 살아라!! 🎉', date: '2026.04.10' },
                { name: '이영희', content: '희영아 너무 예쁘다 ㅠㅠ 두 사람 꽃길만 걸어 🌸', date: '2026.04.11' }
            ];
        } catch {
            return [];
        }
    });

    const [newName, setNewName] = useState('');
    const [newContent, setNewContent] = useState('');
    const [aiLoading, setAiLoading] = useState(false);

    // 메시지가 바뀔 때마다 LocalStorage 저장
    useEffect(() => {
        try {
            localStorage.setItem('wedding_guestbook', JSON.stringify(messages));
        } catch (e) {
            console.error(e);
        }
    }, [messages]);

    const generateMessage = async (relationship) => {
        setAiLoading(true);
        // 참고용 API 키 - 환경변수나 백엔드 로직으로 빼는 것을 권장합니다 (지금은 빈 칸 처리)
        const apiKey = "YOUR_GEMINI_API_KEY";

        // API KEY가 없을 때의 대체 임시 처리 로직
        if (apiKey === "YOUR_GEMINI_API_KEY") {
            setTimeout(() => {
                const defaults = {
                    '오랜 친구': '오랜 세월 함께 했던 친구야, 진심으로 결혼 축하해! 예쁘게 잘 살아라! 🥰',
                    '직장 동료': '결혼을 진심으로 축하드립니다. 두 분의 앞날에 행복만 가득하시길 바랍니다! 💐',
                    '가족 또는 친척': '우리 가족이 된 걸 진심으로 환영한다! 따뜻한 가정 이루길 바랄게 💕',
                };
                setNewContent(defaults[relationship]);
                setAiLoading(false);
                showToast('✨ 참고: 실제 API Key가 연결되면 AI가 직접 답변합니다.');
            }, 1500);
            return;
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        const prompt = `결혼식 방명록에 남길 따뜻하고 센스있는 축하 메시지를 작성해줘. 나는 신랑 강태구와 신부 신희영의 '${relationship}'야. 50자 이내로 1개만 작성하고, 친근한 말투로 이모티콘을 1~2개 섞어줘. 큰따옴표 없이 내용만 출력해줘.`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) setNewContent(text.replace(/"/g, '').trim());
        } catch (err) {
            showToast('✨ AI 메시지 생성에 실패했습니다. (API 설정 확인 필요)');
        } finally {
            setAiLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newName.trim() || !newContent.trim()) {
            showToast('이름과 메시지를 모두 입력해주세요.');
            return;
        }

        const today = new Date();
        const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

        setMessages([{ name: newName.trim(), content: newContent.trim(), date: dateStr }, ...messages]);
        setNewName('');
        setNewContent('');
        showToast('축하 메시지가 등록되었습니다. 💌');
    };

    return (
        <section className="py-24 px-6 bg-[#FDFBF7]" id="guestbook" ref={ref}>
            <div className={`max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-10">
                    <MessageCircle className="mx-auto text-stone-400 mb-4" size={24} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">방명록</h2>
                </div>

                {/* 입력 폼 */}
                <form onSubmit={handleSubmit} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 mb-8 space-y-3">
                    <input
                        type="text"
                        placeholder="이름"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200"
                        maxLength={10}
                    />
                    <textarea
                        placeholder="축하의 메시지를 남겨주세요."
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-rose-200"
                        maxLength={100}
                    />

                    {/* AI 추천 기능 */}
                    <div className="pt-2 pb-1 mt-2">
                        <p className="text-xs text-stone-600 mb-2 flex items-center font-bold">
                            <Sparkles size={14} className="text-rose-500 mr-1" /> 어떤 축하를 남길지 고민되시나요?
                        </p>
                        <div className="flex space-x-2">
                            <button type="button" onClick={() => generateMessage('오랜 친구')} disabled={aiLoading} className="flex-1 text-xs py-2 bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100 transition disabled:opacity-50 font-bold">✨ 친구</button>
                            <button type="button" onClick={() => generateMessage('직장 동료')} disabled={aiLoading} className="flex-1 text-xs py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition disabled:opacity-50 font-bold">✨ 동료</button>
                            <button type="button" onClick={() => generateMessage('가족 또는 친척')} disabled={aiLoading} className="flex-1 text-xs py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition disabled:opacity-50 font-bold">✨ 친척</button>
                        </div>
                        {aiLoading && <p className="text-[10px] text-stone-500 mt-2 text-center animate-pulse font-medium">✨ AI가 메시지를 작성하고 있어요...</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-stone-800 text-white font-bold py-3 rounded-xl hover:bg-stone-700 transition-colors text-sm mt-2"
                    >
                        메시지 남기기
                    </button>
                </form>

                {/* 메시지 리스트 */}
                <div className="space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-bold text-sm text-stone-800">{msg.name}</span>
                                <span className="text-xs text-stone-500 font-medium">{msg.date}</span>
                            </div>
                            <p className="text-sm text-stone-700 leading-relaxed font-medium">{msg.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
