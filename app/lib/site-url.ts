/**
 * URL gốc (canonical / OG / JSON-LD / sitemap / robots).
 * Set `NEXT_PUBLIC_SITE_URL` trong `.env.production` (khi `next build`) hoặc `.env.local` (dev).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  return "http://localhost:3000";
}
