"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

const productCategories = [
  "Tất cả",
  "Máy In Offset 4 Màu / 6 Màu",
  "Máy Gia Công Sau In",
  "Vật Tư & Hóa Chất In",
  "Giấy & Nguyên Liệu Bao Bì",
  "Linh Kiện Thay Thế",
  "Thiết Bị Đo Lường & QC"
];

const products = [
  {
    id: 1,
    name: "Máy In Offset Heidelberg Speedmaster CX 104",
    category: "Máy In Offset 4 Màu / 6 Màu",
    description: "Công nghệ hiện đại nhất từ Đức, tốc độ in lên đến 15,000 tờ/giờ. Phù hợp cho in bao bì cao cấp và in thương mại với độ chính xác chồng màu tuyệt đối.",
    image: "/images/heidelberg.jpg"
  },
  {
    id: 2,
    name: "Máy Bế Hộp Tự Động Bobst Novacut 106",
    category: "Máy Gia Công Sau In",
    description: "Giải pháp hàng đầu thế giới về bế dập định hình cho hộp carton, hộp sóng. Máy hoạt động ổn định, năng suất cực cao và dễ dàng vận hành.",
    image: "/images/bobst.jpg"
  },
  {
    id: 3,
    name: "Máy Cán Màng Nhiệt Tự Động GMB",
    category: "Máy Gia Công Sau In",
    description: "Cán màng bóng, màng mờ tốc độ cao, dao cắt tự động sắc bén, hệ thống chống cong mép giấy chuyên dụng.",
    image: "/images/bobst.jpg"
  },
  {
    id: 4,
    name: "Mực In Offset DIC / Toyo Ink",
    category: "Vật Tư & Hóa Chất In",
    description: "Mực in gốc dầu thực vật, thân thiện môi trường, màu sắc tươi sáng, bám dính tốt trên nhiều chất liệu giấy.",
    image: "/images/ink.jpg"
  },
  {
    id: 5,
    name: "Bản Kẽm CTP Kodak Sonora",
    category: "Vật Tư & Hóa Chất In",
    description: "Bản kẽm không hóa chất hiện hình, giúp tiết kiệm chi phí xử lý nước thải, thân thiện với môi trường, cho hạt trame sắc nét.",
    image: "/images/color_management.jpg"
  },
  {
    id: 6,
    name: "Giấy Ivory, Bristol, Couche Nhập Khẩu",
    category: "Giấy & Nguyên Liệu Bao Bì",
    description: "Đa dạng định lượng từ 150gsm đến 400gsm. Giấy có độ đanh, bắt mực tốt, chuyên dùng cho hộp mỹ phẩm, thực phẩm, dược phẩm.",
    image: "/images/paper_rolls.jpg"
  },
  {
    id: 7,
    name: "Máy In Offset Komori Lithrone G40",
    category: "Máy In Offset 4 Màu / 6 Màu",
    description: "Máy in offset hiện đại từ Nhật Bản, tích hợp hệ thống kiểm soát màu tự động, phù hợp in ấn thương mại và bao bì chất lượng cao.",
    image: "/images/heidelberg.jpg"
  },
  {
    id: 8,
    name: "Máy Dán Hộp Tự Động Jagenberg",
    category: "Máy Gia Công Sau In",
    description: "Tốc độ dán nhanh, độ chính xác cao, xử lý được nhiều kiểu hộp phức tạp như hộp đáy cài, hộp nắp gài.",
    image: "/images/bobst.jpg"
  }
];

import { useCart } from "@/context/CartContext";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === "Tất cả" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <main className="pt-24 pb-24 bg-[#f4f7f6] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] font-bold uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--color-primary)]">Thiết Bị & Vật Tư</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-saira text-[var(--color-text-main)] uppercase leading-tight mb-4">
            Thiết Bị & Vật Tư <span className="text-[var(--color-primary)]">Ngành In</span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg max-w-3xl leading-relaxed">
            Chúng tôi tự hào là đơn vị phân phối uy tín các dòng máy móc, thiết bị, vật tư và nguyên liệu chính hãng phục vụ cho quy trình sản xuất bao bì và in ấn thương mại.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-bold font-saira text-[var(--color-text-main)] uppercase mb-6 pb-4 border-b border-gray-100">
                Danh Mục Sản Phẩm
              </h3>
              <ul className="space-y-3">
                {productCategories.map((category, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left font-bold transition-colors py-2 flex justify-between items-center group ${selectedCategory === category ? 'text-[var(--color-primary)]' : 'text-gray-600 hover:text-[var(--color-primary)]'}`}
                    >
                      {category}
                      <ChevronRight size={16} className={`transition-opacity ${selectedCategory === category ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </button>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 bg-[var(--color-primary)] rounded-lg p-6 text-white text-center">
                <h4 className="font-bold font-saira text-xl uppercase mb-3">Bạn cần tư vấn?</h4>
                <p className="text-sm opacity-90 mb-6">Chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ kỹ thuật và báo giá.</p>
                <Link href="/contact" className="inline-block bg-white text-[var(--color-primary)] font-bold uppercase tracking-wider text-sm py-3 px-6 rounded-full hover:bg-gray-50 transition-colors w-full shadow-md">
                  Liên hệ ngay
                </Link>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-10 text-center shadow border border-gray-100">
                <p className="text-gray-500 font-bold text-lg">Chưa có sản phẩm nào trong danh mục này.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full hover:shadow-2xl transition-all duration-300">
                    <div className="h-64 overflow-hidden relative bg-gray-100">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold font-saira text-[var(--color-text-main)] uppercase mb-4 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-[var(--color-text-muted)] mb-8 flex-grow leading-relaxed text-sm lg:text-base">
                        {product.description}
                      </p>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => {
                            addToCart({
                              id: product.id,
                              name: product.name,
                              image: product.image,
                              category: product.category,
                            });
                            alert(`Đã thêm ${product.name} vào giỏ hàng!`);
                          }}
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm bg-[var(--color-primary)] text-white font-bold uppercase tracking-wide transition-all mt-auto pt-3 pb-3 rounded hover:bg-[var(--color-primary-hover)]"
                        >
                          Thêm vào giỏ
                        </button>
                        <Link href="/contact" className="flex-1 inline-flex items-center justify-center gap-2 text-sm text-[var(--color-primary)] bg-gray-100 font-bold uppercase tracking-wide transition-all mt-auto pt-3 pb-3 rounded hover:bg-gray-200">
                          Báo giá <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
