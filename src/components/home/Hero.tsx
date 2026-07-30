"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Cpu, ShieldCheck, Factory } from "lucide-react";
import styles from "./Hero.module.css";
import { company } from "@/data/company";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Topographic/Tech background */}
      <div className="tech-pattern" />

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay} />

      <div className={`container ${styles.content}`}>
        {/* Eyebrow */}
        <div className={`${styles.eyebrow} ${mounted ? styles.visible : ""}`}>
          <span className={styles.dot} />
          <span className="text-mono" style={{ color: "var(--accent-primary)", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {company.name} — Đối tác tin cậy
          </span>
        </div>

        {/* Main heading */}
        <h1 className={`${styles.heading} ${mounted ? styles.visible : ""}`}>
          <span className={styles.line1}>Gia Công Điện Tử</span>
          <span className={styles.line2}>
            & Lắp Ráp
            <span className={styles.accentWord}> PCBA</span>
          </span>
          <span className={styles.line3}>
            <span className={styles.accentWord}>Hàng Đầu</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className={`${styles.sub} ${mounted ? styles.visible : ""}`}>
          {company.description}
          <br className="desktop-only" />
          Tiêu chuẩn quốc tế — Giao hàng đúng hẹn.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} ${mounted ? styles.visible : ""}`}>
          <Link href="/contact" className="btn btn-primary">
            Nhận Báo Giá SMT <ArrowRight size={16} />
          </Link>
          <Link href="/projects" className="btn btn-outline">
            Dự Án Tiêu Biểu
          </Link>
        </div>

        {/* Quick stats */}
        <div className={`${styles.quickStats} ${mounted ? styles.visible : ""}`}>
          <div className={styles.quickStat}>
            <Factory size={14} style={{ color: "var(--accent-primary)" }} />
            <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>{company.area} m² NHÀ MÁY</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.quickStat}>
            <ShieldCheck size={14} style={{ color: "var(--accent-teal)" }} />
            <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>ISO 9001, 13485</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.quickStat}>
            <Cpu size={14} style={{ color: "var(--accent-purple)" }} />
            <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)", textTransform: "uppercase" }}>SMT & BOX BUILD</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <ChevronDown size={18} />
      </div>

      {/* Bottom fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
