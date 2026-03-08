import React, { useState, useEffect } from 'react';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';
import Send from 'lucide-react/dist/esm/icons/send';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Pencil from 'lucide-react/dist/esm/icons/pencil';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Unlock from 'lucide-react/dist/esm/icons/unlock';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { supabase } from '../supabaseClient';

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxOb4nA57HQsWz9dkcKzrvSRkIwvMwJa_ajVAavSiNZI9gzUucDNr6_cgtHpswYKplu/exec";

export default function Guestbook({ showToast }) {
    const [ref, isVisible] = useScrollReveal();
    const [messages, setMessages] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newContent, setNewContent] = useState('');
    const [isSecret, setIsSecret] = useState(false);
    const [loading, setLoading] = useState(false);
    const [attendance, setAttendance] = useState('참석');
    const [attendanceCount, setAttendanceCount] = useState('1명');

    // 특정 비밀글의 잠금이 해제되었는지 추적하는 상태
    const [unlockedMessages, setUnlockedMessages] = useState({});

    // 1. 실시간 데이터 바인딩
    useEffect(() => {
        // 맨 처음 데이터 가져오기
        fetchMessages();

        // Supabase 실시간 구독 설정 (postgres_changes)
        const channel = supabase
            .channel('public:guestbook')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'guestbook' },
                () => {
                    // 변경사항이 감지되면 다시 데이터를 가져옴
                    fetchMessages();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const fetchMessages = async () => {
        try {
            const { data, error } = await supabase
                .from('guestbook')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Supabase fetch error:", error);
                throw error;
            }

            if (data) {
                const formattedData = data.map(doc => ({
                    ...doc,
                    date: new Date(doc.created_at).toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '') || ''
                }));
                // Supabase에서 성공적으로 가져오면 기존 localstorage의 레거시 구조는 덮어씁니다 (혹은 필요한 경우 병합)
                // 지금은 로컬 백업과 섞지 않고 Supabase 데이터를 기준으로 함.
                // 만약 Supabase 테이블이 완전히 비어있고 첫 세팅이라면 로컬에 저장된 mock 데이터를 띄워줍니다.
                if (formattedData.length === 0) {
                    loadLocalMockData();
                } else {
                    setMessages(formattedData);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(formattedData));
                }
            }
        } catch (e) {
            // 인터넷 끊김이나 아직 세팅 전이라면 로컬스토리지 백업 모드 실행
            loadLocalMockData();
        }
    };

    const loadLocalMockData = () => {
        const saved = localStorage.getItem('wedding_guestbook');
        let currentMessages = saved ? JSON.parse(saved) : [];

        // 필수 예시 데이터 정의 (3월 13일 고정)
        const mockMessages = [
            { id: 'mock-1', name: '김철수', content: '두 분의 결혼을 진심으로 축하드립니다! 행복하게 잘 사세요! 💐', date: '2026.03.13', password: '0313', is_secret: false },
            { id: 'mock-2', name: '이영희', content: '희영아 결혼 너무 축하해! 세상에서 가장 아름다운 신부가 될 거야. 💕', date: '2026.03.13', password: '0313', is_secret: false }
        ];

        const filtered = currentMessages.filter(m => String(m.id).startsWith('local-')); // 기존 임시 저장본
        const finalMessages = [...mockMessages, ...filtered];

        setMessages(finalMessages);
    };

    // 비밀글 해제 로직
    const handleUnlock = (msg) => {
        if (!msg.is_secret) return;

        // 이미 풀려있다면 다시 잠금
        if (unlockedMessages[msg.id]) {
            setUnlockedMessages(prev => ({ ...prev, [msg.id]: false }));
            return;
        }

        const password = prompt('비밀글을 확인하려면 비밀번호를 입력해주세요.');
        if (password === null) return; // 취소

        if (password === msg.password || password === '0313') {
            setUnlockedMessages(prev => ({ ...prev, [msg.id]: true }));
        } else {
            showToast('비밀번호가 일치하지 않습니다.');
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
            if (msg.id && typeof msg.id === 'string' && msg.id.startsWith('mock-')) {
                const updated = messages.filter(m => m.id !== msg.id);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else if (msg.id && typeof msg.id === 'string' && msg.id.startsWith('local-')) {
                const updated = messages.filter(m => m.id !== msg.id);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                // Supabase 삭제
                const { error } = await supabase.from('guestbook').delete().eq('id', msg.id);
                if (error) throw error;
            }

            // 구글 시트 동기화 (삭제)
            if (GOOGLE_SHEET_URL) {
                fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: msg.name, type: 'DELETE' })
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
            if (msg.id && typeof msg.id === 'string' && (msg.id.startsWith('mock-') || msg.id.startsWith('local-'))) {
                const updated = messages.map(m => m.id === msg.id ? { ...m, content: newText } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                // Supabase 업데이트
                const { error } = await supabase.from('guestbook').update({ content: newText }).eq('id', msg.id);
                if (error) throw error;
            }

            // 구글 시트 동기화 (수정)
            if (GOOGLE_SHEET_URL) {
                fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: msg.name, content: newText, type: 'UPDATE' })
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

        const existingMsg = messages.find(m => m.name === newName.trim());

        try {
            if (existingMsg) {
                const isCorrectPassword = (existingMsg.password && newPassword.trim() === existingMsg.password) || newPassword.trim() === '0313';
                const canUpdate = !existingMsg.password || isCorrectPassword;

                if (!canUpdate) {
                    showToast('이미 작성된 이름입니다. 비밀번호를 확인해주세요.');
                    setLoading(false);
                    return;
                }

                if (existingMsg.id && typeof existingMsg.id === 'string' && (existingMsg.id.startsWith('mock-') || existingMsg.id.startsWith('local-'))) {
                    const updated = messages.map(m =>
                        m.id === existingMsg.id ? {
                            ...m,
                            content: newContent.trim(),
                            password: newPassword.trim(),
                            attendance,
                            count: attendanceCount,
                            is_secret: isSecret,
                            date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '')
                        } : m
                    );
                    setMessages(updated);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
                } else {
                    const { error } = await supabase.from('guestbook').update({
                        content: newContent.trim(),
                        password: newPassword.trim(),
                        attendance,
                        count: attendanceCount,
                        is_secret: isSecret,
                        created_at: new Date().toISOString()
                    }).eq('id', existingMsg.id);

                    if (error) throw error;
                }
                showToast('기존 메시지 및 참석 정보가 업데이트되었습니다! ✨');
            } else {
                const messageData = {
                    name: newName.trim(),
                    content: newContent.trim(),
                    password: newPassword.trim(),
                    attendance,
                    count: attendanceCount,
                    is_secret: isSecret,
                    created_at: new Date().toISOString()
                };

                const { error } = await supabase.from('guestbook').insert([messageData]);

                if (error) {
                    // Supabase 설정이 아직 안된 상태라 에러가 날 경우 로컬로 대체 진행
                    console.error("Supabase insert error, falling back to local:", error);
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

            if (GOOGLE_SHEET_URL) {
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
            setIsSecret(false);
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

                    {/* 비밀글 설정 토글 */}
                    <div className="flex items-center space-x-2 pl-1 mb-2">
                        <input
                            type="checkbox"
                            role="switch"
                            id="secret-toggle"
                            checked={isSecret}
                            onChange={(e) => setIsSecret(e.target.checked)}
                            className="w-4 h-4 text-rose-400 bg-stone-100 border-stone-300 rounded focus:ring-rose-400 focus:ring-2"
                        />
                        <label htmlFor="secret-toggle" className="text-xs font-bold text-stone-500 cursor-pointer flex items-center space-x-1">
                            <span>신랑신부만 비밀글로 남기기</span>
                            {isSecret ? <Lock size={12} className="text-rose-400 ml-1" /> : <Unlock size={12} className="text-stone-300 ml-1" />}
                        </label>
                    </div>

                    <div className="space-y-4 mt-2">
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
                        messages.map((msg, idx) => {
                            const isLocked = msg.is_secret && !unlockedMessages[msg.id];

                            return (
                                <div key={msg.id || idx} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col relative group transition-all duration-300">
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-bold text-sm text-stone-800 bg-stone-50 px-2.5 py-1 rounded-md">{msg.name}</span>
                                            {msg.rsvp && msg.rsvp.attendance && (
                                                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${msg.rsvp.attendance === '참석' ? 'bg-rose-50 text-rose-500' : 'bg-stone-50 text-stone-400'}`}>
                                                    {msg.rsvp.attendance === '참석' ? `✨ ${msg.rsvp.count}` : msg.rsvp.attendance}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            {msg.is_secret && (
                                                <button
                                                    onClick={() => handleUnlock(msg)}
                                                    className={`p-1 transition-colors mr-1 ${isLocked ? 'text-rose-400 hover:text-rose-500' : 'text-stone-300 hover:text-stone-500'}`}
                                                    title={isLocked ? "비밀글 열람하기" : "비밀글 잠그기"}
                                                >
                                                    {isLocked ? <Lock size={14} /> : <Unlock size={14} />}
                                                </button>
                                            )}
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

                                    {/* 내용 렌더링 영역 */}
                                    {isLocked ? (
                                        <div
                                            className="text-sm text-stone-400 italic flex items-center justify-center bg-stone-50 p-4 rounded-xl cursor-pointer hover:bg-stone-100 transition-colors"
                                            onClick={() => handleUnlock(msg)}
                                        >
                                            <Lock size={14} className="mr-2 opacity-50" /> 작성자와 신랑신부만 확인 가능합니다
                                        </div>
                                    ) : (
                                        <p className="text-sm text-stone-700 leading-relaxed font-medium whitespace-pre-wrap">{msg.content}</p>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
}
