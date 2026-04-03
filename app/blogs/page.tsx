import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbJsonLd from "../components/BreadcrumbJsonLd";
import RevealOnScroll from "../components/RevealOnScroll";
import { getSiteUrl } from "../lib/site-url";
import { getAllBlogPosts } from "./data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mẹo chọn phòng trọ sinh viên, thuê trọ và ký túc xá tại Thủ Đức: tiêu chí sạch sẽ, an toàn và chi phí hợp lý — chia sẻ thực tế từ Nấm's Dormitory.",
  keywords: [
    "phòng trọ",
    "phòng trọ sinh viên",
    "thuê trọ",
    "ký túc xá",
    "ký túc xá sinh viên",
    "phòng trọ sạch sẽ",
    "phòng trọ giá rẻ",
    "Thủ Đức",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Nấm's Dormitory",
    description:
      "Bài viết về phòng trọ, thuê trọ và ký túc xá sinh viên — gợi ý chọn chỗ ở sạch sẽ, an toàn tại Thủ Đức.",
    url: "/blogs",
    images: [
      {
        url: "/experience/exp-1.jpg",
        alt: "Blog Nấm's Dormitory — phòng trọ, thuê trọ, ký túc xá sinh viên và căn hộ dịch vụ Thủ Đức",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Nấm's Dormitory",
    description:
      "Mẹo phòng trọ, thuê trọ và ký túc xá sinh viên tại Thủ Đức — kinh nghiệm thực tế.",
    images: ["/experience/exp-1.jpg"],
  },
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogsPage() {
  const posts = getAllBlogPosts();
  const siteUrl = getSiteUrl();

  return (
    <main className="bg-[#FCFAf7] text-neutral-800 pt-24 pb-20">
      <BreadcrumbJsonLd
        siteUrl={siteUrl}
        items={[
          { name: "Trang chủ", path: "/" },
          { name: "Blog", path: "/blogs" },
        ]}
      />
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <header className="max-w-3xl mb-14 md:mb-16">
            <p className="text-premium-gold font-bold tracking-[0.2em] uppercase text-xs mb-3">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Bài viết &amp; góc nhìn sống
            </h1>
            <p className="text-stone-600 mt-4 text-lg font-light leading-relaxed">
              Mẹo dọn vào ở, học tập và sinh hoạt cộng đồng — cập nhật thường xuyên từ Nấm&apos;s
              Dormitory.
            </p>
          </header>
        </RevealOnScroll>

        <ul className="grid gap-10 md:gap-12">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <RevealOnScroll delayMs={index * 70}>
                <article className="group">
                <Link
                  href={`/blogs/${post.slug}`}
                  className="chill-transition chill-lift flex flex-col md:flex-row gap-6 md:gap-10 rounded-2xl border border-stone-200/80 bg-white p-4 md:p-6 shadow-sm hover:border-premium-gold/40 hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] w-full md:w-72 shrink-0 overflow-hidden rounded-xl bg-stone-100">
                    <Image
                      src={post.thumbnailSrc}
                      alt={post.thumbnailAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 288px"
                    />
                  </div>
                  <div className="flex flex-col min-w-0 py-1">
                    <time
                      dateTime={post.publishedAt}
                      className="text-xs uppercase tracking-widest text-stone-400 mb-2"
                    >
                      {formatDate(post.publishedAt)}
                    </time>
                    <h2 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-snug group-hover:text-premium-gold chill-transition">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-stone-600 text-sm md:text-base leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto pt-4 text-sm font-semibold text-premium-gold inline-flex items-center gap-1">
                      Đọc tiếp
                      <span aria-hidden className="transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
