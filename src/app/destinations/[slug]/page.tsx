import { notFound } from "next/navigation";
import Link from "next/link";
import { destinations, difficultyConfig, regions } from "@/data/destinations";
import { MapPin, Mountain, Clock, Route, ChevronLeft, Tag, Compass } from "lucide-react";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  
  if (!destination) {
    notFound();
  }

  const diff = difficultyConfig[destination.difficulty];
  const region = regions.find((r) => r.id === destination.region);

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img src={destination.image} alt={destination.name} className={styles.heroImg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className="container">
            <Link href="/destinations" className={styles.back}>
              <ChevronLeft size={16} /> Quay lại
            </Link>
            <div className={styles.heroMeta}>
              <span className={`badge ${diff.badgeClass}`}>{diff.label}</span>
              <span className="badge badge-teal" style={region ? { color: region.color, borderColor: region.color, background: `${region.color}15` } : {}}>
                {destination.regionLabel}
              </span>
            </div>
            <h1 className={styles.heroTitle}>{destination.name}</h1>
            <p className={styles.heroShortDesc}>{destination.shortDesc}</p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className={styles.statBar}>
        <div className="container">
          <div className={styles.statBarInner}>
            <div className={styles.statItem}>
              <Route size={18} style={{ color: "var(--accent-lime)" }} />
              <div>
                <div className={styles.statValue}>{destination.distance} km</div>
                <div className={styles.statLabel}>Từ Hà Nội</div>
              </div>
            </div>
            {destination.elevation !== undefined && (
              <div className={styles.statItem}>
                <Mountain size={18} style={{ color: "var(--accent-orange)" }} />
                <div>
                  <div className={styles.statValue}>{destination.elevation.toLocaleString()} m</div>
                  <div className={styles.statLabel}>Độ cao</div>
                </div>
              </div>
            )}
            <div className={styles.statItem}>
              <Clock size={18} style={{ color: "var(--accent-teal)" }} />
              <div>
                <div className={styles.statValue}>{destination.bestSeason}</div>
                <div className={styles.statLabel}>Mùa đẹp nhất</div>
              </div>
            </div>
            <div className={styles.statItem}>
              <Compass size={18} style={{ color: "var(--accent-purple)" }} />
              <div>
                <div className={styles.statValue}>[{destination.coordinates[0].toFixed(2)}, {destination.coordinates[1].toFixed(2)}]</div>
                <div className={styles.statLabel}>Tọa độ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.main}>
            <div>
              <h2 className={styles.sectionTitle}>Giới thiệu chung</h2>
              <div className={styles.description}>
                {destination.description}
              </div>
            </div>
            
            {/* Famous Spots */}
            {destination.famousSpots && destination.famousSpots.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h2 className={styles.sectionTitle}>Các địa điểm nổi tiếng</h2>
                <div className={styles.spotsGrid}>
                  {destination.famousSpots.map((spot, idx) => (
                    <div key={idx} className={styles.spotCard}>
                      <div className={styles.spotImgWrap}>
                        <img 
                          src={spot.image} 
                          alt={spot.name} 
                          className={styles.spotImg}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className={styles.spotBody}>
                        <h3 className={styles.spotName}>{spot.name}</h3>
                        <p className={styles.spotDesc}>{spot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Explore More */}
            <div style={{ marginTop: 24 }}>
              <h2 className={styles.sectionTitle}>Khám phá thêm</h2>
              <p className={styles.description}>
                Nơi đây mang đến những trải nghiệm không thể quên. Hãy chuẩn bị hành trang để tự mình khám phá từng ngóc ngách của {destination.name}. 
              </p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.tagsSection}>
              <h3 className={styles.sideTitle}>Tags</h3>
              <div className={styles.tags}>
                {destination.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className={styles.sideTitle}>Bản đồ</h3>
              <div className={styles.mapPlaceholder}>
                <MapPin size={24} style={{ marginBottom: 8, color: "var(--text-muted)" }} />
                <span>Bản đồ đang cập nhật</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
