import { notFound } from "next/navigation";
import Link from "next/link";
import { journeys } from "@/data/journeys";
import { difficultyConfig } from "@/data/destinations";
import { Heart, Eye, MapPin, Clock, Route, Mountain, ChevronLeft, Calendar } from "lucide-react";
import styles from "./page.module.css";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

export async function generateStaticParams() {
  return journeys.map((j) => ({ slug: j.slug }));
}

export default async function JourneyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = journeys.find((j) => j.slug === slug);
  if (!journey) notFound();

  const diff = difficultyConfig[journey.difficulty];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <img src={journey.coverImage} alt={journey.title} className={styles.heroImg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className="container">
            <Link href="/journeys" className={styles.back}>
              <ChevronLeft size={16} /> Quay lại
            </Link>
            <div className={styles.heroMeta}>
              <span className={`badge ${diff.badgeClass}`}>{diff.label}</span>
              <span className="badge badge-teal">{journey.region}</span>
              <span className="badge badge-lime">{journey.vehicleIcon} {journey.vehicleLabel}</span>
            </div>
            <h1 className={styles.heroTitle}>{journey.title}</h1>
            <p className={styles.heroExcerpt}>{journey.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div className={styles.statBar}>
        <div className="container">
          <div className={styles.statBarInner}>
            <div className={styles.statItem}>
              <Route size={16} style={{ color: "var(--accent-lime)" }} />
              <div>
                <div className={styles.statValue}>{journey.totalKm.toLocaleString()} km</div>
                <div className={styles.statLabel}>Tổng quãng đường</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Clock size={16} style={{ color: "var(--accent-orange)" }} />
              <div>
                <div className={styles.statValue}>{journey.duration} ngày</div>
                <div className={styles.statLabel}>Thời gian</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Mountain size={16} style={{ color: "var(--accent-teal)" }} />
              <div>
                <div className={styles.statValue}>{journey.stats.maxElevation.toLocaleString()} m</div>
                <div className={styles.statLabel}>Độ cao tối đa</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <MapPin size={16} style={{ color: "var(--accent-purple)" }} />
              <div>
                <div className={styles.statValue}>{journey.destinations.length}</div>
                <div className={styles.statLabel}>Địa điểm</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Eye size={16} style={{ color: "var(--text-muted)" }} />
              <div>
                <div className={styles.statValue}>{journey.views.toLocaleString()}</div>
                <div className={styles.statLabel}>Lượt xem</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Heart size={16} style={{ color: "#F87171" }} />
              <div>
                <div className={styles.statValue}>{journey.likes.toLocaleString()}</div>
                <div className={styles.statLabel}>Yêu thích</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container">
        <div className={styles.layout}>
          {/* Left: Author + Timeline */}
          <div className={styles.main}>
            {/* Author */}
            <div className={styles.authorCard}>
              <img src={journey.author.avatar} alt={journey.author.name} className={styles.authorAvatar} />
              <div className={styles.authorInfo}>
                <div className={styles.authorName}>{journey.author.name}</div>
                <div className={styles.authorBio}>{journey.author.bio}</div>
                <div className={styles.authorDate}>
                  <Calendar size={12} />
                  {formatDate(journey.date)}
                </div>
              </div>
            </div>

            {/* Destinations list */}
            <div className={styles.destList}>
              <h2 className={styles.sectionTitle}>Điểm đến trong hành trình</h2>
              <div className={styles.destTags}>
                {journey.destinations.map((d, i) => (
                  <span key={i} className={styles.destTag}>
                    <MapPin size={11} />
                    {d}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              <h2 className={styles.sectionTitle}>Lịch trình chi tiết</h2>
              <div className={styles.timelineList}>
                {journey.checkpoints.map((cp, i) => (
                  <div key={i} className={styles.checkpoint}>
                    <div className={styles.checkpointLeft}>
                      <div className={styles.checkpointDot} />
                      {i < journey.checkpoints.length - 1 && (
                        <div className={styles.checkpointLine} />
                      )}
                    </div>
                    <div className={styles.checkpointBody}>
                      <div className={styles.checkpointTime}>{cp.time}</div>
                      <h3 className={styles.checkpointLocation}>{cp.location}</h3>
                      <p className={styles.checkpointDesc}>{cp.description}</p>
                      {cp.image && (
                        <img src={cp.image} alt={cp.location} className={styles.checkpointImg} />
                      )}
                      <div className={styles.checkpointMeta}>
                        {cp.km && (
                          <span className="text-mono" style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>
                            <Route size={10} style={{ display: "inline", marginRight: 3 }} />
                            {cp.km}km
                          </span>
                        )}
                        {cp.elevation && (
                          <span className="text-mono" style={{ fontSize: "0.68rem", color: "var(--accent-teal)" }}>
                            <Mountain size={10} style={{ display: "inline", marginRight: 3 }} />
                            {cp.elevation.toLocaleString()}m
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar: gallery + tags */}
          <aside className={styles.sidebar}>
            {/* Gallery */}
            <div className={styles.gallerySection}>
              <h3 className={styles.sideTitle}>Bộ ảnh hành trình</h3>
              <div className={styles.gallery}>
                {journey.gallery.map((img, i) => (
                  <div key={i} className={styles.galleryImg}>
                    <img src={img} alt={`Ảnh ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className={styles.tagsSection}>
              <h3 className={styles.sideTitle}>Tags</h3>
              <div className={styles.tags}>
                {journey.tags.map((tag) => (
                  <span key={tag} className="badge badge-lime" style={{ cursor: "default" }}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className={styles.quickStats}>
              <h3 className={styles.sideTitle}>Số liệu kỹ thuật</h3>
              <div className={styles.quickStatList}>
                <div className={styles.quickStatItem}>
                  <span className={styles.quickStatLabel}>Tốc độ trung bình</span>
                  <span className={styles.quickStatValue}>{journey.stats.avgSpeed} km/h</span>
                </div>
                <div className={styles.quickStatItem}>
                  <span className={styles.quickStatLabel}>Độ cao tối đa</span>
                  <span className={styles.quickStatValue}>{journey.stats.maxElevation.toLocaleString()} m</span>
                </div>
                <div className={styles.quickStatItem}>
                  <span className={styles.quickStatLabel}>Tổng leo dốc</span>
                  <span className={styles.quickStatValue}>{journey.stats.totalAscent.toLocaleString()} m</span>
                </div>
                <div className={styles.quickStatItem}>
                  <span className={styles.quickStatLabel}>Phương tiện</span>
                  <span className={styles.quickStatValue}>{journey.vehicleIcon} {journey.vehicleLabel}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
