import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Techvina Electronics — Gia Công Điện Tử & Lắp Ráp PCBA",
  description: "Nhà máy sản xuất linh kiện điện tử chuyên nghiệp tại KCN Quang Minh, Mê Linh, Hà Nội. Giải pháp gia công SMT, Box Build hàng đầu.",
  keywords: "sản xuất điện tử, gia công SMT, PCBA, KCN Quang Minh, Mê Linh, Techvina",
  openGraph: {
    title: "Techvina Electronics — Đối tác sản xuất điện tử",
    description: "Nhà máy sản xuất linh kiện điện tử tại KCN Quang Minh",
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
