import React, { useState, useEffect, useMemo, useCallback, memo, useRef } from 'react';
import { createPortal } from 'react-dom';
import Send from 'lucide-react/dist/esm/icons/send';
import Trash2 from 'lucide-react/dist/esm/icons/trash-2';
import Pencil from 'lucide-react/dist/esm/icons/pencil';
import Lock from 'lucide-react/dist/esm/icons/lock';
import LockOpen from 'lucide-react/dist/esm/icons/lock-open';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import ChevronsLeft from 'lucide-react/dist/esm/icons/chevrons-left';
import ChevronsRight from 'lucide-react/dist/esm/icons/chevrons-right';
import Eye from 'lucide-react/dist/esm/icons/eye';
import EyeOff from 'lucide-react/dist/esm/icons/eye-off';
import X from 'lucide-react/dist/esm/icons/x';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useBackButton } from '../hooks/useBackButton';
import { supabase } from '../supabaseClient';

const GROOM_PW = '0806';
const BRIDE_PW = '0407';
const FAMILY_NAMES_FILTER = ['강영태', '김경자', '강다윤', '신현갑', '송현숙', '신동욱', '신민석', '모카'];
const CHOSUNG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const WEDDING_EMOJIS = ['💒', '💍', '💐', '🌸', '🥂', '🎊', '🎉', '🌹', '💕', '💝', '🎀', '🕊️', '🌷', '✨', '🌺'];

const getChosung = (str) => {
    if (!str) return '기타';
    const code = str.charCodeAt(0);
    if (code < 44032 || code > 55203) return '기타';
    return CHOSUNG[Math.floor((code - 44032) / (21 * 28))];
};

const glassStyle = {
    touchAction: 'manipulation',
    background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,248,255,0.96) 100%)',
    boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,1), 0 2px 8px rgba(0,0,0,0.06)',
    borderColor: 'rgba(215,215,240,0.8)',
};

// --- PinInput: 4자리 PIN 비주얼 입력 ---
const PinInput = memo(({ value, onChange, show, onToggleShow, onEnter, inputRef }) => {
    const slots = [0, 1, 2, 3];
    const focusInput = () => inputRef.current?.focus({ preventScroll: true });
    useEffect(() => {
        const t = setTimeout(focusInput, 80);
        return () => clearTimeout(t);
    }, []);
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="flex items-center justify-center gap-3 cursor-pointer" onClick={focusInput}>
                {slots.map((i) => {
                    const filled = i < value.length;
                    const next = i === value.length;
                    return (
                        <div
                            key={i}
                            className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center transition-all duration-200 select-none ${filled
                                ? 'bg-stone-800 border-2 border-stone-800 shadow-md'
                                : next
                                    ? 'bg-rose-50 border-2 border-rose-400 shadow-sm ring-2 ring-rose-200'
                                    : 'bg-stone-100 border-2 border-stone-200'
                                }`}
                        >
                            {filled
                                ? (show
                                    ? <span className="text-white text-2xl font-bold">{value[i]}</span>
                                    : <span className="w-4 h-4 rounded-full bg-white block" />)
                                : <span className={`text-[32px] font-thin leading-none ${next ? 'text-rose-400' : 'text-stone-300'}`}>○</span>}
                        </div>
                    );
                })}
            </div>
            <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                value={value}
                onChange={(e) => onChange(e.target.value.replace(/\D/g, '').slice(0, 4))}
                onKeyDown={(e) => e.key === 'Enter' && onEnter?.()}
                autoComplete="off"
                style={{ position: 'absolute', opacity: 0, width: 1, height: 1, left: '50%', top: '50%', fontSize: 16 }}
            />
            <button
                type="button"
                onPointerDown={(e) => { e.preventDefault(); onToggleShow(); }}
                style={{ touchAction: 'manipulation' }}
                className="flex items-center gap-1.5 text-stone-400 text-[13px] active:text-stone-600"
            >
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
                {show ? '숨기기' : '표시하기'}
            </button>
        </div>
    );
});

// --- ModernModal: 키보드 올라옴 대응 모달 ---
const ModernModal = memo(({ isOpen, onClose, title, description, sender, children, onConfirm, confirmLabel = '확인', cancelLabel = '취소', onCancel, isDestructive = false }) => {
    const [vpStyle, setVpStyle] = useState({
        position: 'fixed', left: 0, right: 0, top: 56, zIndex: 600,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 16px', pointerEvents: 'none',
    });

    useBackButton(isOpen, onClose);

    useEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = 'hidden';
        const HEADER = 56, BOTTOM_NAV = 80;
        const update = () => {
            const vv = window.visualViewport;
            const vvHeight = vv ? vv.height : window.innerHeight;
            const keyboardVisible = window.innerHeight - vvHeight > 100;
            const top = (vv ? vv.offsetTop : 0) + HEADER;
            const height = vvHeight - HEADER - (keyboardVisible ? 8 : BOTTOM_NAV);
            setVpStyle({
                position: 'fixed', left: 0, right: 0, top, height, zIndex: 600,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '0 16px', pointerEvents: 'none',
            });
        };
        update();
        window.visualViewport?.addEventListener('resize', update);
        window.visualViewport?.addEventListener('scroll', update);
        return () => {
            document.body.style.overflow = '';
            window.visualViewport?.removeEventListener('resize', update);
            window.visualViewport?.removeEventListener('scroll', update);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleClose = () => {
        if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
        onClose();
    };

    return createPortal(
        <>
            <div className="fixed inset-0 z-[599] bg-stone-900/80 animate-in fade-in duration-300" onClick={handleClose} />
            <div style={vpStyle}>
                <div
                    className="relative bg-white w-full max-w-[320px] rounded-[24px] shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-200 pointer-events-auto flex flex-col font-sans"
                    style={{ maxHeight: '100%', overflowY: 'auto', fontFamily: "'Noto Sans KR', sans-serif" }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-6 text-center">
                        <h3 className="text-[17px] font-bold text-stone-900 mb-1">{title}</h3>
                        {sender && (
                            <span className="inline-block bg-stone-100 text-stone-700 font-bold text-[12px] px-2.5 py-1 rounded-full mb-1.5">{sender}</span>
                        )}
                        {description && (
                            <p className="text-[13px] text-stone-500 font-medium leading-tight">{description}</p>
                        )}
                        <div className="mt-4">{children}</div>
                    </div>
                    <div className="flex flex-col border-t border-stone-100">
                        <button
                            onClick={onConfirm}
                            style={{ touchAction: 'manipulation' }}
                            className={`py-4 text-[15px] font-bold border-b border-stone-100 active:bg-stone-50 select-none ${isDestructive ? 'text-rose-600' : 'text-rose-500'}`}
                        >{confirmLabel}</button>
                        <button
                            onClick={onCancel ?? handleClose}
                            style={{ touchAction: 'manipulation' }}
                            className="py-4 text-[15px] font-medium text-blue-400 active:bg-stone-50 select-none"
                        >{cancelLabel}</button>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );
});

// --- MessageItem: 메시지 카드 + 댓글 모달 + 전체 내용 모달 ---
const MessageItem = memo(({ msg, unlockedMessages, openPasswordModal, toggleUnlock, comments, openCommentModal, onManageComment }) => {
    const isLocked = msg.is_secret && !unlockedMessages[msg.id];
    const isDev = msg.is_dev === true;
    const sirenOn = isDev && msg.siren;
    const isFamily = !isDev && FAMILY_NAMES_FILTER.includes(msg.name);
    const isBrideAuthor = !isDev && !isFamily && msg.name === '신희영';

    const [showFullModal, setShowFullModal] = useState(false);
    const [showAllComments, setShowAllComments] = useState(false);
    const [devCollapsed, setDevCollapsed] = useState(sirenOn);

    useBackButton(showFullModal, () => setShowFullModal(false));
    useBackButton(showAllComments, () => setShowAllComments(false));

    const MAX_CHARS = 60;
    const contentLong = !isLocked && msg.content && (msg.content.length > MAX_CHARS || msg.content.split('\n').length > 3);
    const replyLong = msg.reply && (msg.reply.length > MAX_CHARS || msg.reply.split('\n').length > 3);
    const hasLongContent = contentLong || replyLong;

    const cardStyle = isDev ? {
        background: 'linear-gradient(145deg, rgba(14,12,24,0.94) 0%, rgba(26,20,40,0.97) 100%)',
        backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
        boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,0.13), inset 1px 0 0 rgba(255,255,255,0.07), 0 4px 18px rgba(0,0,0,0.55)',
        borderColor: 'rgba(105,88,140,0.55)',
    } : isFamily ? {
        background: 'linear-gradient(135deg, rgba(255,200,210,0.35) 0%, rgba(255,225,190,0.35) 20%, rgba(255,250,200,0.35) 40%, rgba(200,245,215,0.35) 60%, rgba(200,220,255,0.35) 80%, rgba(220,200,255,0.35) 100%)',
        borderColor: 'rgba(200,190,230,0.5)',
    } : isBrideAuthor ? {
        background: 'linear-gradient(145deg, rgba(255,245,250,1) 0%, rgba(255,228,240,0.95) 100%)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,1), inset 1px 0 0 rgba(255,255,255,0.7), 0 2px 10px rgba(0,0,0,0.06)',
        borderColor: 'rgba(255,175,210,0.7)',
    } : {
        background: msg.receiver === 'groom'
            ? 'linear-gradient(145deg, rgba(245,250,255,1) 0%, rgba(228,242,255,0.95) 100%)'
            : msg.receiver === 'bride'
                ? 'linear-gradient(145deg, rgba(255,245,250,1) 0%, rgba(255,228,240,0.95) 100%)'
                : 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,248,255,0.96) 100%)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,1), inset 1px 0 0 rgba(255,255,255,0.7), 0 2px 10px rgba(0,0,0,0.06)',
        borderColor: msg.receiver === 'groom' ? 'rgba(180,215,255,0.7)' : msg.receiver === 'bride' ? 'rgba(255,175,210,0.7)' : 'rgba(215,215,240,0.8)',
    };

    const emojiSeed = msg.id ? msg.id.toString().split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) : 0;
    const randomEmoji = WEDDING_EMOJIS[emojiSeed % WEDDING_EMOJIS.length];
    const guestEmoji = msg.name === '모카' ? '🐾' : randomEmoji;

    const modalBg = isDev ? {
        background: 'linear-gradient(145deg, rgba(14,12,24,0.99) 0%, rgba(26,20,40,1) 100%)',
        borderColor: 'rgba(105,88,140,0.6)',
    } : isFamily ? {
        background: 'linear-gradient(135deg, rgb(255,200,210) 0%, rgb(255,225,190) 20%, rgb(255,250,200) 40%, rgb(200,245,215) 60%, rgb(200,220,255) 80%, rgb(220,200,255) 100%)',
        borderColor: 'rgba(200,190,230,0.8)',
    } : {
        background: msg.receiver === 'groom'
            ? 'linear-gradient(145deg, rgba(240,248,255,1) 0%, rgba(218,238,255,1) 100%)'
            : msg.receiver === 'bride'
                ? 'linear-gradient(145deg, rgba(255,242,248,1) 0%, rgba(255,218,238,1) 100%)'
                : 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,248,255,1) 100%)',
        borderColor: msg.receiver === 'groom' ? 'rgba(180,215,255,0.8)' : msg.receiver === 'bride' ? 'rgba(255,175,210,0.8)' : 'rgba(215,215,240,0.9)',
    };

    return (
        <>
            <div
                className={`border ${sirenOn && devCollapsed ? 'px-5 py-3' : 'p-5'} rounded-2xl flex flex-col relative group transition-all duration-300 ${sirenOn ? 'ring-2 ring-red-500' : ''} ${hasLongContent && !devCollapsed ? 'cursor-pointer active:brightness-[0.97]' : ''}`}
                style={cardStyle}
                onClick={hasLongContent && !devCollapsed ? () => setShowFullModal(true) : undefined}
            >
                {sirenOn && (
                    <div className={`flex items-center gap-2 ${devCollapsed ? '' : 'mb-2 -mt-1'}`}>
                        <div className="flex-1 flex items-center gap-1.5 bg-yellow-400/20 border border-yellow-400/40 rounded-md px-2.5 py-2">
                            <span className="text-lg leading-none">🚨</span>
                            <span className="text-white text-[11px] font-bold">긴급 알림</span>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); setDevCollapsed((v) => !v); }}
                            className="text-yellow-400/90 shrink-0 text-[14px] leading-none active:opacity-50 select-none px-1"
                            style={{ touchAction: 'manipulation' }}
                        >{devCollapsed ? '▲' : '▼'}</button>
                    </div>
                )}

                {!devCollapsed && (
                    <>
                        <div className="mb-3">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-[11px] font-medium text-stone-400">{msg.date}</span>
                                <div className="flex items-center space-x-1 -mr-2">
                                    {isDev && (
                                        <button onClick={(e) => { e.stopPropagation(); openPasswordModal(msg, 'siren'); }}
                                            className={`p-3 -m-1 select-none text-lg leading-none ${sirenOn ? 'opacity-100' : 'opacity-30 active:opacity-70'}`}
                                            style={{ touchAction: 'manipulation' }}>🚨</button>
                                    )}
                                    {msg.is_secret && (
                                        <button onClick={(e) => { e.stopPropagation(); isLocked ? openPasswordModal(msg, 'unlock') : toggleUnlock(msg.id, false); }}
                                            className={`p-3 -m-1 select-none ${isDev ? 'text-stone-400 active:text-stone-200' : 'text-stone-300 active:text-stone-600'}`}
                                            style={{ touchAction: 'manipulation' }}>
                                            {isLocked ? <Lock size={16} /> : <LockOpen size={16} />}
                                        </button>
                                    )}
                                    <button onClick={(e) => { e.stopPropagation(); openCommentModal(msg, 'guest'); }}
                                        className={`px-2 py-1 text-[11px] font-bold rounded-lg border select-none ${isDev ? 'text-stone-400 border-stone-600 active:bg-stone-700' : 'text-stone-400 border-stone-200 active:bg-stone-100'}`}
                                        style={{ touchAction: 'manipulation' }}>댓글</button>
                                    <button onClick={(e) => { e.stopPropagation(); openPasswordModal(msg, 'edit'); }}
                                        className={`px-2 py-1 text-[11px] font-bold rounded-lg border select-none ${isDev ? 'text-stone-400 border-stone-600 active:bg-stone-700' : 'text-stone-400 border-stone-200 active:bg-stone-100'}`}
                                        style={{ touchAction: 'manipulation' }}>수정</button>
                                    <button onClick={(e) => { e.stopPropagation(); openPasswordModal(msg, 'delete'); }}
                                        className={`px-2 py-1 text-[11px] font-bold rounded-lg border select-none ${isDev ? 'text-stone-400 border-stone-600 active:bg-stone-700' : 'text-rose-400 border-rose-200 active:bg-rose-50'}`}
                                        style={{ touchAction: 'manipulation' }}>삭제</button>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className={`font-bold text-sm px-2.5 py-1 rounded-md ${isDev ? 'bg-white/10 text-stone-100' : 'bg-white/80 ' + (msg.receiver === 'groom' ? 'text-blue-700' : msg.receiver === 'bride' ? 'text-rose-700' : 'text-stone-800')}`}>
                                    {msg.name}
                                    <span className="ml-1">{isDev ? '👨‍💻' : guestEmoji}</span>
                                </span>
                                {msg.receiver !== 'public' && (
                                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${msg.receiver === 'groom' ? 'bg-blue-200/50 text-blue-600' : 'bg-rose-200/50 text-rose-600'}`}>
                                        To. {msg.receiver === 'groom' ? '신랑' : '신부'}
                                    </span>
                                )}
                            </div>
                        </div>

                        {isLocked ? (
                            <div className={`text-sm italic flex items-center justify-center p-4 rounded-xl cursor-pointer active:opacity-70 transition-opacity ${msg.receiver === 'groom' ? 'text-blue-400 bg-blue-100/30' : msg.receiver === 'bride' ? 'text-rose-400 bg-rose-100/30' : 'text-stone-400 bg-stone-50'}`}
                                onClick={(e) => { e.stopPropagation(); openPasswordModal(msg, 'unlock'); }}>
                                <Lock size={14} className="mr-2 opacity-50" />
                                {msg.receiver === 'groom' ? '신랑' : msg.receiver === 'bride' ? '신부' : '작성자'}만 확인 가능
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {contentLong ? (
                                    <div>
                                        <p className={`text-sm leading-relaxed font-medium line-clamp-2 ${isDev ? 'text-stone-200' : msg.receiver === 'groom' ? 'text-blue-900' : msg.receiver === 'bride' ? 'text-rose-900' : 'text-stone-700'}`}>{msg.content}</p>
                                        <p className={`text-[11px] font-bold ${isDev ? 'text-stone-500' : msg.receiver === 'groom' ? 'text-blue-400' : msg.receiver === 'bride' ? 'text-rose-400' : 'text-stone-400'}`}>› 더보기</p>
                                    </div>
                                ) : (
                                    <p className={`text-sm leading-relaxed font-medium whitespace-pre-wrap ${isDev ? 'text-stone-200' : msg.receiver === 'groom' ? 'text-blue-900' : msg.receiver === 'bride' ? 'text-rose-900' : 'text-stone-700'}`}>{msg.content}</p>
                                )}
                            </div>
                        )}

                        {/* 댓글 더보기 버튼 */}
                        {(() => {
                            const totalCount = (comments || []).length + (msg.reply ? 1 : 0);
                            return (
                                <div className={`mt-2 ${totalCount > 0 ? `border-t border-dashed pt-2 ${isDev ? 'border-stone-700' : 'border-stone-100'}` : ''}`}>
                                    <div className="flex gap-1 flex-wrap">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setShowAllComments(true); }}
                                            className="px-2 py-1 text-[10px] font-bold rounded-lg border select-none text-stone-500 border-stone-200 active:bg-stone-50"
                                            style={{ touchAction: 'manipulation' }}
                                        >💬 댓글 더보기{totalCount > 0 ? ` (${totalCount})` : ''}</button>
                                    </div>
                                </div>
                            );
                        })()}
                    </>
                )}
            </div>

            {/* 댓글 전체보기 모달 */}
            {showAllComments && createPortal(
                <>
                    <div className="fixed inset-0 z-[699] bg-stone-900/80 animate-in fade-in duration-200" onClick={() => setShowAllComments(false)} />
                    <div className="fixed inset-0 z-[700] flex items-center justify-center p-6 pointer-events-none">
                        <div className="relative bg-white w-full max-w-[320px] rounded-2xl shadow-2xl pointer-events-auto animate-in zoom-in-95 duration-200 overflow-hidden font-sans">
                            <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-stone-100">
                                <span className="text-[15px] font-bold text-stone-800">💬 댓글 {(comments || []).length + (msg.reply ? 1 : 0)}개</span>
                                <button onClick={() => setShowAllComments(false)} className="w-7 h-7 rounded-full bg-stone-100 text-stone-500 text-[13px] font-bold flex items-center justify-center active:opacity-60 select-none" style={{ touchAction: 'manipulation' }}>✕</button>
                            </div>
                            <div className="px-4 pt-3 pb-2 space-y-2">
                                {(() => {
                                    const origStyle = isDev ? {} : isFamily ? {
                                        background: 'linear-gradient(135deg, rgba(255,200,210,0.4) 0%, rgba(255,225,190,0.4) 20%, rgba(255,250,200,0.4) 40%, rgba(200,245,215,0.4) 60%, rgba(200,220,255,0.4) 80%, rgba(220,200,255,0.4) 100%)',
                                        borderColor: 'rgba(200,190,230,0.5)',
                                    } : isBrideAuthor ? {
                                        background: 'linear-gradient(145deg, rgba(255,245,250,1) 0%, rgba(255,228,240,0.95) 100%)',
                                        borderColor: 'rgba(255,175,210,0.7)',
                                    } : msg.receiver === 'groom' ? {
                                        background: 'linear-gradient(145deg, rgba(245,250,255,1) 0%, rgba(228,242,255,0.95) 100%)',
                                        borderColor: 'rgba(180,215,255,0.7)',
                                    } : msg.receiver === 'bride' ? {
                                        background: 'linear-gradient(145deg, rgba(255,245,250,1) 0%, rgba(255,228,240,0.95) 100%)',
                                        borderColor: 'rgba(255,175,210,0.7)',
                                    } : {};
                                    const origCls = isDev ? 'bg-stone-900 border-stone-700'
                                        : (isFamily || isBrideAuthor || msg.receiver === 'groom' || msg.receiver === 'bride') ? ''
                                            : 'bg-stone-50 border-stone-100';
                                    return (
                                        <div className={`flex gap-2 rounded-xl px-3 py-2.5 border ${origCls}`} style={origStyle}>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[14px] font-bold ${isDev ? 'bg-stone-700 text-stone-300' : isFamily ? 'bg-white/70 text-stone-700' : 'bg-stone-200 text-stone-600'}`}>
                                                {isDev ? '👨‍💻' : (msg.name?.[0] || '?')}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1.5 mb-1">
                                                    <span className={`text-[11px] font-bold ${isDev ? 'text-stone-200' : 'text-stone-700'}`}>{msg.name}</span>
                                                    <span className={`text-[9px] ${isDev ? 'text-stone-500' : 'text-stone-400'}`}>{msg.date}</span>
                                                </div>
                                                <p className={`text-[12px] leading-relaxed whitespace-pre-wrap ${isDev ? 'text-stone-300' : 'text-stone-600'}`}>
                                                    {isLocked ? '🔒 비밀 메시지' : msg.content}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {msg.reply && (
                                    <div className={`ml-4 rounded-xl px-3 py-2.5 border-l-2 ${msg.receiver === 'groom' ? 'bg-blue-50 border-blue-300' : msg.receiver === 'bride' ? 'bg-rose-50 border-rose-300' : 'bg-amber-50 border-amber-200'}`}>
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[18px] leading-none">{msg.receiver === 'groom' ? '🤵' : msg.receiver === 'bride' ? '👰' : '🤵👰'}</span>
                                                <span className={`text-[11px] font-bold ${msg.receiver === 'groom' ? 'text-blue-700' : msg.receiver === 'bride' ? 'text-rose-700' : 'text-amber-700'}`}>
                                                    {msg.receiver === 'groom' ? '강태구' : msg.receiver === 'bride' ? '신희영' : '강태구 & 신희영'}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(() => openPasswordModal(msg, 'reply'), 150); }}
                                                    className="px-1.5 py-0.5 text-[10px] font-bold rounded border border-stone-200 select-none text-stone-400 active:bg-stone-100"
                                                    style={{ touchAction: 'manipulation' }}
                                                >수정</button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(() => openPasswordModal(msg, 'deleteReply'), 150); }}
                                                    className="px-1.5 py-0.5 text-[10px] font-bold rounded border border-rose-200 select-none text-rose-400 active:bg-rose-50"
                                                    style={{ touchAction: 'manipulation' }}
                                                >삭제</button>
                                            </div>
                                        </div>
                                        <p className={`text-[12px] leading-relaxed whitespace-pre-wrap ${msg.receiver === 'groom' ? 'text-blue-800' : msg.receiver === 'bride' ? 'text-rose-800' : 'text-stone-700'}`}>{msg.reply}</p>
                                    </div>
                                )}
                            </div>

                            <div className="px-4 pb-3 max-h-[40vh] overflow-y-auto space-y-1 border-t border-stone-100">
                                {(comments || []).length === 0 && !msg.reply && (
                                    <p className="text-center text-stone-400 text-[13px] py-4">아직 댓글이 없어요.</p>
                                )}
                                {(() => {
                                    const getNameColor = (name) => {
                                        const palette = [
                                            { avatar: 'bg-red-200', bubble: 'bg-red-50', name: 'text-red-700', content: 'text-red-600' },
                                            { avatar: 'bg-orange-200', bubble: 'bg-orange-50', name: 'text-orange-700', content: 'text-orange-600' },
                                            { avatar: 'bg-amber-200', bubble: 'bg-amber-50', name: 'text-amber-700', content: 'text-amber-600' },
                                            { avatar: 'bg-green-200', bubble: 'bg-green-50', name: 'text-green-700', content: 'text-green-600' },
                                            { avatar: 'bg-teal-200', bubble: 'bg-teal-50', name: 'text-teal-700', content: 'text-teal-600' },
                                            { avatar: 'bg-violet-200', bubble: 'bg-violet-50', name: 'text-violet-700', content: 'text-violet-600' },
                                            { avatar: 'bg-pink-200', bubble: 'bg-pink-50', name: 'text-pink-700', content: 'text-pink-600' },
                                        ];
                                        let hash = 0;
                                        for (let i = 0; i < (name?.length || 0); i++) hash = (hash * 37 + name.charCodeAt(i)) % palette.length;
                                        return palette[hash];
                                    };
                                    const allC = comments || [];
                                    const officials = allC.filter((c) => c.commenter_type === 'groom' || c.commenter_type === 'bride');
                                    const guests = allC.filter((c) => c.commenter_type === 'guest');

                                    const ModalCommentBubble = ({ c, parentType, onEdit, onDelete, indent = false }) => {
                                        const isDevC = c.is_dev === true || c.name === '개발자';
                                        const isBrideC = !isDevC && c.name === '신희영';
                                        const isFamilyMember = !isDevC && !isBrideC && FAMILY_NAMES_FILTER.includes(c.name);
                                        const isJikgye = !isDevC && !isBrideC && !isFamilyMember && !!parentType;
                                        let avatarBg, cellBg, nameCls, contentCls, cellStyle = {};
                                        if (isDevC) {
                                            avatarBg = 'bg-stone-600'; cellBg = 'bg-stone-800'; nameCls = 'text-stone-200'; contentCls = 'text-stone-300';
                                        } else if (isBrideC) {
                                            avatarBg = 'bg-rose-200'; cellBg = 'bg-rose-50'; nameCls = 'text-rose-700'; contentCls = 'text-rose-600';
                                        } else if (isFamilyMember) {
                                            avatarBg = 'bg-white/70 text-stone-700'; cellBg = ''; nameCls = 'text-stone-700'; contentCls = 'text-stone-600';
                                            cellStyle = { background: 'linear-gradient(135deg, rgba(255,200,210,0.4) 0%, rgba(255,225,190,0.4) 20%, rgba(255,250,200,0.4) 40%, rgba(200,245,215,0.4) 60%, rgba(200,220,255,0.4) 80%, rgba(220,200,255,0.4) 100%)' };
                                        } else if (isJikgye) {
                                            const col = getNameColor(c.name);
                                            avatarBg = col.avatar; cellBg = col.bubble; nameCls = col.name; contentCls = col.content;
                                        } else {
                                            avatarBg = 'bg-stone-200'; cellBg = 'bg-stone-50'; nameCls = 'text-stone-700'; contentCls = 'text-stone-600';
                                        }
                                        const avatarSize = indent ? 'w-6 h-6 text-[10px]' : 'w-7 h-7 text-[13px]';
                                        return (
                                            <div className={`flex gap-2 ${indent ? 'ml-9' : ''} mt-1.5 rounded-2xl px-3 py-2 ${cellBg}`} style={cellStyle}>
                                                <div className={`${avatarSize} rounded-full ${avatarBg} flex items-center justify-center shrink-0 mt-0.5`}>
                                                    {isDevC ? '👨‍💻' : (c.name?.[0] || '?')}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div>
                                                        <span className={`text-[11px] font-bold mr-1.5 ${nameCls}`}>{c.name}</span>
                                                        <span className={`text-[12px] leading-snug break-all ${contentCls}`}>{c.content}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2.5 mt-1">
                                                        <span className={`text-[9px] ${isDevC ? 'text-stone-500' : 'text-stone-400'}`}>{c.date}</span>
                                                        <button onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(onEdit, 150); }}
                                                            className="text-[10px] font-bold text-stone-400 select-none active:opacity-60" style={{ touchAction: 'manipulation' }}>수정</button>
                                                        <button onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(onDelete, 150); }}
                                                            className="text-[10px] font-bold text-rose-400 select-none active:opacity-60" style={{ touchAction: 'manipulation' }}>삭제</button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    };

                                    const generalGuests = guests.filter((g) => !g.parent_id);
                                    return (
                                        <>
                                            {officials.map((c) => {
                                                const replies = guests.filter((g) => g.parent_id === c.id);
                                                const isGroom = c.commenter_type === 'groom';
                                                return (
                                                    <div key={c.id} className="mb-2 ml-4">
                                                        <div className={`flex gap-2 rounded-2xl px-3 py-2 ${isGroom ? 'bg-blue-50' : 'bg-rose-50'}`}>
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-[18px] mt-0.5 ${isGroom ? 'bg-blue-100' : 'bg-rose-100'}`}>
                                                                {isGroom ? '🤵' : '👰'}
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div>
                                                                    <span className={`text-[11px] font-bold mr-1.5 ${isGroom ? 'text-blue-700' : 'text-rose-700'}`}>{c.name}</span>
                                                                    <span className={`text-[12px] font-medium leading-snug ${isGroom ? 'text-blue-800' : 'text-rose-800'}`}>{c.content}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2.5 mt-1">
                                                                    <span className="text-[9px] text-stone-400">{c.date}</span>
                                                                    <button onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(() => openCommentModal(msg, 'guest', c.id), 150); }}
                                                                        className="text-[10px] font-bold text-stone-400 select-none active:opacity-60" style={{ touchAction: 'manipulation' }}>댓글</button>
                                                                    <button onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(() => onManageComment(c, 'edit'), 150); }}
                                                                        className={`text-[10px] font-bold select-none active:opacity-60 ${isGroom ? 'text-blue-400' : 'text-rose-400'}`} style={{ touchAction: 'manipulation' }}>수정</button>
                                                                    <button onClick={(e) => { e.stopPropagation(); setShowAllComments(false); setTimeout(() => onManageComment(c, 'delete'), 150); }}
                                                                        className="text-[10px] font-bold text-rose-400 select-none active:opacity-60" style={{ touchAction: 'manipulation' }}>삭제</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {replies.map((r) => (
                                                            <ModalCommentBubble key={r.id} c={r} parentType={c.commenter_type} indent onEdit={() => onManageComment(r, 'edit')} onDelete={() => onManageComment(r, 'delete')} />
                                                        ))}
                                                    </div>
                                                );
                                            })}
                                            {generalGuests.map((c) => (
                                                <div key={c.id} className="ml-4">
                                                    <ModalCommentBubble c={c} parentType={null} onEdit={() => onManageComment(c, 'edit')} onDelete={() => onManageComment(c, 'delete')} />
                                                </div>
                                            ))}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}

            {/* 전체 내용 보기 모달 */}
            {showFullModal && createPortal(
                <>
                    <div className="fixed inset-0 z-[699] bg-stone-900/80 animate-in fade-in duration-200" onClick={() => setShowFullModal(false)} />
                    <div className="fixed inset-0 z-[700] flex items-center justify-center p-6 pointer-events-none">
                        <div className="relative w-full max-w-[320px] rounded-2xl pointer-events-auto animate-in zoom-in-95 duration-200 overflow-hidden border shadow-2xl font-sans"
                            style={modalBg} onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between px-4 pt-4 pb-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className={`font-bold text-sm px-2.5 py-1 rounded-md ${isDev ? 'bg-white/10 text-stone-100' : 'bg-white/80 ' + (msg.receiver === 'groom' ? 'text-blue-700' : msg.receiver === 'bride' ? 'text-rose-700' : 'text-stone-800')}`}>
                                        {msg.name} {guestEmoji}
                                    </span>
                                    {msg.receiver !== 'public' && (
                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${msg.receiver === 'groom' ? 'bg-blue-200/50 text-blue-600' : 'bg-rose-200/50 text-rose-600'}`}>
                                            To. {msg.receiver === 'groom' ? '신랑' : '신부'}
                                        </span>
                                    )}
                                    <span className={`text-[10px] ${isDev ? 'text-stone-500' : 'text-stone-400'}`}>{msg.date}</span>
                                </div>
                                <button onClick={() => setShowFullModal(false)}
                                    className={`ml-2 w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-[13px] font-bold active:opacity-60 select-none ${isDev ? 'bg-white/10 text-stone-300' : 'bg-stone-100 text-stone-500'}`}
                                    style={{ touchAction: 'manipulation' }}>✕</button>
                            </div>
                            <div className="px-4 pb-5 max-h-[55vh] overflow-y-auto">
                                <p className={`text-sm leading-relaxed font-medium whitespace-pre-wrap ${isDev ? 'text-stone-200' : msg.receiver === 'groom' ? 'text-blue-900' : msg.receiver === 'bride' ? 'text-rose-900' : 'text-stone-700'}`}>{msg.content}</p>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </>
    );
});

// ================================================================
// 메인 Guestbook 컴포넌트
// ================================================================
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
    const [isDeleteReplyModalOpen, setIsDeleteReplyModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isReplyInputModalOpen, setIsReplyInputModalOpen] = useState(false);
    const [modalPassword, setModalPassword] = useState('');
    const [modalEditText, setModalEditText] = useState('');
    const [modalReplyText, setModalReplyText] = useState('');
    const [showModalPw, setShowModalPw] = useState(false);
    const [showNewPw, setShowNewPw] = useState(false);
    const passwordInputRef = useRef(null);
    const [selectedMsg, setSelectedMsg] = useState(null);
    const [modalPurpose, setModalPurpose] = useState('');
    const [unlockedMessages, setUnlockedMessages] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const MESSAGES_PER_PAGE = 3;

    const [messageFilter, setMessageFilter] = useState('all');
    const [myNames, setMyNames] = useState(() => {
        try { return JSON.parse(localStorage.getItem('guestbook_my_names') || '[]'); } catch { return []; }
    });
    const [isNameFilterModalOpen, setIsNameFilterModalOpen] = useState(false);
    const [filterNameInput, setFilterNameInput] = useState('');
    const [selectedFilterNames, setSelectedFilterNames] = useState(new Set());
    const [nameFilterConsonant, setNameFilterConsonant] = useState(null);
    const [familyFilterNames, setFamilyFilterNames] = useState([]);
    const [isFamilyFilterModalOpen, setIsFamilyFilterModalOpen] = useState(false);
    const [selectedFamilyFilterNames, setSelectedFamilyFilterNames] = useState(new Set());
    const [familyFilterConsonant, setFamilyFilterConsonant] = useState(null);
    const [isFamilyPinModalOpen, setIsFamilyPinModalOpen] = useState(false);
    const [familyPinValue, setFamilyPinValue] = useState('');
    const [showFamilyPin, setShowFamilyPin] = useState(false);
    const familyPinRef = useRef(null);

    // 댓글 관련
    const [allComments, setAllComments] = useState({});
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [commentTargetMsg, setCommentTargetMsg] = useState(null);
    const [commentInputType, setCommentInputType] = useState('guest');
    const [commentName, setCommentName] = useState('');
    const [commentPassword, setCommentPassword] = useState('');
    const [commentContent, setCommentContent] = useState('');
    const [isCommentPinModalOpen, setIsCommentPinModalOpen] = useState(false);
    const [commentPinValue, setCommentPinValue] = useState('');
    const [showCommentPin, setShowCommentPin] = useState(false);
    const commentPinRef = useRef(null);
    const [showCommentPw, setShowCommentPw] = useState(false);
    const [commentParentId, setCommentParentId] = useState(null);
    const [commentManageAction, setCommentManageAction] = useState('create');
    const [commentToManage, setCommentToManage] = useState(null);
    const [commentManageEditText, setCommentManageEditText] = useState('');
    const [isCommentManageEditModalOpen, setIsCommentManageEditModalOpen] = useState(false);

    const isAnyModalOpen = isPasswordModalOpen || isDeleteModalOpen || isDeleteReplyModalOpen || isEditModalOpen || isReplyInputModalOpen || isFamilyFilterModalOpen || isNameFilterModalOpen || isFamilyPinModalOpen || isCommentModalOpen || isCommentPinModalOpen || isCommentManageEditModalOpen;

    useEffect(() => {
        if (isAnyModalOpen) document.body.classList.add('nav-hidden');
        else document.body.classList.remove('nav-hidden');
    }, [isAnyModalOpen]);

    useEffect(() => {
        if (isReplyInputModalOpen) {
            setModalReplyText((t) => t.replace(/^[\s\n\r]+/, ''));
        }
    }, [isReplyInputModalOpen]);

    useEffect(() => { setCurrentPage(1); }, [messageFilter]);

    const fetchMessages = useCallback(async (isAuto = false) => {
        try {
            const { data, error } = await supabase.from('guestbook').select('*').order('created_at', { ascending: false });
            if (error) throw error;
            if (data) {
                const formatted = data.map((doc) => {
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
                    let parsedSiren = false;
                    if (parsedContent && parsedContent.startsWith('🚨||')) {
                        parsedSiren = true;
                        parsedContent = parsedContent.slice('🚨||'.length);
                    }
                    return {
                        ...doc,
                        content: parsedContent,
                        receiver: doc.receiver || parsedReceiver,
                        reply: doc.reply || parsedReply,
                        siren: parsedSiren,
                        is_dev: doc.is_dev === true || doc.name === '개발자',
                        date: new Date(doc.created_at).toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '') || '',
                    };
                });
                setMessages(formatted);
                localStorage.setItem('wedding_guestbook', JSON.stringify(formatted));
            }
        } catch (e) {
            console.error('Fetch error', e);
            if (!isAuto) loadLocalMockData();
        } finally {
            setInitialLoading(false);
        }
    }, []);

    const fetchComments = useCallback(async () => {
        try {
            const { data, error } = await supabase.from('guestbook_comments').select('*').order('created_at', { ascending: true });
            if (error) { console.log('guestbook_comments not ready:', error.message); return; }
            if (data) {
                const grouped = {};
                for (const c of data) {
                    if (!grouped[c.guestbook_id]) grouped[c.guestbook_id] = [];
                    grouped[c.guestbook_id].push({
                        ...c,
                        date: new Date(c.created_at).toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, ''),
                    });
                }
                setAllComments(grouped);
            }
        } catch (e) { console.log('Comments fetch error:', e); }
    }, []);

    const loadLocalMockData = () => {
        const saved = localStorage.getItem('wedding_guestbook');
        const current = saved ? JSON.parse(saved) : [];
        const mockMessages = [
            { id: 'mock-dev', name: '개발자', content: '시스템 테스트 메시지입니다. 👨‍💻 개발자 카드 스타일 확인용.', date: '2026.03.13', password: '0000', is_secret: false, receiver: 'public', is_dev: true },
            { id: 'mock-1', name: '김철수', content: '두 분의 결혼을 진심으로 축하드립니다! 행복하게 잘 사세요! 💐', date: '2026.03.13', password: '0313', is_secret: false, receiver: 'public', reply: '감사합니다! 축하해주셔서 정말 기뻐요.' },
            { id: 'mock-2', name: '이영희', content: '희영아 결혼 너무 축하해! 세상에서 가장 아름다운 신부가 될 거야. 💕', date: '2026.03.13', password: '0313', is_secret: false, receiver: 'public' },
        ];
        const filtered = current.filter((m) => String(m.id).startsWith('local-'));
        setMessages([...mockMessages, ...filtered]);
    };

    useEffect(() => {
        fetchMessages();
        fetchComments();
        const msgCh = supabase.channel('public:guestbook_changes').on('postgres_changes', { event: '*', schema: 'public', table: 'guestbook' }, () => fetchMessages(true)).subscribe();
        const cmtCh = supabase.channel('public:guestbook_comments_changes').on('postgres_changes', { event: '*', schema: 'public', table: 'guestbook_comments' }, () => fetchComments()).subscribe();
        return () => { supabase.removeChannel(msgCh); supabase.removeChannel(cmtCh); };
    }, [fetchMessages, fetchComments]);

    const openPasswordModal = useCallback((msg, purpose) => {
        setSelectedMsg(msg);
        setModalPurpose(purpose);
        setModalPassword('');
        setShowModalPw(false);
        setIsPasswordModalOpen(true);
        setTimeout(() => passwordInputRef.current?.focus({ preventScroll: true }), 80);
    }, []);

    const openCommentModal = useCallback((msg, type, parentId = null) => {
        setCommentTargetMsg(msg);
        setCommentInputType(type);
        setCommentParentId(parentId);
        setCommentContent('');
        setCommentName('');
        setCommentPassword('');
        setCommentPinValue('');
        setShowCommentPin(false);
        if (type === 'groom' || type === 'bride') setIsCommentPinModalOpen(true);
        else setIsCommentModalOpen(true);
    }, []);

    const openCommentManageModal = useCallback((comment, action) => {
        setCommentToManage(comment);
        setCommentManageAction(action);
        setCommentInputType(comment.commenter_type);
        setCommentPinValue('');
        setShowCommentPin(false);
        setIsCommentPinModalOpen(true);
    }, []);

    const handleCommentPinConfirm = () => {
        let validPw;
        if (commentInputType === 'groom') validPw = commentPinValue === GROOM_PW || commentPinValue === '0313';
        else if (commentInputType === 'bride') validPw = commentPinValue === BRIDE_PW || commentPinValue === '0313';
        else validPw = (commentToManage?.password && commentPinValue === commentToManage.password) || commentPinValue === '0313';

        if (validPw) {
            setIsCommentPinModalOpen(false);
            if (commentManageAction === 'delete') deleteComment();
            else if (commentManageAction === 'edit') {
                setCommentManageEditText(commentToManage.content);
                setIsCommentManageEditModalOpen(true);
            } else setIsCommentModalOpen(true);
        } else {
            const msg = commentInputType === 'groom' ? '신랑 생일이 일치하지 않습니다.' : commentInputType === 'bride' ? '신부 생일이 일치하지 않습니다.' : '비밀번호가 일치하지 않습니다.';
            showToast(msg);
            setCommentPinValue('');
            setTimeout(() => commentPinRef.current?.focus({ preventScroll: true }), 50);
        }
    };

    const deleteComment = async () => {
        try {
            const { error } = await supabase.from('guestbook_comments').delete().eq('id', commentToManage.id);
            if (error) throw error;
            showToast('댓글이 삭제됐습니다.');
            setCommentToManage(null);
        } catch (err) {
            showToast('삭제 오류: ' + (err?.message || ''));
        }
    };

    const submitCommentEdit = async () => {
        if (!commentManageEditText.trim()) { showToast('내용을 입력해주세요.'); return; }
        try {
            const { error } = await supabase.from('guestbook_comments').update({ content: commentManageEditText.trim() }).eq('id', commentToManage.id);
            if (error) throw error;
            showToast('댓글이 수정됐습니다.');
            setIsCommentManageEditModalOpen(false);
            setCommentToManage(null);
        } catch (err) {
            showToast('수정 오류: ' + (err?.message || ''));
        }
    };

    const submitComment = async () => {
        if (!commentContent.trim()) { showToast('댓글 내용을 입력해주세요.'); return; }
        if (commentInputType === 'guest' && !commentName.trim()) { showToast('이름을 입력해주세요.'); return; }
        if (!commentTargetMsg?.id || String(commentTargetMsg.id).startsWith('mock-')) { showToast('테스트 메시지에는 댓글을 달 수 없습니다.'); return; }

        const name = commentInputType === 'groom' ? '강태구' : commentInputType === 'bride' ? '신희영' : commentName.trim();
        try {
            const { error } = await supabase.from('guestbook_comments').insert({
                guestbook_id: commentTargetMsg.id,
                parent_id: commentParentId || null,
                name,
                content: commentContent.trim(),
                password: commentInputType === 'guest' ? (commentPassword.trim() || null) : null,
                commenter_type: commentInputType,
            });
            if (error) throw error;
            showToast('댓글이 등록됐습니다! 💬');
            setIsCommentModalOpen(false);
            setCommentContent('');
            setCommentName('');
            setCommentPassword('');
        } catch (err) {
            showToast('댓글 등록 오류: ' + (err?.message || '알 수 없는 오류'));
        }
    };

    const toggleUnlock = useCallback((id, status) => {
        setUnlockedMessages((prev) => ({ ...prev, [id]: status }));
    }, []);

    const refocusPasswordInput = () => {
        setModalPassword('');
        setTimeout(() => passwordInputRef.current?.focus({ preventScroll: true }), 50);
    };

    const handleModalConfirm = async () => {
        if (modalPurpose === 'unlock') {
            const isGroomMsg = selectedMsg.receiver === 'groom';
            const isBrideMsg = selectedMsg.receiver === 'bride';
            const validPw = isGroomMsg
                ? (modalPassword === GROOM_PW || modalPassword === '0313')
                : isBrideMsg
                    ? (modalPassword === BRIDE_PW || modalPassword === '0313')
                    : (modalPassword === selectedMsg.password || modalPassword === '0313');
            if (validPw) {
                toggleUnlock(selectedMsg.id, true);
                setIsPasswordModalOpen(false);
            } else {
                showToast(isGroomMsg || isBrideMsg ? '생일이 일치하지 않습니다.' : '전화번호 뒷 4자리가 일치하지 않습니다.');
                refocusPasswordInput();
            }
        } else if (modalPurpose === 'delete') {
            if (modalPassword === selectedMsg.password || modalPassword === '0313') {
                setIsPasswordModalOpen(false);
                setIsDeleteModalOpen(true);
            } else {
                showToast('전화번호 뒷 4자리가 틀렸습니다.');
                refocusPasswordInput();
            }
        } else if (modalPurpose === 'edit') {
            if (modalPassword === selectedMsg.password || modalPassword === '0313') {
                setModalEditText(selectedMsg.content);
                setIsPasswordModalOpen(false);
                setIsEditModalOpen(true);
            } else {
                showToast('전화번호 뒷 4자리가 틀렸습니다.');
                refocusPasswordInput();
            }
        } else if (modalPurpose === 'reply' || modalPurpose === 'deleteReply') {
            const isGroomReply = selectedMsg?.receiver === 'groom';
            const isBrideReply = selectedMsg?.receiver === 'bride';
            const validReplyPw = isGroomReply
                ? (modalPassword === GROOM_PW || modalPassword === '0313')
                : isBrideReply
                    ? (modalPassword === BRIDE_PW || modalPassword === '0313')
                    : modalPassword === '0313';
            if (validReplyPw) {
                setIsPasswordModalOpen(false);
                if (modalPurpose === 'deleteReply') setIsDeleteReplyModalOpen(true);
                else {
                    setModalReplyText((selectedMsg.reply || '').trim());
                    setIsReplyInputModalOpen(true);
                }
            } else {
                const errMsg = isGroomReply ? '신랑 생일이 일치하지 않습니다.' : isBrideReply ? '신부 생일이 일치하지 않습니다.' : '전용 비밀번호가 아닙니다.';
                showToast(errMsg);
                refocusPasswordInput();
            }
        } else if (modalPurpose === 'siren') {
            if (modalPassword !== '0000') { showToast('비밀번호가 아닙니다.'); refocusPasswordInput(); return; }
            const newSiren = !selectedMsg.siren;
            const prefix = newSiren ? '🚨||' : '';
            const newText = prefix + selectedMsg.content;
            const dbContent = JSON.stringify({ text: newText, receiver: selectedMsg.receiver || 'public', reply: selectedMsg.reply || '' });
            try {
                await supabase.from('guestbook').update({ content: dbContent }).eq('id', selectedMsg.id);
                showToast(newSiren ? '🚨 긴급 모드 ON' : '긴급 해제됨');
            } catch (err) {
                showToast('오류가 발생했습니다.');
            }
            setIsPasswordModalOpen(false);
        }
    };

    const confirmDelete = async () => {
        try {
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.filter((m) => m.id !== selectedMsg.id);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').delete().eq('id', selectedMsg.id);
            }
            showToast('메시지가 삭제되었습니다.');
            setIsDeleteModalOpen(false);
        } catch { showToast('삭제 중 오류가 발생했습니다.'); }
    };

    const confirmDeleteReply = async () => {
        try {
            const dbContent = JSON.stringify({ text: selectedMsg.content, receiver: selectedMsg.receiver || 'public', reply: '' });
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.map((m) => m.id === selectedMsg.id ? { ...m, reply: '' } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').update({ content: dbContent, reply: '' }).eq('id', selectedMsg.id);
            }
            showToast('답글이 삭제되었습니다.');
            setIsDeleteReplyModalOpen(false);
        } catch { showToast('삭제 중 오류가 발생했습니다.'); }
    };

    const confirmEdit = async () => {
        if (!modalEditText.trim()) return showToast('내용을 입력해주세요.');
        try {
            const dbContent = JSON.stringify({ text: modalEditText, receiver: selectedMsg.receiver || 'public', reply: selectedMsg.reply || '' });
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.map((m) => m.id === selectedMsg.id ? { ...m, content: modalEditText } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').update({ content: dbContent }).eq('id', selectedMsg.id);
            }
            showToast('메시지가 수정되었습니다.');
            setIsEditModalOpen(false);
        } catch { showToast('수정 중 오류가 발생했습니다.'); }
    };

    const confirmReply = async () => {
        try {
            const dbContent = JSON.stringify({ text: selectedMsg.content, receiver: selectedMsg.receiver || 'public', reply: modalReplyText.trim() });
            if (selectedMsg.id && typeof selectedMsg.id === 'string' && (selectedMsg.id.startsWith('mock-') || selectedMsg.id.startsWith('local-'))) {
                const updated = messages.map((m) => m.id === selectedMsg.id ? { ...m, reply: modalReplyText } : m);
                setMessages(updated);
                localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
            } else {
                await supabase.from('guestbook').update({ content: dbContent, reply: modalReplyText.trim() }).eq('id', selectedMsg.id);
            }
            showToast('답글을 남겼습니다! ❤️');
            setIsReplyInputModalOpen(false);
        } catch { showToast('오류가 발생했습니다.'); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
        const trimmedName = newName.trim();
        const trimmedPassword = newPassword.trim();
        const trimmedContent = newContent.trim();
        if (!trimmedName || !trimmedContent || !trimmedPassword) return showToast('필수 정보를 입력해주세요.');
        setLoading(true);

        const existingMsg = messages.find((m) => m.name === trimmedName && (m.password === trimmedPassword || trimmedPassword === '0313'));
        try {
            const dateStr = new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace(/\.$/, '');
            const dbContent = JSON.stringify({ text: trimmedContent, receiver, reply: existingMsg ? existingMsg.reply : '' });
            const isDevMsg = trimmedName === '개발자' && trimmedPassword === '0000';
            const msgDataDB = { name: trimmedName, content: dbContent, password: trimmedPassword, is_secret: receiver !== 'public', receiver, ...(isDevMsg ? { is_dev: true } : {}) };
            const msgDataLocal = { name: trimmedName, content: trimmedContent, password: trimmedPassword, is_secret: receiver !== 'public', receiver, ...(isDevMsg ? { is_dev: true } : {}) };

            if (existingMsg) {
                const { error: upError } = await supabase.from('guestbook').update(msgDataDB).eq('id', existingMsg.id);
                if (upError || (typeof existingMsg.id === 'string' && (existingMsg.id.startsWith('mock-') || existingMsg.id.startsWith('local-')))) {
                    const updated = messages.map((m) => m.id === existingMsg.id ? { ...m, ...msgDataLocal, date: dateStr } : m);
                    setMessages(updated);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(updated));
                }
                showToast('메시지가 업데이트되었습니다! ✨');
            } else {
                if ((trimmedName === '신랑' || trimmedName === '신부') && trimmedPassword !== '0313') {
                    setLoading(false);
                    return showToast('신랑/신부 전용 비밀번호를 입력해주세요.');
                }
                const { error: inError } = await supabase.from('guestbook').insert([msgDataDB]);
                if (inError) {
                    console.warn('Supabase insert failed, falling back to LocalStorage', inError);
                    const localMsg = { ...msgDataLocal, id: `local-${Date.now()}`, date: dateStr };
                    const newMessages = [localMsg, ...messages];
                    setMessages(newMessages);
                    localStorage.setItem('wedding_guestbook', JSON.stringify(newMessages));
                }
                showToast('소중한 메시지 감사합니다! 💌');
            }
            setMyNames((prev) => {
                const next = prev.includes(trimmedName) ? prev : [...prev, trimmedName];
                localStorage.setItem('guestbook_my_names', JSON.stringify(next));
                return next;
            });
            setNewName('');
            setNewPassword('');
            setNewContent('');
            setReceiver('public');
        } catch (err) {
            console.error('Submission error:', err);
            showToast('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        } finally {
            setLoading(false);
        }
    };

    const familyCount = useMemo(() => messages.filter((m) => FAMILY_NAMES_FILTER.includes(m.name)).length, [messages]);
    const devCount = useMemo(() => messages.filter((m) => m.is_dev === true).length, [messages]);

    const familyNamesWithMessages = useMemo(
        () => FAMILY_NAMES_FILTER.filter((name) => messages.some((m) => m.name === name)),
        [messages]
    );
    const familyNamesGroupedByChosung = useMemo(() => {
        const groups = {};
        for (const n of familyNamesWithMessages) {
            const cs = getChosung(n);
            (groups[cs] = groups[cs] || []).push(n);
        }
        return groups;
    }, [familyNamesWithMessages]);
    const availableFamilyChosungs = useMemo(() => {
        const res = CHOSUNG.filter((cs) => (familyNamesGroupedByChosung[cs]?.length || 0) > 0);
        if ((familyNamesGroupedByChosung['기타']?.length || 0) > 0) res.push('기타');
        return res;
    }, [familyNamesGroupedByChosung]);

    const allNamesWithMessages = useMemo(() => {
        const seen = new Set();
        const names = [];
        for (const m of messages) {
            if (m.name && !seen.has(m.name)) { seen.add(m.name); names.push(m.name); }
        }
        return names;
    }, [messages]);
    const namesGroupedByChosung = useMemo(() => {
        const groups = {};
        for (const n of allNamesWithMessages) {
            const cs = getChosung(n);
            (groups[cs] = groups[cs] || []).push(n);
        }
        return groups;
    }, [allNamesWithMessages]);
    const availableChosungs = useMemo(() => {
        const res = CHOSUNG.filter((cs) => (namesGroupedByChosung[cs]?.length || 0) > 0);
        if ((namesGroupedByChosung['기타']?.length || 0) > 0) res.push('기타');
        return res;
    }, [namesGroupedByChosung]);

    const filteredMessages = useMemo(() => {
        if (messageFilter === 'mine' && myNames.length > 0) return messages.filter((m) => myNames.includes(m.name));
        if (messageFilter === 'family') {
            if (familyFilterNames.length > 0) return messages.filter((m) => familyFilterNames.includes(m.name));
            return messages.filter((m) => FAMILY_NAMES_FILTER.includes(m.name));
        }
        if (messageFilter === 'dev') return messages.filter((m) => m.is_dev === true);
        return messages;
    }, [messages, messageFilter, myNames, familyFilterNames]);

    const totalPages = Math.max(1, Math.ceil(filteredMessages.length / MESSAGES_PER_PAGE));
    const prevMsgCount = useRef(messages.length);
    useEffect(() => {
        if (messages.length > prevMsgCount.current) setCurrentPage(1);
        prevMsgCount.current = messages.length;
    }, [messages.length]);
    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(totalPages);
    }, [currentPage, totalPages]);

    const paginatedMessages = useMemo(() => {
        const start = (currentPage - 1) * MESSAGES_PER_PAGE;
        return filteredMessages.slice(start, start + MESSAGES_PER_PAGE);
    }, [filteredMessages, currentPage]);

    const goToPage = useCallback((page) => (e) => {
        e.currentTarget.blur();
        setCurrentPage(page);
        setTimeout(() => document.getElementById('guestbook-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
    }, []);

    const pageItems = useMemo(() => {
        if (totalPages <= 4) return Array.from({ length: totalPages }, (_, i) => i + 1);
        const pages = new Set([1, totalPages]);
        for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) pages.add(i);
        const sorted = [...pages].sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < sorted.length; i++) {
            if (i > 0 && sorted[i] - sorted[i - 1] > 1) res.push('...' + i);
            res.push(sorted[i]);
        }
        return res;
    }, [totalPages, currentPage]);

    const messageListOutput = useMemo(() => {
        if (initialLoading) return (
            <div className="text-center py-10 space-y-2">
                <div className="w-6 h-6 border-2 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto" />
                <p className="text-stone-400 text-xs text-center">방명록을 불러오는 중입니다...</p>
            </div>
        );
        if (filteredMessages.length === 0) return (
            <p className="text-center py-10 text-stone-400 text-sm italic font-medium">
                {messageFilter === 'mine' ? '아직 남긴 글이 없습니다.' : '첫 번째 축하 메시지를 남겨주세요.'}
            </p>
        );
        return (
            <div className="space-y-4">
                {paginatedMessages.map((msg, idx) => (
                    <MessageItem
                        key={msg.id || idx}
                        msg={msg}
                        unlockedMessages={unlockedMessages}
                        openPasswordModal={openPasswordModal}
                        toggleUnlock={toggleUnlock}
                        comments={allComments[msg.id] || []}
                        openCommentModal={openCommentModal}
                        onManageComment={openCommentManageModal}
                    />
                ))}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-1.5 pt-4 pb-2">
                        <button onClick={goToPage(1)} disabled={currentPage === 1} style={glassStyle} className="p-2.5 rounded-xl border text-stone-500 disabled:opacity-30 disabled:cursor-not-allowed select-none">
                            <ChevronsLeft size={18} />
                        </button>
                        <button onClick={goToPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} style={glassStyle} className="p-2.5 rounded-xl border text-stone-500 disabled:opacity-30 disabled:cursor-not-allowed select-none">
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex items-center gap-1">
                            {pageItems.map((item) => {
                                if (typeof item === 'string') return (
                                    <span key={item} className="w-6 text-center text-stone-400 text-[11px] font-bold select-none">···</span>
                                );
                                return (
                                    <button
                                        key={item}
                                        onClick={goToPage(item)}
                                        style={item === currentPage
                                            ? { touchAction: 'manipulation', background: 'linear-gradient(145deg, #f43f5e 0%, #e11d48 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 3px 8px rgba(244,63,94,0.35)', borderColor: 'rgba(225,29,72,0.4)' }
                                            : { touchAction: 'manipulation', background: 'linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(248,248,255,0.96) 100%)', boxShadow: 'inset 0 1.5px 0 rgba(255,255,255,1), inset 1px 0 0 rgba(255,255,255,0.7), 0 2px 6px rgba(0,0,0,0.05)', borderColor: 'rgba(215,215,240,0.8)' }}
                                        className={`w-8 h-8 rounded-lg text-xs font-bold select-none transition-all duration-200 border ${item === currentPage ? 'text-white' : 'text-stone-400'}`}
                                    >{item}</button>
                                );
                            })}
                        </div>
                        <button onClick={goToPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} style={glassStyle} className="p-2.5 rounded-xl border text-stone-500 disabled:opacity-30 disabled:cursor-not-allowed select-none">
                            <ChevronRight size={18} />
                        </button>
                        <button onClick={goToPage(totalPages)} disabled={currentPage === totalPages} style={glassStyle} className="p-2.5 rounded-xl border text-stone-500 disabled:opacity-30 disabled:cursor-not-allowed select-none">
                            <ChevronsRight size={18} />
                        </button>
                    </div>
                )}
                <p className="text-center text-[11px] text-stone-400 font-medium">
                    {messageFilter === 'mine' ? `내 글 ${filteredMessages.length}개` : `총 ${messages.length}개의 메시지`}
                </p>
            </div>
        );
    }, [messages, filteredMessages, paginatedMessages, unlockedMessages, allComments, initialLoading, openPasswordModal, toggleUnlock, openCommentModal, openCommentManageModal, currentPage, totalPages, messageFilter, goToPage, pageItems]);

    return (
        <section className="pt-24 pb-6 px-6 bg-[#FDFBF7] relative z-10" id="guestbook" ref={ref}>
            <div className={`max-w-md mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center mb-10 flex flex-col items-center">
                    <div className="mb-3">
                        <MessageSquare className="mx-auto text-rose-200" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex justify-center mb-3">
                        <svg viewBox="0 0 240 24" height="24" className="w-56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="12" x2="78" y2="12" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                            <circle cx="83" cy="12" r="1.5" fill="#fca5a5" opacity="0.6" />
                            <path d="M95 9 L98 12 L95 15 L92 12 Z" fill="#fca5a5" />
                            <path d="M120 4 L122.3 9.7 L128 12 L122.3 14.3 L120 20 L117.7 14.3 L112 12 L117.7 9.7 Z" fill="#f87171" />
                            <path d="M145 9 L148 12 L145 15 L142 12 Z" fill="#fca5a5" />
                            <circle cx="157" cy="12" r="1.5" fill="#fca5a5" opacity="0.6" />
                            <line x1="162" y1="12" x2="240" y2="12" stroke="#fca5a5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-serif tracking-[0.2em] text-stone-900 font-bold mb-3">방명록</h2>
                    <p className="text-[14px] text-stone-600 font-medium leading-relaxed break-keep mt-7">
                        가족식으로 진행되어 하객 초청은 하지 않습니다.<br />
                        축하 방명록만 남겨주시면 됩니다.
                        <span className="inline-block text-base ml-1.5" style={{ verticalAlign: 'middle' }}>💌</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-5 rounded-[1.25rem] shadow-sm border border-stone-100 mb-6 space-y-4 relative z-20">
                    <div className="flex space-x-2">
                        <input type="text" placeholder="성함" value={newName} onChange={(e) => setNewName(e.target.value)}
                            className="w-[68px] shrink-0 bg-stone-50 border border-stone-100 rounded-xl px-3 py-4 text-[16px] font-medium text-stone-800 focus:ring-2 focus:ring-rose-200 outline-none placeholder:text-stone-400 placeholder:text-[13px] relative z-20" maxLength={10} />
                        <div className="relative flex-1 min-w-0">
                            <input type={showNewPw ? 'text' : 'password'} inputMode="numeric" placeholder="전화번호 뒷 4자리"
                                value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 pr-10 text-[16px] font-medium text-stone-800 focus:ring-2 focus:ring-rose-200 outline-none placeholder:text-stone-400 placeholder:text-[13px] relative z-20" maxLength={10} />
                            <button type="button" onPointerDown={(e) => { e.preventDefault(); setShowNewPw((v) => !v); }}
                                style={{ touchAction: 'manipulation' }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 active:text-stone-600 z-30">
                                {showNewPw ? <EyeOff size={15} /> : <Eye size={15} />}
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <textarea placeholder="축하의 한마디를 남겨주세요." value={newContent} onChange={(e) => setNewContent(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 text-[16px] font-medium text-stone-800 h-28 resize-none focus:ring-2 focus:ring-rose-200 outline-none placeholder:text-stone-400 placeholder:text-[13px] relative z-20" maxLength={100} />
                        {newContent && (
                            <button type="button" onPointerDown={(e) => { e.preventDefault(); setNewContent(''); }}
                                className="absolute right-2 top-2 p-1 rounded-full bg-stone-200 text-stone-500 active:bg-stone-300 z-30">
                                <X size={14} />
                            </button>
                        )}
                    </div>
                    <div className="flex space-x-2 relative z-10">
                        <button type="button" onClick={() => setReceiver('public')} style={{ touchAction: 'manipulation' }}
                            className={`flex-1 py-3 rounded-xl border text-[13px] font-bold active:bg-stone-100 select-none ${receiver === 'public' ? 'bg-stone-100 border-stone-200 text-stone-700 shadow-sm' : 'bg-stone-50/50 text-stone-400 border-transparent hover:bg-stone-50'}`}>모두에게</button>
                        <button type="button" onClick={() => setReceiver('groom')} style={{ touchAction: 'manipulation' }}
                            className={`flex-1 py-3 rounded-xl border text-[13px] font-bold active:bg-blue-100 select-none ${receiver === 'groom' ? 'bg-blue-50 border-blue-200 text-blue-700 shadow-sm' : 'bg-stone-50/50 text-stone-400 border-transparent hover:bg-stone-50'}`}>신랑에게</button>
                        <button type="button" onClick={() => setReceiver('bride')} style={{ touchAction: 'manipulation' }}
                            className={`flex-1 py-3 rounded-xl border text-[13px] font-bold active:bg-rose-100 select-none ${receiver === 'bride' ? 'bg-rose-50 border-rose-200 text-rose-700 shadow-sm' : 'bg-stone-50/50 text-stone-400 border-transparent hover:bg-stone-50'}`}>신부에게</button>
                    </div>
                    <button type="submit" disabled={loading} style={{ touchAction: 'manipulation' }}
                        className="w-full bg-[#2A2626] active:bg-[#1f1d1d] text-white font-bold py-4 rounded-xl text-[15px] disabled:bg-stone-400 flex items-center justify-center relative z-10 mt-2 select-none">
                        <Send size={18} className="mr-2.5 opacity-90" />
                        {loading ? '전송 중...' : '메시지 남기기'}
                    </button>
                </form>

                {/* 필터 탭 */}
                <div id="guestbook-list" className="flex gap-2 mb-4">
                    <button onClick={() => setMessageFilter('all')}
                        style={{ touchAction: 'manipulation', ...(messageFilter === 'all' ? { background: 'linear-gradient(145deg, #3b82f6 0%, #2563eb 100%)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), 0 3px 8px rgba(59,130,246,0.35)', borderColor: 'rgba(37,99,235,0.4)' } : glassStyle) }}
                        className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all select-none border ${messageFilter === 'all' ? 'text-white shadow-md' : 'text-stone-400'}`}>
                        전체 <span className={`ml-1 ${messageFilter === 'all' ? 'text-white/70' : 'text-stone-400'}`}>{messages.length}</span>
                    </button>

                    <button
                        onClick={() => {
                            setFamilyPinValue(''); setShowFamilyPin(false);
                            setSelectedFamilyFilterNames(new Set(familyFilterNames));
                            setFamilyFilterConsonant(null);
                            setIsFamilyPinModalOpen(true);
                        }}
                        style={{ touchAction: 'manipulation', ...(messageFilter === 'family' ? { background: 'linear-gradient(135deg, #FFB3C6 0%, #FFCBA4 35%, #FFF0A0 60%, #B8F0C8 80%, #B3C8FF 100%)', borderColor: 'transparent' } : glassStyle) }}
                        className={`flex-1 py-2 rounded-xl font-bold transition-all select-none border leading-tight text-center ${messageFilter === 'family' && familyFilterNames.length > 0 ? 'text-stone-700 shadow-md' : messageFilter === 'family' ? 'text-stone-700 shadow-md text-[13px]' : 'text-stone-400 text-[13px]'}`}>
                        {messageFilter === 'family' ? (
                            familyFilterNames.length > 0 ? (
                                <>
                                    <span className="block text-[10px]">{familyFilterNames.length > 1 ? `${familyFilterNames[0]} 외 ${familyFilterNames.length - 1}명` : `"${familyFilterNames[0]}"`}</span>
                                    <span className="block text-[10px]">{filteredMessages.length}개</span>
                                </>
                            ) : `직계가족 ${filteredMessages.length}`
                        ) : (
                            <>직계가족 <span className="text-stone-300">{familyCount}</span></>
                        )}
                    </button>

                    <button
                        onClick={() => {
                            setSelectedFilterNames(new Set(myNames));
                            setFilterNameInput('');
                            setNameFilterConsonant(null);
                            setIsNameFilterModalOpen(true);
                        }}
                        style={{ touchAction: 'manipulation', ...(messageFilter === 'mine' ? {} : glassStyle) }}
                        className={`flex-1 py-2 rounded-xl font-bold transition-all select-none border leading-tight text-center ${messageFilter === 'mine' ? 'bg-rose-500 text-white border-rose-500 shadow-md text-[10px]' : 'text-stone-400 text-[12px] whitespace-nowrap overflow-hidden'}`}>
                        {messageFilter === 'mine' ? (
                            <>
                                <span className="block">{myNames.length > 1 ? `${myNames[0]} 외 ${myNames.length - 1}명` : `"${myNames[0]}"`}</span>
                                <span className="block">{filteredMessages.length}개</span>
                            </>
                        ) : '내가 쓴 글'}
                    </button>

                    <button
                        onClick={() => setMessageFilter(messageFilter === 'dev' ? 'all' : 'dev')}
                        style={{ touchAction: 'manipulation', ...(messageFilter === 'dev' ? { background: 'linear-gradient(145deg, rgba(14,12,24,0.99) 0%, rgba(26,20,40,1) 100%)', borderColor: 'rgba(105,88,140,0.6)', boxShadow: '0 3px 8px rgba(0,0,0,0.5)' } : glassStyle) }}
                        className={`flex-1 py-2.5 rounded-xl text-[13px] font-bold transition-all select-none border ${messageFilter === 'dev' ? 'text-stone-200 shadow-md' : 'text-stone-400'}`}>
                        {messageFilter === 'dev' ? (<>공지 <span className="text-stone-400">{filteredMessages.length}</span></>) : (<>공지 <span className="text-stone-300">{devCount}</span></>)}
                    </button>
                </div>

                {messageListOutput}
            </div>

            {/* ========== 모달들 ========== */}
            <ModernModal
                isOpen={isPasswordModalOpen}
                onClose={() => setIsPasswordModalOpen(false)}
                sender={modalPurpose !== 'reply' && modalPurpose !== 'deleteReply' ? selectedMsg?.name : undefined}
                title={
                    modalPurpose === 'siren' ? '🚨 긴급 토글'
                        : (modalPurpose === 'reply' || modalPurpose === 'deleteReply') && selectedMsg?.receiver === 'groom' ? '신랑 확인'
                            : (modalPurpose === 'reply' || modalPurpose === 'deleteReply') && selectedMsg?.receiver === 'bride' ? '신부 확인'
                                : (modalPurpose === 'reply' || modalPurpose === 'deleteReply') ? '관리자 확인'
                                    : selectedMsg?.is_dev === true ? '관리자 확인'
                                        : modalPurpose === 'unlock' && (selectedMsg?.receiver === 'groom' || selectedMsg?.receiver === 'bride') ? '생일 확인'
                                            : '전화번호 확인'
                }
                description={
                    modalPurpose === 'siren' ? '개발자 비밀번호를 입력해주세요.'
                        : (modalPurpose === 'reply' || modalPurpose === 'deleteReply') && selectedMsg?.receiver === 'groom' ? '신랑의 생일을 입력해주세요. (예: 0108)'
                            : (modalPurpose === 'reply' || modalPurpose === 'deleteReply') && selectedMsg?.receiver === 'bride' ? '신부의 생일을 입력해주세요. (예: 0315)'
                                : (modalPurpose === 'reply' || modalPurpose === 'deleteReply') ? '신랑/신부 전용 비밀번호를 입력해주세요.'
                                    : selectedMsg?.is_dev === true ? '관리자 비밀번호를 입력해주세요.'
                                        : modalPurpose === 'unlock' && selectedMsg?.receiver === 'groom' ? '신랑의 생일을 입력해주세요. (예: 0108)'
                                            : modalPurpose === 'unlock' && selectedMsg?.receiver === 'bride' ? '신부의 생일을 입력해주세요. (예: 0315)'
                                                : '전화번호 뒷 4자리를 입력해주세요.'
                }
                onConfirm={handleModalConfirm}
            >
                <PinInput
                    value={modalPassword}
                    onChange={setModalPassword}
                    show={showModalPw}
                    onToggleShow={() => setShowModalPw((v) => !v)}
                    onEnter={handleModalConfirm}
                    inputRef={passwordInputRef}
                />
            </ModernModal>

            <ModernModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                title="메시지 삭제"
                description={selectedMsg?.reply ? '이 메시지에는 답글이 달려 있습니다. 삭제 시 답글도 함께 삭제됩니다.' : '삭제하면 되돌릴 수 없습니다. 정말 삭제할까요?'}
                onConfirm={confirmDelete}
                confirmLabel="삭제"
                isDestructive
            />

            <ModernModal
                isOpen={isDeleteReplyModalOpen}
                onClose={() => setIsDeleteReplyModalOpen(false)}
                title="답글 삭제"
                description="답글을 삭제하면 되돌릴 수 없습니다. 정말 삭제할까요?"
                onConfirm={confirmDeleteReply}
                confirmLabel="삭제"
                isDestructive
            />

            <ModernModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                title="메시지 수정"
                onConfirm={confirmEdit}
                confirmLabel="수정완료"
            >
                <div className="relative">
                    <textarea value={modalEditText} onChange={(e) => setModalEditText(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 pr-9 text-[16px] text-stone-800 h-24 resize-none focus:ring-2 focus:ring-stone-100 outline-none" />
                    {modalEditText.length > 0 && (
                        <button onClick={() => setModalEditText('')}
                            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-stone-200 text-stone-500 text-[12px] font-bold active:bg-stone-300 select-none"
                            style={{ touchAction: 'manipulation' }}>✕</button>
                    )}
                </div>
            </ModernModal>

            <ModernModal
                isOpen={isReplyInputModalOpen}
                onClose={() => setIsReplyInputModalOpen(false)}
                title="답글 남기기"
                description="게스트에게 전할 소중한 메시지를 입력하세요."
                onConfirm={confirmReply}
                confirmLabel="답글저장"
            >
                <div className="relative">
                    <textarea value={modalReplyText} onChange={(e) => setModalReplyText(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 pr-9 text-[16px] text-stone-800 h-24 resize-none focus:ring-2 focus:ring-stone-100 outline-none"
                        placeholder="감사의 인사를 남겨주세요." />
                    {modalReplyText.length > 0 && (
                        <button onClick={() => setModalReplyText('')}
                            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-stone-200 text-stone-500 text-[12px] font-bold active:bg-stone-300 select-none"
                            style={{ touchAction: 'manipulation' }}>✕</button>
                    )}
                </div>
            </ModernModal>

            {/* 내가 쓴 글 찾기 모달 */}
            <ModernModal
                isOpen={isNameFilterModalOpen}
                onClose={() => setIsNameFilterModalOpen(false)}
                title="내가 쓴 글 찾기"
                description={<>이름을 선택하거나 직접 입력하세요.<br />여러 명 동시 선택도 가능해요.</>}
                confirmLabel={`찾기${selectedFilterNames.size > 0 ? ` (${selectedFilterNames.size}명)` : ''}`}
                onConfirm={() => {
                    const names = new Set(selectedFilterNames);
                    const trimmed = filterNameInput.trim();
                    if (trimmed) names.add(trimmed);
                    if (names.size === 0) { showToast('이름을 선택하거나 입력해주세요.'); return; }
                    const arr = Array.from(names);
                    localStorage.setItem('guestbook_my_names', JSON.stringify(arr));
                    setMyNames(arr);
                    setMessageFilter('mine');
                    setIsNameFilterModalOpen(false);
                }}
            >
                {allNamesWithMessages.length > 0 && (
                    <>
                        {allNamesWithMessages.length >= 10 && (
                            <div className="flex flex-wrap gap-1.5 justify-center mb-2">
                                <button type="button" onPointerDown={() => setNameFilterConsonant(null)} style={{ touchAction: 'manipulation' }}
                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border select-none ${nameFilterConsonant === null ? 'bg-stone-600 text-white border-stone-500' : 'bg-stone-50 text-stone-500 border-stone-200 active:bg-stone-100'}`}>전체</button>
                                {availableChosungs.map((cs) => (
                                    <button key={cs} type="button" onPointerDown={() => setNameFilterConsonant(cs)} style={{ touchAction: 'manipulation' }}
                                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border select-none ${nameFilterConsonant === cs ? 'bg-stone-600 text-white border-stone-500' : 'bg-stone-50 text-stone-500 border-stone-200 active:bg-stone-100'}`}>{cs}</button>
                                ))}
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2 justify-center mb-3 max-h-40 overflow-y-auto">
                            {(allNamesWithMessages.length >= 10 ? (nameFilterConsonant ? namesGroupedByChosung[nameFilterConsonant] || [] : allNamesWithMessages) : allNamesWithMessages).map((name) => {
                                const isSelected = selectedFilterNames.has(name);
                                return (
                                    <button key={name} type="button"
                                        onPointerDown={() => setSelectedFilterNames((prev) => {
                                            const next = new Set(prev);
                                            if (next.has(name)) next.delete(name); else next.add(name);
                                            return next;
                                        })}
                                        style={{ touchAction: 'manipulation' }}
                                        className={`px-2 py-1 rounded-lg text-[11px] font-bold border select-none ${isSelected ? 'bg-rose-500 text-white border-rose-400' : 'bg-stone-50 text-stone-500 border-stone-200 active:bg-stone-100'}`}>{name}</button>
                                );
                            })}
                        </div>
                    </>
                )}
                <div className="flex justify-end mb-2">
                    <button type="button" onPointerDown={(e) => {
                        e.preventDefault();
                        setMessageFilter('all');
                        setMyNames([]);
                        setSelectedFilterNames(new Set());
                        setFilterNameInput('');
                        localStorage.removeItem('guestbook_my_names');
                        setIsNameFilterModalOpen(false);
                    }} style={{ touchAction: 'manipulation' }}
                        className="text-[12px] text-blue-400 font-medium active:text-blue-600 select-none border border-blue-200 rounded-lg px-2.5 py-1">필터 초기화</button>
                </div>
                <div className="relative">
                    <input type="text" value={filterNameInput} onChange={(e) => setFilterNameInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const trimmed = filterNameInput.trim();
                                if (!trimmed) return;
                                setSelectedFilterNames((prev) => new Set([...prev, trimmed]));
                                setFilterNameInput('');
                            }
                        }}
                        placeholder="목록에 없으면 직접 입력 후 Enter"
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 text-[16px] placeholder:text-[11px] text-stone-800 focus:ring-2 focus:ring-stone-100 outline-none pr-11" />
                    {filterNameInput && (
                        <button type="button" onPointerDown={(e) => { e.preventDefault(); setFilterNameInput(''); }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-stone-200 text-stone-500 active:bg-stone-300">
                            <X size={14} />
                        </button>
                    )}
                </div>
            </ModernModal>

            {/* 직계가족 PIN 모달 */}
            <ModernModal
                isOpen={isFamilyPinModalOpen}
                onClose={() => setIsFamilyPinModalOpen(false)}
                title="직계가족만 확인"
                description="직계가족 히든 번호 4자리 입력해주세요."
                confirmLabel="확인"
                onConfirm={() => {
                    if (familyPinValue === '0313') {
                        setIsFamilyPinModalOpen(false);
                        setIsFamilyFilterModalOpen(true);
                    } else {
                        showToast('비밀번호가 틀렸습니다.');
                        setFamilyPinValue('');
                        setTimeout(() => familyPinRef.current?.focus({ preventScroll: true }), 50);
                    }
                }}
            >
                <PinInput
                    value={familyPinValue}
                    onChange={setFamilyPinValue}
                    show={showFamilyPin}
                    onToggleShow={() => setShowFamilyPin((v) => !v)}
                    onEnter={() => {
                        if (familyPinValue === '0313') {
                            setIsFamilyPinModalOpen(false);
                            setIsFamilyFilterModalOpen(true);
                        } else {
                            showToast('비밀번호가 틀렸습니다.');
                            setFamilyPinValue('');
                            setTimeout(() => familyPinRef.current?.focus({ preventScroll: true }), 50);
                        }
                    }}
                    inputRef={familyPinRef}
                />
            </ModernModal>

            {/* 직계가족 이름 선택 모달 */}
            <ModernModal
                isOpen={isFamilyFilterModalOpen}
                onClose={() => setIsFamilyFilterModalOpen(false)}
                title="가족 찾기"
                description={<>이름을 선택하거나 직접 입력하세요.<br />여러 명 동시 선택도 가능해요.</>}
                confirmLabel={`찾기${selectedFamilyFilterNames.size > 0 ? ` (${selectedFamilyFilterNames.size}명)` : ''}`}
                onConfirm={() => {
                    const arr = Array.from(selectedFamilyFilterNames);
                    setFamilyFilterNames(arr);
                    setMessageFilter('family');
                    setIsFamilyFilterModalOpen(false);
                }}
            >
                {familyNamesWithMessages.length > 0 && (
                    <>
                        {familyNamesWithMessages.length >= 10 && (
                            <div className="flex flex-wrap gap-1.5 justify-center mb-2">
                                <button type="button" onPointerDown={() => setFamilyFilterConsonant(null)} style={{ touchAction: 'manipulation' }}
                                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border select-none ${familyFilterConsonant === null ? 'bg-stone-600 text-white border-stone-500' : 'bg-stone-50 text-stone-500 border-stone-200 active:bg-stone-100'}`}>전체</button>
                                {availableFamilyChosungs.map((cs) => (
                                    <button key={cs} type="button" onPointerDown={() => setFamilyFilterConsonant(cs)} style={{ touchAction: 'manipulation' }}
                                        className={`px-2.5 py-1 rounded-lg text-xs font-bold border select-none ${familyFilterConsonant === cs ? 'bg-stone-600 text-white border-stone-500' : 'bg-stone-50 text-stone-500 border-stone-200 active:bg-stone-100'}`}>{cs}</button>
                                ))}
                            </div>
                        )}
                        <div className="flex flex-wrap gap-2 justify-center mb-3 max-h-40 overflow-y-auto">
                            {(familyNamesWithMessages.length >= 10 ? (familyFilterConsonant ? familyNamesGroupedByChosung[familyFilterConsonant] || [] : familyNamesWithMessages) : familyNamesWithMessages).map((name) => {
                                const isSelected = selectedFamilyFilterNames.has(name);
                                return (
                                    <button key={name} type="button"
                                        onPointerDown={() => setSelectedFamilyFilterNames((prev) => {
                                            const next = new Set(prev);
                                            if (next.has(name)) next.delete(name); else next.add(name);
                                            return next;
                                        })}
                                        style={{ touchAction: 'manipulation' }}
                                        className={`px-2 py-1 rounded-lg text-[11px] font-bold border select-none ${isSelected ? 'bg-rose-500 text-white border-rose-400' : 'bg-stone-50 text-stone-500 border-stone-200 active:bg-stone-100'}`}>{name}</button>
                                );
                            })}
                        </div>
                    </>
                )}
                <div className="flex justify-end mb-2">
                    <button type="button" onPointerDown={(e) => {
                        e.preventDefault();
                        setMessageFilter('all');
                        setFamilyFilterNames([]);
                        setSelectedFamilyFilterNames(new Set());
                        setIsFamilyFilterModalOpen(false);
                    }} style={{ touchAction: 'manipulation' }}
                        className="text-[12px] text-blue-400 font-medium active:text-blue-600 select-none border border-blue-200 rounded-lg px-2.5 py-1">필터 초기화</button>
                </div>
            </ModernModal>

            {/* 댓글 PIN 확인 모달 */}
            <ModernModal
                isOpen={isCommentPinModalOpen}
                onClose={() => setIsCommentPinModalOpen(false)}
                title={commentInputType === 'groom' ? '신랑 확인' : commentInputType === 'bride' ? '신부 확인' : '댓글 관리'}
                description={commentInputType === 'groom' ? '신랑의 생일을 입력해주세요. (예: 0108)' : commentInputType === 'bride' ? '신부의 생일을 입력해주세요. (예: 0315)' : '등록 시 입력한 비번 4자리를 입력해주세요.'}
                onConfirm={handleCommentPinConfirm}
                confirmLabel="확인"
            >
                <PinInput
                    value={commentPinValue}
                    onChange={setCommentPinValue}
                    show={showCommentPin}
                    onToggleShow={() => setShowCommentPin((v) => !v)}
                    onEnter={handleCommentPinConfirm}
                    inputRef={commentPinRef}
                />
            </ModernModal>

            {/* 댓글 작성 모달 */}
            <ModernModal
                isOpen={isCommentModalOpen}
                onClose={() => { setIsCommentModalOpen(false); setShowCommentPw(false); }}
                title="💬 댓글"
                description={`"${commentTargetMsg?.name || ''}"님의 메시지에 댓글을 남겨보세요.`}
                onConfirm={submitComment}
                confirmLabel="등록"
            >
                <div className="space-y-3">
                    {commentInputType === 'guest' && (
                        <div className="flex gap-2">
                            <input type="text" value={commentName} onChange={(e) => setCommentName(e.target.value)}
                                placeholder="이름" maxLength={10}
                                className="w-[68px] shrink-0 bg-stone-50 border border-stone-100 rounded-xl px-3 py-4 text-[16px] font-medium text-stone-800 outline-none focus:ring-2 focus:ring-rose-200 placeholder:text-stone-400 placeholder:text-[13px]" />
                            <div className="relative flex-1 min-w-0">
                                <input type={showCommentPw ? 'text' : 'password'} inputMode="numeric"
                                    value={commentPassword} onChange={(e) => setCommentPassword(e.target.value.replace(/\D/g, '').slice(0, 4))}
                                    placeholder="전번뒤·신랑·신부·개발 4자리" maxLength={4}
                                    className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 pr-10 text-[16px] font-medium text-stone-800 outline-none focus:ring-2 focus:ring-rose-200 placeholder:text-stone-400 placeholder:text-[11px]" />
                                <button type="button" onPointerDown={(e) => { e.preventDefault(); setShowCommentPw((v) => !v); }}
                                    style={{ touchAction: 'manipulation' }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 active:text-stone-600">
                                    {showCommentPw ? <EyeOff size={15} /> : <Eye size={15} />}
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="relative">
                        <textarea value={commentContent} onChange={(e) => setCommentContent(e.target.value)}
                            placeholder="따뜻한 댓글을 남겨보세요." maxLength={200}
                            className="w-full bg-stone-50 border border-stone-100 rounded-xl px-4 py-4 text-[16px] font-medium text-stone-800 h-28 resize-none outline-none focus:ring-2 focus:ring-rose-200 placeholder:text-stone-400 placeholder:text-[13px]" />
                        {commentContent.length > 0 && (
                            <button type="button" onPointerDown={(e) => { e.preventDefault(); setCommentContent(''); }}
                                className="absolute right-2 top-2 p-1 rounded-full bg-stone-200 text-stone-500 active:bg-stone-300 select-none"
                                style={{ touchAction: 'manipulation' }}>
                                <X size={14} />
                            </button>
                        )}
                    </div>
                </div>
            </ModernModal>

            {/* 댓글 수정 모달 */}
            <ModernModal
                isOpen={isCommentManageEditModalOpen}
                onClose={() => setIsCommentManageEditModalOpen(false)}
                title="💬 댓글 수정"
                onConfirm={submitCommentEdit}
                confirmLabel="수정"
            >
                <div className="relative">
                    <textarea value={commentManageEditText} onChange={(e) => setCommentManageEditText(e.target.value)}
                        maxLength={200}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 pr-9 text-[16px] text-stone-800 h-20 resize-none outline-none focus:ring-2 focus:ring-stone-100" />
                </div>
            </ModernModal>
        </section>
    );
}
