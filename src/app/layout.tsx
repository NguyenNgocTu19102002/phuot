import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const saira = Saira({ subsets: ["latin"], variable: '--font-saira' });

export const metadata: Metadata = {
  title: "Quang Minh Print & Pack",
  description: "Giải pháp thiết kế và in ấn chuyên nghiệp tại miền Bắc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${saira.variable} font-sans flex flex-col min-h-screen text-[var(--color-text-main)]`}>
        <CartProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
