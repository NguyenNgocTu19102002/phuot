import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./CTAStrip.module.css";

export default function CTAStrip() {
  return (
    <section className={styles.strip}>
      <div className="topo-pattern" style={{ opacity: 0.08 }} />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <span className="text-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--bg-base)", opacity: 0.6 }}>
              — CỘNG ĐỒNG PHƯỢT THỦ VIỆT NAM —
            </span>
            <h2 className={styles.heading}>
              Bạn vừa hoàn thành<br />một hành trình?
            </h2>
            <p className={styles.sub}>
              Chia sẻ câu chuyện của bạn với hàng nghìn phượt thủ Việt Nam.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/journeys" className={styles.btn}>
              Chia sẻ ngay <ArrowRight size={18} />
            </Link>
            <Link href="/map" className={styles.btnOutline}>
              Xem bản đồ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
