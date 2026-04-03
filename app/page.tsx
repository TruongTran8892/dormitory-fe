import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "./components/BookingForm";
import ExperienceSlideshow from "./components/ExperienceSlideshow";
import MapEmbedFacade from "./components/MapEmbedFacade";
import RevealOnScroll from "./components/RevealOnScroll";
import { LocationTeardropIcon } from "./components/LocationTeardropIcon";
import { MAP_DIRECTIONS_URL, SITE_ADDRESS_QUERY } from "./site-config";

const HERO_IMAGE_DRIVE_ID = "1u0fQAtsaMxomFxSw4gILDNDij6P_7l8u";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "Nấm's Dormitory mang đến ký túc xá và căn hộ dịch vụ tại Thủ Đức với dịch vụ bao trọn gói, không gian sống tiện nghi và riêng tư cho sinh viên.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nấm's Dormitory - Ký túc xá & Căn hộ dịch vụ tại Thủ Đức",
    description:
      "Không gian sống 'Xịn - Mịn - Sang' với tiện ích đầy đủ, vị trí thuận tiện và dịch vụ minh bạch tại Thủ Đức.",
    url: "/",
    images: [
      {
        url: "/about-townhouse.jpg",
        width: 1024,
        height: 724,
        alt: "Nấm's Dormitory Thủ Đức — ký túc xá, căn hộ dịch vụ và chỗ ở sinh viên, KTX cao cấp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nấm's Dormitory - Ký túc xá & Căn hộ dịch vụ tại Thủ Đức",
    description:
      "Không gian sống 'Xịn - Mịn - Sang' với tiện ích đầy đủ, vị trí thuận tiện và dịch vụ minh bạch tại Thủ Đức.",
    images: ["/about-townhouse.jpg"],
  },
};

export default function Home() {
  return (
    <div className="text-neutral-800">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-24">
        <Image
          src={`https://drive.google.com/thumbnail?id=${HERO_IMAGE_DRIVE_ID}&sz=w2200`}
          alt="Ký túc xá và căn hộ dịch vụ Nấm's Dormitory Thủ Đức — không gian nội thất KTX cao cấp cho sinh viên"
          fill
          priority
          sizes="100vw"
          unoptimized
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay hero-overlay-anim" />

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <p className="hero-fade-up hero-fade-d1 text-premium-gold/95 font-semibold tracking-[0.24em] uppercase mb-5 text-[11px] md:text-sm">
              Không gian lưu trú cao cấp & tiện nghi bậc nhất
            </p>
            <h1 className="hero-fade-up hero-fade-d2 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 md:mb-10 leading-[1.1] sm:leading-[1.08] tracking-[-0.02em] max-w-4xl text-pretty">
              <span className="block not-italic font-black text-white whitespace-normal lg:whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.38)]">
                Ký túc xá & Căn hộ dịch vụ
              </span>
              <span className="block text-white font-black tracking-[0.005em] mt-3 text-[1.08em] md:text-[1.16em] leading-none">
                <span className="text-[#F3D9A6] font-black [text-shadow:-0.6px_0_0_rgba(0,0,0,0.7),0.6px_0_0_rgba(0,0,0,0.7),0_-0.6px_0_rgba(0,0,0,0.7),0_0.6px_0_rgba(0,0,0,0.7),0_2px_8px_rgba(0,0,0,0.35)] md:[text-shadow:-1px_0_0_rgba(0,0,0,0.85),1px_0_0_rgba(0,0,0,0.85),0_-1px_0_rgba(0,0,0,0.85),0_1px_0_rgba(0,0,0,0.85),-1px_-1px_0_rgba(0,0,0,0.75),1px_1px_0_rgba(0,0,0,0.75),-1px_1px_0_rgba(0,0,0,0.75),1px_-1px_0_rgba(0,0,0,0.75),0_4px_14px_rgba(0,0,0,0.5)]">
                  &quot;Chilling&quot;
                </span>{" "}
                <span className="whitespace-nowrap font-black [text-shadow:-0.6px_0_0_rgba(0,0,0,0.78),0.6px_0_0_rgba(0,0,0,0.78),0_-0.6px_0_rgba(0,0,0,0.78),0_0.6px_0_rgba(0,0,0,0.78),0_2px_8px_rgba(0,0,0,0.35)] md:[text-shadow:-1px_0_0_rgba(0,0,0,0.95),1px_0_0_rgba(0,0,0,0.95),0_-1px_0_rgba(0,0,0,0.95),0_1px_0_rgba(0,0,0,0.95),-1px_-1px_0_rgba(0,0,0,0.85),1px_1px_0_rgba(0,0,0,0.85),-1px_1px_0_rgba(0,0,0,0.85),1px_-1px_0_rgba(0,0,0,0.85),0_4px_14px_rgba(0,0,0,0.5),0_0_1px_rgba(255,255,255,0.2)]">
                  đỉnh cao.
                </span>
              </span>
            </h1>
            <p className="hero-fade-up hero-fade-d3 text-base md:text-xl mb-12 text-stone-200 leading-relaxed font-normal max-w-2xl border-l-2 border-premium-gold/80 pl-6">
              Bao trọn gói dịch vụ cao cấp, không lo phát sinh chi phí. Một không gian sống
              &quot;Xịn - Mịn - Sang&quot; dành riêng cho các bạn sinh viên văn minh.
            </p>
            <div className="hero-fade-up hero-fade-d4 flex flex-wrap gap-6">
              <a
                href="#location"
                className="chill-transition chill-lift inline-flex items-center bg-premium-gold hover:bg-[#b08d4a] text-white px-5 md:px-10 py-3.5 md:py-4 rounded-full text-[11px] md:text-sm font-bold uppercase tracking-[0.03em] md:tracking-widest shadow-lg hover:shadow-xl whitespace-nowrap leading-none"
              >
                <span className="md:hidden">Gần các ĐH trọng điểm</span>
                <span className="hidden md:inline">Kết nối nhanh đến các ĐH trọng điểm</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <ExperienceSlideshow />

      <section id="pod-details" className="py-24 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-premium-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Living, Better.
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              KTX Bao Trọn Gói Cao Cấp
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto italic font-light">
              Chỉ cần xách vali vào ở, mọi lo toan về hóa đơn hãy để chúng tôi lo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl card-shadow border border-stone-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-6 bg-premium-dark text-white p-5 rounded-full inline-block">
                🛏️
              </span>
              <h3 className="text-xl font-bold mb-3">Không gian riêng tư</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Pod ngủ riêng tư, full máy lạnh, bàn học âm, đèn đọc sách và hộc tủ riêng.
                Không gian yên tĩnh, gọn gàng và hiện đại.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl card-shadow border border-stone-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-6 bg-premium-gold text-white p-5 rounded-full inline-block">
                ⚡
              </span>
              <h3 className="text-xl font-bold mb-3">Điện, Nước, Wi-Fi Free</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Không còn lo hóa đơn cuối tháng. Free Wi-Fi tốc độ cao, điện lạnh 24/7 và nước
                sinh hoạt bao trọn.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl card-shadow border border-stone-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-6 bg-premium-dark text-white p-5 rounded-full inline-block">
                🧺
              </span>
              <h3 className="text-xl font-bold mb-3">Máy Giặt, Tủ Lạnh Xịn</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Trang bị máy giặt công suất lớn, tủ lạnh riêng cho từng pod hoặc khu vực. Đời
                sống tiện nghi, sạch sẽ.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl card-shadow border border-stone-100 flex flex-col items-center text-center">
              <span className="text-4xl mb-6 bg-premium-gold text-white p-5 rounded-full inline-block">
                📖
              </span>
              <h3 className="text-xl font-bold mb-3">Khu &quot;Chill&quot; & Sang Trọng</h3>
              <p className="text-stone-500 text-sm font-light leading-relaxed">
                Không gian sinh hoạt chung được thiết kế &quot;Chill&quot; bậc nhất. Gặp gỡ bạn
                bè, đọc sách, hay &quot;sống ảo&quot; ngay tại nhà.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="location" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-premium-gold font-bold tracking-[0.2em] uppercase text-xs mb-4">
                Location is Key
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-neutral-900">
                Vị trí &quot;Vàng&quot; Thủ Đức. <br />
                <span className="text-premium-gold text-[0.65em] font-extrabold">
                  Kết nối nhanh các Trường ĐH trọng điểm.
                </span>
              </h2>
              <p className="text-stone-600 mb-10 leading-[1.8] font-light max-w-md">
                Tiết kiệm thời gian di chuyển, tối đa thời gian nghỉ ngơi. Nấm&apos;s Dormitory tự hào sở
                hữu vị trí siêu thuận tiện, nằm ngay trái tim của cụm các trường Đại học lớn tại
                Thủ Đức/Quận 9.
              </p>
              <p className="text-sm text-neutral-700 font-semibold mb-3">
                Địa chỉ: {SITE_ADDRESS_QUERY}
              </p>
              <a
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="chill-transition chill-lift group inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-premium-gold mb-8 rounded-lg"
              >
                <LocationTeardropIcon className="h-6 w-6" />
                <span className="leading-normal">Chỉ đường trên Google Maps</span>
              </a>

              <ul className="space-y-5 text-sm font-medium text-neutral-700 italic border-l border-premium-gold pl-6">
                <li>📍 Gần ĐH Ngân hàng (2 phút đi bộ)</li>
                <li>📍 Gần Cao đẳng Công nghệ Thủ Đức (4 phút đi bộ)</li>
                <li>📍 Gần Cao đẳng kinh tế kỹ thuật Thủ Đức</li>
                <li>📍 Gần trường Cao đẳng nghề TP HCM (cơ sở 2)</li>
                <li>📍 Gần ĐH An ninh nhân dân</li>
                <li>📍 Gần ĐH Sư phạm Kỹ thuật (SPKT)</li>
                <li>📍 Gần các trạm xe buýt lớn và tiện ích xung quanh</li>
              </ul>
            </div>
            <div className="relative">
              <MapEmbedFacade />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-premium-dark py-24 text-white relative overflow-hidden rounded-[2rem] mx-4 md:mx-8 mb-20" id="booking">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight text-white">
              Chốt chỗ ngay, <br />
              <span className="text-premium-gold not-italic">
                Nhận ưu đãi hấp dẫn.
              </span>
            </h2>
            <p className="text-stone-400 mb-12 font-light">
              Số lượng Pod Private có hạn tại Thủ Đức. Hãy điền thông tin bên dưới để được ưu
              tiên dẫn xem thực tế và nhận tư vấn gói dịch vụ Bao trọn gói.
            </p>
            <div className="space-y-2 text-stone-200 text-sm md:text-base font-medium">
              <p className="flex items-center gap-2">
                <Image
                  src="/zalo-logo.svg"
                  alt="Zalo Nấm's Dormitory — liên hệ ký túc xá và căn hộ dịch vụ sinh viên Thủ Đức"
                  width={20}
                  height={20}
                />
                <span>
                  Zalo:{" "}
                  <a
                    className="chill-transition text-premium-gold hover:underline hover:opacity-90"
                    href="https://zalo.me/0938453548"
                  >
                    0938453548
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Image
                  src="/phone-logo.svg"
                  alt="Hotline Nấm's Dormitory — tư vấn phòng trọ sinh viên và chỗ ở KTX cao cấp Thủ Đức"
                  width={20}
                  height={20}
                />
                <span>
                  Điện thoại:{" "}
                  <a
                    className="chill-transition text-premium-gold hover:underline hover:opacity-90"
                    href="tel:0938453548"
                  >
                    0938453548
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-14 rounded-2xl border border-stone-100 shadow-2xl text-neutral-900">
            <BookingForm />
          </div>
        </div>
      </section>
      </RevealOnScroll>
    </div>
  );
}
