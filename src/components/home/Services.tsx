import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { company } from "@/data/company";
import ServiceIcon from "@/components/ServiceIcon";

export default function Services() {
  return (
    <section className="relative pt-20 pb-20 lg:pt-24 lg:pb-32">
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-[#f4f7f6] z-0"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Giải Pháp Quản Trị Màu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 uppercase font-saira">
            Dịch vụ của chúng tôi
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-3xl mx-auto text-lg leading-relaxed">
            Chúng tôi đồng hành cùng các xưởng in tại Việt Nam trong hành trình chuẩn hóa màu sắc theo tiêu chuẩn quốc tế ISO 12647 và phương pháp G7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {company.services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 relative flex flex-col flex-grow">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center absolute -top-8 left-8 text-[var(--color-primary)]">
                  <ServiceIcon name={service.icon} size={36} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-main)] mt-6 mb-3">{service.title}</h3>
                <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <Link href="/services" className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:gap-4 transition-all mt-auto">
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
