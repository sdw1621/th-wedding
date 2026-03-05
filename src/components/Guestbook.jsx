import React, { useState, useEffect } from 'react';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import Sparkles from 'lucide-react/dist/esm/icons/sparkles';
import Send from 'lucide-react/dist/esm/icons/send';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Pencil from 'lucide-react/dist/esm/icons/pencil';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, deleteDoc, doc } from "firebase/firestore";

// --- 서비스 설정 (나중에 발급받은 키값을 여기에 넣으시면 됩니다) ---
const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxOb4nA57HQsWz9dkcKzrvSRkIwvMwJa_ajVAavSiNZI9gzUucDNr6_cgtHpswYKplu/exec"; // 구글 시트 웹앱 URL

// Firebase 싱글톤 초기화
let db = null;
if (FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY") {
    try {
        const app = initializeApp(FIREBASE_CONFIG);
        db = getFirestore(app);
    } catch (e) {
        console.error("Firebase init error:", e);
    }
}

// ---------------------------------------------------------

export default function Guestbook({ showToast }) {
    const [ref, isVisible] = useScrollReveal();
    const [messages, setMessages] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newContent, setNewContent] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [aiLoading, setAiLoading] = useState(false);
    const [attendance, setAttendance] = useState('참석');
    const [attendanceCount, setAttendanceCount] = useState('1명');

    // 1. 실시간 데이터 바인딩
    useEffect(() => {
        if (!db) {
            // 키값이 없을 때는 로컬스토리지 백업 모드
            const saved = localStorage.getItem('wedding_guestbook');
            let currentMessages = saved ? JSON.parse(saved) : [];

            // 필수 예시 데이터 정의 (3월 13일 고정)
            const mockMessages = [
                { id: 'mock-1', name: '김철수', content: '두 분의 결혼을 진심으로 축하드립니다! 행복하게 잘 사세요! 💐', date: '2026.03.13', password: '0313' },
                { id: 'mock-2', name: '이영희', content: '희영아 결혼 너무 축하해! 세상에서 가장 아름다운 신부가 될 거야. 💕', date: '2026.03.13', password: '0313' }
            ];

            // 기존 데이터에서 mock 데이터 제거 후 최신 모크 데이터를 맨 앞에 추가
            const filtered = currentMessages.filter(m => m.id !== 'mock-1' && m.id !== 'mock-2');
            const finalMessages = [...mockMessages, ...filtered];

            localStorage.setItem('wedding_guestbook', JSON.stringify(finalMessages));
            setMessages(finalMessages);
            return;
        }

        const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));

        try {
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const data = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    date: doc.data().createdAt?.toDate().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '') || ''
                }));
                setMessages(data);
                localStorage.setItem('wedding_guestbook', JSON.stringify(data));
            });
            return () => unsubscribe();
        } catch (e) {
            console.error("Firestore onSnapshot error:", e);
        }
    }, []);

    // 2. 카카오 SDK 로드
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js';
        script.async = true;
        document.head.appendChild(script);
        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    const generateMessage = async (relationship) => {
        setAiLoading(true);
        const apiKey = "YOUR_GEMINI_API_KEY";

        if (apiKey === "YOUR_GEMINI_API_KEY") {
            setTimeout(() => {
                const defaults = {
                    '오랜 친구': '오랜 세월 함께 했던 친구야, 진심으로 결혼 축하해! 예쁘게 잘 살아라! 🥰',
                    '직장 동료': '결혼을 진심으로 축하드립니다. 두 분의 앞날에 행복만 가득하시길 바랍니다! 💐',
                    '가족 또는 친척': '우리 가족이 된 걸 진심으로 환영한다! 따뜻한 가정 이루길 바랄게 💕',
                };
                setNewContent(defaults[relationship]);
                setAiLoading(false);
                showToast('✨ 참고: 실제 AI Key가 연결되면 AI가 직접 답변합니다.');
            }, 1000);
            return;
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        const prompt = `결혼식 방명록 축하 메시지 작성. 나는 신랑 강태구와 신부 신희영의 '${relationship}'야. 50자 이내, 친근한 말투, 이모티콘 1~2개.`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) setNewContent(text.trim());
        } catch (err) {
            showToast('AI 메시지 생성 실패');
        } finally {
            setAiLoading(false);
        }
    };

    const handleDelete = async (msg) => {
        const password = prompt('비밀번호를 입력해주세요.');
        if (password === null) return;

        const isAdmin = password === '0313';
        const isAuthor = msg.password ? (password === msg.password) : false;

        if (!isAdmin && !isAuthor) {
            showToast('비밀번호가 틀렸습니다.');
            return;
        }

        if (!window.confirm('이 메시지를 정말 삭제하시겠습니까?')) return;

        try {
            if (db && msg.id && !msg.id.startsWith('mock-')) {
                await deleteDoc(doc(db, "guestbook", msg.id));
            } else {
                const updated = messages.filter(m => m.id !== msg.id);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            }

            // 구글 시트 동기화 (삭제)
            if (GOOGLE_SHEET_URL !== "YOUR_APPS_SCRIPT_URL") {
                fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: msg.name,
                        type: 'DELETE'
                    })
                }).catch(e => console.error('Sheet sync error', e));
            }

            showToast('메시지가 삭제되었습니다.');
        } catch (err) {
            console.error(err);
            showToast('삭제 중 오류가 발생했습니다.');
        }
    };

    const handleEdit = async (msg) => {
        const password = prompt('비밀번호를 입력해주세요.');
        if (password === null) return;

        const isAdmin = password === '0313';
        const isAuthor = msg.password ? (password === msg.password) : false;

        if (!isAdmin && !isAuthor) {
            showToast('비밀번호가 틀렸습니다.');
            return;
        }

        const newText = prompt('수정할 내용을 입력해주세요.', msg.content);
        if (newText === null || newText === msg.content) return;

        try {
            if (db && msg.id && !msg.id.startsWith('mock-')) {
                const { updateDoc } = await import("firebase/firestore");
                await updateDoc(doc(db, "guestbook", msg.id), { content: newText });
            } else {
                const updated = messages.map(m => m.id === msg.id ? { ...m, content: newText } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            }

            // 구글 시트 동기화 (수정)
            if (GOOGLE_SHEET_URL !== "YOUR_APPS_SCRIPT_URL") {
                fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: msg.name,
                        content: newText,
                        type: 'UPDATE'
                    })
                }).catch(e => console.error('Sheet sync error', e));
            }

            showToast('메시지가 수정되었습니다.');
        } catch (err) {
            console.error(err);
            showToast('수정 중 오류가 발생했습니다.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newName.trim() || !newContent.trim() || !newPassword.trim()) {
            showToast('이름, 비밀번호, 메시지를 모두 입력해주세요.');
            return;
        }

        setLoading(true);

        // 동일한 이름의 기존 메시지 찾기
        const existingMsg = messages.find(m => m.name === newName.trim());

        try {
            if (existingMsg) {
                // 비번 검증: 기존 글에 비번이 있는 경우에만 체크 (관리자 비번은 항상 허용)
                const isCorrectPassword = (existingMsg.password && newPassword.trim() === existingMsg.password) || newPassword.trim() === '0313';

                // 기존 글에 비번이 없는 경우(레거시)는 첫 업데이트 시 비번 설정 허용
                const canUpdate = !existingMsg.password || isCorrectPassword;

                if (!canUpdate) {
                    showToast('이미 작성된 이름입니다. 비밀번호를 확인해주세요.');
                    setLoading(false);
                    return;
                }

                // 덮어쓰기 안내 및 진행
                if (db && existingMsg.id && !existingMsg.id.toString().startsWith('mock-')) {
                    const { updateDoc } = await import("firebase/firestore");
                    await updateDoc(doc(db, "guestbook", existingMsg.id), {
                        content: newContent.trim(),
                        password: newPassword.trim(),
                        rsvp: { attendance, count: attendanceCount },
                        createdAt: serverTimestamp()
                    });
                } else {
                    const updated = messages.map(m =>
                        m.id === existingMsg.id ? {
                            ...m,
                            content: newContent.trim(),
                            password: newPassword.trim(),
                            rsvp: { attendance, count: attendanceCount },
                            date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '')
                        } : m
                    );
                    setMessages(updated);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
                }
                showToast('기존 메시지 및 참석 정보가 업데이트되었습니다! ✨');
            } else {
                // 새로 추가
                const messageData = {
                    name: newName.trim(),
                    content: newContent.trim(),
                    password: newPassword.trim(),
                    rsvp: { attendance, count: attendanceCount },
                    createdAt: serverTimestamp()
                };

                if (db) {
                    await addDoc(collection(db, "guestbook"), messageData);
                } else {
                    const today = new Date();
                    const dateStr = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;
                    const localMsg = {
                        ...messageData,
                        id: `local-${Date.now()}`,
                        date: dateStr
                    };
                    setMessages([localMsg, ...messages]);
                    localStorage.setItem('wedding_guestbook', JSON.stringify([localMsg, ...messages]));
                }
                showToast('축하의 마음과 참석의사가 전달되었습니다! 💌');
            }

            // 구글 시트 전송 (스마트 업데이트 지원)
            if (GOOGLE_SHEET_URL !== "YOUR_APPS_SCRIPT_URL") {
                fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: `[참석] ${newName.trim()}`,
                        content: `(${attendance}/${attendanceCount}) ${newContent.trim()}`,
                        type: 'UPDATE'
                    })
                }).catch(e => console.error('Sheet sync error', e));
            }

            setNewName('');
            setNewPassword('');
            setNewContent('');
            setAttendance('참석');
            setAttendanceCount('1명');
        } catch (err) {
            console.error(err);
            showToast('처리 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 px-6 bg-[#FDFBF7]" id="guestbook" ref={ref}>
            <div className={`max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-10">
                    <MessageCircle className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">방명록</h2>
                    <p className="text-xs text-stone-500 mt-2">따뜻한 축하의 메시지를 남겨주세요.</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-200 mb-8 space-y-4">
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="성함"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
                            maxLength={10}
                        />
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-1/3 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all"
                            maxLength={10}
                        />
                    </div>
                    <textarea
                        placeholder="축하의 한마디를 남겨주세요."
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all font-medium"
                        maxLength={100}
                    />


                    <div className="space-y-4">
                        <div className="text-left">
                            <label className="text-[11px] font-bold text-stone-400 ml-1 mb-2 block">참석 여부를 알려주세요</label>
                            <div className="flex space-x-1.5">
                                {['참석', '미정', '불참'].map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        onClick={() => setAttendance(option)}
                                        className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${attendance === option ? 'bg-rose-400 text-white shadow-sm' : 'bg-stone-50 text-stone-400 border border-stone-100 hover:bg-stone-100'}`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="text-left">
                            <label className="text-[11px] font-bold text-stone-400 ml-1 mb-2 block">동행 인원</label>
                            <select
                                value={attendanceCount}
                                onChange={(e) => setAttendanceCount(e.target.value)}
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-200"
                            >
                                {['본인', '2명', '3명', '4명 이상'].map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-stone-800 text-white font-bold py-3.5 rounded-xl hover:bg-stone-700 transition-all text-sm mt-4 flex items-center justify-center disabled:bg-stone-400 shadow-sm"
                    >
                        {loading ? '전달 중...' : (
                            <>
                                <Send size={16} className="mr-2" /> 축하 메시지 및 참석의사 전달
                            </>
                        )}
                    </button>
                </form>

                <div className="space-y-4">
                    {messages.length === 0 ? (
                        <p className="text-center py-10 text-stone-400 text-sm italic font-medium">첫 번째 축하 메시지를 남겨주세요.</p>
                    ) : (
                        messages.map((msg, idx) => (
                            <div key={msg.id || idx} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col relative group">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center space-x-2">
                                        <span className="font-bold text-sm text-stone-800 bg-stone-50 px-2.5 py-1 rounded-md">{msg.name}</span>
                                        {msg.rsvp && (
                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${msg.rsvp.attendance === '참석' ? 'bg-rose-50 text-rose-500' : 'bg-stone-50 text-stone-400'}`}>
                                                {msg.rsvp.attendance === '참석' ? `✨ ${msg.rsvp.count}` : msg.rsvp.attendance}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-[10px] text-stone-400 font-medium mr-1">{msg.date}</span>
                                        <button
                                            onClick={() => handleEdit(msg)}
                                            className="p-1 text-stone-300 hover:text-stone-600 transition-colors"
                                            title="수정"
                                        >
                                            <Pencil size={13} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(msg)}
                                            className="p-1 text-stone-300 hover:text-rose-400 transition-colors"
                                            title="삭제"
                                        >
                                            <Trash2 size={13} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-sm text-stone-700 leading-relaxed font-medium whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
