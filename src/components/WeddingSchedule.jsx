import React, { useState, useEffect, useRef, useCallback, forwardRef } from 'react';
import FileText from 'lucide-react/dist/esm/icons/file-text';
import X from 'lucide-react/dist/esm/icons/x';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import HTMLFlipBook from 'react-pageflip';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PDF_URL = `${import.meta.env.BASE_URL}결혼식 식순 v3.pdf`;

// react-pageflip은 children에 forwardRef 컴포넌트 필요
const Page = forwardRef(({ src, pageNum }, ref) => (
    <div ref={ref} className="page-content bg-white">
        <img src={src} alt={`식순 ${pageNum}페이지`} className="w-full h-full object-contain" draggable={false} />
    </div>
));

export default function WeddingSchedule() {
    const [ref, isVisible] = useScrollReveal();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const flipBookRef = useRef(null);

    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('nav-hidden');
        } else {
            document.body.classList.remove('nav-hidden');
        }
    }, [isModalOpen]);

    // PDF 로드 및 페이지 이미지 변환
    const loadPdf = useCallback(async () => {
        if (pages.length > 0) return; // 이미 로드됨
        setLoading(true);

        try {
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
                'pdfjs-dist/build/pdf.worker.min.mjs',
                import.meta.url
            ).toString();

            const pdf = await pdfjsLib.getDocument(PDF_URL).promise;
            const numPages = pdf.numPages;
            setTotalPages(numPages);

            const pageImages = [];
            // 모바일 최적화: 화면 크기에 맞는 해상도
            const scale = Math.min(window.devicePixelRatio || 1, 2);

            for (let i = 1; i <= numPages; i++) {
                const page = await pdf.getPage(i);
                const viewport = page.getViewport({ scale: scale * 1.5 });

                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext('2d');

                await page.render({ canvasContext: ctx, viewport }).promise;
                pageImages.push(canvas.toDataURL('image/jpeg', 0.85));
                page.cleanup();
            }

            setPages(pageImages);
        } catch (err) {
            console.error('PDF 로드 실패:', err);
        } finally {
            setLoading(false);
        }
    }, [pages.length]);

    const handleOpen = () => {
        setIsModalOpen(true);
        loadPdf();
    };

    const handleFlip = (e) => {
        setCurrentPage(e.data);
    };

    const goNext = () => {
        flipBookRef.current?.pageFlip()?.flipNext();
    };

    const goPrev = () => {
        flipBookRef.current?.pageFlip()?.flipPrev();
    };

    // 책 크기 계산 - 화면 높이를 최대한 활용
    const maxHeight = window.innerHeight - 120; // 상단 인디케이터 + 하단 버튼 공간
    const widthFromScreen = Math.min(window.innerWidth - 24, 440);
    const heightFromWidth = Math.round(widthFromScreen * 1.414);
    const bookHeight = Math.min(heightFromWidth, maxHeight);
    const bookWidth = Math.round(bookHeight / 1.414);

    return (
        <section className="py-24 bg-stone-100/50 px-6" id="schedule">
            <div ref={ref} className={`max-w-md mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="text-center mb-8">
                    <FileText className="mx-auto text-rose-200 mb-4" size={28} strokeWidth={1.5} />
                    <h2 className="text-xl font-serif text-stone-800 font-bold">결혼식 식순</h2>
                    <p className="text-stone-600 text-sm mt-2 font-medium">따뜻하고 경건한 예식을 준비했습니다.</p>
                </div>

                <div className="flex justify-center">
                    <button
                        onPointerDown={handleOpen}
                        style={{ touchAction: 'manipulation' }}
                        className="bg-white/90 border border-stone-200 text-stone-700 px-8 py-3.5 rounded-full text-[14px] font-bold shadow-sm active:bg-stone-100 select-none flex items-center justify-center transform-none"
                    >
                        <FileText size={16} className="mr-2 text-rose-400" />
                        결혼식 식순 미리보기
                    </button>
                </div>
            </div>

            {/* Book Viewer Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center animate-in fade-in duration-300"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsModalOpen(false);
                    }}
                >
                    {/* 닫기 버튼 */}
                    <div className="absolute top-3 right-3 z-10">
                        <button
                            className="text-white/70 active:text-white p-2 select-none"
                            style={{ touchAction: 'manipulation' }}
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X size={28} />
                        </button>
                    </div>

                    {/* 로딩 */}
                    {loading && (
                        <div className="flex flex-col items-center space-y-4">
                            <div className="w-10 h-10 border-3 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <p className="text-white/70 text-sm font-medium">식순을 불러오는 중...</p>
                        </div>
                    )}

                    {/* 책 뷰어 */}
                    {!loading && pages.length > 0 && (
                        <div className="flex flex-col items-center w-full" onClick={(e) => e.stopPropagation()}>
                            {/* 페이지 인디케이터 */}
                            <div className="text-white/60 text-xs font-medium mb-1 tracking-wider">
                                {currentPage + 1} / {totalPages}
                            </div>

                            {/* FlipBook */}
                            <div className="flipbook-container">
                                <HTMLFlipBook
                                    ref={flipBookRef}
                                    width={bookWidth}
                                    height={bookHeight}
                                    size="stretch"
                                    minWidth={250}
                                    maxWidth={500}
                                    minHeight={350}
                                    maxHeight={maxHeight}
                                    showCover={true}
                                    mobileScrollSupport={false}
                                    usePortrait={true}
                                    startPage={0}
                                    drawShadow={true}
                                    maxShadowOpacity={0.3}
                                    flippingTime={600}
                                    useMouseEvents={true}
                                    swipeDistance={30}
                                    showPageCorners={true}
                                    clickEventForward={false}
                                    disableFlipByClick={false}
                                    onFlip={handleFlip}
                                    className="flipbook"
                                    style={{}}
                                >
                                    {pages.map((src, i) => (
                                        <Page key={i} src={src} pageNum={i + 1} />
                                    ))}
                                </HTMLFlipBook>
                            </div>

                            {/* 좌우 넘기기 버튼 */}
                            <div className="flex items-center justify-center space-x-6 mt-2">
                                <button
                                    onClick={goPrev}
                                    disabled={currentPage === 0}
                                    style={{ touchAction: 'manipulation' }}
                                    className="p-3 rounded-full bg-white/10 text-white disabled:opacity-20 active:bg-white/20 select-none"
                                >
                                    <ChevronLeft size={22} />
                                </button>

                                <p className="text-white/40 text-[11px] font-medium">좌우로 넘겨보세요</p>

                                <button
                                    onClick={goNext}
                                    disabled={currentPage >= totalPages - 1}
                                    style={{ touchAction: 'manipulation' }}
                                    className="p-3 rounded-full bg-white/10 text-white disabled:opacity-20 active:bg-white/20 select-none"
                                >
                                    <ChevronRight size={22} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
