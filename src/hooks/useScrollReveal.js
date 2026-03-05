import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // 카카오톡 등 인앱 브라우저에서 스크롤 감지가 무시되는 현상 방지용 안전 타이머
        const fallbackTimer = setTimeout(() => setIsVisible(true), 800);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    clearTimeout(fallbackTimer);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            observer.disconnect();
            clearTimeout(fallbackTimer);
        };
    }, []);

    return [ref, isVisible];
};
