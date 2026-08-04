import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Target, Shield, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới Thiệu",
  description: "Tìm hiểu về chuyên gia G7+ Bùi Minh Tuấn và sứ mệnh chuẩn hóa chất lượng ngành in ấn bao bì tại Việt Nam thông qua ứng dụng ColorMatch.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/news_g7_certification.jpg')" }}
        >
          <div className="absolute inset-0 bg-[var(--color-primary)]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase font-saira mb-4 tracking-wide">
            Về Chuyên Gia G7+
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/80 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-white">Giới thiệu</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center -mx-4 lg:-mx-8">
            <div className="w-full lg:w-1/2 px-4 lg:px-8 mb-12 lg:mb-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gray-100 rounded-2xl transform -rotate-2 z-0"></div>
                <img
                  src="/images/heidelberg.jpg"
                  alt="Cân chỉnh màu trên máy in offset tại nhà máy đối tác"
                  className="relative z-10 w-full rounded-2xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-8 -right-8 bg-[var(--color-primary)] text-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
                  <div className="text-5xl font-bold mb-1 font-saira">1998</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Gắn Bó<br/>Ngành In Từ</div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-4 lg:px-8">
              <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Xin chào, tôi là</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-8 uppercase font-saira leading-tight">
                Bùi Minh Tuấn <br/>
                <span className="text-2xl text-gray-500 capitalize normal-case font-sans mt-2 block">Chuyên gia G7+ Master Colorspace</span>
              </h2>
              
              <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] mb-10">
                <p>
                  Tôi xuất thân làm nghề chế bản và in ấn từ tháng <strong>12.1998</strong>. Trải qua quá trình dài gắn bó với ngành in tại Hà Nội, đến tháng 12.2013, tôi gia nhập Công ty Bao Bì Sông Lam và gắn bó với vai trò quản lý xưởng in, chế bản và hoàn thiện sản phẩm.
                </p>
                <p>
                  Vào tháng <strong>09.2019</strong>, tôi vinh dự trở thành Chuyên gia G7 được chứng nhận quốc tế. Với hơn một thập kỷ phụ trách kỹ thuật, tôi hiểu rất rõ <strong>những khó khăn, vướng mắc thực tế</strong> mà các nhà máy in tại Việt Nam thường xuyên gặp phải trong quá trình sản xuất đồng bộ và áp dụng tiêu chuẩn G7.
                </p>
                <p>
                  Để giải quyết triệt để vấn đề đó, vào tháng <strong>10.2024</strong>, tôi đã phát triển thành công ứng dụng <strong>Gray Balance Calculation Tool</strong> (ColorMatch App). Đây là công cụ đột phá được xuất bản trên App Store của Apple nhằm giúp các nhà in vượt qua “nút thắt cổ chai” khi làm chuẩn màu G7.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Gắn bó ngành in từ 1998</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Chuyên gia G7 quốc tế (Từ 09.2019)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Nhà phát triển ColorMatch App</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Tư vấn thành công 50+ nhà máy</span>
                </li>
              </ul>
              
              <Link href="/contact" className="inline-block bg-[#ff5e14] text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded hover:bg-[#e0500e] transition-colors shadow-lg">
                Kết nối với tôi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#f4f7f6]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[var(--color-primary)] group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold font-saira uppercase mb-4 text-[var(--color-text-main)]">Tầm Nhìn</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Đưa ngành công nghiệp in ấn bao bì Việt Nam vươn tầm quốc tế thông qua việc chuẩn hóa 100% hệ thống quản trị màu sắc tại các nhà máy lớn.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#ff5e14] group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[#ff5e14]/10 text-[#ff5e14] rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold font-saira uppercase mb-4 text-[var(--color-text-main)]">Sứ Mệnh</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Giúp các nhà in tiết kiệm vật tư, thời gian canh bài và nâng cao năng lực cạnh tranh bằng cách làm chủ kỹ thuật cân bằng xám G7 thông qua ColorMatch.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-gray-800 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold font-saira uppercase mb-4 text-[var(--color-text-main)]">Giá Trị Cốt Lõi</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Thực tiễn:</strong> Giải quyết đúng nỗi đau của xưởng.<br/>
                <strong>Công nghệ:</strong> Áp dụng số hóa (App) vào in ấn.<br/>
                <strong>Tận tâm:</strong> Đồng hành dài hạn cùng đối tác.<br/>
                <strong>Tiêu chuẩn:</strong> Bám sát chuẩn Idealliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Hành Trình Chinh Phục G7</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 uppercase font-saira">
              Hình ảnh <span className="text-[var(--color-primary)]">Đào Tạo</span>
            </h2>
            <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg leading-relaxed">
              Các khóa huấn luyện, đo kiểm và cân chỉnh ICC Profile trực tiếp tại xưởng in của các đối tác lớn.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/images/news_g7_certification.jpg", alt: "Đo bảng kiểm tra G7 bằng máy quang phổ" },
              { src: "/images/g7_certification.jpg", alt: "Phòng lab kiểm tra màu theo chuẩn D50" },
              { src: "/images/news_fogra_standard.jpg", alt: "Kiểm tra bài in trên bàn soi chuẩn" },
              { src: "/images/news_color_profile.jpg", alt: "Phân tích ICC Profile và gamut màu" },
              { src: "/images/ink.jpg", alt: "Kiểm soát mực in CMYK tại xưởng" },
              { src: "/images/bobst.jpg", alt: "Dây chuyền gia công sau in tại nhà máy bao bì" },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl h-64 shadow-md group">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
