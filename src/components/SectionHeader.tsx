interface SectionHeaderProps {
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeader({
  title,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-16 ${alignClasses[align]} ${className}`}>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
      )}
    </div>
  );
}
