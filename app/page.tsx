export default function Home() {
  return (
    <div className="text-neutral-800">
      <header className="fixed w-full z-[100] bg-[#FCFAf7]/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-extrabold tracking-tighter text-neutral-900 cursor-pointer">
            LUMIERE
            <span className="text-premium-gold ml-0.5 underline decoration-1 underline-offset-4">
              HOUSING
            </span>
          </a>
          <div className="hidden lg:flex space-x-10 font-medium text-sm uppercase tracking-[0.15em] text-neutral-600">
            <a href="#about" className="hover:text-premium-gold transition">
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
            href="tel:0900123456"
            className="border border-premium-gold text-premium-gold px-6 py-2 rounded-full font-bold text-sm hover:bg-premium-gold hover:text-white transition tracking-widest uppercase"
          >
            TƯ VẤN NGAY
          </a>
        </nav>
      </header>

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=2000"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Sleepbox Interior"
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <p className="text-premium-gold font-semibold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">
              KTX Thẩm mỹ & Tiện nghi bậc nhất
            </p>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.0] italic tracking-tight">
              Trải nghiệm <br />
              <span className="not-italic font-black text-blue-100/10">Sleepbox</span>{" "}
              <span className="text-premium-gold font-light">&quot;Chilling&quot;</span> đỉnh cao.
            </h1>
            <p className="text-lg md:text-xl mb-12 text-stone-300 leading-relaxed font-light max-w-lg border-l border-premium-gold pl-6">
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
                🎁
              </span>
              <h3 className="text-xl font-bold mb-3">Sleepbox Private</h3>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4602324283416!2d106.69176167623946!3d10.776019389372993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3af224056b%3A0x6334812f68903c72!2zRGluaCDEkOG7mWMgTOG6rXA!5e0!3m2!1svi!2s!4v1715800000000!5m2!1svi!2s"
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
                Nhận ưu đãi{" "}
                <span className="italic underline decoration-1 decoration-premium-gold">
                  Free Chuyển Đồ.
                </span>
              </span>
            </h2>
            <p className="text-stone-400 mb-12 font-light">
              Số lượng Pod Private có hạn tại Thủ Đức. Hãy điền thông tin bên dưới để được ưu
              tiên dẫn xem thực tế và nhận tư vấn gói dịch vụ Bao trọn gói.
            </p>
          </div>

          <div className="bg-white p-10 lg:p-14 rounded-sm shadow-2xl text-neutral-900">
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-stone-400">
                  Danh xưng
                </label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="w-full border-b border-stone-200 py-3 focus:border-premium-gold outline-none transition text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-stone-400">
                  Phương thức liên hệ
                </label>
                <input
                  type="tel"
                  placeholder="0901 234 567 / Zalo"
                  className="w-full border-b border-stone-200 py-3 focus:border-premium-gold outline-none transition text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest mb-2 text-stone-400">
                  Trường đang theo học
                </label>
                <select className="w-full border-b border-stone-200 py-3 focus:border-premium-gold outline-none transition text-sm bg-transparent">
                  <option>ĐH Ngân hàng</option>
                  <option>Cao đẳng Công nghệ</option>
                  <option>ĐH An ninh nhân dân</option>
                  <option>ĐH SPKT</option>
                  <option>Khác</option>
                </select>
              </div>
              <button className="w-full bg-premium-dark text-white py-5 mt-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-premium-gold transition duration-500">
                Đăng ký xem Pod & Tư vấn
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white py-20 px-6 border-t border-stone-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div>
              <a href="#" className="text-xl font-extrabold mb-6 tracking-tight cursor-pointer block">
                LUMIERE<span className="text-premium-gold">HOUSING</span>
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
