import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, User } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Tin Tức & Kiến Thức In Ấn | Quang Minh Print & Pack",
  description: "Cập nhật các tin tức chuyên ngành, kiến thức in ấn, công nghệ bao bì và quản trị màu sắc mới nhất.",
};

export default function ArticlesPage() {
  return (
    <main className="bg-[#f4f7f6] min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-white pt-24 pb-12 shadow-sm mb-12">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-text-muted)] font-bold uppercase tracking-wider mb-4">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Trang chủ</Link>
            <ChevronRight size={14} />
            <span className="text-[var(--color-primary)]">Tin tức</span>
          </div>
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Tin tức công nghệ in</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-saira text-[var(--color-text-main)] uppercase leading-tight mb-6">
            Kiến Thức & <span className="text-[var(--color-primary)]">Tin Tức In Ấn</span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            Nơi cập nhật những kiến thức chuyên sâu và xu hướng mới nhất về tiêu chuẩn in ấn, quản trị màu sắc và công nghệ đóng gói bao bì trên thế giới.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <Link href={`/articles/${article.slug}`}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    Kiến thức
                  </div>
                </Link>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1"><Calendar size={14} /> {article.date}</div>
                  <div className="flex items-center gap-1"><User size={14} /> Ban biên tập</div>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4 font-saira uppercase leading-tight line-clamp-3">
                  <Link href={`/articles/${article.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-[var(--color-text-muted)] mb-8 flex-grow leading-relaxed line-clamp-3">
                  {article.shortDesc || "Bài viết cung cấp thông tin chuyên ngành hữu ích, giúp độc giả hiểu rõ hơn về các tiêu chuẩn và quy trình trong lĩnh vực sản xuất bao bì và in ấn công nghiệp."}
                </p>
                <Link href={`/articles/${article.slug}`} className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] font-bold uppercase tracking-wide group-hover:gap-4 transition-all mt-auto border-t border-gray-100 pt-6">
                  Đọc tiếp <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
