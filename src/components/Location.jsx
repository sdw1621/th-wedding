import React, { useState, useRef } from 'react';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Lock from 'lucide-react/dist/esm/icons/lock';
import Unlock from 'lucide-react/dist/esm/icons/unlock';
import Users from 'lucide-react/dist/esm/icons/users';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Location() {
    const [ref, isVisible] = useScrollReveal();
    const [unlocked, setUnlocked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [pw, setPw] = useState('');
    const [pwError, setPwError] = useState('');
    const pwInputRef = useRef(null);

    const handleUnlockClick = () => {
        setPw('');
        setPwError('');
        setShowModal(true);
        setTimeout(() => pwInputRef.current?.focus(), 100);
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

    const openNaverMap = () => {
        window.open('https://map.naver.com/p/entry/place/11678840', '_blank');
    };

    const openKakaoMap = () => {
        window.open('https://map.kakao.com/link/to/메이필드호텔 봉래헌,37.5478974,126.817971', '_blank');
    };

    const openTmap = () => {
        // 티맵 앱을 열고 목적지로 바로 길안내를 시작하는 딥링크
        window.open('tmap://route?goalname=메이필드호텔%20봉래헌&goalx=126.817971&goaly=37.5478974', '_blank');
    };

    return (
        <section className="py-24 px-6 bg-[#FDFBF7]" id="location">
            <div ref={ref} className={`max-w-lg mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center mb-10">
                    <MapPin className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800 font-bold">식사 자리 안내</h2>
                </div>

                {/* 잠금 버튼 (미해제 시) */}
                {!unlocked && (
                    <div className="mb-6 flex flex-col items-center gap-3">
                        <button
                            onPointerDown={handleUnlockClick}
                            style={{ touchAction: 'manipulation' }}
                            className="flex items-center gap-2.5 px-6 py-3.5 bg-stone-800 text-white rounded-2xl shadow-md active:bg-stone-900 select-none font-bold text-[15px] tracking-wide"
                        >
                            <Users size={18} />
                            직계가족만
                            <Lock size={16} className="text-stone-400 ml-1" />
                        </button>
                        <p className="text-[11px] text-stone-400">가족 전용 공간 안내입니다.</p>
                    </div>
                )}

                {/* 해제 후 자물쇠 해제 표시 */}
                {unlocked && (
                    <div className="mb-4 flex items-center justify-center gap-1.5 text-[11px] text-emerald-500 font-bold">
                        <Unlock size={12} />
                        직계가족만 공개됨
                    </div>
                )}

                {/* 비밀번호 모달 */}
                {showModal && (
                    <div
                        className="fixed inset-0 z-[600] flex items-center justify-center bg-black/40 backdrop-blur-sm"
                        onPointerDown={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}
                    >
                        <div className="bg-white rounded-3xl shadow-2xl p-7 mx-6 w-full max-w-xs animate-in zoom-in-95 duration-200">
                            <div className="text-center mb-5">
                                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Lock size={22} className="text-stone-600" />
                                </div>
                                <h3 className="text-base font-bold text-stone-800">직계가족만 확인</h3>
                                <p className="text-[12px] text-stone-400 mt-1">직계가족 히든 번호 4자리 입력해주세요.</p>
                            </div>
                            <input
                                ref={pwInputRef}
                                type="password"
                                inputMode="numeric"
                                value={pw}
                                onChange={(e) => { setPw(e.target.value); setPwError(''); }}
                                onKeyDown={(e) => e.key === 'Enter' && handleConfirm()}
                                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-center text-lg tracking-[0.5em] focus:ring-2 focus:ring-stone-200 outline-none mb-1"
                                placeholder="••••"
                                maxLength={6}
                            />
                            {pwError && <p className="text-[11px] text-rose-400 text-center mb-2">{pwError}</p>}
                            <div className="flex gap-2 mt-4">
                                <button
                                    onPointerDown={() => setShowModal(false)}
                                    style={{ touchAction: 'manipulation' }}
                                    className="flex-1 py-3 rounded-xl bg-stone-100 text-stone-600 font-bold text-[13px] active:bg-stone-200"
                                >취소</button>
                                <button
                                    onPointerDown={handleConfirm}
                                    style={{ touchAction: 'manipulation' }}
                                    className="flex-1 py-3 rounded-xl bg-stone-800 text-white font-bold text-[13px] active:bg-stone-900"
                                >확인</button>
                            </div>
                        </div>
                    </div>
                )}

                <div className={`transition-all duration-500 overflow-hidden ${unlocked ? 'opacity-100 max-h-[9999px]' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 mb-6">
                    <div className="w-full h-56 bg-stone-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group">
                        {/* 시그니처 한옥 이미지 적용 */}
                        <img
                            src={`${import.meta.env.BASE_URL}img/봉래헌.png`}
                            alt="Mayfield Hotel Bongrae-heon"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 sm:group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10"></div>
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
                        {/* 지하철 이용 시 */}
                        <div>
                            <h4 className="text-[13px] font-bold text-stone-800 mb-2.5 flex items-center">
                                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span> 지하철 이용 시
                            </h4>
                            <p className="text-[13px] text-stone-600 leading-relaxed pl-3.5">
                                <span className="text-stone-800 font-bold">5호선 마곡역 / 9호선 · 공항철도 마곡나루역</span><br />
                                하차 후 호텔 셔틀버스 또는 택시 이용 (약 5~10분 소요)
                            </p>
                        </div>

                        {/* 버스 이용 시 */}
                        <div>
                            <h4 className="text-[13px] font-bold text-stone-800 mb-2.5 flex items-center">
                                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span> 버스 이용 시
                            </h4>
                            <p className="text-[13px] text-stone-600 leading-relaxed pl-3.5">
                                <span className="text-stone-800 font-bold">강서면허시험장 · 메이필드호텔</span> 정류장 하차<br />
                                지선: 6628, 6632 / 간선: 651 / 일반: 6014
                            </p>
                        </div>

                        {/* 자가용 이용 시 */}
                        <div>
                            <h4 className="text-[13px] font-bold text-stone-800 mb-3 flex items-center">
                                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span> 자가용 이용 시
                            </h4>
                            <div className="flex space-x-2 pl-3.5 mt-4 relative z-20">
                                <button
                                    onPointerDown={openNaverMap}
                                    style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                    className="flex-1 py-4 bg-[#00C73C] text-white text-[12px] font-bold rounded-xl flex justify-center items-center active:bg-[#009b2e] active:opacity-90 shadow-sm select-none"
                                >
                                    네이버 지도
                                </button>
                                <button
                                    onPointerDown={openKakaoMap}
                                    style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                    className="flex-1 py-4 bg-[#FAE100] text-[#391B1B] text-[12px] font-bold rounded-xl flex justify-center items-center active:bg-[#e0c800] active:opacity-90 shadow-sm select-none"
                                >
                                    카카오맵
                                </button>
                                <button
                                    onPointerDown={openTmap}
                                    style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                                    className="flex-1 py-4 bg-stone-800 text-white text-[12px] font-bold rounded-xl flex justify-center items-center active:bg-stone-900 active:opacity-90 shadow-sm select-none"
                                >
                                    티맵
                                </button>
                            </div>
                        </div>

                        {/* 주차 안내 */}
                        <div>
                            <h4 className="text-[13px] font-bold text-stone-800 mb-2.5 flex items-center">
                                <span className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></span> 주차 안내
                            </h4>
                            <p className="text-[13px] text-stone-600 leading-relaxed pl-3.5">
                                호텔 내 <span className="text-stone-800 font-bold">봉래헌 전용 주차 구역</span> 또는<br />
                                호텔 통합 주차장을 <span className="text-rose-400 font-bold">무료</span>로 이용하실 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                </div>{/* 잠금 콘텐츠 wrapper 닫기 */}
            </div>
        </section>
    );
}
