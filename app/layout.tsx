import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumiere Housing - Sleepbox KTX Cao Cấp Thủ Đức",
    template: "%s | Lumiere Housing",
  },
  description:
    "Lumiere Housing cung cấp Sleepbox KTX cao cấp tại Thủ Đức với không gian riêng tư, tiện nghi trọn gói và vị trí gần các trường đại học lớn.",
  keywords: [
    "Lumiere Housing",
    "Sleepbox",
    "KTX cao cấp",
    "ký túc xá Thủ Đức",
    "phòng trọ sinh viên",
    "chỗ ở sinh viên",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: "Lumiere Housing",
    title: "Lumiere Housing - Sleepbox KTX Cao Cấp Thủ Đức",
    description:
      "Không gian sống riêng tư, tiện nghi trọn gói cho sinh viên tại Thủ Đức. Gần các trường đại học lớn, dọn vào ở ngay.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumiere Housing - Sleepbox KTX Cao Cấp Thủ Đức",
    description:
      "Sleepbox KTX cao cấp cho sinh viên Thủ Đức: riêng tư, tiện nghi, vị trí thuận tiện và chi phí rõ ràng.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
