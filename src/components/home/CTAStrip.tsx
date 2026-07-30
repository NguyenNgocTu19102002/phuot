import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CTAStrip.module.css";

export default function CTAStrip() {
  return (
    <section className={styles.strip}>
      <div className="tech-pattern" style={{ opacity: 0.15 }} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <span className="text-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--bg-base)", opacity: 0.8 }}>
              — SẴN SÀNG HỢP TÁC —
            </span>
            <h2 className={styles.heading}>
              Bạn cần một đối tác<br />gia công PCBA uy tín?
            </h2>
            <p className={styles.sub}>
              Với tiêu chuẩn khắt khe và công nghệ hiện đại, chúng tôi tự tin đáp ứng mọi yêu cầu khắt khe nhất của bạn.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/contact" className={styles.btn}>
              Nhận Báo Giá <ArrowRight size={18} />
            </Link>
            <Link href="/about" className={styles.btnOutline}>
              Về Chúng Tôi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
