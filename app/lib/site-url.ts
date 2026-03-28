/** URL gốc (canonical / OG / JSON-LD). Luôn set NEXT_PUBLIC_SITE_URL trên production. */
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
