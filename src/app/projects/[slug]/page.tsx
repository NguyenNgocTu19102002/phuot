import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, Calendar, DollarSign, Users, UserCheck, BarChart, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div style={{ paddingTop: 120 }}>
      <div className="container">
        {/* Navigation */}
        <Link href="/projects" className="btn btn-ghost" style={{ marginBottom: 24, paddingLeft: 0 }}>
          <ArrowLeft size={16} /> Quay lại danh sách
        </Link>
        
        {/* Header */}
        <h1 className="text-hero">{project.name}</h1>
        <div style={{ display: "flex", gap: 12, marginTop: 16, marginBottom: 40, flexWrap: "wrap" }}>
          <span className="badge badge-primary">{project.categoryLabel}</span>
          <span className="badge badge-orange">Đối tác: {project.client}</span>
        </div>
        
        {/* Banner Image */}
        <img 
          src={project.image} 
          alt={project.name} 
          style={{ width: "100%", height: "500px", objectFit: "cover", borderRadius: "24px", marginBottom: 60, border: "1px solid var(--border-subtle)" }} 
        />
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 60 }}>
          
          {/* Main Description */}
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2 className="text-title" style={{ fontSize: "1.8rem", marginBottom: 20 }}>Tổng quan dự án</h2>
            <p className="text-body" style={{ fontSize: "1.1rem", color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.8 }}>
              {project.shortDesc}
            </p>
            <p className="text-body" style={{ marginBottom: 60, lineHeight: 1.8 }}>
              {project.description}
            </p>

            {/* Dashboard: Executive Summary */}
            <h2 className="text-title" style={{ fontSize: "1.8rem", marginBottom: 24 }}>Báo cáo Điều hành (Executive Summary)</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 60 }}>
              
              <div style={{ padding: 24, background: "var(--bg-surface)", borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "var(--text-secondary)" }}>
                  <Calendar size={20} />
                  <span style={{ fontWeight: 600 }}>Thời gian triển khai</span>
                </div>
                <div className="text-title" style={{ fontSize: "1.2rem" }}>{project.startDate} — {project.endDate}</div>
                <div className="text-small" style={{ color: "var(--accent-teal)", marginTop: 8 }}>Tổng: {project.duration}</div>
              </div>

              <div style={{ padding: 24, background: "var(--bg-surface)", borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "var(--text-secondary)" }}>
                  <DollarSign size={20} />
                  <span style={{ fontWeight: 600 }}>Tài chính (Finance)</span>
                </div>
                <div className="text-title" style={{ fontSize: "1.2rem" }}>Kinh phí: {project.budget}</div>
                <div className="text-small" style={{ color: "var(--accent-green)", marginTop: 8 }}>Lợi nhuận ước tính: {project.estimatedProfit}</div>
              </div>

              <div style={{ padding: 24, background: "var(--bg-surface)", borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, color: "var(--text-secondary)" }}>
                  <Users size={20} />
                  <span style={{ fontWeight: 600 }}>Nhân sự (Human Resources)</span>
                </div>
                <div className="text-title" style={{ fontSize: "1.2rem" }}>{project.teamSize}</div>
                <div className="text-small" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-secondary)", marginTop: 8 }}>
                  <UserCheck size={14} /> Quản lý: {project.manager}
                </div>
              </div>

              <div style={{ padding: 24, background: "var(--bg-surface)", borderRadius: 16, border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, color: "var(--text-secondary)" }}>
                  <BarChart size={20} />
                  <span style={{ fontWeight: 600 }}>Tiến độ dự án (Progress)</span>
                </div>
                <div style={{ width: "100%", height: 8, background: "var(--bg-base)", borderRadius: 4, overflow: "hidden", marginBottom: 8 }}>
                  <div style={{ width: `${project.progress}%`, height: "100%", background: "var(--accent-primary)", borderRadius: 4 }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span className="text-small" style={{ color: "var(--text-secondary)" }}>Hoàn thành</span>
                  <span className="text-small" style={{ fontWeight: 700, color: "var(--accent-primary)" }}>{project.progress}%</span>
                </div>
              </div>
            </div>

            {/* In-depth Details: Challenge, Solution, Result */}
            <h2 className="text-title" style={{ fontSize: "1.8rem", marginBottom: 24 }}>Phân tích Case Study</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 60 }}>
              
              <div style={{ padding: 32, background: "var(--bg-surface)", borderRadius: 16, borderLeft: "4px solid var(--accent-red)" }}>
                <h3 className="text-title" style={{ fontSize: "1.3rem", marginBottom: 16, color: "var(--accent-red)" }}>1. Bài toán / Thách thức (Challenges)</h3>
                <p className="text-body" style={{ lineHeight: 1.7 }}>{project.details.challenge}</p>
              </div>

              <div style={{ padding: 32, background: "var(--bg-surface)", borderRadius: 16, borderLeft: "4px solid var(--accent-primary)" }}>
                <h3 className="text-title" style={{ fontSize: "1.3rem", marginBottom: 16, color: "var(--accent-primary)" }}>2. Giải pháp kỹ thuật (Solutions)</h3>
                <p className="text-body" style={{ lineHeight: 1.7 }}>{project.details.solution}</p>
              </div>

              <div style={{ padding: 32, background: "var(--bg-surface)", borderRadius: 16, borderLeft: "4px solid var(--accent-green)" }}>
                <h3 className="text-title" style={{ fontSize: "1.3rem", marginBottom: 16, color: "var(--accent-green)" }}>3. Kết quả đạt được (Results)</h3>
                <p className="text-body" style={{ lineHeight: 1.7, marginBottom: 20 }}>{project.details.result}</p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "rgba(34, 197, 94, 0.1)", color: "var(--accent-green)", borderRadius: 8 }}>
                  <CheckCircle2 size={18} />
                  <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Dự án đáp ứng 100% SLA khách hàng</span>
                </div>
              </div>

            </div>

            {/* Production Stats */}
            <div style={{ padding: 32, background: "var(--bg-raised)", borderRadius: 16, border: "1px solid var(--border-strong)" }}>
              <h3 className="text-title" style={{ fontSize: "1.5rem", marginBottom: 24 }}>Sản lượng Kỹ thuật</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 4 }}>Quy mô sản lượng:</div>
                  <div className="text-title" style={{ fontSize: "1.4rem", color: "var(--text-primary)" }}>{project.volume}</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: 4 }}>Tiêu chuẩn quản lý chất lượng:</div>
                  <div className="text-title" style={{ fontSize: "1.4rem", color: "var(--text-primary)" }}>Zero-Defect / ISO-9001</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Bottom Padding */}
      <div style={{ height: 120 }}></div>
    </div>
  );
}
