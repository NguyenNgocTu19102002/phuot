"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    title: "Máy In Offset 4/6 Màu",
    description: "Nhập khẩu Đức & Nhật bản nguyên chiếc. Độ chính xác chồng màu tuyệt đối, tối ưu cho in tem nhãn và bao bì cao cấp.",
    image: "/images/heidelberg.jpg"
  },
  {
    title: "Máy Gia Công Sau In",
    description: "Máy bế hộp tự động, máy cán màng nhiệt, máy ép nhũ, máy dán hộp tự động tốc độ cao giúp tăng năng suất vượt trội.",
    image: "/images/bobst.jpg"
  },
  {
    title: "Vật Tư & Hóa Chất Ngành In",
    description: "Phân phối mực in offset cao cấp, kẽm in CTP, dung dịch nước máng và các loại hóa chất phụ trợ đạt chuẩn bảo vệ môi trường.",
    image: "/images/ink.jpg"
  },
  {
    title: "Giấy & Nguyên Liệu In",
    description: "Cung cấp sỉ lẻ giấy Ivory, Couche, Bristol, Duplex, Kraft... đầy đủ định lượng, cắt bế theo kích thước yêu cầu của xưởng in.",
    image: "/images/paper_rolls.jpg"
  }
];

export default function ProductsSection() {
  const { addToCart } = useCart();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Thương Mại & Cung Cấp</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 uppercase font-saira">
            Thiết Bị & Vật Tư Ngành In
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg leading-relaxed">
            Bên cạnh dịch vụ sản xuất, chúng tôi là đối tác phân phối uy tín các dòng máy móc, thiết bị và vật tư tiêu hao phục vụ trực tiếp cho xưởng in và nhà máy bao bì.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-3 leading-tight">{product.title}</h4>
                <p className="text-[var(--color-text-muted)] mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-auto flex gap-2">
                  <button 
                    onClick={() => {
                      addToCart({
                        id: `home-prod-${index}`,
                        name: product.title,
                        image: product.image,
                        category: "Vật tư & Thiết bị",
                      });
                      alert(`Đã thêm ${product.title} vào giỏ hàng!`);
                    }}
                    className="flex-1 inline-flex items-center justify-center text-[13px] bg-[var(--color-primary)] text-white font-bold uppercase tracking-wide transition-all py-2.5 rounded hover:bg-[var(--color-primary-hover)]"
                  >
                    Vào giỏ
                  </button>
                  <Link href="/products" className="flex-1 inline-flex items-center justify-center gap-1 text-[13px] text-[var(--color-primary)] bg-gray-100 font-bold uppercase tracking-wide transition-all py-2.5 rounded hover:bg-gray-200">
                    Xem <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
