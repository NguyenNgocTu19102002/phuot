import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Dịch Vụ G7",
  description:
    "Dịch vụ đào tạo G7, cân chỉnh máy in Offset / Flexo / Digital, tư vấn hệ thống quản trị màu sắc và lộ trình đạt chứng nhận G7 Master Colorspace.",
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Header Banner */}
      <div className="bg-[var(--color-primary)] py-16 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-saira uppercase tracking-wide mb-4">
          Dịch Vụ G7
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-white/80 font-bold uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
          <ChevronRight size={14} />
          <span className="text-white">Dịch vụ G7</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">
            Giải Pháp Toàn Diện
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-6 leading-tight font-saira uppercase">
            Từ Đào Tạo Nhân Sự Đến <span className="text-[var(--color-primary)]">Chứng Nhận G7</span>
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            {company.description}
          </p>
        </div>

        {/* Danh sách dịch vụ: ảnh và nội dung đảo bên xen kẽ */}
        <div className="space-y-16">
          {company.services.map((svc, index) => (
            <div
              key={svc.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative">
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-[320px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-primary)]">
                  <ServiceIcon name={svc.icon} size={32} />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-main)] mb-4 font-saira uppercase">
                  {svc.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-lg mb-8">{svc.desc}</p>
                <ul className="space-y-4 mb-8">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={22} className="text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span className="font-semibold text-[var(--color-text-main)]">{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold uppercase tracking-wide text-sm hover:gap-4 transition-all"
                >
                  Yêu cầu tư vấn dịch vụ này <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA cuối trang */}
      <section className="bg-[#f4f7f6] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-saira uppercase text-[var(--color-text-main)] mb-4">
            Chưa rõ nhà máy của bạn nên bắt đầu từ đâu?
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
            Gọi trực tiếp cho Mr. Tuấn qua điện thoại hoặc Zalo {company.phone} để được đánh giá sơ bộ
            tình trạng thiết bị và lộ trình phù hợp.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg"
          >
            Đăng ký tư vấn <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
