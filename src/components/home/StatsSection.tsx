import { Calendar, BadgeCheck, Factory, Printer } from "lucide-react";
import { company } from "@/data/company";

const icons = [Calendar, BadgeCheck, Factory, Printer];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.stats.map((stat, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={stat.label} className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={48} className="text-[var(--color-primary)]" strokeWidth={1.5} />
                </div>
                <div className="text-5xl font-bold text-[var(--color-text-main)] mb-3 font-saira">{stat.value}</div>
                <div className="text-lg font-bold text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
