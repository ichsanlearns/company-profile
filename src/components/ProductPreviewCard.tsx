import { Link } from "react-router";
import { Button } from "./Button";

interface ProductPreviewCardProps {
  emoji: string;
  title: string;
  items: string[];
  to?: string;
}

export function ProductPreviewCard({
  emoji,
  title,
  items,
  to = "/services",
}: ProductPreviewCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-3xl">{emoji}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <ul className="space-y-2 text-gray-600 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link to={to}>
        <Button variant="amber" fullWidth>
          Lihat Semua →
        </Button>
      </Link>
    </div>
  );
}
