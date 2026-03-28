/** Địa chỉ hiển thị trên site (footer, trang chủ, …) */
export const SITE_ADDRESS_LINE =
  "1/7B, Đường 18, phường Thủ Đức, TP. Hồ Chí Minh.";

export const SITE_ADDRESS_QUERY = SITE_ADDRESS_LINE.replace(/\.$/, "");

/** Hotline hiển thị / CTA (09…) */
export const SITE_PHONE_DISPLAY = "0938453548";

/** E.164 cho schema.org / liên hệ có cấu trúc */
export const SITE_PHONE_E164 = "+84938453548";

/** Địa chỉ tách trường cho JSON-LD (Google Business / địa phương) */
export const SITE_POSTAL_ADDRESS = {
  streetAddress: "1/7B, Đường 18",
  addressLocality: "Thủ Đức",
  addressRegion: "Thành phố Hồ Chí Minh",
  addressCountry: "VN",
} as const;

/** Tọa độ cố định trên Google Maps (khớp vị trí thực tế, tránh geocode sai tên đường/phường) */
const MAP_LAT_LNG = "10.855376243591309,106.76229858398438";

const [MAP_LAT_STR, MAP_LNG_STR] = MAP_LAT_LNG.split(",");
export const SITE_GEO = {
  latitude: Number(MAP_LAT_STR),
  longitude: Number(MAP_LNG_STR),
} as const;

/** Mở Google Maps tại đúng điểm (search ?api=1&query=lat,lng) */
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LAT_LNG)}`;

/** Iframe nhúng bản đồ: cùng tọa độ */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_LAT_LNG)}&z=18&hl=vi&output=embed`;
