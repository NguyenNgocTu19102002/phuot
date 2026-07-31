import Link from "next/link";
import { ArrowRight, Package, Printer, Tag, Palette } from "lucide-react";

const services = [
  {
    title: "In Bao Bì Giấy Cao Cấp",
    description: "Giải pháp bao bì carton, hộp cứng cao cấp bảo vệ sản phẩm và nâng tầm thương hiệu với công nghệ in offset tiên tiến.",
    icon: <Package size={32} className="text-[var(--color-primary)]" />,
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da26f5?q=80&w=800&auto=format&fit=crop",
    link: "/services"
  },
  {
    title: "In Ấn Thương Mại",
    description: "In catalogue, brochure, tờ rơi quảng cáo với màu sắc chuẩn xác 99% theo tiêu chuẩn quốc tế Fogra, gia công sắc nét.",
    icon: <Printer size={32} className="text-[var(--color-primary)]" />,
    image: "https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=800&auto=format&fit=crop",
    link: "/services"
  },
  {
    title: "In Tem Nhãn & Decal Cuộn",
    description: "Cung cấp tem nhãn decal cuộn, decal nhựa, tem bảo hành chống giả số lượng lớn phục vụ ngành thực phẩm, dược phẩm.",
    icon: <Tag size={32} className="text-[var(--color-primary)]" />,
    image: "https://images.unsplash.com/photo-1586940866597-226685416035?q=80&w=800&auto=format&fit=crop",
    link: "/services"
  },
  {
    title: "Tư Vấn & Thiết Kế Bao Bì",
    description: "Lên ý tưởng thiết kế 3D, làm mẫu (mockup) thực tế, kiểm tra cấu trúc chịu lực trước khi đưa vào sản xuất hàng loạt.",
    icon: <Palette size={32} className="text-[var(--color-primary)]" />,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    link: "/services"
  }
];

export default function Services() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-24 lg:pb-32">
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#f4f7f6] z-0"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Giải Pháp Toàn Diện</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 uppercase font-saira">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg leading-relaxed">
            Chúng tôi tự hào cung cấp các giải pháp in ấn và sản xuất bao bì giấy chuyên nghiệp, đáp ứng từ khâu lên ý tưởng thiết kế đến sản xuất hàng loạt với tiêu chuẩn chất lượng khắt khe nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 relative">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center absolute -top-8 left-8">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-[var(--color-text-main)] mt-6 mb-3">{service.title}</h4>
                <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href={service.link} className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:text-[var(--color-primary-hover)] transition-colors">
                  Xem chi tiết <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
