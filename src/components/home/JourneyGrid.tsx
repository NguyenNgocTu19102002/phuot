import Link from "next/link";
import { ArrowRight, Heart, Eye, Calendar } from "lucide-react";
import { journeys } from "@/data/journeys";
import { difficultyConfig } from "@/data/destinations";
import styles from "./JourneyGrid.module.css";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
}

export default function JourneyGrid() {
  const featured = journeys.filter((j) => j.featured).slice(0, 4);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">02 — Nhật Ký</div>
            <h2 className="text-title">Hành Trình Nổi Bật</h2>
          </div>
          <Link href="/journeys" className="btn btn-ghost">
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.grid}>
          {featured.map((journey, i) => (
            <Link key={journey.id} href={`/journeys/${journey.slug}`} className={`${styles.card} ${i === 0 ? styles.featured : ""}`}>
              <div className={styles.imgWrap}>
                <img src={journey.coverImage} alt={journey.title} className={styles.img} />
                <div className={styles.imgOverlay} />
                <div className={styles.vehicleBadge}>{journey.vehicleIcon}</div>
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={`badge ${difficultyConfig[journey.difficulty].badgeClass}`}>
                    {difficultyConfig[journey.difficulty].label}
                  </span>
                  <span className="badge badge-teal">{journey.region}</span>
                </div>

                <h3 className={styles.title}>{journey.title}</h3>
                <p className={styles.excerpt}>{journey.excerpt}</p>

                <div className={styles.author}>
                  <img src={journey.author.avatar} alt={journey.author.name} className={styles.avatar} />
                  <div>
                    <div className={styles.authorName}>{journey.author.name}</div>
                    <div className={styles.authorDate}>
                      <Calendar size={11} />
                      {formatDate(journey.date)}
                    </div>
                  </div>
                </div>

                <div className={styles.footer}>
                  <div className={styles.tripInfo}>
                    <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                      {journey.totalKm.toLocaleString()} KM
                    </span>
                    <span className="text-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                      {journey.duration} NGÀY
                    </span>
                  </div>
                  <div className={styles.engagement}>
                    <span><Heart size={12} /> {journey.likes.toLocaleString()}</span>
                    <span><Eye size={12} /> {journey.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
