"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Clock, Users } from "lucide-react";

const categories = ["Tất cả", "Khóa Học", "Phần Mềm / App", "Tài Liệu Chuyên Ngành"];

const courses = [
  {
    id: 1,
    name: "Khóa Đào Tạo Chuyên Gia G7 Nội Bộ",
    category: "Khóa Học",
    duration: "3 ngày",
    audience: "Thợ in, QC, chế bản",
    description:
      "Huấn luyện chuyên sâu cho nhân viên phòng Lab, thợ in và QA/QC để làm chủ quy trình kiểm soát màu sắc chuẩn G7 tại nhà máy. Bao gồm lý thuyết cân bằng xám, NPDC và thực hành trực tiếp trên máy.",
    image: "/images/g7_certification.jpg",
  },
  {
    id: 2,
    name: "ColorMatch App (Gray Balance Tool)",
    category: "Phần Mềm / App",
    duration: "Cấp quyền theo năm",
    audience: "Kỹ thuật viên màu",
    description:
      "Ứng dụng Gray Balance Calculation Tool trên nền tảng iOS. Công cụ tính toán đường cong bù trừ (NPDC) trong vài giây, giảm thiểu sai sót so với tính toán thủ công.",
    image: "/images/color_management.jpg",
  },
  {
    id: 3,
    name: "Khóa Đào Tạo Quản Trị Màu & ICC Profile",
    category: "Khóa Học",
    duration: "2 ngày",
    audience: "Chế bản, thiết kế",
    description:
      "Hướng dẫn tạo và quản lý ICC Profile cho các dòng máy in Offset, Flexo, Digital. Đồng bộ màu sắc giữa màn hình thiết kế, bản in thử và bản in sản lượng.",
    image: "/images/news_color_profile.jpg",
  },
  {
    id: 4,
    name: "Bộ Tài Liệu Chuẩn Hóa Phòng QC D50",
    category: "Tài Liệu Chuyên Ngành",
    duration: "Tài liệu số",
    audience: "Quản lý chất lượng",
    description:
      "Bộ quy chuẩn chi tiết giúp xưởng in thiết lập hệ thống ánh sáng chuẩn D50, biểu mẫu kiểm tra và các tiêu chí đánh giá bài in theo chuẩn quốc tế.",
    image: "/images/news_fogra_standard.jpg",
  },
  {
    id: 5,
    name: "Đào Tạo Kiểm Soát Mực & Vật Liệu In",
    category: "Khóa Học",
    duration: "1 ngày",
    audience: "Thợ in, kho vật tư",
    description:
      "Ảnh hưởng của mực, giấy và điều kiện in tới kết quả đo màu. Cách chọn và kiểm soát vật tư để giữ ổn định màu giữa các lô sản xuất.",
    image: "/images/ink.jpg",
  },
  {
    id: 6,
    name: "Tư Vấn Duy Trì Chứng Chỉ (Audit Định Kỳ)",
    category: "Tài Liệu Chuyên Ngành",
    duration: "Theo quý / năm",
    audience: "Nhà in đã đạt G7",
    description:
      "Quy trình đo kiểm định kỳ, hồ sơ lưu vết và hướng dẫn tái chứng nhận để nhà in giữ vững chứng chỉ G7 qua từng năm.",
    image: "/images/paper_rolls.jpg",
  },
];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered =
    activeCategory === "Tất cả" ? courses : courses.filter((c) => c.category === activeCategory);

  return (
    <main className="bg-[#f8f9fa] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[var(--color-primary)] py-16 text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-saira uppercase tracking-wide mb-4">
          Khóa Học & Công Cụ
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-white/80 font-bold uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
          <ChevronRight size={14} />
          <span className="text-white">Khóa học & Công cụ</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all shadow-sm ${
                activeCategory === category
                  ? "bg-[var(--color-primary)] text-white shadow-md scale-105"
                  : "bg-white text-[var(--color-text-main)] hover:bg-gray-100 hover:text-[var(--color-primary)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((course) => (
            <div key={course.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded shadow-md">
                  {course.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[var(--color-text-main)] mb-3 leading-tight">{course.name}</h2>
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wide text-[var(--color-text-muted)] mb-4">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {course.duration}</span>
                  <span className="flex items-center gap-1.5"><Users size={14} /> {course.audience}</span>
                </div>
                <p className="text-[var(--color-text-muted)] text-sm mb-6 flex-grow leading-relaxed">
                  {course.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[var(--color-primary)] text-white font-bold uppercase tracking-wider text-[13px] py-3 rounded hover:bg-[var(--color-primary-hover)] transition-colors text-center mt-auto"
                >
                  Đăng Ký / Tư Vấn
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
