import Link from "next/link";
import { ArrowRight, Clock, Route } from "lucide-react";
import { destinations } from "@/data/destinations";
import { difficultyConfig } from "@/data/destinations";
import styles from "./FeaturedDestinations.module.css";

export default function FeaturedDestinations() {
  const featured = destinations.filter((d) => d.featured).slice(0, 3);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">01 — Nổi Bật</div>
            <h2 className="text-title">Điểm Đến Được Yêu Thích</h2>
          </div>
          <Link href="/destinations" className="btn btn-ghost">
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.grid}>
          {/* Large card */}
          <Link href={`/destinations/${featured[0].slug}`} className={styles.largeCard}>
            <img src={featured[0].image} alt={featured[0].name} className={styles.img} />
            <div className={styles.cardOverlay} />
            <div className={styles.cardContent}>
              <div className={styles.cardMeta}>
                <span className={`badge ${difficultyConfig[featured[0].difficulty].badgeClass}`}>
                  {difficultyConfig[featured[0].difficulty].label}
                </span>
                <span className="badge badge-lime">{featured[0].regionLabel}</span>
              </div>
              <h3 className={styles.cardTitle}>{featured[0].name}</h3>
              <p className={styles.cardDesc}>{featured[0].shortDesc}</p>
              <div className={styles.cardStats}>
                <span className="text-mono" style={{ fontSize: "0.7rem", color: "rgba(240,237,230,0.6)" }}>
                  <Route size={11} style={{ display: "inline", marginRight: 4 }} />
                  {featured[0].distance}km từ HN
                </span>
                <span className="text-mono" style={{ fontSize: "0.7rem", color: "rgba(240,237,230,0.6)" }}>
                  <Clock size={11} style={{ display: "inline", marginRight: 4 }} />
                  {featured[0].bestSeason}
                </span>
              </div>
            </div>
          </Link>

          {/* Small cards */}
          <div className={styles.smallCol}>
            {featured.slice(1).map((dest) => (
              <Link key={dest.id} href={`/destinations/${dest.slug}`} className={styles.smallCard}>
                <img src={dest.image} alt={dest.name} className={styles.img} />
                <div className={styles.cardOverlay} />
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={`badge ${difficultyConfig[dest.difficulty].badgeClass}`}>
                      {difficultyConfig[dest.difficulty].label}
                    </span>
                    <span className="badge badge-lime">{dest.regionLabel}</span>
                  </div>
                  <h3 className={styles.smallTitle}>{dest.name}</h3>
                  <p className={styles.cardDesc}>{dest.shortDesc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
