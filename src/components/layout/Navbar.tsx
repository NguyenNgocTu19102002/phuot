"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";

const navLinks = [
  { href: "/", label: "Trang Chủ" },
  { href: "/about", label: "Giới Thiệu" },
  { href: "/services", label: "Dịch Vụ G7" },
  { href: "/courses", label: "Khóa Học & Công Cụ" },
  { href: "/articles", label: "Tin Tức" },
  { href: "/contact", label: "Liên Hệ" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full shadow-sm bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[var(--color-primary)] text-white text-sm hidden md:block py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href={`tel:${company.phone.replace(/\./g, "")}`} className="flex items-center gap-2 hover:underline">
              <Phone size={14} /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-2 hover:underline">
              <Mail size={14} /> {company.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> {company.address}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--color-primary)] rounded flex items-center justify-center text-white font-bold text-xl">
              CM
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 tracking-tight leading-none uppercase">COLORMATCH</span>
              <span className="text-sm font-bold text-[var(--color-primary)] tracking-widest leading-none mt-1 uppercase">VIETNAM</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            <Link href="/contact" className="hidden lg:inline-flex bg-[var(--color-primary)] text-white px-6 py-2.5 rounded hover:bg-[var(--color-primary-hover)] transition-colors font-bold text-sm uppercase">
              Đăng Ký Tư Vấn
            </Link>
            <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Mở menu">
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
                  pathname === link.href ? "bg-red-50 text-[var(--color-primary)]" : "text-gray-700"
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
