import Link from "next/link";
import { ArrowRight, Layers, LineChart, Target } from "lucide-react";
import { company } from "@/data/company";

const pillars = [
  {
    icon: <Layers size={28} />,
    title: "Cân Bằng Xám (Gray Balance)",
    desc: "Điều chỉnh tỷ lệ C-M-Y sao cho vùng trung tính không bị ngả màu. Đây là gốc rễ của sự đồng nhất thị giác giữa các bài in.",
  },
  {
    icon: <LineChart size={28} />,
    title: "Đường Cong NPDC",
    desc: "Neutral Print Density Curve mô tả mật độ in trên toàn dải tông. Đưa NPDC về chuẩn giúp phục chế tầng thứ chính xác.",
  },
  {
    icon: <Target size={28} />,
    title: "Đồng Nhất Đa Công Nghệ",
    desc: "Cùng một file, in trên Offset, Flexo hay Digital vẫn cho cảm nhận màu như nhau — điều các thương hiệu lớn luôn yêu cầu.",
  },
];

export default function G7Explainer() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">
              Kiến Thức Nền Tảng
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-main)] mb-6 uppercase font-saira leading-tight">
              G7 là gì?
            </h2>
            <div className="space-y-5 text-[var(--color-text-muted)] text-lg leading-relaxed">
              <p>
                G7 <strong className="text-[var(--color-text-main)]">không phải là một tiêu chuẩn ISO</strong>, mà là
                phương pháp hiệu chỉnh do Idealliance (nay thuộc PRINTING United Alliance) phát triển, giúp
                đạt sự hài hòa thị giác giữa các hệ thống in khác nhau thông qua{" "}
                <strong className="text-[var(--color-text-main)]">cân bằng xám</strong> và{" "}
                <strong className="text-[var(--color-text-main)]">đường cong mật độ trung tính (NPDC)</strong>.
              </p>
              <p>
                G7 không thay thế ISO 12647, Fogra hay ICC Profile — nó hoạt động trên nền tảng đó và bổ sung
                phần quan trọng nhất mà mắt người nhạy cảm nhất: vùng xám và tầng thứ.
              </p>
              <p>
                G7+ là bước phát triển tiếp theo, dành cho các nhà in vận hành nhiều công nghệ, nhiều loại
                vật liệu với dải màu rộng hơn.
              </p>
            </div>
            <Link
              href="/articles/g7-va-g7-plus-trong-chuan-hoa-chat-luong-in"
              className="inline-flex items-center gap-2 mt-8 text-[var(--color-primary)] font-bold uppercase tracking-wide text-sm hover:gap-4 transition-all"
            >
              Đọc bài phân tích đầy đủ <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 bg-[#f4f7f6] p-6 rounded-xl border-l-4 border-[var(--color-primary)]"
              >
                <div className="text-[var(--color-primary)] shrink-0 mt-1">{p.icon}</div>
                <div>
                  <h3 className="font-bold text-lg text-[var(--color-text-main)] mb-2">{p.title}</h3>
                  <p className="text-[var(--color-text-muted)] leading-relaxed text-[15px]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 cấp độ chứng nhận */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">
            Idealliance Certification
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-4 uppercase font-saira">
            3 Cấp Độ Chứng Nhận G7
          </h3>
          <p className="text-[var(--color-text-muted)] text-lg leading-relaxed">
            Chúng tôi tư vấn nhà in lựa chọn cấp độ phù hợp với năng lực thiết bị và yêu cầu của khách hàng,
            thay vì chạy theo cấp cao nhất một cách lãng phí.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {company.g7Levels.map((lv, i) => (
            <div
              key={lv.level}
              className="relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm shadow-md">
                {i + 1}
              </div>
              <h4 className="text-xl font-bold text-[var(--color-text-main)] mb-3 mt-2 font-saira uppercase">
                {lv.level}
              </h4>
              <p className="text-[var(--color-text-muted)] leading-relaxed">{lv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
