import { Users, FileText, Award, Calendar } from "lucide-react";

const stats = [
  { icon: <Users size={48} className="text-[var(--color-primary)]" />, count: "3,500+", label: "Khách hàng" },
  { icon: <FileText size={48} className="text-[var(--color-primary)]" />, count: "1,200+", label: "Dự án bao bì" },
  { icon: <Award size={48} className="text-[var(--color-primary)]" />, count: "40+", label: "Giải thưởng" },
  { icon: <Calendar size={48} className="text-[var(--color-primary)]" />, count: "24", label: "Năm kinh nghiệm" }
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-[var(--color-text-main)] mb-3 font-saira">{stat.count}</div>
              <div className="text-lg font-bold text-[var(--color-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
