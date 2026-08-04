import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { company } from "@/data/company";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const saira = Saira({ subsets: ["latin"], variable: '--font-saira' });

export const metadata: Metadata = {
  title: {
    default: `${company.shortName} | Đào Tạo & Tư Vấn Chứng Chỉ G7`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "G7", "G7 Master Colorspace", "Idealliance", "đào tạo G7",
    "cân chỉnh màu máy in", "quản trị màu sắc", "ICC Profile", "ISO 12647",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${saira.variable} font-sans flex flex-col min-h-screen text-[var(--color-text-main)]`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
