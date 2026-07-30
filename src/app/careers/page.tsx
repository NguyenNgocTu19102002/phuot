import { Heart, Briefcase, GraduationCap, Utensils, Shield, Plane } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: <Briefcase size={32} />,
    title: "Mức lương cạnh tranh",
    desc: "Thu nhập hấp dẫn theo năng lực, thưởng dự án, thưởng tháng 13 và xét tăng lương định kỳ 2 lần/năm."
  },
  {
    icon: <Shield size={32} />,
    title: "Bảo hiểm toàn diện",
    desc: "Đóng BHXH, BHYT, BHTN 100% trên lương thực tế. Gói bảo hiểm sức khỏe cao cấp (PVI) cho nhân sự và gia đình."
  },
  {
    icon: <Utensils size={32} />,
    title: "Chăm sóc sức khỏe & Ăn uống",
    desc: "Phục vụ 3 bữa ăn ca/ngày tại nhà ăn tiêu chuẩn của KCN. Miễn phí cà phê, nước giải khát tại khu vực Pantry."
  },
  {
    icon: <Plane size={32} />,
    title: "Nghỉ mát & Teambuilding",
    desc: "Chương trình du lịch nghỉ mát thường niên tiêu chuẩn 4-5 sao, các hoạt động teambuilding, Year End Party."
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Đào tạo & Phát triển",
    desc: "Hỗ trợ 100% chi phí các khóa học chứng chỉ chuyên môn (IPC, Six Sigma) và cơ hội tu nghiệp tại nước ngoài."
  },
  {
    icon: <Heart size={32} />,
    title: "Môi trường năng động",
    desc: "Xe đưa đón từ nội thành Hà Nội. Văn phòng làm việc hiện đại, phòng tập gym và khu vui chơi giải trí."
  }
];

const jobs = [
  {
    title: "Kỹ sư SMT (SMT Process Engineer)",
    type: "Toàn thời gian",
    req: "Ít nhất 2 năm kinh nghiệm lập trình và vận hành máy Yamaha/Panasonic SMT.",
    qty: 3
  },
  {
    title: "Chuyên viên Quản lý Chất lượng (QA/QC)",
    type: "Toàn thời gian",
    req: "Am hiểu tiêu chuẩn ISO 9001, IPC-A-610. Có kinh nghiệm làm việc tại nhà máy điện tử.",
    qty: 5
  },
  {
    title: "Trưởng nhóm Sản xuất (Production Leader)",
    type: "Toàn thời gian",
    req: "Kỹ năng quản lý nhân sự, hiểu biết về 5S, Kaizen, Lean Manufacturing.",
    qty: 2
  }
];

export default function CareersPage() {
  return (
    <div className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60, maxWidth: 800, margin: "0 auto 60px" }}>
          <h1 className="text-hero" style={{ marginBottom: 24 }}>Gia nhập đội ngũ Techvina</h1>
          <p className="text-body" style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}>
            Tại Techvina, chúng tôi không chỉ xây dựng những bo mạch điện tử phức tạp, mà còn xây dựng một môi trường làm việc hạnh phúc, nơi mọi cá nhân đều được tôn trọng và phát triển tối đa năng lực.
          </p>
        </div>

        {/* Benefits Grid */}
        <h2 className="text-title" style={{ marginBottom: 40, textAlign: "center", color: "var(--accent-primary)" }}>Chính sách Đãi ngộ & Phúc lợi</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 80 }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ background: "var(--bg-surface)", padding: 32, borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
              <div style={{ color: "var(--accent-primary)", marginBottom: 20 }}>{b.icon}</div>
              <h3 className="text-title" style={{ fontSize: "1.25rem", marginBottom: 12 }}>{b.title}</h3>
              <p className="text-body" style={{ color: "var(--text-secondary)" }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Job Openings */}
        <div style={{ background: "var(--bg-raised)", padding: "60px 40px", borderRadius: 24, border: "1px solid var(--border-strong)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
            <div>
              <h2 className="text-title" style={{ marginBottom: 12 }}>Vị trí đang tuyển dụng</h2>
              <p className="text-body" style={{ color: "var(--text-secondary)" }}>Làm việc tại KCN Quang Minh, Mê Linh, Hà Nội</p>
            </div>
            <Link href="/contact" className="btn btn-primary">Gửi CV ứng tuyển</Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {jobs.map((job, i) => (
              <div key={i} style={{ background: "var(--bg-base)", padding: 24, borderRadius: 12, border: "1px solid var(--border-subtle)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, alignItems: "center" }}>
                <div style={{ flex: "1 1 300px" }}>
                  <h3 className="text-title" style={{ fontSize: "1.2rem", marginBottom: 8 }}>{job.title}</h3>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <span className="badge badge-primary">{job.type}</span>
                    <span className="badge badge-orange">Số lượng: {job.qty}</span>
                  </div>
                  <p className="text-small" style={{ color: "var(--text-secondary)" }}><strong>Yêu cầu:</strong> {job.req}</p>
                </div>
                <Link href="/contact" className="btn btn-outline" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
                  Ứng tuyển ngay
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
