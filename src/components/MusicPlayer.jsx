import React, { useState, useRef, useEffect } from 'react';
import Music from 'lucide-react/dist/esm/icons/music';
import Volume2 from 'lucide-react/dist/esm/icons/volume-2';
import VolumeX from 'lucide-react/dist/esm/icons/volume-x';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Play from 'lucide-react/dist/esm/icons/play';

export default function MusicPlayer({ forcePlay }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showPlaylist, setShowPlaylist] = useState(false);
    const audioRef = useRef(null);
    const [showInfo, setShowInfo] = useState(false);
    const playerRef = useRef(null);

    // BGM 리스트 정의
    const PLAYLIST = [
        { id: 1, name: 'Beautiful Day', url: `${import.meta.env.BASE_URL}bgm.mp3` },
        { id: 2, name: 'Wedding Waltz', url: `${import.meta.env.BASE_URL}bgm2.mp3` },
        { id: 3, name: 'Love Story', url: `${import.meta.env.BASE_URL}bgm3.mp3` },
        { id: 4, name: 'Marry You', url: `${import.meta.env.BASE_URL}bgm4.mp3` },
        { id: 5, name: 'Sweet Romance', url: `${import.meta.env.BASE_URL}bgm5.mp3` },
        { id: 6, name: 'Our First Step', url: `${import.meta.env.BASE_URL}bgm6.mp3` }
    ];

    const [currentTrackIndex, setCurrentTrackIndex] = useState(() => {
        return Math.floor(Math.random() * PLAYLIST.length);
    });

    const currentTrack = PLAYLIST[currentTrackIndex];

    // 인트로 강제 시작
    useEffect(() => {
        if (forcePlay && audioRef.current && !isPlaying) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    triggerIntroAnimation();
                })
                .catch(e => console.log("Init play failed"));
        }
    }, [forcePlay]);

    const triggerIntroAnimation = () => {
        setShowInfo(true);
        setTimeout(() => setShowInfo(false), 4000);
    };

    const togglePlay = (e) => {
        e.stopPropagation();
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                    triggerIntroAnimation();
                })
                .catch(e => setIsPlaying(false));
        }
    };

    const handleEnded = () => {
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * PLAYLIST.length);
        } while (nextIndex === currentTrackIndex && PLAYLIST.length > 1);
        setCurrentTrackIndex(nextIndex);
    };

    const selectTrack = (index) => {
        setCurrentTrackIndex(index);
        setShowPlaylist(false);
        // 트랙 변경 useEffect에서 재생 처리됨
    };

    useEffect(() => {
        if (audioRef.current && currentTrack) {
            audioRef.current.volume = 0.3;
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                    triggerIntroAnimation();
                }).catch(() => { });
            }
        }
    }, [currentTrackIndex]);

    const [hidePlayer, setHidePlayer] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setHidePlayer(document.body.classList.contains('music-hidden'));
        });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    // 플레이리스트 외부 터치/클릭 시 닫기
    useEffect(() => {
        if (!showPlaylist) return;
        const handler = (e) => {
            if (playerRef.current && !playerRef.current.contains(e.target)) {
                setShowPlaylist(false);
            }
        };
        document.addEventListener('pointerdown', handler);
        return () => document.removeEventListener('pointerdown', handler);
    }, [showPlaylist]);

    return (
        <div ref={playerRef} className={`fixed top-6 left-6 z-[100] flex flex-col items-start select-none transition-opacity duration-300 ${hidePlayer ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex items-center">
                <div className="relative group flex items-center bg-white/95 border border-stone-200 rounded-full shadow-md p-1 transition-all hover:shadow-lg">
                    <button
                        onPointerDown={() => setShowPlaylist(!showPlaylist)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${showPlaylist ? 'bg-rose-100 text-rose-500' : 'hover:bg-stone-100 text-stone-500'}`}
                        title="재생 목록"
                    >
                        <Music size={18} />
                    </button>

                    <div className="w-[1px] h-4 bg-stone-200 mx-1"></div>

                    <button
                        onPointerDown={togglePlay}
                        className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-stone-100 text-stone-600 relative overflow-hidden"
                        title={isPlaying ? "음악 끄기" : "음악 켜기"}
                    >
                        {isPlaying ? <Volume2 size={18} className="text-rose-400" /> : <VolumeX size={18} className="text-stone-300" />}
                        {isPlaying && <div className="absolute inset-0 bg-rose-400/10 animate-pulse"></div>}
                    </button>

                    <audio ref={audioRef} src={currentTrack.url} onEnded={handleEnded} />
                </div>

                {/* 곡 정보 알림 (Now Playing) */}
                <div
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className={`ml-3 bg-white/95 px-5 py-2.5 rounded-full border border-rose-100 shadow-lg transition-all duration-700 ease-out flex items-center cursor-pointer hover:bg-rose-50/50 ${showInfo ? 'max-w-xs opacity-100 translate-x-0' : 'max-w-0 opacity-0 -translate-x-10 pointer-events-none px-0 overflow-hidden'}`}
                >
                    <div className="bg-rose-100 p-1.5 rounded-full mr-3 flex-shrink-0 animate-pulse">
                        <Music size={12} className="text-rose-500" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-[10px] text-rose-400 font-bold uppercase tracking-tighter leading-none mb-0.5">Now Playing</span>
                        <span className="text-[12px] font-bold text-stone-700 truncate whitespace-nowrap leading-tight">
                            BGM {currentTrack.id}: {currentTrack.name}
                        </span>
                    </div>
                </div>
            </div>

            {/* 재생 목록 모달/드롭다운 */}
            <div className={`mt-3 w-64 bg-white rounded-2xl border border-rose-100 shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top-left overflow-hidden ${showPlaylist ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 -translate-y-4 pointer-events-none'}`}>
                <div className="px-5 py-4 border-b border-stone-100 flex justify-between items-center bg-stone-50">
                    <h3 className="text-[11px] font-bold text-stone-400 uppercase tracking-widest">Playlist</h3>
                    <span className="text-[10px] text-rose-400 font-bold bg-rose-50 px-2 py-0.5 rounded-full">{currentTrackIndex + 1} / {PLAYLIST.length}</span>
                </div>

                <div className="p-1 max-h-72 overflow-y-auto custom-scrollbar">
                    {PLAYLIST.map((track, index) => {
                        const isCurrent = index === currentTrackIndex;
                        return (
                            <button
                                key={track.id}
                                onClick={() => selectTrack(index)}
                                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group/item ${isCurrent ? 'bg-rose-50/80 text-rose-600' : 'hover:bg-stone-50 text-stone-600'}`}
                            >
                                <div className={`w-7 h-7 rounded-full flex items-center justify-center mr-3 transition-all ${isCurrent ? 'bg-rose-500 text-white shadow-md shadow-rose-200' : 'bg-stone-100 text-stone-400 group-hover/item:bg-rose-100 group-hover/item:text-rose-400'}`}>
                                    {isCurrent && isPlaying ? (
                                        <div className="flex items-end space-x-0.5 h-3">
                                            <div className="w-0.5 bg-current animate-[music-bar_0.6s_ease-in-out_infinite]"></div>
                                            <div className="w-0.5 bg-current animate-[music-bar_0.8s_ease-in-out_infinite_0.1s]"></div>
                                            <div className="w-0.5 bg-current animate-[music-bar_0.5s_ease-in-out_infinite_0.2s]"></div>
                                        </div>
                                    ) : (
                                        <Play size={12} fill={isCurrent ? "currentColor" : "none"} />
                                    )}
                                </div>
                                <div className="flex flex-col items-start overflow-hidden">
                                    <span className={`text-[12px] font-bold truncate w-full ${isCurrent ? 'text-rose-600' : 'text-stone-700'}`}>
                                        {track.name}
                                    </span>
                                    <span className="text-[9px] text-stone-400 font-medium">BGM {track.id}</span>
                                </div>
                                {isCurrent && <ChevronRight size={14} className="ml-auto text-rose-300" />}
                            </button>
                        );
                    })}
                </div>

                {/* 하단 현재 트랙 강조 바 */}
                <div className="h-1 bg-stone-100 w-full relative">
                    <div
                        className="absolute h-full bg-rose-400 transition-all duration-700 ease-out shadow-[0_0_8px_rgba(251,113,133,0.5)]"
                        style={{
                            left: `${(currentTrackIndex / PLAYLIST.length) * 100}%`,
                            width: `${100 / PLAYLIST.length}%`
                        }}
                    ></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes music-bar {
                    0%, 100% { height: 4px; }
                    50% { height: 12px; }
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #ffe4e6;
                }
            `}} />
        </div>
    );
}
