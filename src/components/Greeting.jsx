import React from 'react';
import { Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Greeting() {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section className="py-24 px-6 text-center" id="greeting">
            <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Heart className="mx-auto text-rose-400 mb-8" size={32} strokeWidth={1.5} />
                <h2 className="text-xl font-serif tracking-widest mb-12 text-stone-800 font-bold">결혼합니다</h2>
                <div className="space-y-6 text-stone-700 leading-relaxed text-[15px] break-keep font-medium">
                    <p>서로를 마주 보며 다져온 인연을<br />이제는 함께 같은 곳을 바라보며<br />걸어가려 합니다.</p>
                    <p>화려하고 거창한 예식보다는<br />진실한 약속을 나누는 자리가 더 뜻깊다고 생각하여,<br />가족분들만 모시고 조촐한 식사 자리로<br />결혼식을 대신하게 되었습니다.</p>
                    <p>부득이하게 많은 분들을 모시지 못해<br />송구하고 아쉬운 마음이 크지만,<br />멀리서나마 저희의 새로운 출발을 축복해 주신다면<br />그 마음 깊이 간직하며 예쁘게 잘 살겠습니다.</p>
                </div>

                <div className="mt-16 space-y-4 text-[15px] text-stone-800 font-bold">
                    <p>강영태 · 김경자 <span className="text-stone-500 font-normal mx-2">의 아들</span> 강태구</p>
                    <p>신현갑 · 송현숙 <span className="text-stone-500 font-normal mx-2">의 딸</span> 신희영</p>
                </div>
            </div>
        </section>
    );
}
