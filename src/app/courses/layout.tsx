import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khóa Học & Công Cụ",
  description:
    "Các khóa đào tạo G7, quản trị màu ICC Profile, ứng dụng ColorMatch và bộ tài liệu chuẩn hóa phòng QC dành cho nhà in.",
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
