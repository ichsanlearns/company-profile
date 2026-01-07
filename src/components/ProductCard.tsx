interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  className?: string;
}

export function ProductCard({
  name,
  description,
  price,
  image,
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={`bg-white border-2 border-amber-100 rounded-xl p-6 hover:shadow-xl transition-all hover:border-amber-300 ${className}`}
    >
      <div className="text-center mb-4">
        <div className="text-6xl mb-4">{image}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-amber-600 font-semibold text-lg mb-4">{price}</p>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
