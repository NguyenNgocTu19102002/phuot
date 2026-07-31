"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin, ShoppingCart } from "lucide-react";
import { company } from "@/data/company";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/about", label: "Giới Thiệu" },
  { href: "/services", label: "Dịch Vụ In Ấn" },
  { href: "/products", label: "Thiết Bị & Vật Tư" },
  { href: "/articles", label: "Tin Tức" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[var(--color-primary)] text-white text-sm hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {company.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {company.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> KCN Quang Minh, Mê Linh, Hà Nội
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded flex items-center justify-center text-white font-bold text-xl">
              QM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[var(--color-primary)] uppercase tracking-tight leading-none">Quang Minh</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest leading-none mt-1">Print & Pack</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-[15px] uppercase tracking-wide transition-colors hover:text-[var(--color-primary)] ${
                  pathname === link.href ? "text-[var(--color-primary)]" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative text-gray-700 hover:text-[var(--color-primary)] transition-colors">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#ff5e14] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link href="/contact" className="hidden lg:inline-flex bg-[var(--color-primary)] text-white px-6 py-2.5 rounded hover:bg-[var(--color-primary-hover)] transition-colors font-bold text-sm uppercase">
              Nhận Báo Giá
            </Link>
            <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded font-semibold uppercase ${
                  pathname === link.href ? "bg-blue-50 text-[var(--color-primary)]" : "text-gray-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
