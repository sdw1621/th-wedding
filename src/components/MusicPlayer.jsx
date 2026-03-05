import React, { useState, useRef, useEffect } from 'react';
import Music from 'lucide-react/dist/esm/icons/music';
import Volume2 from 'lucide-react/dist/esm/icons/volume-2';
import VolumeX from 'lucide-react/dist/esm/icons/volume-x';

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // 유저가 요청한 배경음악 파일 사용
    const BGM_URL = `${import.meta.env.BASE_URL}bgm.mp3`;

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Auto-play blocked by browser"));
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.35; // 볼륨 35% 설정

            // 브라우저 정책상 첫 상호작용 후 재생 가능하므로 시도
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log("Autoplay waiting for interaction...");
                    setIsPlaying(false);
                });
            }
        }
    }, []);

    return (
        <div className="fixed top-6 right-6 z-50">
            <audio ref={audioRef} src={BGM_URL} loop />
            <button
                onClick={togglePlay}
                className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-stone-200 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-all text-stone-600"
                title={isPlaying ? "음악 끄기" : "음악 켜기"}
            >
                {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} className="text-stone-400" />}
            </button>
            <div className={`absolute top-0 right-0 -z-10 w-10 h-10 rounded-full bg-rose-100/50 animate-ping ${!isPlaying && 'hidden'}`}></div>
        </div>
    );
}
