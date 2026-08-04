import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/company";

const badges = ["Idealliance G7 Master", "ISO 12647", "ICC Profile", "Offset · Flexo · Digital"];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/news_g7_certification.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="text-[var(--color-primary)] uppercase tracking-widest font-bold text-sm md:text-base mb-4 block">
            {company.shortName}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase font-saira">
            Đào Tạo & Tư Vấn <br />
            <span className="text-[var(--color-primary)]">Chứng Chỉ G7 Master</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Giải quyết triệt để nút thắt trong việc áp dụng G7 tại Việt Nam. Nâng tầm đội ngũ nhân sự
            và chuẩn hóa chất lượng máy in của bạn cùng Chuyên gia G7+ Bùi Minh Tuấn.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg"
            >
              Dịch Vụ G7 <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${company.phone.replace(/\./g, "")}`}
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-bold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-white hover:text-[var(--color-text-main)] transition-colors"
            >
              <Phone size={18} /> {company.phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/70 text-xs md:text-sm font-bold uppercase tracking-wider border-t border-white/20 pt-6">
            {badges.map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
