"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, Eye, Calendar, ArrowRight } from "lucide-react";
import { journeys } from "@/data/journeys";
import { difficultyConfig } from "@/data/destinations";
import styles from "./page.module.css";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { day: "numeric", month: "short", year: "numeric" });
}

const vehicleFilters = [
  { id: "all", label: "Tất cả", icon: "🗺️" },
  { id: "motorbike", label: "Xe máy", icon: "🏍️" },
  { id: "bicycle", label: "Xe đạp", icon: "🚲" },
  { id: "car", label: "Ô tô", icon: "🚙" },
  { id: "foot", label: "Đi bộ", icon: "🥾" },
];

const sortOptions = [
  { id: "newest", label: "Mới nhất" },
  { id: "popular", label: "Phổ biến nhất" },
  { id: "longest", label: "Xa nhất" },
];

export default function JourneysPage() {
  const [vehicle, setVehicle] = useState("all");
  const [sort, setSort] = useState("newest");

  let filtered = journeys.filter((j) => vehicle === "all" || j.vehicle === vehicle);

  if (sort === "popular") filtered = [...filtered].sort((a, b) => b.views - a.views);
  else if (sort === "longest") filtered = [...filtered].sort((a, b) => b.totalKm - a.totalKm);
  else filtered = [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className="topo-pattern" />
        <div className={styles.gridOverlay} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 140, paddingBottom: 80 }}>
          <div className="section-label">Nhật Ký Hành Trình</div>
          <h1 className="text-hero" style={{ maxWidth: 600, marginBottom: 16 }}>
            Mỗi Con Đường<br />
            <span style={{ color: "var(--accent-orange)" }}>Một Câu Chuyện</span>
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: 480 }}>
            Hàng trăm nhật ký hành trình từ những phượt thủ
            đã đặt chân khắp Việt Nam.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className="container">
          <div className={styles.filterRow}>
            <div className={styles.vehicleFilters}>
              {vehicleFilters.map((v) => (
                <button
                  key={v.id}
                  className={`${styles.vFilter} ${vehicle === v.id ? styles.active : ""}`}
                  onClick={() => setVehicle(v.id)}
                >
                  <span>{v.icon}</span>
                  {v.label}
                </button>
              ))}
            </div>
            <div className={styles.sortGroup}>
              {sortOptions.map((s) => (
                <button
                  key={s.id}
                  className={`btn btn-ghost ${sort === s.id ? "active" : ""}`}
                  onClick={() => setSort(s.id)}
                  style={{ padding: "6px 14px" }}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Journeys */}
      <div className="container section">
        {/* Featured hero */}
        {filtered.length > 0 && (
          <Link href={`/journeys/${filtered[0].slug}`} className={styles.featuredCard}>
            <div className={styles.featuredImg}>
              <img src={filtered[0].coverImage} alt={filtered[0].title} />
              <div className={styles.featuredOverlay} />
            </div>
            <div className={styles.featuredBody}>
              <div className={styles.meta}>
                <span className={`badge ${difficultyConfig[filtered[0].difficulty].badgeClass}`}>
                  {difficultyConfig[filtered[0].difficulty].label}
                </span>
                <span className="badge badge-teal">{filtered[0].region}</span>
                <span className="badge badge-lime">{filtered[0].vehicleIcon} {filtered[0].vehicleLabel}</span>
              </div>
              <h2 className={styles.featuredTitle}>{filtered[0].title}</h2>
              <p className={styles.featuredExcerpt}>{filtered[0].excerpt}</p>
              <div className={styles.featuredStats}>
                <span className="text-mono" style={{ fontSize: "0.72rem", color: "var(--accent-lime)" }}>
                  {filtered[0].totalKm.toLocaleString()} KM
                </span>
                <span className="text-mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  {filtered[0].duration} NGÀY
                </span>
                <span className="text-mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                  <Eye size={11} style={{ display: "inline", marginRight: 4 }} />
                  {filtered[0].views.toLocaleString()}
                </span>
              </div>
              <div className={styles.featuredAuthor}>
                <img src={filtered[0].author.avatar} alt={filtered[0].author.name} className={styles.avatar} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{filtered[0].author.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{formatDate(filtered[0].date)}</div>
                </div>
                <span className={styles.readMore}>
                  Đọc hành trình <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.slice(1).map((j) => (
            <Link key={j.id} href={`/journeys/${j.slug}`} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={j.coverImage} alt={j.title} className={styles.img} />
                <div className={styles.imgOverlay} />
                <span className={styles.vehicleIcon}>{j.vehicleIcon}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.cardMeta}>
                  <span className={`badge ${difficultyConfig[j.difficulty].badgeClass}`} style={{ fontSize: "0.65rem" }}>
                    {difficultyConfig[j.difficulty].label}
                  </span>
                  <span className="text-mono" style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>
                    {j.region}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{j.title}</h3>
                <p className={styles.cardExcerpt}>{j.excerpt}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.cardAuthor}>
                    <img src={j.author.avatar} alt={j.author.name} className={styles.cardAvatar} />
                    <span>{j.author.name}</span>
                  </div>
                  <div className={styles.cardStats}>
                    <span className="text-mono" style={{ fontSize: "0.65rem", color: "var(--accent-lime)" }}>
                      {j.totalKm.toLocaleString()}km
                    </span>
                    <span style={{ color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 3, fontSize: "0.75rem" }}>
                      <Heart size={11} /> {j.likes.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
