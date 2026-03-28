/** Địa chỉ hiển thị trên site (footer, trang chủ, …) */
export const SITE_ADDRESS_LINE =
  "1/7B, Đường 18, phường Thủ Đức, TP. Hồ Chí Minh.";

export const SITE_ADDRESS_QUERY = SITE_ADDRESS_LINE.replace(/\.$/, "");

/** Tọa độ cố định trên Google Maps (khớp vị trí thực tế, tránh geocode sai tên đường/phường) */
const MAP_LAT_LNG = "10.855376243591309,106.76229858398438";

/** Mở Google Maps tại đúng điểm (search ?api=1&query=lat,lng) */
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_LAT_LNG)}`;

/** Iframe nhúng bản đồ: cùng tọa độ */
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_LAT_LNG)}&z=18&hl=vi&output=embed`;
