export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Khảo Sát & Đánh Giá",
      desc: "Chuyên gia đến nhà máy khảo sát thiết bị, vật tư, mực và năng lực in hiện tại để lên kế hoạch cân chỉnh.",
      image: "/images/heidelberg.jpg"
    },
    {
      step: "02",
      title: "Đào Tạo Nhân Sự",
      desc: "Mở lớp huấn luyện thực tế cho đội ngũ thợ in, QC, chế bản về lý thuyết quản trị màu và phương pháp G7.",
      image: "/images/g7_certification.jpg"
    },
    {
      step: "03",
      title: "Thực Hành Cân Chỉnh",
      desc: "Trực tiếp tiến hành in test P2P, đo màu, dùng ColorMatch App để thiết lập đường cong bù trừ (NPDC).",
      image: "/images/ink.jpg"
    },
    {
      step: "04",
      title: "Cấp Chứng Chỉ G7",
      desc: "Gửi kết quả in thực tế cho tổ chức Idealliance để xét duyệt và cấp chứng nhận G7 Master Colorspace toàn cầu.",
      image: "/images/news_fogra_standard.jpg"
    }
  ];

  return (
    <section className="py-20 bg-[#f4f7f6] relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm mb-4 block">Đồng Hành Toàn Diện</span>
          <h3 className="text-4xl md:text-5xl font-bold font-saira uppercase text-[var(--color-text-main)] mb-6">
            Lộ Trình Đạt Chứng Chỉ G7
          </h3>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            Chúng tôi thiết kế một lộ trình rõ ràng gồm 4 bước chuyên biệt, giúp nhà máy in của bạn làm chủ phương pháp luận và vượt qua kỳ kiểm định G7 Master một cách nhanh chóng và tiết kiệm nhất.
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
