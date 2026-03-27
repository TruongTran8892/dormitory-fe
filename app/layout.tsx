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
    default: "Nấm's Dormitory - Ký túc xá & Căn hộ dịch vụ tại Thủ Đức",
    template: "%s | Nấm's Dormitory",
  },
  description:
    "Nấm's Dormitory cung cấp ký túc xá và căn hộ dịch vụ tại Thủ Đức với không gian riêng tư, tiện nghi trọn gói và vị trí di chuyển thuận tiện.",
  keywords: [
    "Nấm's Dormitory",
    "ký túc xá",
    "căn hộ dịch vụ",
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
    siteName: "Nấm's Dormitory",
    title: "Nấm's Dormitory - Ký túc xá & Căn hộ dịch vụ tại Thủ Đức",
    description:
      "Không gian sống riêng tư, tiện nghi trọn gói cho sinh viên tại Thủ Đức. Đăng ký xem phòng nhanh và nhận tư vấn trực tiếp.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nấm's Dormitory - Ký túc xá & Căn hộ dịch vụ tại Thủ Đức",
    description:
      "Ký túc xá & căn hộ dịch vụ cho sinh viên tại Thủ Đức: riêng tư, tiện nghi, vị trí thuận tiện và chi phí rõ ràng.",
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
