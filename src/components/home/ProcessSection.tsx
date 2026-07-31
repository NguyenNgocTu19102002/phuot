export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Thiết Kế & Báo Giá",
      desc: "Tiếp nhận yêu cầu, tư vấn giải pháp vật liệu tối ưu và thiết kế cấu trúc bao bì.",
      image: "/images/color_management.jpg"
    },
    {
      step: "02",
      title: "In Thử & Duyệt Màu",
      desc: "In mẫu thực tế, kiểm tra cấu trúc và ký duyệt màu sắc trước khi sản xuất hàng loạt.",
      image: "/images/color_management.jpg"
    },
    {
      step: "03",
      title: "Sản Xuất Đồng Loạt",
      desc: "Đưa vào hệ thống máy in Offset công nghiệp và dây chuyền gia công tự động tốc độ cao.",
      image: "/images/heidelberg.jpg"
    },
    {
      step: "04",
      title: "Kiểm Tra & Giao Hàng",
      desc: "Phòng QC kiểm tra 100% sản phẩm đạt tiêu chuẩn trước khi đóng gói và vận chuyển.",
      image: "/images/paper_rolls.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[#f4f7f6] relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Chuyên Nghiệp Hóa</span>
          <h3 className="text-4xl md:text-5xl font-bold font-saira uppercase text-[var(--color-text-main)] mb-6">
            Quy trình làm việc
          </h3>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Mọi khâu từ lúc nhận yêu cầu đến khi ra thành phẩm đều được chuẩn hóa qua quy trình khép kín 4 bước, đảm bảo chất lượng cao nhất và tiến độ nhanh nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300 border border-gray-100">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-8 border-4 border-[var(--color-primary)]/20 shadow-lg relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h5 className="text-xl font-bold text-[var(--color-text-main)] mb-4 leading-tight">
                <span className="text-[var(--color-primary)] mr-2 block text-2xl mb-1">{item.step}</span> 
                {item.title}
              </h5>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
