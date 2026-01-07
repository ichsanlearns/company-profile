interface TeamCardProps {
  name: string;
  role: string;
  email: string;
  location: string;
  phone: string;
  imageUrl: string;
}

export function TeamCard({
  name,
  role,
  email,
  location,
  phone,
  imageUrl,
}: TeamCardProps) {
  return (
    <div className="bg-white border-2 border-amber-100 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2">
      <div className="text-center mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-amber-200"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-amber-600 font-semibold mb-2">{role}</p>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="truncate">{email}</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-gray-400 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span>{phone}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-amber-100">
        <p className="text-xs text-gray-500 text-center">
          Berdedikasi menjaga kualitas tradisional
        </p>
      </div>
    </div>
  );
}
