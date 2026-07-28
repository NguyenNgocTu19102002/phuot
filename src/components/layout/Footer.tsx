import Link from "next/link";
import { Compass, Tv2, Camera, Share2, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = {
  explore: [
    { href: "/destinations", label: "Điểm đến" },
    { href: "/journeys", label: "Hành trình" },
    { href: "/map", label: "Bản đồ" },
  ],
  regions: [
    { href: "/destinations?region=tay-bac", label: "Tây Bắc" },
    { href: "/destinations?region=dong-bac", label: "Đông Bắc" },
    { href: "/destinations?region=mien-trung", label: "Miền Trung" },
    { href: "/destinations?region=tay-nguyen", label: "Tây Nguyên" },
    { href: "/destinations?region=nam-bo", label: "Nam Bộ" },
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
              Việt Nam — từ Lũng Cú đến Cà Mau
            </span>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram"><Camera size={16} /></a>
              <a href="#" aria-label="Youtube"><Tv2 size={16} /></a>
              <a href="#" aria-label="Facebook"><Share2 size={16} /></a>
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
              <span>PhượtXuyênViệt</span>
            </div>
            <p className={styles.tagline}>
              Nền tảng thông tin du lịch phượt thủ Việt Nam.
              Chia sẻ hành trình, khám phá điểm đến mới.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNum}>500+</span>
                <span className={styles.statLabel}>Địa điểm</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>1,200+</span>
                <span className={styles.statLabel}>Hành trình</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>28,000</span>
                <span className={styles.statLabel}>Km tổng</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={styles.colTitle}>Khám phá</h4>
            <ul className={styles.linkList}>
              {footerLinks.explore.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Vùng miền</h4>
            <ul className={styles.linkList}>
              {footerLinks.regions.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={styles.colTitle}>Cập nhật hành trình</h4>
            <p className={styles.newsletterDesc}>
              Nhận thông báo khi có hành trình mới và địa điểm hot.
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="email@phuotxuyenviet.vn"
                className={styles.input}
              />
              <button className="btn btn-primary" style={{ padding: "10px 16px", fontSize: "0.8rem" }}>
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 PhượtXuyênViệt — Được tạo ra với ❤️ bởi cộng đồng phượt thủ Việt Nam
          </p>
          <p className={styles.motto} style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
            "ĐƯỜNG ĐI KHÓ, KHÔNG KHÓ VÌ NGĂN SÔNG CẤM NÚI"
          </p>
        </div>
      </div>
    </footer>
  );
}
