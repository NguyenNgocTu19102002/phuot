import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Target, Shield, Zap, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới Thiệu | Quang Minh Print & Pack",
  description: "Tìm hiểu về công ty Quang Minh Print & Pack - Đối tác in ấn và sản xuất bao bì giấy chuyên nghiệp, uy tín hàng đầu miền Bắc.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598425237654-4fb95c25a072?q=80&w=2000&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-[var(--color-primary)]/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white uppercase font-saira mb-4 tracking-wide">
            Về Chúng Tôi
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-white/80 font-bold uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-white">Giới thiệu</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" 
                  alt="Về Quang Minh Print & Pack" 
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-8 -right-8 bg-[var(--color-primary)] text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border-4 border-white">
                  <div className="text-5xl font-bold font-saira mb-2">15+</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Năm kinh nghiệm<br/>sản xuất bao bì</div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Quang Minh Print & Pack</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 uppercase font-saira leading-tight">
                Đối tác in ấn <span className="text-[var(--color-primary)]">chiến lược</span> của doanh nghiệp
              </h2>
              <div className="text-lg text-[var(--color-text-muted)] space-y-6 leading-relaxed mb-8">
                <p>
                  Được thành lập từ năm 2010, Quang Minh Print & Pack tự hào là một trong những nhà máy sản xuất bao bì giấy và in ấn thương mại quy mô lớn, hiện đại hàng đầu khu vực miền Bắc.
                </p>
                <p>
                  Khác biệt với các nhà in truyền thống, chúng tôi áp dụng triệt để hệ thống quản lý chất lượng ISO 9001:2015 và tiêu chuẩn quản trị màu sắc quốc tế Fogra/G7 vào dây chuyền sản xuất. Chúng tôi không chỉ cung cấp bản in, chúng tôi cung cấp <strong>giải pháp bảo vệ sản phẩm và nâng tầm thương hiệu</strong>.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Hệ thống máy in offset nhập khẩu Đức</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Đội ngũ 350+ kỹ sư, công nhân viên lành nghề</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Nguyên vật liệu chuẩn FSC bảo vệ môi trường</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[var(--color-primary)] shrink-0" />
                  <span className="font-bold text-[var(--color-text-main)]">Năng lực sản xuất 1 triệu sản phẩm/tháng</span>
                </li>
              </ul>
              
              <Link href="/contact" className="inline-block bg-[#ff5e14] text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded hover:bg-[#e0500e] transition-colors shadow-lg">
                Tư vấn ngay
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
                Trở thành nhà cung cấp giải pháp bao bì giấy toàn diện hàng đầu Đông Nam Á, tiên phong ứng dụng công nghệ in ấn xanh và vật liệu thân thiện với môi trường vào năm 2030.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-[#ff5e14] group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[#ff5e14]/10 text-[#ff5e14] rounded-full flex items-center justify-center mb-6">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold font-saira uppercase mb-4 text-[var(--color-text-main)]">Sứ Mệnh</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                Mang đến những sản phẩm bao bì hoàn hảo, giúp bảo vệ tối đa giá trị sản phẩm bên trong và tôn vinh thiết kế thương hiệu của đối tác trên thị trường trong nước cũng như quốc tế.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-gray-800 group hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold font-saira uppercase mb-4 text-[var(--color-text-main)]">Giá Trị Cốt Lõi</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                <strong>Chất lượng:</strong> Chuẩn xác trên từng bản in.<br/>
                <strong>Tốc độ:</strong> Giao hàng đúng cam kết.<br/>
                <strong>Sáng tạo:</strong> Không ngừng cải tiến công nghệ.<br/>
                <strong>Trách nhiệm:</strong> Tận tâm với mọi đơn hàng.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
