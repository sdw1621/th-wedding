import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Lock from 'lucide-react/dist/esm/icons/lock';
import LockOpen from 'lucide-react/dist/esm/icons/lock-open';
import Users from 'lucide-react/dist/esm/icons/users';
import Eye from 'lucide-react/dist/esm/icons/eye';
import EyeOff from 'lucide-react/dist/esm/icons/eye-off';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useBackButton } from '../hooks/useBackButton';

export default function Location() {
    const [ref, isVisible] = useScrollReveal();
    const [unlocked, setUnlocked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pw, setPw] = useState('');
    const [pwError, setPwError] = useState('');
    const [showPw, setShowPw] = useState(false);
    const pwInputRef = useRef(null);

    useBackButton(showModal, () => setShowModal(false));

    const [vpStyle, setVpStyle] = useState({
        position: 'fixed', left: 0, right: 0, top: 56, zIndex: 600,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '0 16px', pointerEvents: 'none',
    });

    useEffect(() => {
        if (!showModal) return;
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
    }, [showModal]);

    const handleUnlockClick = () => {
        setPw('');
        setPwError('');
        setShowPw(false);
        setShowModal(true);
        setTimeout(() => pwInputRef.current?.focus({ preventScroll: true }), 50);
    };

    const handleConfirm = () => {
        if (pw === '0313') {
            setUnlocked(true);
            setShowModal(false);
        } else {
            setPwError('비밀번호가 틀렸습니다.');
            setPw('');
            setTimeout(() => pwInputRef.current?.focus(), 50);
        }
    };

    return (
        <section className="py-24 px-6 bg-[#FDFBF7]" id="location">
            <div ref={ref} className={`max-w-lg mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center mb-10">
                    <MapPin className="mx-auto text-rose-200 mb-3" size={28} strokeWidth={1.5} />
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
                    <h2 className="text-2xl font-serif tracking-[0.2em] text-stone-900 font-bold mb-3">식사 자리 안내</h2>
                </div>

                {!unlocked && (
                    <div className="mb-6 flex flex-col items-center gap-3">
                        <button
                            onPointerDown={handleUnlockClick}
                            style={{ background: 'linear-gradient(135deg, #FFB3C6 0%, #FFCBA4 28%, #FFF0A0 52%, #B8F0C8 75%, #B3C8FF 100%)', touchAction: 'manipulation', boxShadow: '0 4px 14px rgba(180,160,220,0.25)' }}
                            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl shadow-md active:opacity-85 select-none font-bold text-[15px] tracking-wide text-stone-700"
                        >
                            <Users size={18} className="text-stone-600" />
                            직계가족만
                            <Lock size={16} className="text-stone-500 ml-1" />
                        </button>
                        <p className="text-[11px] text-stone-400">가족 전용 공간 안내입니다.</p>
                    </div>
                )}

                {unlocked && (
                    <div className="mb-4 flex items-center justify-center">
                        <button
                            onPointerDown={() => setUnlocked(false)}
                            style={{ touchAction: 'manipulation' }}
                            className="flex items-center gap-1.5 text-[11px] text-emerald-500 font-bold px-3 py-1.5 rounded-full border border-emerald-200 active:bg-emerald-50 select-none"
                        >
                            <LockOpen size={12} />
                            직계가족만 공개됨
                            <Lock size={11} className="ml-0.5 text-emerald-400/70" />
                        </button>
                    </div>
                )}

                {showModal && createPortal(
                    <>
                        <div className="fixed inset-0 z-[599] bg-stone-900/80 animate-in fade-in duration-300" onPointerDown={() => setShowModal(false)} />
                        <div style={vpStyle}>
                            <div
                                className="relative bg-white w-full max-w-[320px] rounded-[24px] shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-200 pointer-events-auto flex flex-col"
                                style={{ maxHeight: '100%', overflowY: 'auto', fontFamily: "'Noto Sans KR', sans-serif" }}
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                <div className="p-6 text-center">
                                    <h3 className="text-[17px] font-bold text-stone-900 mb-1">직계가족만 확인</h3>
                                    <p className="text-[13px] text-stone-500 font-medium leading-tight">직계가족 히든 번호 4자리 입력해주세요.</p>
                                    <div className="mt-4">
                                        <div className="flex flex-col items-center gap-5 relative">
                                            <div className="flex items-center justify-center gap-3 cursor-pointer" onClick={() => pwInputRef.current?.focus({ preventScroll: true })}>
                                                {[0, 1, 2, 3].map((i) => {
                                                    const filled = i < pw.length;
                                                    const next = i === pw.length;
                                                    return (
                                                        <div key={i} className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center transition-all duration-200 select-none ${filled ? 'bg-stone-800 border-2 border-stone-800 shadow-md' : next ? 'bg-rose-50 border-2 border-rose-400 shadow-sm ring-2 ring-rose-200' : 'bg-stone-100 border-2 border-stone-200'}`}>
                                                            {filled
                                                                ? (showPw
                                                                    ? <span className="text-white text-2xl font-bold">{pw[i]}</span>
                                                                    : <span className="w-4 h-4 rounded-full bg-white block" />)
                                                                : <span className={`text-[32px] font-thin leading-none ${next ? 'text-rose-400' : 'text-stone-300'}`}>○</span>}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <input
                                                ref={pwInputRef}
                                                type="text"
                                                inputMode="numeric"
                                                value={pw}
                                                onChange={(e) => { setPw(e.target.value.replace(/\D/g, '').slice(0, 4)); setPwError(''); }}
                                                onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                                                autoComplete="off"
                                                autoFocus
                                                style={{ position: 'absolute', opacity: 0, width: 1, height: 1, left: '50%', top: '50%', fontSize: 16 }}
                                            />
                                            <button
                                                type="button"
                                                onPointerDown={(e) => { e.preventDefault(); setShowPw((v) => !v); }}
                                                style={{ touchAction: 'manipulation' }}
                                                className="flex items-center gap-1.5 text-stone-400 text-[13px] active:text-stone-600"
                                            >
                                                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
                                                {showPw ? '숨기기' : '표시하기'}
                                            </button>
                                        </div>
                                        {pwError && <p className="text-[11px] text-rose-400 text-center mt-3">{pwError}</p>}
                                    </div>
                                </div>
                                <div className="flex flex-col border-t border-stone-100">
                                    <button onPointerDown={handleConfirm} style={{ touchAction: 'manipulation' }} className="py-4 text-[15px] font-bold border-b border-stone-100 active:bg-stone-50 select-none text-rose-500">확인</button>
                                    <button onPointerDown={() => setShowModal(false)} style={{ touchAction: 'manipulation' }} className="py-4 text-[15px] font-medium text-blue-400 active:bg-stone-50 select-none">취소</button>
                                </div>
                            </div>
                        </div>
                    </>,
                    document.body
                )}

                <div className={`transition-all duration-500 overflow-hidden ${unlocked ? 'opacity-100 max-h-[9999px]' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 mb-6">
                        <div className="w-full h-56 bg-stone-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                            <img
                                src={`${import.meta.env.BASE_URL}img/봉래헌.png`}
                                alt="Mayfield Hotel Bongrae-heon"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 sm:group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                            <a
                                href="https://www.mayfield.co.kr/restaurant/bongraeheon"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                className="relative z-20 bg-white/95 px-5 py-2.5 rounded-full text-sm font-bold text-stone-800 shadow-lg flex items-center border border-stone-100 active:bg-stone-50 active:opacity-90 select-none cursor-pointer"
                            >
                                <MapPin size={16} className="text-rose-500 mr-2" /> 메이필드 호텔 봉래헌
                            </a>
                        </div>

                        <div className="text-center space-y-2 mb-6">
                            <h3 className="font-bold text-stone-800 text-lg">메이필드 호텔 봉래헌</h3>
                            <p className="text-sm text-stone-500">서울 강서구 방화대로 94 메이필드호텔</p>
                            <p className="text-sm text-stone-500">02-2660-9020</p>
                            <p className="text-xs text-stone-400 mt-1">(주차: 메이필드 호텔 내 전용 주차장 이용 가능)</p>
                        </div>

                        <div className="border-t border-stone-50 pt-6 space-y-8 text-left px-2">
                            <div>
                                <h4 className="text-[13px] font-bold text-stone-800 mb-2.5 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2" /> 지하철 이용 시
                                </h4>
                                <p className="text-[11.5px] text-stone-600 leading-relaxed pl-3.5">
                                    <span className="text-stone-800 font-bold">5호선 마곡역 / 9호선 · 공항철도 마곡나루역</span><br />
                                    하차 후 호텔 셔틀버스 또는 택시 이용<br />
                                    (약 5~10분 소요)
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[13px] font-bold text-stone-800 mb-2.5 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2" /> 버스 이용 시
                                </h4>
                                <p className="text-[11.5px] text-stone-600 leading-relaxed pl-3.5">
                                    <span className="text-stone-800 font-bold">강서면허시험장 · 메이필드호텔</span> 정류장 하차<br />
                                    지선 6628, 6632 / 간선 651 / 일반 6014
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[13px] font-bold text-stone-800 mb-3 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2" /> 자가용 이용 시
                                </h4>
                                <div className="flex space-x-2 pl-3.5 mt-4 relative z-20">
                                    <a href="https://map.naver.com/p/entry/place/11678840" target="_blank" rel="noopener noreferrer"
                                        style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                        className="flex-1 py-4 bg-[#00C73C] text-white text-[12px] font-bold rounded-xl flex justify-center items-center active:bg-[#009b2e] active:opacity-90 shadow-sm select-none">
                                        네이버 지도
                                    </a>
                                    <a href={`https://map.kakao.com/link/to/${encodeURIComponent('메이필드호텔 봉래헌')},37.5478974,126.817971`} target="_blank" rel="noopener noreferrer"
                                        style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                        className="flex-1 py-4 bg-[#FAE100] text-[#391B1B] text-[12px] font-bold rounded-xl flex justify-center items-center active:bg-[#e0c800] active:opacity-90 shadow-sm select-none">
                                        카카오맵
                                    </a>
                                    <a href={`tmap://route?goalname=${encodeURIComponent('메이필드호텔 봉래헌')}&goalx=126.817971&goaly=37.5478974`}
                                        style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                        className="flex-1 py-4 bg-stone-800 text-white text-[12px] font-bold rounded-xl flex justify-center items-center active:bg-stone-900 active:opacity-90 shadow-sm select-none">
                                        티맵
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[13px] font-bold text-stone-800 mb-2.5 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2" /> 주차 안내
                                </h4>
                                <p className="text-[11.5px] text-stone-600 leading-relaxed pl-3.5">
                                    호텔 내 <span className="text-stone-800 font-bold">봉래헌 전용 주차 구역</span> 또는<br />
                                    호텔 통합 주차장을<br />
                                    <span className="text-rose-400 font-bold">무료</span>로 이용하실 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
