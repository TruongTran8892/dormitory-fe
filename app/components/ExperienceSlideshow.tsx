"use client";

import { useEffect, useMemo, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";

type Slide = {
  driveId: string;
  alt: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    driveId: "1u0fQAtsaMxomFxSw4gILDNDij6P_7l8u",
    alt: "Không gian phòng ở riêng tư, thiết kế hiện đại tại Nấm's Dormitory",
    title: "Không gian lưu trú riêng tư",
    description: "Thiết kế tối ưu cho học tập và nghỉ ngơi, giữ sự riêng tư cần thiết cho từng bạn.",
  },
  {
    driveId: "1rIC-dIWS8dxRhYK-dzIxo4ciLVNw3n16",
    alt: "Khu vực giường ngủ gọn gàng, sạch sẽ và tiện nghi",
    title: "Giường ngủ êm ái, bố trí khoa học",
    description: "Khu ngủ được bố trí hợp lý, ánh sáng dịu mắt và đảm bảo sự thoải mái mỗi ngày.",
  },
  {
    driveId: "1I9dcJ9OHhBTX32Iu7-FBxoHlcTqzoAwa",
    alt: "Khu vực sinh hoạt chung tại Nấm's Dormitory",
    title: "Sinh hoạt chung văn minh",
    description: "Không gian chung rộng rãi, tạo cảm giác gần gũi nhưng vẫn giữ được sự ngăn nắp.",
  },
  {
    driveId: "1RgUhw9ukrknUVuTp0hALRnAHiTOZeAoY",
    alt: "Nội thất hiện đại, gam màu ấm và sạch",
    title: "Nội thất hiện đại, tông màu dễ chịu",
    description: "Phong cách tối giản cao cấp giúp không gian luôn thoáng và dễ chịu khi ở lâu dài.",
  },
  {
    driveId: "1jTqAsVdV_vMVkRpF6bdLp4u28ikxDHD2",
    alt: "Khu vực tiện ích với đầy đủ trang thiết bị",
    title: "Tiện ích đầy đủ trong tầm tay",
    description: "Máy lạnh, khu giặt, khu để đồ và các tiện ích thiết yếu được bố trí thuận tiện.",
  },
  {
    driveId: "1CkSsCVQraHQOPYo2IrqR45jUTOb4wm3z",
    alt: "Góc học tập yên tĩnh tại Nấm's Dormitory",
    title: "Góc học tập tập trung",
    description: "Không gian phù hợp cho việc học, làm việc online và sinh hoạt cá nhân hằng ngày.",
  },
  {
    driveId: "12Q7nMFYhk1493QZnUIzlv5kecZDkhhPO",
    alt: "Không gian sống sạch sẽ, gọn gàng, an toàn",
    title: "Sạch sẽ và an toàn",
    description: "Vận hành chú trọng vệ sinh định kỳ và tiêu chuẩn an toàn cho cư dân sinh viên.",
  },
  {
    driveId: "1d6hDi2vYZjhTKP9IsTnQKEfUm0Mw-ZiA",
    alt: "Không gian thực tế tại Nấm's Dormitory với chất lượng hoàn thiện tốt",
    title: "Hình ảnh thực tế, trải nghiệm thật",
    description: "Những góc chụp thực tế giúp bạn đánh giá rõ chất lượng không gian trước khi đặt chỗ.",
  },
];

const AUTO_PLAY_MS = 4500;
const SWIPE_MIN_PX = 50;

export default function ExperienceSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const lightboxTouchStart = useRef<{ x: number; y: number } | null>(null);

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);

  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setCurrentIndex((p) => (p - 1 + slides.length) % slides.length);
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((p) => (p + 1) % slides.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen]);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  const onLightboxTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const t = e.targetTouches[0];
    lightboxTouchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onLightboxTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = lightboxTouchStart.current;
    lightboxTouchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < SWIPE_MIN_PX) return;
    if (Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) goPrev();
    else goNext();
  };

  // Google Drive thumbnail endpoint is served by Google CDN and can negotiate modern formats.
  const currentSrc = `https://drive.google.com/thumbnail?id=${currentSlide.driveId}&sz=w2000`;

  return (
    <>
      <section id="real-experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-premium-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Trải nghiệm trực quan
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Hình ảnh thực tế không gian lưu trú
            </h2>
            <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
              Tất cả hình ảnh đều là tư liệu thực tế từ Nấm&apos;s Dormitory, giúp bạn đánh giá rõ
              không gian trước khi đến xem trực tiếp.
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button
              type="button"
              aria-label="Xem ảnh trước"
              onClick={goPrev}
              className="chill-arrow-y absolute left-4 top-1/2 z-20 h-11 w-11 rounded-full bg-black/45 text-white hover:bg-black/65"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Xem ảnh tiếp theo"
              onClick={goNext}
              className="chill-arrow-y absolute right-4 top-1/2 z-20 h-11 w-11 rounded-full bg-black/45 text-white hover:bg-black/65"
            >
              →
            </button>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="chill-transition group relative block w-full text-left rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-premium-gold/50"
              aria-label="Mở ảnh toàn màn hình"
            >
              <div className="relative h-[300px] sm:h-[420px] md:h-[560px]">
                <Image
                  src={currentSrc}
                  alt={currentSlide.alt}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 md:p-8">
                <h3 className="text-white text-xl md:text-2xl font-bold">{currentSlide.title}</h3>
                <p className="mt-2 text-stone-200 text-sm md:text-base max-w-3xl">
                  {currentSlide.description}
                </p>
              </div>
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.driveId}
                type="button"
                aria-label={`Đi tới ảnh ${idx + 1}`}
                onClick={() => setCurrentIndex(idx)}
                  className={`chill-transition h-2.5 rounded-full ${
                  idx === currentIndex
                    ? "w-8 bg-premium-gold"
                    : "chill-tap w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 px-1 pt-14 pb-4 sm:px-3 md:p-8 md:pt-20"
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh lớn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsLightboxOpen(false);
          }}
        >
          <button
            type="button"
            className="chill-transition chill-tap absolute right-4 top-4 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white hover:bg-white/20"
            aria-label="Đóng xem ảnh"
            onClick={(e) => {
              e.stopPropagation();
              setIsLightboxOpen(false);
            }}
          >
            <svg aria-hidden width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="block shrink-0">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <p className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-white/80 text-xs tracking-widest tabular-nums">
            {currentIndex + 1} / {slides.length}
          </p>

          <div
            className="relative mx-auto h-[min(85vh,calc(100vh-5rem))] min-h-0 w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative h-full w-full touch-pan-y select-none"
              onTouchStart={onLightboxTouchStart}
              onTouchEnd={onLightboxTouchEnd}
              onTouchCancel={() => {
                lightboxTouchStart.current = null;
              }}
            >
              <Image
                src={currentSrc}
                alt={currentSlide.alt}
                fill
                unoptimized
                className="object-contain pointer-events-none"
                sizes="100vw"
              />
            </div>

            <button
              type="button"
              aria-label="Ảnh trước"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="chill-arrow-y absolute left-2 top-1/2 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-sm hover:bg-black/65 sm:left-3 sm:h-11 sm:w-11 border border-white/15"
            >
              <span aria-hidden className="text-lg leading-none">
                ←
              </span>
            </button>

            <button
              type="button"
              aria-label="Ảnh tiếp theo"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="chill-arrow-y absolute right-2 top-1/2 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-sm hover:bg-black/65 sm:right-3 sm:h-11 sm:w-11 border border-white/15"
            >
              <span aria-hidden className="text-lg leading-none">
                →
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
