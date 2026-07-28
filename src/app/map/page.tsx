"use client";
import dynamic from "next/dynamic";
import { destinations, difficultyConfig, regions } from "@/data/destinations";
import styles from "./page.module.css";

const MapComponent = dynamic(() => import("@/components/map/DestinationMap"), {
  ssr: false,
  loading: () => (
    <div className={styles.mapLoader}>
      <div className={styles.loaderDot} />
      <span>Đang tải bản đồ...</span>
    </div>
  ),
});

export default function MapPage() {
  return (
    <div className={styles.page}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className="section-label" style={{ marginBottom: 8 }}>Bản Đồ</div>
          <h1 className={styles.title}>Địa Điểm Phượt</h1>
          <p className={styles.sub}>
            {destinations.length} điểm đến trên bản đồ Việt Nam
          </p>
        </div>

        {/* Legend */}
        <div className={styles.legend}>
          <div className={styles.legendTitle}>Vùng miền</div>
          {regions.map((r) => (
            <div key={r.id} className={styles.legendItem}>
              <div className={styles.legendDot} style={{ background: r.color }} />
              <span>{r.label}</span>
            </div>
          ))}
        </div>

        {/* Difficulty legend */}
        <div className={styles.legend}>
          <div className={styles.legendTitle}>Độ khó</div>
          {Object.entries(difficultyConfig).map(([key, val]) => (
            <div key={key} className={styles.legendItem}>
              <div className={styles.legendDot} style={{ background: val.color }} />
              <span>{val.label}</span>
            </div>
          ))}
        </div>

        {/* Destinations list */}
        <div className={styles.destList}>
          <div className={styles.legendTitle}>Danh sách điểm đến</div>
          {destinations.map((d) => (
            <div key={d.id} className={styles.destItem}>
              <div className={styles.destItemLeft}>
                <div
                  className={styles.destItemDot}
                  style={{ background: regions.find((r) => r.id === d.region)?.color || "var(--accent-lime)" }}
                />
                <div>
                  <div className={styles.destItemName}>{d.name}</div>
                  <div className={styles.destItemRegion}>{d.regionLabel}</div>
                </div>
              </div>
              <span className={`badge ${difficultyConfig[d.difficulty].badgeClass}`} style={{ fontSize: "0.6rem" }}>
                {difficultyConfig[d.difficulty].label}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Map */}
      <div className={styles.mapWrap}>
        <MapComponent />
      </div>
    </div>
  );
}
