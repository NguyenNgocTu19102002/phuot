import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center mb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/heidelberg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <span className="text-[var(--color-primary)] uppercase tracking-widest font-bold text-sm md:text-base mb-4 block">
            Quang Minh Print & Pack
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight uppercase font-saira">
            Nhà sản xuất bao bì & in ấn hàng đầu
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Nhà cung cấp giải pháp bao bì và in ấn toàn diện cho doanh nghiệp. Chúng tôi cam kết mang lại sản phẩm chất lượng cao với công nghệ hiện đại nhất.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wide text-sm py-4 px-8 rounded hover:bg-[var(--color-primary-hover)] transition-colors shadow-lg">
            Tìm hiểu thêm <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
