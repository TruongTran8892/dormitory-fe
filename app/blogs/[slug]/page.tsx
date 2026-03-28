import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BreadcrumbJsonLd from "../../components/BreadcrumbJsonLd";
import RevealOnScroll from "../../components/RevealOnScroll";
import BlogRelatedPosts from "../components/BlogRelatedPosts";
import { getSiteUrl } from "../../lib/site-url";
import { getAllBlogSlugs, getBlogPostBySlug } from "../data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Không tìm thấy" };

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      type: "article",
      publishedTime: `${post.publishedAt}T12:00:00+07:00`,
      title: `${post.title} | Nấm's Dormitory`,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      images: [{ url: post.bannerSrc, alt: post.bannerAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Nấm's Dormitory`,
      description: post.excerpt,
      images: [post.bannerSrc],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const siteUrl = getSiteUrl();

  return (
    <article className="bg-[#FCFAf7] text-neutral-800 pb-20">
      <BreadcrumbJsonLd
        siteUrl={siteUrl}
        items={[
          { name: "Trang chủ", path: "/" },
          { name: "Blog", path: "/blogs" },
          { name: post.title, path: `/blogs/${post.slug}` },
        ]}
      />
      {/* Dải phía trên banner — offset header cố định */}
      <div className="pt-24 bg-[#FCFAf7] border-b border-stone-200/90">
        <div className="container mx-auto px-6 py-3 md:py-4">
          <Link
            href="/blogs"
            className="chill-transition inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-premium-gold rounded-md hover:opacity-95"
          >
            <span aria-hidden className="text-base leading-none">
              ←
            </span>
            Quay lại danh sách blog
          </Link>
        </div>
      </div>

      <header>
        <div className="relative w-full h-[min(52vh,420px)] md:h-[min(55vh,480px)] bg-stone-200">
          <Image
            src={post.bannerSrc}
            alt={post.bannerAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/70" />
          <nav
            aria-label="Đường dẫn"
            className="absolute left-0 right-0 top-0 z-10 container mx-auto px-6 pt-5 md:pt-7 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
          >
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/85">
              <li>
                <Link
                  href="/"
                  className="chill-transition hover:text-white underline-offset-2 hover:underline rounded-sm"
                >
                  Trang chủ
                </Link>
              </li>
              <li className="text-white/50 select-none" aria-hidden>
                /
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="chill-transition hover:text-white underline-offset-2 hover:underline rounded-sm"
                >
                  Blog
                </Link>
              </li>
              <li className="text-white/50 select-none" aria-hidden>
                /
              </li>
              <li
                className="font-medium text-white line-clamp-2 max-w-[min(100%,42rem)] sm:max-w-none"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
          <div className="absolute inset-x-0 bottom-0 container mx-auto px-6 pb-10 md:pb-14">
            <time
              dateTime={post.publishedAt}
              className="hero-fade-up hero-fade-d1 block text-xs uppercase tracking-[0.2em] text-premium-gold mb-3 drop-shadow-sm"
            >
              {formatDate(post.publishedAt)}
            </time>
            <h1 className="hero-fade-up hero-fade-d2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white max-w-4xl leading-tight tracking-tight drop-shadow-md">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-3xl pt-12 md:pt-16">
        <RevealOnScroll>
          <div className="max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-stone-600 leading-[1.85] mb-6 last:mb-0 text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </RevealOnScroll>
      </div>

      <BlogRelatedPosts excludeSlug={post.slug} />
    </article>
  );
}
