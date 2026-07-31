import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { articles } from "@/data/articles";
import { Metadata } from "next";

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  return {
    title: article ? `${article.title} | Quang Minh Print & Pack` : "Bài Viết",
  };
}

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="pt-0 pb-24 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-16">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-end pb-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
            <Link href="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors font-semibold">
              <ArrowLeft size={20} /> Trở về danh sách
            </Link>
            <div className="flex gap-4 items-center mb-4">
              <span className="bg-[var(--color-primary)] text-white text-xs font-bold uppercase px-3 py-1 rounded">
                {article.categoryLabel}
              </span>
              <span className="text-white/80 text-sm font-semibold">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
              {article.title}
            </h1>
            <p className="text-white/80 mt-4 font-medium">Tác giả: {article.author}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <p className="text-xl text-[var(--color-text-main)] font-medium leading-relaxed mb-12 italic border-l-4 border-[var(--color-primary)] pl-6 bg-[var(--color-secondary)] p-6 rounded-r-lg">
          {article.shortDesc}
        </p>
        
        <div className="space-y-12">
          {article.contentBlocks.map((block, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">{block.heading}</h2>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-lg whitespace-pre-line">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-6 text-[var(--color-text-main)]">Chia sẻ bài viết:</h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded text-[var(--color-text-main)] hover:bg-gray-50 transition-colors font-semibold">
              FB | Facebook
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded text-[var(--color-text-main)] hover:bg-gray-50 transition-colors font-semibold">
              IN | LinkedIn
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
