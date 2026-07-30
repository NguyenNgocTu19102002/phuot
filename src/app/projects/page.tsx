import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, Cpu, Box } from "lucide-react";
import styles from "@/components/home/FeaturedProjects.module.css";

export default function ProjectsPage() {
  return (
    <div className="section" style={{ paddingTop: 120 }}>
      <div className="container">
        <h1 className="text-hero" style={{ marginBottom: 40 }}>Dự Án Tiêu Biểu</h1>
        <div className={styles.expandingGrid} style={{ height: 600 }}>
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`} className={styles.expandingCard}>
              <img src={project.image} alt={project.name} className={styles.img} />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className="badge badge-primary">{project.categoryLabel}</span>
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
    </div>
  );
}
