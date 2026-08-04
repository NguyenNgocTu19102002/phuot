"use client";

import { FormEvent } from "react";
import { company } from "@/data/company";

/**
 * Form không có backend: gom dữ liệu và mở sẵn email gửi tới hộp thư công ty.
 * Khi có API nhận form, thay phần handleSubmit bằng fetch tới endpoint đó.
 */
export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Họ tên: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Điện thoại / Zalo: ${data.get("phone")}`,
      `Nhà máy / Công ty: ${data.get("factory")}`,
      "",
      `Nội dung: ${data.get("message")}`,
    ].join("\n");

    window.location.href =
      `mailto:${company.email}` +
      `?subject=${encodeURIComponent("Yêu cầu tư vấn G7 - " + data.get("name"))}` +
      `&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full px-4 py-3 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-colors text-[var(--color-text-main)] bg-gray-50 focus:bg-white";
  const labelClass =
    "block text-sm font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-wide";

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className={labelClass}>Họ và Tên</label>
        <input id="name" name="name" type="text" required className={inputClass} placeholder="Nhập họ tên" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>Điện thoại / Zalo</label>
          <input id="phone" name="phone" type="tel" required className={inputClass} placeholder="09xx xxx xxx" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email liên hệ</label>
          <input id="email" name="email" type="email" className={inputClass} placeholder="email@company.com" />
        </div>
      </div>
      <div>
        <label htmlFor="factory" className={labelClass}>Nhà máy / Công ty</label>
        <input id="factory" name="factory" type="text" className={inputClass} placeholder="Tên nhà in của bạn" />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Nội dung cần tư vấn</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Công nghệ in (Offset / Flexo / Digital), số lượng máy, vấn đề màu sắc đang gặp..."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--color-primary)] text-white font-bold uppercase tracking-widest text-sm py-4 rounded hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg"
      >
        Gửi Yêu Cầu
      </button>
    </form>
  );
}
