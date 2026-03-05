import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const quizData = [
    {
        question: "태구와 희영이 처음 만난 곳은?",
        options: ["제주도 여행", "대학교 동아리", "회사 프로젝트", "친구의 소개"],
        answer: 3
    },
    {
        question: "두 사람이 가장 좋아하는 데이트 음식은?",
        options: ["달달한 마카롱", "매콤한 떡볶이", "기름진 삼겹살", "시원한 평양냉면"],
        answer: 1
    },
    {
        question: "태구가 희영에게 프로포즈한 장소는?",
        options: ["한강 유람선", "처음 만난 카페", "집 앞 놀이터", "아직 안 함(!)"],
        answer: 2
    }
];

export default function CoupleQuiz() {
    const [ref, isVisible] = useScrollReveal();
    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleOptionClick = (index) => {
        if (selected !== null) return;
        setSelected(index);

        setTimeout(() => {
            if (index === quizData[currentQ].answer) setScore(s => s + 1);

            if (currentQ < quizData.length - 1) {
                setCurrentQ(q => q + 1);
                setSelected(null);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    return (
        <section className="py-24 bg-stone-100/50 px-6" id="quiz">
            <div ref={ref} className={`max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-8">
                    <span className="text-xs font-bold tracking-widest text-rose-400 bg-rose-50 px-3 py-1 rounded-full">MINI EVENT</span>
                    <h2 className="text-xl font-serif mt-4 text-stone-800 font-bold">신랑 신부 모의고사</h2>
                    <p className="text-stone-600 text-sm mt-2 font-medium">우리를 얼마나 잘 알고 계신가요?</p>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200">
                    {!showResult ? (
                        <div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-sm font-bold text-stone-500">Q {currentQ + 1} / {quizData.length}</span>
                                <div className="flex space-x-1">
                                    {quizData.map((_, i) => (
                                        <div key={i} className={`h-1.5 w-6 rounded-full ${i <= currentQ ? 'bg-rose-300' : 'bg-stone-100'}`} />
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-stone-800 mb-6 break-keep">{quizData[currentQ].question}</h3>
                            <div className="space-y-3">
                                {quizData[currentQ].options.map((opt, i) => {
                                    let btnClass = "w-full text-left px-5 py-4 rounded-xl border text-sm transition-all ";
                                    if (selected === null) {
                                        btnClass += "border-stone-300 text-stone-700 font-medium hover:bg-stone-50 hover:border-stone-400";
                                    } else {
                                        if (i === quizData[currentQ].answer) {
                                            btnClass += "bg-emerald-50 border-emerald-200 text-emerald-700 font-medium";
                                        } else if (i === selected) {
                                            btnClass += "bg-rose-50 border-rose-200 text-rose-700";
                                        } else {
                                            btnClass += "border-stone-100 text-stone-300 opacity-50";
                                        }
                                    }

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => handleOptionClick(i)}
                                            className={btnClass}
                                            disabled={selected !== null}
                                        >
                                            {opt}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="w-20 h-20 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl font-bold text-rose-400">{score * 33 + 1}점</span>
                            </div>
                            <h3 className="text-xl font-medium text-stone-800 mb-2">
                                {score === 3 ? "완벽해요! 우리들의 찐친 인증 👏" : score === 2 ? "오! 제법 잘 알고 계시네요 😉" : "괜찮아요, 식장에서 더 알아가요 🤍"}
                            </h3>
                            <p className="text-stone-600 font-medium text-sm mb-6">참여해주셔서 감사합니다.</p>
                            <button
                                onClick={() => { setCurrentQ(0); setScore(0); setShowResult(false); setSelected(null); }}
                                className="text-sm text-stone-600 font-bold underline underline-offset-4"
                            >
                                다시 풀어보기
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
