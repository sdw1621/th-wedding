import React, { useState, useEffect, useMemo, useCallback, memo, useRef } from 'react';
import Send from 'lucide-react/dist/esm/icons/send';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Pencil from 'lucide-react/dist/esm/icons/pencil';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Unlock from 'lucide-react/dist/esm/icons/unlock';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { supabase } from '../supabaseClient';

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbxOb4nA57HQsWz9dkcKzrvSRkIwvMwJa_ajVAavSiNZI9gzUucDNr6_cgtHpswYKplu/exec";
const GROOM_PW = "0806";
const BRIDE_PW = "0407";

// --- Memoized Components for Performance ---
const MessageItem = memo(({ msg, unlockedMessages, openPasswordModal, toggleUnlock }) => {
    const isLocked = msg.is_secret && !unlockedMessages[msg.id];
    let cardColorClass = msg.receiver === 'groom' ? "bg-blue-50/60 border-blue-100" : msg.receiver === 'bride' ? "bg-rose-50/60 border-rose-100" : "bg-white border-stone-100";

    return (
        <div className={`${cardColorClass} p-5 rounded-2xl shadow-sm border flex flex-col relative group transition-all duration-300`}>
            <div className="mb-3">
                <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[11px] text-stone-400 font-medium">{msg.date}</span>
                    <div className="flex items-center space-x-1 -mr-2">
                        {msg.is_secret && (
                            <button onClick={() => isLocked ? openPasswordModal(msg, 'unlock') : toggleUnlock(msg.id, false)} className="p-3 -m-1 text-stone-300 active:text-stone-600 select-none" style={{ touchAction: 'manipulation' }}>
                                {isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                            </button>
                        )}
                        <button onClick={() => openPasswordModal(msg, 'reply')} className="p-3 -m-1 text-stone-300 active:text-stone-600 select-none" style={{ touchAction: 'manipulation' }} title="답글 남기기"><MessageSquare size={16} /></button>
                        <button onClick={() => openPasswordModal(msg, 'edit')} className="p-3 -m-1 text-stone-300 active:text-stone-600 select-none" style={{ touchAction: 'manipulation' }}><Pencil size={16} /></button>
                        <button onClick={() => openPasswordModal(msg, 'delete')} className="p-3 -m-1 text-stone-300 active:text-rose-400 select-none" style={{ touchAction: 'manipulation' }}><Trash2 size={16} /></button>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <span className={`font-bold text-sm bg-white/80 px-2.5 py-1 rounded-md ${msg.receiver === 'groom' ? 'text-blue-700' : msg.receiver === 'bride' ? 'text-rose-700' : 'text-stone-800'}`}>{msg.name}</span>
                    {msg.receiver !== 'public' && <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${msg.receiver === 'groom' ? 'bg-blue-200/50 text-blue-600' : 'bg-rose-200/50 text-rose-600'}`}>To. {msg.receiver === 'groom' ? '신랑' : '신부'}</span>}
                </div>
            </div>
            {isLocked ? (
                <div className={`text-sm italic flex items-center justify-center p-4 rounded-xl cursor-pointer active:opacity-70 transition-opacity ${msg.receiver === 'groom' ? 'text-blue-400 bg-blue-100/30' : msg.receiver === 'bride' ? 'text-rose-400 bg-rose-100/30' : 'text-stone-400 bg-stone-50'}`} onClick={() => openPasswordModal(msg, 'unlock')}>
                    <Lock size={14} className="mr-2 opacity-50" /> {msg.receiver === 'groom' ? '신랑' : msg.receiver === 'bride' ? '신부' : '작성자'}만 확인 가능
                </div>
            ) : (
                <div className="space-y-3">
                    <p className={`text-sm leading-relaxed font-medium whitespace-pre-wrap ${msg.receiver === 'groom' ? 'text-blue-900' : msg.receiver === 'bride' ? 'text-rose-900' : 'text-stone-700'}`}>{msg.content}</p>
                    {msg.reply && (
                        <div className={`rounded-xl p-3 border-l-2 animate-in slide-in-from-left-2 duration-300 ${msg.receiver === 'groom' ? 'bg-blue-50 border-blue-300' : msg.receiver === 'bride' ? 'bg-rose-50 border-rose-300' : 'bg-amber-50 border-amber-200'}`}>
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <span className="text-[22px] leading-none">
                                    {msg.receiver === 'groom' ? '🤵' : msg.receiver === 'bride' ? '👰' : '🤵👰'}
                                </span>
                                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded ${msg.receiver === 'groom' ? 'bg-blue-100 text-blue-700' : msg.receiver === 'bride' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {msg.receiver === 'groom' ? '강태구' : msg.receiver === 'bride' ? '신희영' : '강태구 & 신희영'}
                                </span>
                            </div>
                            <p className={`text-[13px] font-medium leading-relaxed ${msg.receiver === 'groom' ? 'text-blue-800' : msg.receiver === 'bride' ? 'text-rose-800' : 'text-stone-700'}`}>{msg.reply}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
});

const ModernModal = memo(({ isOpen, onClose, title, description, children, onConfirm, confirmLabel = "확인", cancelLabel = "취소", isDestructive = false }) => {
    if (!isOpen) return null;
    const handleClose = () => {
        if (document.activeElement && document.activeElement !== document.body) {
            document.activeElement.blur();
        }
        onClose();
    };
    return (
        <div className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[15vh] overflow-y-auto">
            <div className="absolute inset-0 bg-stone-900/80 animate-in fade-in duration-300" onClick={handleClose}></div>
            <div className="relative bg-white w-full max-w-[320px] rounded-[24px] shadow-2xl border border-white/20 overflow-hidden animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 text-center">
                    <h3 className="text-[17px] font-bold text-stone-900 mb-1">{title}</h3>
                    {description && <p className="text-[13px] text-stone-500 font-medium leading-tight">{description}</p>}
                    <div className="mt-4">{children}</div>
                </div>
                <div className="flex flex-col border-t border-stone-100">
                    <button onPointerDown={onConfirm} style={{ touchAction: 'manipulation' }} className={`py-4 text-[15px] font-bold border-b border-stone-100 active:bg-stone-50 select-none ${isDestructive ? 'text-rose-500' : 'text-blue-500'}`}>{confirmLabel}</button>
                    <button onPointerDown={handleClose} style={{ touchAction: 'manipulation' }} className="py-4 text-[15px] font-medium text-stone-400 active:bg-stone-50 select-none">{cancelLabel}</button>
                </div>
            </div>
        </div>
    );
});

export default function Guestbook({ showToast }) {
    const [ref, isVisible] = useScrollReveal();
    const [messages, setMessages] = useState([]);
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newContent, setNewContent] = useState('');
    const [receiver, setReceiver] = useState('public');
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isReplyInputModalOpen, setIsReplyInputModalOpen] = useState(false);

    const [modalPassword, setModalPassword] = useState('');
    const [modalEditText, setModalEditText] = useState('');
    const [modalReplyText, setModalReplyText] = useState('');
    const passwordInputRef = useRef(null);
    const [selectedMsg, setSelectedMsg] = useState(null);
    const [modalPurpose, setModalPurpose] = useState('');
    const [unlockedMessages, setUnlockedMessages] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const MESSAGES_PER_PAGE = 3;
    const isAnyModalOpen = isPasswordModalOpen || isDeleteModalOpen || isEditModalOpen || isReplyInputModalOpen;

    useEffect(() => {
        if (isAnyModalOpen) {
            document.body.classList.add('nav-hidden');
        } else {
            document.body.classList.remove('nav-hidden');
        }
    }, [isAnyModalOpen]);

    useEffect(() => {
        if (isReplyInputModalOpen) {
            setModalReplyText(t => t.replace(/^[\s\n\r]+/, ''));
        }
    }, [isReplyInputModalOpen]);

    const fetchMessages = useCallback(async (isAuto = false) => {
        try {
            const { data, error } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            if (data) {
                const formattedData = data.map(doc => {
                    let parsedContent = doc.content;
                    let parsedReceiver = 'public';
                    let parsedReply = '';
                    try {
                        if (doc.content && doc.content.startsWith('{"text":')) {
                            const parsed = JSON.parse(doc.content);
                            parsedContent = parsed.text;
                            parsedReceiver = parsed.receiver || 'public';
                            parsedReply = parsed.reply || '';
                        }
                    } catch (e) { }
                    return {
                        ...doc,
                        content: parsedContent,
                        receiver: doc.receiver || parsedReceiver,
                        reply: doc.reply || parsedReply,
                        date: new Date(doc.created_at).toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '') || ''
                    };
                });
                setMessages(formattedData);
                localStorage.setItem('wedding_guestbook', JSON.stringify(formattedData));
            }
        } catch (e) {
            console.error("Fetch error", e);
            if (!isAuto) loadLocalMockData();
        } finally {
            setInitialLoading(false);
        }
    }, []);

    const loadLocalMockData = () => {
        const saved = localStorage.getItem('wedding_guestbook');
        let currentMessages = saved ? JSON.parse(saved) : [];
        const mockMessages = [
            { id: 'mock-1', name: '김철수', content: '두 분의 결혼을 진심으로 축하드립니다! 행복하게 잘 사세요! 💐', date: '2026.03.13', password: '0313', is_secret: false, receiver: 'public', reply: '감사합니다! 축하해주셔서 정말 기뻐요.' },
            { id: 'mock-2', name: '이영희', content: '희영아 결혼 너무 축하해! 세상에서 가장 아름다운 신부가 될 거야. 💕', date: '2026.03.13', password: '0313', is_secret: false, receiver: 'public' }
        ];
        const filtered = currentMessages.filter(m => String(m.id).startsWith('local-'));
        setMessages([...mockMessages, ...filtered]);
    };

    useEffect(() => {
        fetchMessages();
        const channel = supabase.channel('public:guestbook_changes').on('postgres_changes', { event: '*', schema: 'public', table: 'guestbook' }, () => fetchMessages(true)).subscribe();
        return () => supabase.removeChannel(channel);
    }, [fetchMessages]);

    const openPasswordModal = useCallback((msg, purpose) => {
        setSelectedMsg(msg);
        setModalPurpose(purpose);
        setModalPassword('');
        setIsPasswordModalOpen(true);
    }, []);

    const toggleUnlock = useCallback((id, status) => {
        setUnlockedMessages(prev => ({ ...prev, [id]: status }));
    }, []);

    const refocusPasswordInput = () => {
        setModalPassword('');
        setTimeout(() => passwordInputRef.current?.focus(), 50);
    };

    const handleModalConfirm = async () => {
        if (modalPurpose === 'unlock') {
            const isGroomMsg = selectedMsg.receiver === 'groom';
            const isBrideMsg = selectedMsg.receiver === 'bride';
            const validPw = isGroomMsg ? (modalPassword === GROOM_PW || modalPassword === '0313') :
                            isBrideMsg ? (modalPassword === BRIDE_PW || modalPassword === '0313') :
                            (modalPassword === selectedMsg.password || modalPassword === '0313');
            if (validPw) {
                toggleUnlock(selectedMsg.id, true);
                setIsPasswordModalOpen(false);
            } else { showToast((isGroomMsg || isBrideMsg) ? '생일이 일치하지 않습니다.' : '전화번호 뒷 4자리가 일치하지 않습니다.'); refocusPasswordInput(); }
        } else if (modalPurpose === 'delete') {
            if (modalPassword === selectedMsg.password || modalPassword === '0313') {
                setIsPasswordModalOpen(false);
                setIsDeleteModalOpen(true);
            } else { showToast('전화번호 뒷 4자리가 틀렸습니다.'); refocusPasswordInput(); }
        } else if (modalPurpose === 'edit') {
            if (modalPassword === selectedMsg.password || modalPassword === '0313') {
                setModalEditText(selectedMsg.content);
                setIsPasswordModalOpen(false);
                setIsEditModalOpen(true);
            } else { showToast('전화번호 뒷 4자리가 틀렸습니다.'); refocusPasswordInput(); }
        } else if (modalPurpose === 'reply') {
            const isGroomReply = selectedMsg?.receiver === 'groom';
            const isBrideReply = selectedMsg?.receiver === 'bride';
            const validReplyPw = isGroomReply ? (modalPassword === GROOM_PW || modalPassword === '0313') :
                                 isBrideReply ? (modalPassword === BRIDE_PW || modalPassword === '0313') :
                                 modalPassword === '0313';
            if (validReplyPw) {
                setModalReplyText((selectedMsg.reply || '').trim());
                setIsPasswordModalOpen(false);
                setIsReplyInputModalOpen(true);
            } else {
                const errMsg = isGroomReply ? '신랑 생일이 일치하지 않습니다.' :
                               isBrideReply ? '신부 생일이 일치하지 않습니다.' :
                               '전용 비밀번호가 아닙니다.';
                showToast(errMsg); refocusPasswordInput();
            }
        }
    };

    const confirmDelete = async () => {
        try {
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.filter(m => m.id !== selectedMsg.id);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').delete().eq('id', selectedMsg.id);
            }
            showToast('메시지가 삭제되었습니다.');
            setIsDeleteModalOpen(false);
        } catch (err) {
            showToast('삭제 중 오류가 발생했습니다.');
        }
    };

    const confirmEdit = async () => {
        if (!modalEditText.trim()) return showToast('내용을 입력해주세요.');
        try {
            const dbContent = JSON.stringify({ text: modalEditText, receiver: selectedMsg.receiver || 'public', reply: selectedMsg.reply || '' });
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.map(m => m.id === selectedMsg.id ? { ...m, content: modalEditText } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').update({ content: dbContent }).eq('id', selectedMsg.id);
            }
            showToast('메시지가 수정되었습니다.');
            setIsEditModalOpen(false);
        } catch (err) {
            showToast('수정 중 오류가 발생했습니다.');
        }
    };

    const confirmReply = async () => {
        try {
            const dbContent = JSON.stringify({ text: selectedMsg.content, receiver: selectedMsg.receiver || 'public', reply: modalReplyText.trim() });
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.map(m => m.id === selectedMsg.id ? { ...m, reply: modalReplyText } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').update({ content: dbContent, reply: modalReplyText.trim() }).eq('id', selectedMsg.id);
            }
            showToast('답글을 남겼습니다! ❤️');
            setIsReplyInputModalOpen(false);
        } catch (err) {
            showToast('오류가 발생했습니다.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // 모바일: 키보드 닫기 + 뷰포트 복원 (터치 대상 위치 어긋남 방지)
        if (document.activeElement && document.activeElement !== document.body) {
            document.activeElement.blur();
        }
        const trimmedName = newName.trim();
        const trimmedPassword = newPassword.trim();
        const trimmedContent = newContent.trim();

        if (!trimmedName || !trimmedContent || !trimmedPassword) return showToast('필수 정보를 입력해주세요.');
        setLoading(true);
        // 이름 + 전화번호 조합이 같으면 동일인(업데이트), 다르면 동명이인(새 글)
        const existingMsg = messages.find(m =>
            m.name === trimmedName &&
            (m.password === trimmedPassword || trimmedPassword === '0313')
        );

        try {
            const dateStr = new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '');
            const dbContent = JSON.stringify({ text: trimmedContent, receiver: receiver, reply: existingMsg ? existingMsg.reply : '' });
            const messageDataDB = { name: trimmedName, content: dbContent, password: trimmedPassword, is_secret: receiver !== 'public', receiver: receiver };
            const messageDataLocal = { name: trimmedName, content: trimmedContent, password: trimmedPassword, is_secret: receiver !== 'public', receiver: receiver };

            if (existingMsg) {
                const { error: upError } = await supabase.from('guestbook').update(messageDataDB).eq('id', existingMsg.id);
                if (upError || (typeof existingMsg.id === 'string' && (existingMsg.id.startsWith('mock-') || existingMsg.id.startsWith('local-')))) {
                    const updated = messages.map(m => m.id === existingMsg.id ? { ...m, ...messageDataLocal, date: dateStr } : m);
                    setMessages(updated);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
                }
                showToast('메시지가 업데이트되었습니다! ✨');
            } else {
                if ((trimmedName === '신랑' || trimmedName === '신부') && trimmedPassword !== '0313') {
                    setLoading(false);
                    return showToast('신랑/신부 전용 비밀번호를 입력해주세요.');
                }
                const { error: inError } = await supabase.from('guestbook').insert([messageDataDB]);
                if (inError) {
                    console.warn("Supabase insert failed, falling back to LocalStorage", inError);
                    const localMsg = { ...messageDataLocal, id: `local-${Date.now()}`, date: dateStr };
                    const newMessages = [localMsg, ...messages];
                    setMessages(newMessages);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(newMessages));
                }
                showToast('소중한 메시지 감사합니다! 💌');
            }
            setNewName(''); setNewPassword(''); setNewContent(''); setReceiver('public');
        } catch (err) {
            console.error("Submission error:", err);
            showToast('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        } finally {
            setLoading(false);
        }
    };

    const totalPages = Math.max(1, Math.ceil(messages.length / MESSAGES_PER_PAGE));

    // 새 메시지 추가 시 1페이지로 리셋
    const prevMsgCount = React.useRef(messages.length);
    useEffect(() => {
        if (messages.length > prevMsgCount.current) {
            setCurrentPage(1);
        }
        prevMsgCount.current = messages.length;
    }, [messages.length]);

    // 페이지 범위 벗어나면 보정
    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(totalPages);
    }, [currentPage, totalPages]);

    const paginatedMessages = useMemo(() => {
        const start = (currentPage - 1) * MESSAGES_PER_PAGE;
        return messages.slice(start, start + MESSAGES_PER_PAGE);
    }, [messages, currentPage]);

    const messageListOutput = useMemo(() => {
        if (initialLoading) return (
            <div className="text-center py-10 space-y-2">
                <div className="w-6 h-6 border-2 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto"></div>
                <p className="text-stone-400 text-xs text-center">방명록을 불러오는 중입니다...</p>
            </div>
        );
        if (messages.length === 0) return <p className="text-center py-10 text-stone-400 text-sm italic font-medium">첫 번째 축하 메시지를 남겨주세요.</p>;
        return (
            <div className="space-y-4">
                {paginatedMessages.map((msg, idx) => (
                    <MessageItem key={msg.id || idx} msg={msg} unlockedMessages={unlockedMessages} openPasswordModal={openPasswordModal} toggleUnlock={toggleUnlock} />
                ))}

                {/* 페이지네이션 */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center space-x-3 pt-4 pb-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            style={{ touchAction: 'manipulation' }}
                            className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-500 disabled:opacity-30 disabled:cursor-not-allowed active:bg-stone-50 select-none shadow-sm"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="flex items-center space-x-1.5">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => setCurrentPage(page)}
                                    style={{ touchAction: 'manipulation' }}
                                    className={`w-8 h-8 rounded-lg text-xs font-bold select-none transition-all duration-200 ${page === currentPage
                                            ? 'bg-rose-500 text-white shadow-sm'
                                            : 'bg-white border border-stone-200 text-stone-400 active:bg-stone-50'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            style={{ touchAction: 'manipulation' }}
                            className="p-2.5 rounded-xl bg-white border border-stone-200 text-stone-500 disabled:opacity-30 disabled:cursor-not-allowed active:bg-stone-50 select-none shadow-sm"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}

                <p className="text-center text-[11px] text-stone-400 font-medium">
                    총 {messages.length}개의 메시지
                </p>
            </div>
        );
    }, [messages, paginatedMessages, unlockedMessages, initialLoading, openPasswordModal, toggleUnlock, currentPage, totalPages]);

    return (
        <section className="py-24 bg-[#FDFBF7]" id="guestbook" ref={ref}>
            <div className={`max-w-md mx-auto px-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

                {/* 1. 디자인 반영: 방명록 아이콘, 빨간색 보더 라인 추가 */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <div className="mb-2">
                        <MessageSquare className="mx-auto text-rose-200" size={28} strokeWidth={1.5} />
                    </div>
                    <h2 className="text-2xl font-serif tracking-[0.2em] text-stone-900 font-bold mb-3 relative">
                        방명록
                        <div className="absolute -bottom-3 left-0 w-full h-[2px] bg-red-600"></div>
                    </h2>

                    {/* 2. 요청된 방명록 하단 문구 + 메일 애니메이션 이모지 추가 */}
                    <p className="text-[14px] text-stone-600 font-medium leading-relaxed break-keep mt-7">
                        가족식으로 진행되어 하객 초청은 하지 않습니다.<br />
                        축하 방명록만 남겨주시면 됩니다.
                        <span className="inline-block text-base ml-1.5" style={{ verticalAlign: 'middle' }}>💌</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-5 rounded-[1.25rem] shadow-sm border border-stone-100 mb-8 space-y-4 relative z-20">
                    <div className="flex space-x-2">
                        <input type="text" placeholder="성함" value={newName} onChange={(e) => setNewName(e.target.value)} className="w-24 shrink-0 bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 text-[16px] font-medium text-stone-800 focus:ring-2 focus:ring-rose-200 outline-none placeholder:text-stone-400 relative z-20" maxLength={10} />
                        <input type="password" placeholder="전화번호 뒷 4자리" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="flex-1 min-w-0 bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 text-[16px] font-medium text-stone-800 focus:ring-2 focus:ring-rose-200 outline-none placeholder:text-stone-400 relative z-20" maxLength={10} />
                    </div>
                    <textarea placeholder="축하의 한마디를 남겨주세요." value={newContent} onChange={(e) => setNewContent(e.target.value)} className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 text-[16px] font-medium text-stone-800 h-28 resize-none focus:ring-2 focus:ring-rose-200 outline-none placeholder:text-stone-400 relative z-20" maxLength={100} />

                    <div className="flex space-x-2 relative z-10">
                        <button type="button" onClick={() => setReceiver('public')} style={{ touchAction: 'manipulation' }} className={`flex-1 py-3 rounded-xl border text-[13px] font-bold active:bg-stone-100 select-none ${receiver === 'public' ? 'bg-stone-100 border-stone-200 text-stone-700 shadow-sm' : 'bg-stone-50/50 text-stone-400 border-transparent hover:bg-stone-50'}`}>모두에게</button>
                        <button type="button" onClick={() => setReceiver('groom')} style={{ touchAction: 'manipulation' }} className={`flex-1 py-3 rounded-xl border text-[13px] font-bold active:bg-blue-100 select-none ${receiver === 'groom' ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' : 'bg-stone-50/50 text-stone-400 border-transparent hover:bg-stone-50'}`}>신랑에게</button>
                        <button type="button" onClick={() => setReceiver('bride')} style={{ touchAction: 'manipulation' }} className={`flex-1 py-3 rounded-xl border text-[13px] font-bold active:bg-rose-100 select-none ${receiver === 'bride' ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm' : 'bg-stone-50/50 text-stone-400 border-transparent hover:bg-stone-50'}`}>신부에게</button>
                    </div>

                    <button type="submit" disabled={loading} style={{ touchAction: 'manipulation' }} className="w-full bg-[#2A2626] active:bg-[#1f1d1d] text-white font-bold py-4 rounded-xl text-[15px] disabled:bg-stone-400 flex items-center justify-center relative z-10 mt-2 select-none">
                        <Send size={18} className="mr-2.5 opacity-90" /> {loading ? '전송 중...' : '메시지 남기기'}
                    </button>
                </form>

                {messageListOutput}
            </div>

            <ModernModal isOpen={isPasswordModalOpen} onClose={() => setIsPasswordModalOpen(false)}
                title={
                    modalPurpose === 'reply' && selectedMsg?.receiver === 'groom' ? '신랑 확인' :
                    modalPurpose === 'reply' && selectedMsg?.receiver === 'bride' ? '신부 확인' :
                    modalPurpose === 'reply' ? '관리자 확인' :
                    modalPurpose === 'unlock' && (selectedMsg?.receiver === 'groom' || selectedMsg?.receiver === 'bride') ? '생일 확인' :
                    '전화번호 확인'
                }
                description={
                    modalPurpose === 'reply' && selectedMsg?.receiver === 'groom' ? '신랑의 생일을 입력해주세요. (예: 0108)' :
                    modalPurpose === 'reply' && selectedMsg?.receiver === 'bride' ? '신부의 생일을 입력해주세요. (예: 0315)' :
                    modalPurpose === 'reply' ? '신랑/신부 전용 비밀번호를 입력해주세요.' :
                    modalPurpose === 'unlock' && selectedMsg?.receiver === 'groom' ? '신랑의 생일을 입력해주세요. (예: 0108)' :
                    modalPurpose === 'unlock' && selectedMsg?.receiver === 'bride' ? '신부의 생일을 입력해주세요. (예: 0315)' :
                    '전화번호 뒷 4자리를 입력해주세요.'
                }
                onConfirm={handleModalConfirm}>
                <input ref={passwordInputRef} type="password" inputMode="numeric" value={modalPassword} onChange={(e) => setModalPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleModalConfirm()} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-center text-lg tracking-[0.5em] focus:ring-2 focus:ring-stone-100 outline-none"
                    placeholder="••••"
                    maxLength={4}
                    autoFocus />
            </ModernModal>
            <ModernModal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)} title="메시지 삭제" description="삭제하면 되돌릴 수 없습니다. 정말 삭제할까요?" onConfirm={confirmDelete} confirmLabel="삭제" isDestructive={true} />
            <ModernModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title="메시지 수정" onConfirm={confirmEdit} confirmLabel="수정완료">
                <textarea value={modalEditText} onChange={(e) => setModalEditText(e.target.value)} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-[16px] text-stone-800 h-24 resize-none focus:ring-2 focus:ring-stone-100 outline-none" autoFocus />
            </ModernModal>
            <ModernModal isOpen={isReplyInputModalOpen} onClose={() => setIsReplyInputModalOpen(false)} title="답글 남기기" description="게스트에게 전할 소중한 메시지를 입력하세요." onConfirm={confirmReply} confirmLabel="답글저장">
                <textarea value={modalReplyText} onChange={(e) => setModalReplyText(e.target.value)} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-[16px] text-stone-800 h-24 resize-none focus:ring-2 focus:ring-stone-100 outline-none" placeholder="감사의 인사를 남겨주세요." autoFocus />
            </ModernModal>
        </section>
    );
}
