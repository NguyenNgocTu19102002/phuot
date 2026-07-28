import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "PhượtXuyênViệt — Khám Phá Việt Nam Theo Cách Của Bạn",
  description: "Nền tảng thông tin du lịch phượt thủ Việt Nam. Khám phá hàng trăm địa điểm, nhật ký hành trình và bản đồ tương tác.",
  keywords: "phượt, du lịch Việt Nam, nhật ký phượt, địa điểm du lịch, hành trình xe máy",
  openGraph: {
    title: "PhượtXuyênViệt — Khám Phá Việt Nam",
    description: "Nền tảng thông tin du lịch phượt thủ Việt Nam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
