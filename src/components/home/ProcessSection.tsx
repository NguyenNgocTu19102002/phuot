export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Tiếp nhận & Tư vấn",
      desc: "Lắng nghe yêu cầu, định hướng thiết kế và tư vấn loại vật liệu, máy móc tối ưu nhất phù hợp với ngân sách của doanh nghiệp.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop"
    },
    {
      step: "02",
      title: "Làm mẫu Mockup",
      desc: "Thiết kế file in chuẩn hóa, xuất kẽm CTP và in thử (Proof) hoặc làm mẫu túi/hộp thực tế để duyệt trước khi sản xuất hàng loạt.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=400&auto=format&fit=crop"
    },
    {
      step: "03",
      title: "Sản xuất đồng bộ",
      desc: "Tiến hành in ấn trên dây chuyền Offset, phủ UV, bế dán hoàn thiện với sự giám sát khắt khe trên từng công đoạn.",
      image: "https://images.unsplash.com/photo-1586940866597-226685416035?q=80&w=400&auto=format&fit=crop"
    },
    {
      step: "04",
      title: "KCS & Giao hàng",
      desc: "Đội ngũ KCS kiểm tra 100% thành phẩm, loại bỏ phế phẩm, đóng thùng carton tiêu chuẩn và giao tận kho khách hàng.",
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=80&w=400&auto=format&fit=crop"
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
