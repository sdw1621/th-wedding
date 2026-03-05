import React from 'react';
import { MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Location() {
    const [ref, isVisible] = useScrollReveal();

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
            <div ref={ref} className={`max-w-lg mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-10">
                    <MapPin className="mx-auto text-stone-300 mb-4" size={24} />
                    <h2 className="text-xl font-serif tracking-widest text-stone-800">식사 자리 안내</h2>
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 mb-6">
                    <div className="w-full h-48 bg-stone-100 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
                        {/* 가짜 지도 이미지 처리 */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-30 grayscale blur-[1px]"></div>
                        <div className="relative bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-stone-700 shadow-sm flex items-center">
                            <MapPin size={16} className="text-rose-500 mr-2" /> 메이필드 호텔 봉래헌
                        </div>
                    </div>

                    <div className="text-center space-y-2 mb-6">
                        <h3 className="font-bold text-stone-800 text-lg">메이필드 호텔 봉래헌</h3>
                        <p className="text-sm text-stone-500">서울 강서구 방화대로 94 메이필드호텔</p>
                        <p className="text-sm text-stone-500">02-2660-9020</p>
                        <p className="text-xs text-stone-400 mt-1">(주차: 메이필드 호텔 내 주차장 이용)</p>
                    </div>

                    <div className="flex space-x-2">
                        <button onClick={openNaverMap} className="flex-1 py-3 bg-[#00C73C] text-white text-sm font-bold rounded-xl flex justify-center items-center hover:bg-[#00b336] transition-colors">
                            네이버 지도
                        </button>
                        <button onClick={openKakaoMap} className="flex-1 py-3 bg-[#FAE100] text-[#391B1B] text-sm font-bold rounded-xl flex justify-center items-center hover:bg-[#f0d700] transition-colors">
                            카카오맵
                        </button>
                        <button onClick={openTmap} className="flex-1 py-3 bg-stone-800 text-white text-sm font-bold rounded-xl flex justify-center items-center hover:bg-stone-700 transition-colors">
                            티맵
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
