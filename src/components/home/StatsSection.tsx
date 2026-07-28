"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsSection.module.css";

const stats = [
  { value: 63, suffix: "", label: "Tỉnh thành", unit: "TỈNH", color: "var(--accent-lime)" },
  { value: 28450, suffix: "", label: "Tổng km đã ghi nhận", unit: "KM", color: "var(--accent-orange)" },
  { value: 1200, suffix: "+", label: "Hành trình đã chia sẻ", unit: "HÀNH TRÌNH", color: "var(--accent-teal)" },
  { value: 500, suffix: "+", label: "Địa điểm phượt", unit: "ĐIỂM ĐẾN", color: "var(--accent-purple)" },
];

function CountUp({ target, suffix, color }: { target: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} style={{ color }}>
      {count.toLocaleString("vi-VN")}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.unit} style={{ color: stat.color }}>
                {stat.unit}
              </div>
              <div className={styles.value}>
                <CountUp target={stat.value} suffix={stat.suffix} color={stat.color} />
              </div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.bar} style={{ background: stat.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
