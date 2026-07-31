import Link from "next/link";
import { ArrowRight, Package, Printer, Tag, Palette, Droplets } from "lucide-react";

const services = [
  {
    title: "Sản Xuất Bao Bì Giấy",
    description: "Hộp cứng cao cấp, hộp sóng bồi, hộp mỹ phẩm, thực phẩm với công nghệ bế dán tự động.",
    icon: <Package size={40} strokeWidth={1.5} className="text-[var(--color-primary)]" />,
    image: "/images/bobst.jpg",
    link: "/services"
  },
  {
    title: "In Ấn Thương Mại",
    description: "In catalogue, tạp chí, lịch tết, tờ rơi với hệ thống máy in offset 4-6 màu công nghệ mới nhất.",
    icon: <Printer size={40} strokeWidth={1.5} className="text-[var(--color-primary)]" />,
    image: "/images/heidelberg.jpg",
    link: "/services"
  },
  {
    title: "Cung Cấp Vật Tư",
    description: "Nhà phân phối mực in DIC, kẽm CTP Kodak, giấy Ivory/Couche và hóa chất ngành in chuẩn ISO.",
    icon: <Droplets size={40} strokeWidth={1.5} className="text-[var(--color-primary)]" />,
    image: "/images/ink.jpg",
    link: "/services"
  },
  {
    title: "Quản Trị Màu Sắc",
    description: "Tư vấn và thiết lập hệ thống ICC Profile, cân chỉnh màu sắc máy in đạt chuẩn Fogra & G7.",
    icon: <Palette size={40} strokeWidth={1.5} className="text-[var(--color-primary)]" />,
    image: "/images/color_management.jpg",
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
