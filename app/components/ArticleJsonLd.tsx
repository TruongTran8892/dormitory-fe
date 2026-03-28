import type { BlogPost } from "../blogs/data";

type Props = { siteUrl: string; post: BlogPost };

/** JSON-LD Article — hỗ trợ rich results / hiểu thị bài viết trong Google */
export default function ArticleJsonLd({ siteUrl, post }: Props) {
  const origin = siteUrl.replace(/\/$/, "");
  const articleUrl = `${origin}/blogs/${post.slug}`;
  const imageUrl = post.bannerSrc.startsWith("http")
    ? post.bannerSrc
    : `${origin}${post.bannerSrc.startsWith("/") ? post.bannerSrc : `/${post.bannerSrc}`}`;

  const isoPublished = `${post.publishedAt}T12:00:00+07:00`;
  const wordCount = post.content
    .join(" ")
    .split(/\s+/u)
    .filter(Boolean).length;

  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: isoPublished,
    dateModified: isoPublished,
    author: {
      "@type": "Organization",
      name: "Nấm's Dormitory",
      url: `${origin}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "Nấm's Dormitory",
      url: `${origin}/`,
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-nams-dom.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
    keywords: post.keywords.join(", "),
    articleSection: "Blog",
    inLanguage: "vi-VN",
    wordCount,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
