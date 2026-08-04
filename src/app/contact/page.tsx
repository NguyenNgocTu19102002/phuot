import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Phone, Mail, ChevronRight, Clock } from "lucide-react";
import { company } from "@/data/company";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ",
  description: "Liên hệ Chuyên gia G7+ Bùi Minh Tuấn để được tư vấn lộ trình đạt chứng chỉ G7 Master cho nhà in của bạn.",
};

const contactItems = [
  { icon: MapPin, label: "Khu vực hoạt động", value: company.address },
  { icon: Phone, label: "Điện thoại / Zalo", value: company.phone, href: `tel:${company.phone.replace(/\./g, "")}` },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  { icon: Clock, label: "Thời gian hỗ trợ", value: "Thứ 2 - Thứ 7, 08:00 - 18:00" },
];

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[var(--color-primary)] py-16 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-saira uppercase tracking-wide mb-4">
          Liên Hệ
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-white/80 font-bold uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
          <ChevronRight size={14} />
          <span className="text-white">Liên hệ</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">
            Hợp Tác Cùng Chúng Tôi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-6 leading-tight font-saira uppercase">
            Đăng Ký Khảo Sát & Báo Giá
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Trong quá trình làm việc, nếu có vướng mắc vui lòng gọi trực tiếp cho Mr. Tuấn qua điện thoại
            hoặc Zalo. Chúng tôi luôn sẵn sàng hỗ trợ nhà máy của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-[var(--color-secondary)] p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-8">Thông tin liên hệ</h3>
            <div className="space-y-8">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-primary)]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">{label}</h4>
                    {href ? (
                      <a href={href} className="text-[var(--color-text-muted)] leading-relaxed hover:text-[var(--color-primary)] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[var(--color-text-muted)] leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic">
                Chúng tôi nhận khảo sát tại nhà máy trên toàn quốc. Vui lòng cung cấp trước thông tin
                công nghệ in và số lượng máy để buổi khảo sát hiệu quả nhất.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-8">Gửi yêu cầu tư vấn</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
