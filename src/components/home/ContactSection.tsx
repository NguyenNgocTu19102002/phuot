"use client";

import { FormEvent } from "react";
import { company } from "@/data/company";

const serviceOptions = [
  "Tư vấn chứng chỉ G7 Master",
  "Khóa đào tạo nhân sự In ấn",
  "Dịch vụ cân chỉnh máy in",
  "Phần mềm ColorMatch",
];

/**
 * Form không có backend: gom dữ liệu và mở sẵn email gửi tới hộp thư công ty.
 * Khi có API nhận form, thay phần handleSubmit bằng fetch tới endpoint đó.
 */
export default function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Họ tên: ${data.get("name")}`,
      `Điện thoại / Zalo: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Dịch vụ quan tâm: ${data.get("service")}`,
      "",
      `Ghi chú: ${data.get("note")}`,
    ].join("\n");

    window.location.href =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent("Đăng ký tư vấn G7 - " + data.get("name"))}` +
      `&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full px-5 py-4 rounded bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:border-white focus:bg-white/20 transition-all font-bold";

  return (
    <section className="bg-[var(--color-primary)]">
      <div className="flex flex-wrap items-stretch">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img
            src="/images/news_color_profile.jpg"
            alt="Chuyên viên quản trị màu sắc kiểm tra ICC Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-10 lg:p-20">
          <h2 className="text-4xl lg:text-5xl font-bold font-saira uppercase text-white mb-4">
            Đăng ký Tư Vấn G7
          </h2>
          <p className="text-white/80 mb-10 leading-relaxed">
            Để lại thông tin nhà máy, chúng tôi sẽ liên hệ khảo sát và tư vấn lộ trình đạt chứng chỉ
            phù hợp với thiết bị hiện có của bạn.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="name" type="text" required placeholder="Họ và Tên" className={inputClass} />
              <input name="phone" type="tel" required placeholder="Số điện thoại / Zalo" className={inputClass} />
              <input name="email" type="email" placeholder="Email công ty" className={inputClass} />
              <select name="service" defaultValue="" className={`${inputClass} appearance-none`}>
                <option value="" className="text-gray-900">Chọn dịch vụ quan tâm</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o} className="text-gray-900">{o}</option>
                ))}
              </select>
            </div>
            <textarea
              name="note"
              rows={5}
              placeholder="Ghi chú thêm (Tên nhà máy in, số lượng máy, công nghệ in...)"
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="w-full bg-white text-[var(--color-primary)] font-bold uppercase tracking-widest py-4 rounded hover:bg-gray-100 transition-colors shadow-lg mt-4"
            >
              Nhận tư vấn ngay
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
