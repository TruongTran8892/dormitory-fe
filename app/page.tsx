import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "./components/BookingForm";
import ExperienceSlideshow from "./components/ExperienceSlideshow";

export const metadata: Metadata = {
  title: "Trang chủ",
  description:
    "Lumiere Housing mang đến mô hình Sleepbox KTX cao cấp tại Thủ Đức với dịch vụ bao trọn gói, không gian sống thẩm mỹ và tiện nghi cho sinh viên.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumiere Housing - Sleepbox KTX Cao Cấp Thủ Đức",
    description:
      "Trải nghiệm không gian sống 'Xịn - Mịn - Sang' với Sleepbox private, tiện ích đầy đủ và vị trí gần các trường đại học lớn tại Thủ Đức.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="text-neutral-800">
      <header className="fixed w-full z-[100] bg-[#FCFAf7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="cursor-pointer">
            <Image
              src="/logo-nams-dom.svg"
              alt="Nấm's Dormitory"
              width={220}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </a>
          <div className="hidden lg:flex space-x-10 font-medium text-sm uppercase tracking-[0.15em] text-neutral-600">
            <a href="/about" className="hover:text-premium-gold transition">
              Phong cách
            </a>
            <a href="#pod-details" className="hover:text-premium-gold transition">
              Pod & Dịch vụ
            </a>
            <a href="#location" className="hover:text-premium-gold transition">
              Vị trí Vàng
            </a>
            <a href="#booking" className="hover:text-premium-gold transition">
              Liên hệ
            </a>
          </div>
          <a
            href="tel:0938453548"
            className="border border-premium-gold text-premium-gold px-6 py-2 rounded-full font-bold text-sm hover:bg-premium-gold hover:text-white transition tracking-widest uppercase"
          >
            TƯ VẤN NGAY
          </a>
        </nav>
      </header>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/experience/exp-1.jpg"
          alt="Không gian nội thất ký túc xá tại Nấm's Dormitory"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl">
            <p className="text-premium-gold/95 font-semibold tracking-[0.24em] uppercase mb-5 text-[11px] md:text-sm">
              Không gian lưu trú cao cấp & tiện nghi bậc nhất
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 md:mb-10 leading-[1.06] tracking-[-0.02em] max-w-4xl">
              <span className="block not-italic font-black text-white whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.38)]">
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
            <p className="text-base md:text-xl mb-12 text-stone-200 leading-relaxed font-normal max-w-2xl border-l-2 border-premium-gold/80 pl-6">
              Bao trọn gói dịch vụ cao cấp, không lo phát sinh chi phí. Một không gian sống
              &quot;Xịn - Mịn - Sang&quot; dành riêng cho các bạn sinh viên văn minh.
            </p>
            <div className="flex flex-wrap gap-6">
              <a
                href="#location"
                className="bg-premium-gold hover:bg-[#b08d4a] text-white px-10 py-4 rounded-full text-sm font-bold transition-all uppercase tracking-widest shadow-lg"
              >
                Gần các trường Đại học lớn Thủ Đức
              </a>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSlideshow />

      <section id="pod-details" className="py-24 bg-[#F5F2ED]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-premium-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Living, Better.
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 uppercase tracking-tighter">
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
                Không gian yên tĩnh, thẩm mỹ.
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
                🛋️
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
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight italic tracking-tighter text-neutral-900">
                Vị trí &quot;Vàng&quot; Thủ Đức. <br />
                <span className="text-premium-gold not-italic">
                  Gần{" "}
                  <span className="italic underline decoration-1 decoration-premium-gold">
                    Mọi Trường ĐH.
                  </span>
                </span>
              </h2>
              <p className="text-stone-600 mb-10 leading-[1.8] font-light max-w-md">
                Tiết kiệm thời gian di chuyển, tối đa thời gian nghỉ ngơi. Lumiere KTX tự hào sở
                hữu vị trí siêu thuận tiện, nằm ngay trái tim của cụm các trường Đại học lớn tại
                Thủ Đức/Quận 9.
              </p>
              <p className="text-sm text-neutral-700 font-semibold mb-8">
                Địa chỉ: 1/7B, Đường số 18, Phường Linh Chiểu, Thủ Đức
              </p>

              <ul className="space-y-5 text-sm font-medium text-neutral-700 italic border-l border-premium-gold pl-6">
                <li>📍 Gần ĐH Ngân hàng</li>
                <li>📍 Gần Cao đẳng Công nghệ (TĐ)</li>
                <li>📍 Gần ĐH An ninh nhân dân</li>
                <li>📍 Gần ĐH Sư phạm Kỹ thuật (SPKT)</li>
                <li>📍 Gần các trạm xe buýt lớn và tiện ích xung quanh</li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-2xl h-96 overflow-hidden border-2 border-premium-dark/10 map-container">
                <iframe
                  src="https://www.google.com/maps?q=1%2F7B%2C%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%2018%2C%20Ph%C6%B0%E1%BB%9Dng%20Linh%20Chi%E1%BB%83u%2C%20Th%E1%BB%A7%20%C4%90%E1%BB%A9c&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-premium-dark py-24 text-white relative overflow-hidden rounded-[2rem] mx-4 md:mx-8 mb-20" id="booking">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight italic">
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
                <Image src="/zalo-logo.svg" alt="" aria-hidden="true" width={20} height={20} />
                <span>
                  Zalo:{" "}
                  <a className="text-premium-gold hover:underline" href="https://zalo.me/0938453548">
                    0938453548
                  </a>
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Image src="/phone-logo.svg" alt="" aria-hidden="true" width={20} height={20} />
                <span>
                  Điện thoại:{" "}
                  <a className="text-premium-gold hover:underline" href="tel:0938453548">
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

      <footer className="bg-white py-20 px-6 border-t border-stone-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div>
              <a href="#" className="mb-6 cursor-pointer block">
                <Image
                  src="/logo-nams-dom.svg"
                  alt="Nấm's Dormitory"
                  width={180}
                  height={50}
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-stone-400 text-xs leading-[2] font-light max-w-xs uppercase tracking-wider">
                Lưu trú thẩm mỹ, an tâm học tập. Dành riêng cho sinh viên Thủ Đức.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-neutral-400">
                Hệ thống cơ sở
              </h4>
              <p className="text-stone-600 text-sm font-light italic">
                Thủ Đức / Quận 9 / Bình Thạnh
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-neutral-400">
                Kết nối văn minh
              </h4>
              <div className="flex gap-8 text-sm font-bold text-neutral-900">
                <a
                  href="#"
                  className="hover:text-premium-gold underline decoration-1 underline-offset-8 transition"
                >
                  INSTAGRAM
                </a>
                <a
                  href="#"
                  className="hover:text-premium-gold underline decoration-1 underline-offset-8 transition"
                >
                  TIKTOK
                </a>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-stone-400 uppercase tracking-widest flex flex-col md:flex-row justify-between items-center border-t border-stone-100 pt-10">
            <p>© 2026 Lumiere Housing. Cozy Living for Students.</p>
            </div>
        </div>
      </footer>
    </div>
  );
}
