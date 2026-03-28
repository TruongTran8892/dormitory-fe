import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll";
import { getRelatedBlogPosts } from "../data";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("vi-VN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type Props = {
  excludeSlug: string;
};

export default function BlogRelatedPosts({ excludeSlug }: Props) {
  const related = getRelatedBlogPosts(excludeSlug);
  if (related.length === 0) return null;

  return (
    <section
      className="border-t border-stone-200 bg-[#F5F2ED]/50"
      aria-labelledby="related-posts-heading"
    >
      <div className="container mx-auto px-6 py-14 md:py-16 max-w-6xl">
        <RevealOnScroll>
          <h2
            id="related-posts-heading"
            className="text-premium-gold font-bold tracking-[0.2em] uppercase text-xs mb-3"
          >
            Đọc thêm
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight mb-10 md:mb-12">
            Bài viết khác
          </p>
        </RevealOnScroll>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, index) => (
            <li key={item.slug}>
              <RevealOnScroll delayMs={index * 60}>
                <article className="group h-full">
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="chill-transition chill-lift flex flex-col h-full rounded-2xl border border-stone-200/80 bg-white overflow-hidden shadow-sm hover:border-premium-gold/40 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 bg-stone-100">
                      <Image
                        src={item.thumbnailSrc}
                        alt={item.thumbnailAlt}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      />
                    </div>
                    <div className="flex flex-col flex-1 p-5 min-w-0">
                      <time
                        dateTime={item.publishedAt}
                        className="text-[10px] uppercase tracking-widest text-stone-400 mb-2"
                      >
                        {formatDate(item.publishedAt)}
                      </time>
                      <h3 className="text-base md:text-lg font-extrabold text-neutral-900 leading-snug line-clamp-2 group-hover:text-premium-gold chill-transition">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-stone-600 text-sm leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </Link>
                </article>
              </RevealOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
