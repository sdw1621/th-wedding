import React, { useEffect, useState } from 'react';

export default function Petals() {
    const [petals, setPetals] = useState([]);

    useEffect(() => {
        const petalCount = 15; // 심플한 느낌을 위해 적은 수 유지
        const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
            id: i,
            left: Math.random() * 100 + '%',
            delay: Math.random() * 10 + 's',
            duration: 10 + Math.random() * 15 + 's',
            size: 10 + Math.random() * 15 + 'px',
            opacity: 0.4 + Math.random() * 0.4,
        }));
        setPetals(newPetals);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
            {petals.map(petal => (
                <div
                    key={petal.id}
                    className="petal"
                    style={{
                        left: petal.left,
                        animationDelay: petal.delay,
                        animationDuration: petal.duration,
                        width: petal.size,
                        height: petal.size,
                        opacity: petal.opacity,
                        background: 'radial-gradient(circle, #ffd1dc 0%, #fff 100%)',
                        borderRadius: '100% 0% 100% 0%',
                    }}
                />
            ))}
        </div>
    );
}
