import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Tìm hiểu về Nấm's Dormitory và mô hình ký túc xá, căn hộ dịch vụ dành cho sinh viên tại Thủ Đức: riêng tư, tiện nghi và vận hành chuyên nghiệp.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Về chúng tôi | Nấm's Dormitory",
    description:
      "Khám phá sứ mệnh và định hướng của Nấm's Dormitory trong việc xây dựng không gian sống chất lượng cho sinh viên.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FCFAf7] text-neutral-800 pt-24">
      <section className="container mx-auto px-6 py-24 md:py-32">
        <p className="text-premium-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4">
          About Us
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 mb-8">
          Nấm&apos;s Dormitory
        </h1>
        <div className="max-w-3xl space-y-6 text-stone-600 leading-relaxed">
          <p>
            Nấm&apos;s Dormitory được xây dựng với mục tiêu mang đến không gian sống hiện đại, an toàn
            và tiện nghi cho sinh viên tại Thủ Đức. Chúng tôi tập trung vào trải nghiệm ở thực tế:
            riêng tư, sạch sẽ, vận hành ổn định và dịch vụ rõ ràng.
          </p>
          <p>
            Mô hình ký túc xá và căn hộ dịch vụ tại đây tối ưu cho học tập và nghỉ ngơi, đồng thời
            vẫn giữ được sự kết nối cộng đồng qua các khu sinh hoạt chung. Mọi tiện ích thiết yếu đều được thiết
            kế để bạn &quot;xách vali vào ở&quot; mà không phải lo các chi phí phát sinh phức tạp.
          </p>
          <p>
            Tụi mình tin rằng một chỗ ở tốt sẽ giúp sinh viên tập trung phát triển bản thân và tận
            hưởng quãng thời gian đại học trọn vẹn hơn.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/"
            className="border border-premium-gold text-premium-gold px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-premium-gold hover:text-white transition"
          >
            Về trang chủ
          </Link>
          <Link
            href="/#booking"
            className="bg-premium-dark text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:opacity-90 transition"
          >
            Liên hệ tư vấn
          </Link>
        </div>
      </section>
    </main>
  );
}
