import type { ReactNode } from "react";

export const COMPANY_INFO = {
  name: "Toko Roti Sidodadi",
  founded: "10 Mei 1954",
  founder: "Hiendrawan Kosasih",
  address: {
    street: "Jl. Otto Iskandardinata No. 255, Karanganyar",
    district: "Kec. Astanaanyar, Kota Bandung, Jawa Barat",
  },
  phone: "(022) 4203361",
  hours: {
    weekdays: "Senin - Sabtu: 10:00 - 20:00 WIB",
    sunday: "Minggu: 10:00 - 15:00 WIB",
  },
  tagline: "Legenda Kuliner Bandung Sejak 1954",
  description: "Roti Tradisional Tanpa Pengawet",
};

export const FEATURES: Array<{
  icon: ReactNode;
  title: string;
  description: string;
}> = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Sejak 1954",
    description:
      "Lebih dari 70 tahun melayani masyarakat Bandung dengan roti berkualitas dan harga terjangkau.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "100% Alami",
    description:
      "Tanpa pengawet, pelembut, atau pewarna. Dibuat dengan metode tradisional panggang arang dan diuleni tangan.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Favorit Warga",
    description:
      "Disukai oleh warga lokal dan wisatawan yang mencari nostalgia dan cita rasa autentik.",
  },
];

export const PRODUCT_PREVIEWS = [
  {
    emoji: "🍞",
    title: "Roti Manis",
    items: ["Horn Cokelat", "Roti Susu", "Pisang Cokelat", "Krenten (Kismis)"],
  },
  {
    emoji: "🥖",
    title: "Roti Asin",
    items: ["Bakso Sapi", "Kornet Keju", "Sosis", "Smoked Beef"],
  },
  {
    emoji: "🍰",
    title: "Kue Tradisional",
    items: ["Carabikang", "Roti Tawar", "Jajanan Tradisional", "Gorengan"],
  },
];
