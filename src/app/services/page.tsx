import { company } from "@/data/company";
import { Settings, Award, Palette, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch Vụ | Quang Minh Print & Pack",
  description: "Giải pháp in ấn và bao bì toàn diện",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award": return <Award size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />;
      case "Settings": return <Settings size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />;
      case "Palette": return <Palette size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />;
      case "BookOpen": return <BookOpen size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />;
      default: return <Settings size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />;
    }
  };

  return (
    <main className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Dịch Vụ Của Chúng Tôi</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 leading-tight">
            Giải Pháp <span className="text-[var(--color-primary)]">In Ấn & Bao Bì Toàn Diện</span>
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto text-lg leading-relaxed">
            {company.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {company.services.map((svc) => (
            <div key={svc.id} className="bg-[var(--color-secondary)] p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-[var(--color-primary)] hover:shadow-lg transition-all duration-300 flex gap-6">
              <div className="flex-shrink-0 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm">
                {getIcon(svc.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-text-main)] mb-4">{svc.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed text-lg mb-6">{svc.desc}</p>
                <button className="text-[var(--color-primary)] font-bold hover:underline uppercase text-sm tracking-wide">
                  Khám phá thêm →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
