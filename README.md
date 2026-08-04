# COLORMATCH VIETNAM

Website giới thiệu dịch vụ đào tạo và tư vấn chứng chỉ **G7 Master Colorspace** (Idealliance)
cho các nhà in tại Việt Nam, do Chuyên gia G7+ Bùi Minh Tuấn dẫn dắt.

Nội dung chính: đào tạo nhân sự nhà in đạt chuẩn G7, cân chỉnh máy in (Offset / Flexo / Digital),
ứng dụng ColorMatch (Gray Balance Calculation Tool) và tư vấn hệ thống quản trị màu sắc.

## Công nghệ
- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4

## Chạy dự án
```bash
npm install
npm run dev
```
Mở http://localhost:3001

## Cấu trúc
- `src/app` — các route: `/`, `/about`, `/services`, `/courses`, `/articles`, `/contact`
- `src/components/home` — các section của trang chủ
- `src/components/layout` — Navbar, Footer
- `src/data` — nội dung tĩnh (`company.ts`, `articles.ts`)
