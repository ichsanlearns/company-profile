interface MilestoneCardProps {
  year: string;
  title: string;
  description: string;
}

export function MilestoneCard({
  year,
  title,
  description,
}: MilestoneCardProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {year}
      </div>
      <div className="ml-8 bg-white p-6 rounded-xl shadow-md flex-1">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
