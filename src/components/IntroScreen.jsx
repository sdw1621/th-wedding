import React, { useState } from 'react';
import Heart from 'lucide-react/dist/esm/icons/heart';
import TriangleAlert from 'lucide-react/dist/esm/icons/triangle-alert';

// 벚꽃 한 송이 SVG (5겹 꽃잎)
const Blossom = ({ cx, cy, s = 1, op = 0.85, r = 0 }) => (
    <g transform={`translate(${cx},${cy}) scale(${s}) rotate(${r})`}>
        {[0, 72, 144, 216, 288].map((a, i) => (
            <ellipse key={i} cx="0" cy="-7.5" rx="4.8" ry="7"
                fill={i % 2 === 0 ? '#fcd8e8' : '#f8c8df'}
                transform={`rotate(${a})`} opacity={op} />
        ))}
        <circle cx="0" cy="0" r="3.2" fill="#fef0b0" opacity="0.95" />
        <circle cx="0" cy="-1.6" r="0.7" fill="#c87010" opacity="0.6" />
        <circle cx="1.4" cy="-0.7" r="0.7" fill="#c87010" opacity="0.6" />
        <circle cx="-1.4" cy="-0.7" r="0.7" fill="#c87010" opacity="0.6" />
    </g>
);

export default function IntroScreen({ onEnter, onStart }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleOpen = () => {
        if (isProcessing) return;
        setIsProcessing(true);
        if (onStart) onStart();
        setIsOpen(true);
        setTimeout(() => { onEnter(); }, 1200);
    };

    return (
        <div
            className={`fixed inset-0 flex flex-col z-[150] overflow-hidden transition-opacity duration-1000 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{ background: 'linear-gradient(160deg, #fef0f5 0%, #fdfcf9 45%, #fdf7f0 100%)' }}
        >
            <style>{`
                @keyframes icon-shake {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    25% { transform: translateY(-2px) rotate(-6deg); }
                    75% { transform: translateY(-2px) rotate(6deg); }
                }
                .icon-shake { animation: icon-shake 1.2s ease-in-out infinite; }
                @keyframes text-warn-pop {
                    0% { transform: scale(1); }
                    35% { transform: scale(1.35); color: #e03060; }
                    100% { transform: scale(1); }
                }
                @keyframes text-warn {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                }
                .text-warn {
                    animation: text-warn-pop 1.1s ease-in-out 1,
                               text-warn 1.3s ease-in-out 1.1s infinite;
                    display: inline-block;
                }
                @keyframes intro-scale-fade {
                    to { transform: scale(1.06) translateY(-20px); opacity: 0; }
                }
                .intro-open { animation: intro-scale-fade 1.1s ease-in forwards; }
            `}</style>

            {/* 소프트 보케 배경 */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-80 h-80 rounded-full"
                    style={{ top: '-8%', left: '-18%', background: 'radial-gradient(circle, rgba(255,185,210,0.32) 0%, transparent 70%)', filter: 'blur(40px)' }} />
                <div className="absolute w-72 h-72 rounded-full"
                    style={{ top: '3%', right: '-15%', background: 'radial-gradient(circle, rgba(255,195,215,0.28) 0%, transparent 70%)', filter: 'blur(38px)' }} />
                <div className="absolute w-96 h-96 rounded-full"
                    style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,225,195,0.22) 0%, transparent 70%)', filter: 'blur(48px)' }} />
                <div className="absolute w-56 h-56 rounded-full"
                    style={{ bottom: '30%', right: '-8%', background: 'radial-gradient(circle, rgba(248,200,218,0.25) 0%, transparent 70%)', filter: 'blur(28px)' }} />
            </div>

            {/* 상단 벚꽃 나뭇가지 SVG */}
            <svg viewBox="0 0 380 225" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '225px', pointerEvents: 'none', overflow: 'visible' }}>

                {/* ── 왼쪽 가지 ── */}
                <path d="M-5 -5 C12 28 25 65 36 145" stroke="#7a9860" strokeWidth="1.9" fill="none" opacity="0.68" strokeLinecap="round" />
                <path d="M17 42 C44 27 78 35 99 54" stroke="#7a9860" strokeWidth="1.35" fill="none" opacity="0.6" strokeLinecap="round" />
                <path d="M29 88 C54 74 82 82 104 98" stroke="#7a9860" strokeWidth="1.05" fill="none" opacity="0.54" strokeLinecap="round" />
                <path d="M21 55 C29 46 37 49 41 59" stroke="#7a9860" strokeWidth="0.85" fill="none" opacity="0.5" strokeLinecap="round" />
                {/* 잎 */}
                <path d="M19 46 C24 37 33 40 29 46 C27 50 19 50 19 46Z" fill="#93b87a" opacity="0.54" />
                <path d="M27 72 C32 63 41 66 37 72 C35 76 27 76 27 72Z" fill="#93b87a" opacity="0.5" />
                <path d="M62 33 C67 25 75 29 71 35 C69 39 62 38 62 34Z" fill="#93b87a" opacity="0.46" />
                {/* 꽃 */}
                <Blossom cx={99} cy={54} s={1.18} op={0.92} r={15} />
                <Blossom cx={81} cy={46} s={0.9} op={0.8} r={-20} />
                <Blossom cx={104} cy={98} s={1.08} op={0.88} r={5} />
                <Blossom cx={85} cy={91} s={0.8} op={0.74} r={30} />
                <Blossom cx={41} cy={59} s={0.74} op={0.7} r={-10} />
                <Blossom cx={25} cy={32} s={0.84} op={0.74} r={20} />
                <Blossom cx={36} cy={145} s={0.97} op={0.82} r={-5} />
                <Blossom cx={54} cy={138} s={0.72} op={0.65} r={18} />

                {/* ── 오른쪽 가지 (x=380 기준 좌우 반전) ── */}
                <path d="M385 -5 C368 28 355 65 344 145" stroke="#7a9860" strokeWidth="1.9" fill="none" opacity="0.68" strokeLinecap="round" />
                <path d="M363 42 C336 27 302 35 281 54" stroke="#7a9860" strokeWidth="1.35" fill="none" opacity="0.6" strokeLinecap="round" />
                <path d="M351 88 C326 74 298 82 276 98" stroke="#7a9860" strokeWidth="1.05" fill="none" opacity="0.54" strokeLinecap="round" />
                <path d="M359 55 C351 46 343 49 339 59" stroke="#7a9860" strokeWidth="0.85" fill="none" opacity="0.5" strokeLinecap="round" />
                {/* 잎 */}
                <path d="M361 46 C356 37 347 40 351 46 C353 50 361 50 361 46Z" fill="#93b87a" opacity="0.54" />
                <path d="M353 72 C348 63 339 66 343 72 C345 76 353 76 353 72Z" fill="#93b87a" opacity="0.5" />
                <path d="M318 33 C313 25 305 29 309 35 C311 39 318 38 318 34Z" fill="#93b87a" opacity="0.46" />
                {/* 꽃 */}
                <Blossom cx={281} cy={54} s={1.18} op={0.92} r={-15} />
                <Blossom cx={299} cy={46} s={0.9} op={0.8} r={20} />
                <Blossom cx={276} cy={98} s={1.08} op={0.88} r={-5} />
                <Blossom cx={295} cy={91} s={0.8} op={0.74} r={-30} />
                <Blossom cx={339} cy={59} s={0.74} op={0.7} r={10} />
                <Blossom cx={355} cy={32} s={0.84} op={0.74} r={-20} />
                <Blossom cx={344} cy={145} s={0.97} op={0.82} r={5} />
                <Blossom cx={326} cy={138} s={0.72} op={0.65} r={-18} />

                {/* ── 중앙 연결 아치 ── */}
                <path d="M106 52 C145 22 175 16 190 14 C205 12 235 16 274 50" stroke="#7a9860" strokeWidth="0.9" fill="none" opacity="0.36" strokeLinecap="round" />
                <Blossom cx={164} cy={19} s={0.88} op={0.74} r={0} />
                <Blossom cx={190} cy={13} s={0.8} op={0.67} r={5} />
                <Blossom cx={216} cy={17} s={0.85} op={0.7} r={-8} />

                {/* 흩날리는 꽃잎 */}
                <ellipse cx="130" cy="170" rx="4.5" ry="2.8" fill="#fcd8e8" opacity="0.42" transform="rotate(28 130 170)" />
                <ellipse cx="250" cy="158" rx="4" ry="2.6" fill="#f8c5de" opacity="0.38" transform="rotate(-32 250 158)" />
                <ellipse cx="170" cy="195" rx="3.5" ry="2.2" fill="#fcd8e8" opacity="0.35" transform="rotate(48 170 195)" />
                <ellipse cx="215" cy="182" rx="4" ry="2.5" fill="#f8c5de" opacity="0.35" transform="rotate(-18 215 182)" />
                <ellipse cx="80" cy="155" rx="3.2" ry="2" fill="#fce0ec" opacity="0.32" transform="rotate(15 80 155)" />
                <ellipse cx="302" cy="150" rx="3" ry="2" fill="#fce0ec" opacity="0.32" transform="rotate(-15 302 150)" />
            </svg>

            {/* 상단 플로럴 영역 공백 확보 */}
            <div style={{ height: '220px' }} className="flex-shrink-0" />

            {/* 경고 안내 카드 */}
            <div className="relative z-10 flex justify-center px-6 mb-1">
                <div className="flex items-start gap-2.5 px-4 py-2.5 rounded-2xl"
                    style={{ background: 'rgba(255, 238, 248, 0.88)', border: '1px solid rgba(200, 148, 170, 0.28)', backdropFilter: 'blur(6px)' }}>
                    <TriangleAlert size={14} className="text-rose-400 mt-0.5 flex-shrink-0 icon-shake" />
                    <p className="text-stone-600 text-[12.5px] leading-relaxed">
                        가족식(스몰웨딩)이라{' '}
                        <span className="text-warn text-rose-500 font-semibold">하객 없이</span>{' '}
                        진행됩니다. 축하 방명록만 남겨주세요. 💌
                    </p>
                </div>
            </div>

            {/* 메인 콘텐츠 */}
            <div className={`relative z-10 flex-1 flex flex-col items-center justify-center pb-24 transition-all duration-1000 ${isOpen ? 'scale-105 opacity-0 -translate-y-4' : 'scale-100 opacity-100'}`}>
                {/* 장식 구분선 */}
                <div className="flex items-center gap-3 mb-7 opacity-55">
                    <div className="h-px w-14" style={{ background: 'linear-gradient(to right, transparent, #c4a080)' }} />
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
                    <div className="h-px w-14" style={{ background: 'linear-gradient(to left, transparent, #c4a080)' }} />
                </div>

                <h1 className="text-5xl font-serif text-stone-700 mb-4 tracking-widest text-center px-8">
                    태구 <span className="mx-1" style={{ color: '#bf7a9a' }}>&</span> 희영
                </h1>
                <p className="text-stone-400 text-sm tracking-[0.3em] mb-2 font-light">2026. 03. 13. FRI</p>
                <p className="text-stone-300 text-xs tracking-[0.25em] mb-12 font-light">11:30 AM</p>

                <button
                    onPointerDown={handleOpen}
                    disabled={isProcessing}
                    style={{
                        touchAction: 'manipulation',
                        background: 'linear-gradient(135deg, #6b3a4a 0%, #4a2535 100%)',
                        border: '1px solid rgba(200, 148, 168, 0.38)'
                    }}
                    className="group relative px-12 py-4 rounded-full overflow-hidden shadow-lg shadow-rose-900/20 select-none active:opacity-88"
                >
                    <div className="absolute inset-0 bg-rose-300/10 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-full" />
                    <span className="relative flex items-center space-x-3 text-stone-100">
                        {isProcessing ? (
                            <div className="w-4 h-4 border-2 border-rose-200 border-t-rose-400 rounded-full animate-spin" />
                        ) : (
                            <Heart size={18} className="text-rose-300 animate-pulse fill-rose-300/20" />
                        )}
                        <span className="tracking-[0.2em] text-[15px] font-medium">
                            {isProcessing ? '열리는 중...' : '초대장 열어보기'}
                        </span>
                    </span>
                </button>
            </div>

            {/* 하단 플로럴 가지 */}
            <svg viewBox="0 0 380 88" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '88px', pointerEvents: 'none', overflow: 'visible' }}>
                <path d="M-10 64 C55 46 125 40 190 42 C255 44 325 50 390 64" stroke="#7a9860" strokeWidth="1.25" fill="none" opacity="0.44" strokeLinecap="round" />
                <Blossom cx={88} cy={49} s={0.8} op={0.65} r={10} />
                <Blossom cx={152} cy={43} s={0.74} op={0.6} r={-15} />
                <Blossom cx={228} cy={43} s={0.8} op={0.65} r={8} />
                <Blossom cx={288} cy={48} s={0.74} op={0.6} r={-12} />
                <path d="M176 45 C180 36 188 40 184 46 C182 50 176 49 176 45Z" fill="#93b87a" opacity="0.44" />
                <path d="M252 43 C256 35 264 38 260 44 C258 48 252 47 252 43Z" fill="#93b87a" opacity="0.41" />
            </svg>
        </div>
    );
}
