import Link from "next/link";
import { ArrowRight, Box, Cpu } from "lucide-react";
import { projects } from "@/data/projects";
import styles from "./FeaturedProjects.module.css";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-label">01 — Năng Lực Cốt Lõi</div>
            <h2 className="text-title">Dự Án Tiêu Biểu</h2>
          </div>
          <Link href="/projects" className="btn btn-ghost">
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.expandingGrid}>
          {featured.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className={styles.expandingCard}>
              <img src={project.image} alt={project.name} className={styles.img} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className="badge badge-primary">
                    {project.categoryLabel}
                  </span>
                  <span className="badge badge-orange">{project.client}</span>
                </div>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDesc}>{project.shortDesc}</p>
                
                <div className={styles.cardStats}>
                  <span className="text-mono" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)" }}>
                    <Cpu size={12} style={{ display: "inline", marginRight: 4 }} />
                    Sản lượng: {project.volume}
                  </span>
                  <span className="text-mono" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.8)" }}>
                    <Box size={12} style={{ display: "inline", marginRight: 4 }} />
                    Năm: {project.year}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
