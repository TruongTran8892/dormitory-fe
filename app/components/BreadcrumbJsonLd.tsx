export type BreadcrumbItem = { name: string; path: string };

type Props = { siteUrl: string; items: BreadcrumbItem[] };

/** BreadcrumbList — khớp đường dẫn UI (blog, about, …) */
export default function BreadcrumbJsonLd({ siteUrl, items }: Props) {
  const origin = siteUrl.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const path = item.path.startsWith("/") ? item.path : `/${item.path}`;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${origin}${path}`,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
