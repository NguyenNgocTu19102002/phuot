import Link from "next/link";
import { company } from "@/data/company";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-text-main)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--color-primary)] rounded flex items-center justify-center text-white font-bold text-xl">
                QM
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white uppercase tracking-tight leading-none">Quang Minh</span>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest leading-none mt-1">Print & Pack</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              {company.description}
            </p>
            <div className="flex gap-3">
              <a href={company.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors font-bold text-sm">FB</a>
              <a href={company.social.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors font-bold text-sm">IN</a>
              <a href={company.social.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors font-bold text-sm">YT</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Điều Hướng</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Giới Thiệu</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Dịch Vụ Tư Vấn</Link></li>
              <li><Link href="/articles" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Tin Tức</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-[var(--color-primary)] transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Liên Hệ</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400">
                <MapPin size={20} className="text-[var(--color-primary)] shrink-0" />
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Phone size={20} className="text-[var(--color-primary)] shrink-0" />
                <span>{company.phone}</span>
              </li>
              <li className="flex gap-3 text-gray-400">
                <Mail size={20} className="text-[var(--color-primary)] shrink-0" />
                <span>{company.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {company.name}. Đã đăng ký bản quyền.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
