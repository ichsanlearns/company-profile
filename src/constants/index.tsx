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

export const TESTIMONIALS = [
  {
    quote:
      "Sudah dari kecil makan roti di sini, rasanya tetap sama enaknya. Tempatnya klasik banget, bikin nostalgia. Harganya juga terjangkau!",
    author: "Ema",
    role: "Pelanggan Setia",
    initial: "E",
  },
  {
    quote:
      "Roti di sini teksturnya padat tapi lembut, aromanya harum mentega. Tidak pakai pengawet jadi lebih sehat. Worth it untuk antri!",
    author: "Budi Santoso",
    role: "Warga Bandung",
    initial: "B",
  },
  {
    quote:
      "Setiap ke Bandung pasti mampir ke sini. Roti krenten favorit saya, kismisnya banyak dan manisnya pas. Packaging-nya juga masih klasik dengan plastik putih.",
    author: "Sari Dewi",
    role: "Wisatawan dari Jakarta",
    initial: "S",
  },
  {
    quote:
      "Roti Krenten favorit saya! Kismisnya banyak banget dan manisnya pas. Teksturnya padat tapi lembut, khas Sidodadi.",
    author: "Sari Dewi",
    role: "Pelanggan Setia",
    initial: "S",
  },
  {
    quote:
      "Horn Cokelat-nya enak banget! Anak-anak suka sekali. Harganya juga terjangkau, worth it untuk kualitasnya.",
    author: "Budi Santoso",
    role: "Warga Bandung",
    initial: "B",
  },
  {
    quote:
      "Bakso Sapi-nya gurih dan teksturnya khas Sidodadi. Setiap ke Bandung pasti beli banyak untuk oleh-oleh.",
    author: "Andi Pratama",
    role: "Wisatawan",
    initial: "A",
  },
];

export const PRODUCT_CATEGORIES = [
  {
    category: "Roti Manis",
    items: [
      {
        name: "Horn Cokelat",
        description:
          "Roti berbentuk tanduk dengan isian cokelat yang manis dan melimpah. Favorit anak-anak dan dewasa.",
        price: "Rp 5.000 - Rp 8.000",
        image: "🍞",
      },
      {
        name: "Roti Susu",
        description:
          "Roti lembut dengan isian krim susu yang creamy. Tekstur padat namun tetap empuk saat digigit.",
        price: "Rp 6.000 - Rp 9.000",
        image: "🥛",
      },
      {
        name: "Pisang Cokelat",
        description:
          "Kombinasi sempurna antara pisang dan cokelat dalam satu roti. Manis dan lezat.",
        price: "Rp 7.000 - Rp 10.000",
        image: "🍌",
      },
      {
        name: "Krenten (Kismis)",
        description:
          "Roti manis dengan isian kismis yang melimpah. Salah satu produk unggulan yang paling dicari.",
        price: "Rp 6.000 - Rp 9.000",
        image: "🍇",
      },
      {
        name: "Gula Aren Keju",
        description:
          "Perpaduan unik antara gula aren dan keju yang memberikan cita rasa manis-gurih yang khas.",
        price: "Rp 7.000 - Rp 10.000",
        image: "🧀",
      },
      {
        name: "Roti Nanas",
        description:
          "Roti dengan isian selai nanas yang manis dan segar. Pilihan yang menyegarkan.",
        price: "Rp 6.000 - Rp 9.000",
        image: "🍍",
      },
      {
        name: "Roti Srikaya",
        description:
          "Roti lembut dengan isian srikaya yang kaya rasa. Cita rasa tradisional yang autentik.",
        price: "Rp 6.000 - Rp 9.000",
        image: "🥥",
      },
      {
        name: "Roti Kopi",
        description:
          "Roti dengan rasa kopi yang harum. Cocok untuk pecinta kopi yang ingin menikmati roti dengan cita rasa kopi.",
        price: "Rp 6.000 - Rp 9.000",
        image: "☕",
      },
    ],
  },
  {
    category: "Roti Asin",
    items: [
      {
        name: "Bakso Sapi",
        description:
          "Roti dengan isian daging sapi cincang yang gurih. Salah satu produk favorit dengan tekstur padat khas Sidodadi.",
        price: "Rp 8.000 - Rp 12.000",
        image: "🥩",
      },
      {
        name: "Kornet Keju",
        description:
          "Perpaduan kornet dan keju yang gurih. Cocok bagi pecinta rasa asin dengan kombinasi yang sempurna.",
        price: "Rp 8.000 - Rp 12.000",
        image: "🧀",
      },
      {
        name: "Sosis",
        description:
          "Roti dengan isian sosis yang lezat. Favorit banyak pelanggan, terutama anak-anak.",
        price: "Rp 7.000 - Rp 11.000",
        image: "🌭",
      },
      {
        name: "Smoked Beef",
        description:
          "Roti dengan isian daging asap yang memberikan cita rasa khas. Pilihan yang memuaskan.",
        price: "Rp 9.000 - Rp 13.000",
        image: "🥓",
      },
      {
        name: "Bakso Ayam",
        description:
          "Varian bakso dengan daging ayam. Alternatif yang lezat untuk pecinta roti asin.",
        price: "Rp 7.000 - Rp 11.000",
        image: "🍗",
      },
    ],
  },
  {
    category: "Roti Tawar & Kue Tradisional",
    items: [
      {
        name: "Roti Tawar",
        description:
          "Roti tawar dengan tekstur empuk dan rasa yang lezat. Dapat dinikmati dengan berbagai topping atau selai.",
        price: "Rp 15.000 - Rp 25.000",
        image: "🍞",
      },
      {
        name: "Carabikang",
        description:
          "Kue tradisional khas Bandung. Kue berbahan dasar beras dengan cita rasa manis yang khas.",
        price: "Rp 3.000 - Rp 5.000",
        image: "🍰",
      },
      {
        name: "Jajanan Tradisional",
        description:
          "Berbagai macam jajanan tradisional khas Bandung. Pilihan yang beragam untuk dinikmati.",
        price: "Rp 2.000 - Rp 8.000",
        image: "🥮",
      },
      {
        name: "Gorengan",
        description:
          "Berbagai macam gorengan yang renyah dan lezat. Teman yang cocok untuk roti atau camilan.",
        price: "Rp 2.000 - Rp 5.000",
        image: "🍤",
      },
    ],
  },
];

export const bakeryRoles = [
  "Ahli Roti",
  "Pembuat Roti",
  "Kasir",
  "Manajer Toko",
  "Pembuat Kue",
  "Staf Produksi",
  "Quality Control",
  "Pelayan Toko",
];
