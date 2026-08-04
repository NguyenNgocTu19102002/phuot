import Link from "next/link";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

export default function LatestArticles() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-2 block">Tin Tức & Kiến Thức</span>
            <h2 className="text-4xl md:text-5xl font-bold font-saira text-[var(--color-text-main)] mb-4 uppercase">Tin Tức In Ấn</h2>
          </div>
          <Link href="/articles" className="hidden md:inline-flex items-center gap-2 mt-6 md:mt-0 text-[var(--color-primary)] font-bold uppercase tracking-wide text-sm hover:text-[var(--color-primary-hover)] transition-colors">
            Xem tất cả <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <article key={article.slug} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="h-60 overflow-hidden relative">
                <Link href={`/articles/${article.slug}`}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </Link>
              </div>
              <div className="p-8 bg-[var(--color-secondary)]">
                <span className="inline-block text-[var(--color-primary)] font-bold uppercase text-xs tracking-wider mb-3">
                  {article.categoryLabel}
                </span>
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mb-0 font-saira uppercase leading-tight line-clamp-2">
                  <Link href={`/articles/${article.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <Link href={`/articles/${article.slug}`} className="mt-6 inline-block text-[var(--color-primary)] bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
