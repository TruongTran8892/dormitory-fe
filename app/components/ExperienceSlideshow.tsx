"use client";

import { useEffect, useMemo, useState } from "react";
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

export default function ExperienceSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);

  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, isLightboxOpen]);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

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
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/45 text-white hover:bg-black/65 transition"
            >
              ←
            </button>

            <button
              type="button"
              aria-label="Xem ảnh tiếp theo"
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-black/45 text-white hover:bg-black/65 transition"
            >
              →
            </button>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="group relative block w-full text-left"
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
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? "w-8 bg-premium-gold" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/90 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            className="absolute right-6 top-5 text-white text-3xl leading-none"
            aria-label="Đóng xem ảnh"
            onClick={() => setIsLightboxOpen(false)}
          >
            ×
          </button>
          <div className="relative h-full w-full">
            <Image
              src={currentSrc}
              alt={currentSlide.alt}
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
