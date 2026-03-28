import {
  SITE_GEO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_E164,
  SITE_POSTAL_ADDRESS,
} from "../site-config";

const DEFAULT_OG_IMAGE_PATH = "/about-townhouse.jpg";

type Props = { siteUrl: string };

/** JSON-LD LodgingBusiness — hỗ trợ SEO địa phương & Knowledge Graph */
export default function LocalBusinessJsonLd({ siteUrl }: Props) {
  const origin = siteUrl.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Nấm's Dormitory",
    description:
      "Ký túc xá và căn hộ dịch vụ tại Thủ Đức — không gian riêng tư, tiện nghi trọn gói, phù hợp sinh viên.",
    url: `${origin}/`,
    telephone: SITE_PHONE_E164,
    image: [`${origin}${DEFAULT_OG_IMAGE_PATH}`],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_POSTAL_ADDRESS.streetAddress,
      addressLocality: SITE_POSTAL_ADDRESS.addressLocality,
      addressRegion: SITE_POSTAL_ADDRESS.addressRegion,
      addressCountry: SITE_POSTAL_ADDRESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    sameAs: [`https://zalo.me/${SITE_PHONE_DISPLAY}`],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
