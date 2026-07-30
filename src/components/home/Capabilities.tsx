import Link from "next/link";
import { ArrowRight, Settings, Maximize, Cpu, ShieldCheck } from "lucide-react";
import styles from "./Capabilities.module.css";
import { company } from "@/data/company";

const capabilities = [
  {
    icon: <Cpu size={32} />,
    title: "Công nghệ SMT",
    desc: "Dây chuyền Dán bề mặt tự động tốc độ cao, độ chính xác tuyệt đối.",
    delay: "0s"
  },
  {
    icon: <Settings size={32} />,
    title: "Gia công PCBA",
    desc: "Lắp ráp linh kiện điện tử xuyên lỗ và dán bề mặt, tuân thủ RoHS.",
    delay: "0.1s"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Kiểm định Chất lượng",
    desc: "Hệ thống kiểm tra quang học tự động (AOI) và X-Ray 3D đảm bảo zero-defect.",
    delay: "0.2s"
  },
  {
    icon: <Maximize size={32} />,
    title: "Phòng sạch Class 10k",
    desc: "Môi trường tiêu chuẩn quốc tế cho các sản phẩm thiết bị y tế và ô tô.",
    delay: "0.3s"
  }
];

export default function Capabilities() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">02 — Dịch Vụ</div>
            <h2 className="text-title">Năng Lực Sản Xuất</h2>
          </div>
          <Link href="/services" className="btn btn-ghost">
            Chi tiết dịch vụ <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: cap.delay }}>
              <div className={styles.iconWrapper}>
                {cap.icon}
              </div>
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.certs}>
          <p className="text-mono" style={{ color: "var(--text-muted)", marginBottom: "16px", letterSpacing: "0.05em" }}>
            CHỨNG NHẬN QUỐC TẾ:
          </p>
          <div className={styles.certList}>
            {company.certifications.map(cert => (
              <span key={cert} className="badge badge-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
