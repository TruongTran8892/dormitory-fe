type Props = { siteUrl: string };

/** WebSite + Organization (logo) — không dùng SearchAction vì site chưa có ô tìm kiếm */
export default function WebSiteJsonLd({ siteUrl }: Props) {
  const origin = siteUrl.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nấm's Dormitory",
    url: `${origin}/`,
    inLanguage: "vi-VN",
    publisher: {
      "@type": "Organization",
      name: "Nấm's Dormitory",
      url: `${origin}/`,
      logo: {
        "@type": "ImageObject",
        url: `${origin}/logo-nams-dom.svg`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
