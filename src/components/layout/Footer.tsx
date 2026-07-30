import Link from "next/link";
import { Compass, Tv2, Camera, Share2, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import { company } from "@/data/company";

const footerLinks = {
  explore: [
    { href: "/about", label: "Giới thiệu" },
    { href: "/projects", label: "Dự án tiêu biểu" },
    { href: "/services", label: "Dịch vụ sản xuất" },
    { href: "/careers", label: "Tuyển dụng & Phúc lợi" },
  ],
  capabilities: [
    { href: "/services", label: "Gia công SMT" },
    { href: "/services", label: "Lắp ráp PCBA" },
    { href: "/services", label: "Box Build" },
    { href: "/services", label: "Kiểm tra chất lượng (AOI)" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBar}>
        <div className="container">
          <div className={styles.topBarInner}>
            <span className="text-mono" style={{ color: "var(--text-muted)" }}>
              <MapPin size={12} style={{ display: "inline", marginRight: 6 }} />
              {company.address}
            </span>
            <div className={styles.socials}>
              <a href="#" aria-label="LinkedIn"><Share2 size={16} /></a>
              <a href="#" aria-label="Youtube"><Tv2 size={16} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <Compass size={22} strokeWidth={1.5} />
              <span>Techvina Electronics</span>
            </div>
            <p className={styles.tagline}>
              {company.description}
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{company.founded}</span>
                <span className={styles.statLabel}>Năm thành lập</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>{company.employees}+</span>
                <span className={styles.statLabel}>Nhân sự</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>{company.area} m²</span>
                <span className={styles.statLabel}>Quy mô nhà máy</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={styles.colTitle}>Công ty</h4>
            <ul className={styles.linkList}>
              {footerLinks.explore.map((l, i) => (
                <li key={i}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Năng lực</h4>
            <ul className={styles.linkList}>
              {footerLinks.capabilities.map((l, i) => (
                <li key={i}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={styles.colTitle}>Liên hệ báo giá</h4>
            <p className={styles.newsletterDesc}>
              Để lại email để nhận được hồ sơ năng lực (Profile) và báo giá gia công.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder={company.email}
                className={styles.input}
              />
              <button className="btn btn-primary" style={{ padding: "10px 16px", fontSize: "0.8rem" }}>
                Gửi
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Techvina Electronics Co., Ltd. Đã đăng ký bản quyền.
          </p>
          <p className={styles.motto} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {company.slogan}
          </p>
        </div>
      </div>
    </footer>
  );
}
