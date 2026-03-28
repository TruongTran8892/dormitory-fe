import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import RevealOnScroll from "../components/RevealOnScroll";
import { getSiteUrl } from "../lib/site-url";

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
    images: [
      {
        url: "/about-townhouse.jpg",
        width: 1024,
        height: 724,
        alt: "Mặt tiền căn nhà Nấm's Dormitory — kiến trúc hiện đại nhiều tầng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Về chúng tôi | Nấm's Dormitory",
    description:
      "Sứ mệnh và định hướng của Nấm's Dormitory — không gian sống chất lượng cho sinh viên tại Thủ Đức.",
    images: ["/about-townhouse.jpg"],
  },
};

export default function AboutPage() {
  const siteUrl = getSiteUrl();

  return (
    <main className="min-h-screen bg-[#FCFAf7] text-neutral-800 pt-24">
      <BreadcrumbJsonLd
        siteUrl={siteUrl}
        items={[
          { name: "Trang chủ", path: "/" },
          { name: "Về chúng tôi", path: "/about" },
        ]}
      />
      <section className="container mx-auto px-6 py-16 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 items-center">
          <RevealOnScroll className="min-w-0">
            <p className="text-premium-gold font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 mb-8">
              Nấm&apos;s Dormitory
            </h1>
            <div className="max-w-xl xl:max-w-2xl space-y-6 text-stone-600 leading-relaxed">
              <p>
                Nấm&apos;s Dormitory được xây dựng với mục tiêu mang đến không gian sống hiện đại, an
                toàn và tiện nghi cho sinh viên tại Thủ Đức. Chúng tôi tập trung vào trải nghiệm ở thực
                tế: riêng tư, sạch sẽ, vận hành ổn định và dịch vụ rõ ràng.
              </p>
              <p>
                Mô hình ký túc xá và căn hộ dịch vụ tại đây tối ưu cho học tập và nghỉ ngơi, đồng thời
                vẫn giữ được sự kết nối cộng đồng qua các khu sinh hoạt chung. Mọi tiện ích thiết yếu đều
                được thiết kế để bạn &quot;xách vali vào ở&quot; mà không phải lo các chi phí phát sinh
                phức tạp.
              </p>
              <p>
                Tụi mình tin rằng một chỗ ở tốt sẽ giúp sinh viên tập trung phát triển bản thân và tận
                hưởng quãng thời gian đại học trọn vẹn hơn.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="chill-transition chill-lift border border-premium-gold text-premium-gold px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-premium-gold hover:text-white shadow-sm hover:shadow-md"
              >
                Về trang chủ
              </Link>
              <Link
                href="/#booking"
                className="chill-transition chill-lift bg-premium-dark text-white px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase hover:opacity-95 shadow-md hover:shadow-lg"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            delayMs={100}
            className="w-full max-w-lg lg:max-w-none mx-auto lg:mx-0 self-start lg:self-center"
          >
            <figure className="rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.22)] ring-1 ring-stone-200/90 bg-stone-100 p-1.5 sm:p-2">
              <Image
                src="/about-townhouse.jpg"
                width={1024}
                height={724}
                alt="Mặt tiền căn nhà Nấm's Dormitory — nhà phố hiện đại nhiều tầng, ban công và ánh đèn ấm"
                className="w-full h-auto rounded-xl block object-contain"
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 720px"
                quality={92}
                priority
              />
            </figure>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}
