"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Route, Mountain, Clock, ChevronRight } from "lucide-react";
import { destinations, regions, difficultyConfig } from "@/data/destinations";
import styles from "./page.module.css";

const ALL = "all";

export default function DestinationsPage() {
  const [activeRegion, setActiveRegion] = useState(ALL);
  const [activeDiff, setActiveDiff] = useState(ALL);

  const filtered = destinations.filter((d) => {
    const regionMatch = activeRegion === ALL || d.region === activeRegion;
    const diffMatch = activeDiff === ALL || d.difficulty === activeDiff;
    return regionMatch && diffMatch;
  });

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="topo-pattern" />
        <div className={styles.gridOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 140, paddingBottom: 80 }}>
          <div className="section-label">Điểm Đến</div>
          <h1 className="text-hero" style={{ maxWidth: 600, marginBottom: 16 }}>
            Khám Phá<br />
            <span style={{ color: "var(--accent-lime)" }}>Việt Nam</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: 480 }}>
            Từ Tây Bắc sương mù đến Nam Bộ nắng vàng —
            mỗi vùng đất là một câu chuyện riêng.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>VÙNG</span>
              <div className={styles.filterBtns}>
                <button
                  className={`btn btn-ghost ${activeRegion === ALL ? "active" : ""}`}
                  onClick={() => setActiveRegion(ALL)}
                >
                  Tất cả
                </button>
                {regions.map((r) => (
                  <button
                    key={r.id}
                    className={`btn btn-ghost ${activeRegion === r.id ? "active" : ""}`}
                    onClick={() => setActiveRegion(r.id)}
                    style={activeRegion === r.id ? { color: r.color, borderColor: r.color, background: `${r.color}15` } : {}}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>ĐỘ KHÓ</span>
              <div className={styles.filterBtns}>
                <button className={`btn btn-ghost ${activeDiff === ALL ? "active" : ""}`} onClick={() => setActiveDiff(ALL)}>
                  Tất cả
                </button>
                {Object.entries(difficultyConfig).map(([key, val]) => (
                  <button
                    key={key}
                    className={`btn btn-ghost ${activeDiff === key ? "active" : ""}`}
                    onClick={() => setActiveDiff(key)}
                  >
                    {val.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.resultCount}>
            <span className="text-mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
              {filtered.length} ĐỊA ĐIỂM
            </span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container section">
        <div className={styles.grid}>
          {filtered.map((dest) => (
            <Link key={dest.id} href={`/destinations/${dest.slug}`} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={dest.image} alt={dest.name} className={styles.img} />
                <div className={styles.imgOverlay} />
                <div className={styles.diffBadge}>
                  <span className={`badge ${difficultyConfig[dest.difficulty].badgeClass}`}>
                    {difficultyConfig[dest.difficulty].label}
                  </span>
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.regionTag} style={{ color: regions.find((r) => r.id === dest.region)?.color }}>
                  <MapPin size={11} />
                  {dest.regionLabel}
                </div>
                <h2 className={styles.name}>{dest.name}</h2>
                <p className={styles.shortDesc}>{dest.shortDesc}</p>

                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <Route size={12} style={{ color: "var(--text-muted)" }} />
                    <span>{dest.distance}km từ HN</span>
                  </div>
                  {dest.elevation && (
                    <div className={styles.metaItem}>
                      <Mountain size={12} style={{ color: "var(--text-muted)" }} />
                      <span>{dest.elevation.toLocaleString()}m</span>
                    </div>
                  )}
                  <div className={styles.metaItem}>
                    <Clock size={12} style={{ color: "var(--text-muted)" }} />
                    <span>{dest.bestSeason}</span>
                  </div>
                </div>

                <div className={styles.tags}>
                  {dest.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>

                <div className={styles.cta}>
                  Xem chi tiết <ChevronRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
