import { company } from "@/data/company";
import { Cpu, Settings, ShieldCheck, Maximize, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Cpu size={48} />,
    title: "Gia công SMT (Surface Mount Technology)",
    desc: "Sử dụng dây chuyền tự động hóa cao cấp, độ chính xác tuyệt đối với các linh kiện siêu nhỏ (01005, 0201). Hệ thống lò hàn Reflow nhiều vùng nhiệt kiểm soát tối ưu chất lượng mối hàn.",
  },
  {
    icon: <Settings size={48} />,
    title: "Lắp ráp linh kiện xuyên lỗ (THT / Wave Soldering)",
    desc: "Quy trình hàn sóng (Wave Soldering) tuân thủ tiêu chuẩn RoHS. Đội ngũ nhân sự lành nghề đảm bảo chất lượng lắp ráp cho các linh kiện đặc thù.",
  },
  {
    icon: <Maximize size={48} />,
    title: "Phủ bảo vệ & Đóng gói (Conformal Coating & Box Build)",
    desc: "Phủ keo bảo vệ bo mạch chống ẩm, bụi, hóa chất. Lắp ráp hoàn thiện sản phẩm (Box Build) bao gồm vỏ cơ khí, màn hình, cáp nối và đóng gói thương mại.",
  },
  {
    icon: <ShieldCheck size={48} />,
    title: "Kiểm thử chất lượng & Lập trình (Testing & IC Programming)",
    desc: "Trang bị SPI (Solder Paste Inspection), 3D AOI, X-Ray. Cung cấp dịch vụ nạp chương trình (IC Programming), kiểm tra chức năng (FCT / ICT).",
  },
];

export default function ServicesPage() {
  return (
    <div className="section" style={{ paddingTop: 120, minHeight: "80vh" }}>
      <div className="container">
        <h1 className="text-hero" style={{ marginBottom: 40 }}>Dịch Vụ Của Chúng Tôi</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
          {services.map((svc, i) => (
            <div key={i} style={{ background: "var(--bg-surface)", padding: 32, borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
              <div style={{ color: "var(--accent-primary)", marginBottom: 24 }}>{svc.icon}</div>
              <h3 className="text-title" style={{ fontSize: "1.4rem", marginBottom: 16 }}>{svc.title}</h3>
              <p className="text-body" style={{ color: "var(--text-secondary)" }}>{svc.desc}</p>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: 60, padding: 40, background: "var(--bg-raised)", borderRadius: 16, border: "1px solid var(--border-strong)" }}>
          <h2 className="text-title" style={{ marginBottom: 24, textAlign: "center" }}>Cam Kết Chất Lượng</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {company.certifications.map(cert => (
              <div key={cert} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CheckCircle2 size={24} style={{ color: "var(--accent-green)" }} />
                <span className="text-body" style={{ fontWeight: 600 }}>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
