import { company } from "@/data/company";
import { MapPin, Phone, Mail } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ | Quang Minh Print & Pack",
  description: "Liên hệ tư vấn và nhận báo giá in ấn bao bì",
};

export default function ContactPage() {
  return (
    <main className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Hợp Tác Cùng Chúng Tôi</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 leading-tight">
            Liên Hệ Báo Giá
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp bao bì và in ấn tối ưu nhất cho dự án của bạn.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-[var(--color-secondary)] p-10 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-8">Thông tin liên hệ</h3>
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-primary)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">Địa chỉ nhà máy</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{company.address}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-primary)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">Điện thoại</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{company.phone}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-[var(--color-primary)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--color-text-main)] mb-2">Email</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">{company.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-8">Gửi yêu cầu báo giá</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-wide">Họ và Tên</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-colors text-[var(--color-text-main)] bg-gray-50 focus:bg-white" 
                    placeholder="Nhập họ tên" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-wide">Email liên hệ</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-colors text-[var(--color-text-main)] bg-gray-50 focus:bg-white" 
                    placeholder="email@company.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--color-text-main)] mb-2 uppercase tracking-wide">Mô tả dự án</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-colors text-[var(--color-text-main)] bg-gray-50 focus:bg-white resize-none" 
                    placeholder="Mô tả số lượng, yêu cầu in ấn..."
                  ></textarea>
                </div>
                <button type="button" className="w-full bg-[var(--color-primary)] text-white font-bold uppercase tracking-widest text-sm py-4 rounded hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg">
                  Gửi Yêu Cầu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
