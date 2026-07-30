import { company } from "@/data/company";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: 120, minHeight: "80vh" }}>
      <div className="container">
        <h1 className="text-hero" style={{ marginBottom: 40 }}>Liên Hệ Hợp Tác</h1>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          <div>
            <p className="text-body" style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: 40 }}>
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp gia công tối ưu nhất cho dự án của bạn. Hãy liên hệ với chuyên gia của chúng tôi.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <MapPin size={24} style={{ color: "var(--accent-primary)", marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Địa chỉ nhà máy</h4>
                  <p style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}>{company.address}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <Phone size={24} style={{ color: "var(--accent-primary)", marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Điện thoại</h4>
                  <p style={{ color: "var(--text-secondary)" }}>{company.phone}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <Mail size={24} style={{ color: "var(--accent-primary)", marginTop: 4 }} />
                <div>
                  <h4 style={{ fontWeight: 600, marginBottom: 4 }}>Email</h4>
                  <p style={{ color: "var(--text-secondary)" }}>{company.email}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ background: "var(--bg-surface)", padding: 40, borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
            <h3 className="text-title" style={{ fontSize: "1.5rem", marginBottom: 24 }}>Gửi yêu cầu báo giá</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Họ và Tên</label>
                <input type="text" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, background: "var(--bg-base)", border: "1px solid var(--border-strong)", color: "white" }} placeholder="Nhập họ tên" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Email liên hệ</label>
                <input type="email" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, background: "var(--bg-base)", border: "1px solid var(--border-strong)", color: "white" }} placeholder="email@company.com" />
              </div>
              <div>
                <label style={{ display: "block", marginBottom: 8, fontSize: "0.9rem" }}>Mô tả dự án</label>
                <textarea rows={4} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, background: "var(--bg-base)", border: "1px solid var(--border-strong)", color: "white", resize: "none" }} placeholder="Mô tả số lượng, yêu cầu gia công..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ marginTop: 16, justifyContent: "center", padding: "14px" }}>
                Gửi Yêu Cầu
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
