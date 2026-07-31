import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-white pt-24 pb-24">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598425237654-4fb95c25a072?q=80&w=2000&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="row flex flex-wrap">
          <div className="w-full lg:w-7/12">
            <div className="bg-[var(--color-primary)] bg-opacity-95 rounded-2xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold font-saira uppercase mb-6 leading-tight">
                Tại sao nên chọn Quang Minh Print & Pack?
              </h3>
              <p className="text-lg mb-10 text-white/90 leading-relaxed">
                Chúng tôi không chỉ là nhà cung cấp in ấn, chúng tôi là đối tác chiến lược giúp nâng tầm hình ảnh thương hiệu của bạn thông qua những giải pháp bao bì đột phá và thiết bị ngành in tối ưu.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Dây chuyền chuẩn quốc tế</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Hệ thống máy in offset nhập khẩu Đức, kiểm soát màu sắc chuẩn Fogra/G7 đạt độ chính xác 99%.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Năng lực sản xuất lớn</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Nhà máy quy mô lớn có khả năng đáp ứng các đơn hàng từ 10.000 đến 1.000.000 sản phẩm mỗi tháng.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Giá thành cạnh tranh</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Sản xuất trực tiếp không qua trung gian, tự chủ nguồn nguyên vật liệu giúp tối ưu ngân sách tối đa.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Bảo mật thiết kế tuyệt đối</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Ký kết NDA, cam kết bảo hộ quyền sở hữu trí tuệ mẫu mã độc quyền của mọi khách hàng doanh nghiệp.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
