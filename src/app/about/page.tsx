import { company } from "@/data/company";

export default function AboutPage() {
  return (
    <div className="section" style={{ paddingTop: 120, minHeight: "80vh" }}>
      <div className="container">
        <h1 className="text-hero" style={{ marginBottom: 40 }}>Về Chúng Tôi</h1>
        <div style={{ maxWidth: 800 }}>
          <p className="text-body" style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: 32 }}>
            {company.description}
          </p>
          <p className="text-body" style={{ marginBottom: 24 }}>
            Được thành lập từ năm {company.founded}, Techvina Electronics tự hào là đơn vị tiên phong trong lĩnh vực sản xuất linh kiện điện tử và gia công bảng mạch in (PCBA) tại khu vực phía Bắc. 
            Với quy mô nhà máy rộng {company.area} m² tại KCN Quang Minh, Mê Linh, Hà Nội, chúng tôi sở hữu năng lực sản xuất vượt trội, đáp ứng các tiêu chuẩn khắt khe nhất của thị trường toàn cầu.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 48 }}>
            <div style={{ padding: 24, background: "var(--bg-surface)", borderRadius: 12, border: "1px solid var(--border-subtle)" }}>
              <h3 className="text-title" style={{ fontSize: "1.2rem", marginBottom: 12, color: "var(--accent-primary)" }}>Tầm nhìn</h3>
              <p className="text-small" style={{ color: "var(--text-secondary)" }}>Trở thành nhà cung cấp giải pháp gia công điện tử (EMS) hàng đầu Đông Nam Á.</p>
            </div>
            <div style={{ padding: 24, background: "var(--bg-surface)", borderRadius: 12, border: "1px solid var(--border-subtle)" }}>
              <h3 className="text-title" style={{ fontSize: "1.2rem", marginBottom: 12, color: "var(--accent-teal)" }}>Sứ mệnh</h3>
              <p className="text-small" style={{ color: "var(--text-secondary)" }}>Mang lại giá trị vượt trội thông qua chất lượng tuyệt đối và đổi mới không ngừng.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
