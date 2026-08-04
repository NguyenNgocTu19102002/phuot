import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] text-white pt-24 pb-24">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/color_management.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary)]/80 lg:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="row flex flex-wrap">
          <div className="w-full lg:w-7/12">
            <div className="bg-[var(--color-primary)] bg-opacity-95 rounded-2xl p-8 lg:p-12 shadow-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-3xl lg:text-4xl font-bold font-saira uppercase mb-6 leading-tight">
                Tại sao chọn COLORMATCH VIETNAM?
              </h3>
              <p className="text-lg mb-10 text-white/90 leading-relaxed">
                Chúng tôi là đơn vị tiên phong và uy tín hàng đầu tại Việt Nam trong lĩnh vực đào tạo, tư vấn và cấp chứng nhận G7 Master Colorspace cho các nhà máy in công nghiệp.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Chuyên gia G7+ Hàng Đầu</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Được trực tiếp dẫn dắt bởi Mr. Bùi Minh Tuấn - Chuyên gia G7+ được chứng nhận từ năm 2019 với kinh nghiệm làm nghề từ 1998.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">ColorMatch App Độc Quyền</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Sở hữu ứng dụng Gray Balance Calculation Tool trên App Store giúp giải quyết triệt để nút thắt khi áp dụng G7 tại Việt Nam.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Kinh Nghiệm Thực Chiến</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Không chỉ dạy lý thuyết, chúng tôi đã trực tiếp cân chỉnh và giúp hơn 50+ nhà in đạt chứng nhận G7 Master thành công.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 size={28} className="text-white mt-1 shrink-0 opacity-90" />
                  <div>
                    <h4 className="font-bold text-xl mb-2">Đồng Hành Dài Hạn</h4>
                    <p className="text-white/80 text-sm leading-relaxed">Hỗ trợ kỹ thuật 24/7, đánh giá audit định kỳ giúp duy trì chứng chỉ G7 và sự ổn định màu sắc lâu dài cho nhà máy.</p>
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
