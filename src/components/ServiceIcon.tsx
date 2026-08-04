import { Award, Settings, Palette, BookOpen } from "lucide-react";

const icons = { Award, Settings, Palette, BookOpen };

/** Ánh xạ tên icon trong `company.services` sang component lucide tương ứng. */
export default function ServiceIcon({
  name,
  size = 32,
  strokeWidth = 1.5,
}: {
  name: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Icon = icons[name as keyof typeof icons] ?? Settings;
  return <Icon size={size} strokeWidth={strokeWidth} />;
}
