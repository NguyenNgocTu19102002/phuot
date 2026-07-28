"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Wind, Mountain, MapPin } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Topographic background */}
      <div className="topo-pattern" />

      {/* Grid overlay */}
      <div className={styles.gridOverlay} />

      {/* Gradient overlay */}
      <div className={styles.gradientOverlay} />

      <div className={`container ${styles.content}`}>
        {/* Eyebrow */}
        <div className={`${styles.eyebrow} ${mounted ? styles.visible : ""}`}>
          <span className={styles.dot} />
          <span className="text-mono" style={{ color: "var(--accent-lime)", fontSize: "0.72rem", letterSpacing: "0.12em" }}>
            PHƯỢT VIỆT NAM — KHÁM PHÁ KHÔNG GIỚI HẠN
          </span>
        </div>

        {/* Main heading */}
        <h1 className={`${styles.heading} ${mounted ? styles.visible : ""}`}>
          <span className={styles.line1}>Khám Phá</span>
          <span className={styles.line2}>
            Việt Nam
            <span className={styles.accentWord}> Theo</span>
          </span>
          <span className={styles.line3}>
            <span className={styles.accentWord}>Cách Của Bạn</span>
          </span>
        </h1>

        {/* Subheading */}
        <p className={`${styles.sub} ${mounted ? styles.visible : ""}`}>
          Hàng trăm hành trình, hàng nghìn địa điểm. Từ đỉnh Fansipan
          <br className="desktop-only" />
          đến mũi Cà Mau — mỗi con đường là một câu chuyện.
        </p>

        {/* CTAs */}
        <div className={`${styles.ctas} ${mounted ? styles.visible : ""}`}>
          <Link href="/journeys" className="btn btn-primary">
            Xem hành trình <ArrowRight size={16} />
          </Link>
          <Link href="/destinations" className="btn btn-outline">
            Khám phá điểm đến
          </Link>
        </div>

        {/* Quick stats */}
        <div className={`${styles.quickStats} ${mounted ? styles.visible : ""}`}>
          <div className={styles.quickStat}>
            <Mountain size={14} style={{ color: "var(--accent-lime)" }} />
            <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>63 TỈNH THÀNH</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.quickStat}>
            <Wind size={14} style={{ color: "var(--accent-orange)" }} />
            <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>3,143M ĐỘ CAO MAX</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.quickStat}>
            <MapPin size={14} style={{ color: "var(--accent-teal)" }} />
            <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>500+ ĐỊA ĐIỂM</span>
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
