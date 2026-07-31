import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Quang Minh Print & Pack — Nhà máy In Ấn & Bao Bì",
  description: "Công ty sản xuất bao bì giấy, in offset cao cấp tại KCN Quang Minh, Mê Linh, Hà Nội. Ứng dụng quản trị màu sắc tiêu chuẩn G7.",
  keywords: "in ấn, bao bì, hộp cứng, tem nhãn, G7 Master, KCN Quang Minh, Mê Linh, Quang Minh Print",
  openGraph: {
    title: "Quang Minh Print & Pack",
    description: "Nhà máy sản xuất bao bì giấy tại KCN Quang Minh",
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
