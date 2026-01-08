import { MilestoneCard } from "../../components/MilestoneCard";
import { SectionHeader } from "../../components/SectionHeader";
import {
  COMPANY_INFO,
  MILESTONES,
  PHILOSOPHY_POINTS,
  UNIQUE_FEATURES,
} from "../../constants";

function AboutUs() {
  return (
    <div className="min-h-screen pt-20">
      {/* Company History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-amber-100 px-6 py-2 rounded-full mb-6">
                <span className="text-amber-800 font-semibold">
                  Didirikan {COMPANY_INFO.founded}
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Sejarah Toko Roti Sidodadi
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <div className="bg-amber-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Awal Mula
                </h3>
                <p>
                  Toko Roti Sidodadi didirikan pada tanggal{" "}
                  <strong>{COMPANY_INFO.founded}</strong> oleh{" "}
                  <strong>{COMPANY_INFO.founder}</strong> di Jalan Otto
                  Iskandardinata No. 255, Bandung. Pada masa itu, roti masih
                  dianggap sebagai makanan mewah yang hanya dapat dinikmati oleh
                  kalangan tertentu, terutama orang Belanda.
                </p>
              </div>

              <p>
                Melihat kondisi tersebut, {COMPANY_INFO.founder} berinisiatif
                mendirikan Toko Roti Sidodadi dengan tujuan mulia:{" "}
                <strong>
                  menyediakan roti berkualitas dengan harga terjangkau bagi
                  semua lapisan masyarakat
                </strong>
                . Visi ini yang menjadi fondasi kuat bagi toko roti legendaris
                ini.
              </p>

              <div className="bg-amber-50 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  Arti Nama "Sidodadi"
                </h3>
                <p>
                  Nama <strong>"Sidodadi"</strong> berasal dari bahasa Jawa yang
                  berarti <strong>"semakin jadi"</strong> atau{" "}
                  <strong>"semakin berkembang"</strong>. Nama ini mencerminkan
                  harapan agar usaha ini terus maju dan berkembang, serta
                  menjadi pilihan utama masyarakat dalam menikmati roti
                  berkualitas.
                </p>
              </div>

              <p>
                Sejak awal berdiri, Toko Roti Sidodadi berkomitmen untuk menjaga
                kualitas produknya dengan menggunakan bahan-bahan alami dan
                proses pembuatan tradisional. Roti dibuat dengan metode{" "}
                <strong>panggang arang</strong> dan{" "}
                <strong>diuleni tangan</strong>, tanpa menggunakan bahan
                pengawet, pelembut, atau pewarna. Hal ini menjadikan roti mereka
                memiliki tekstur padat namun tetap lembut saat digigit, serta
                aroma mentega yang khas.
              </p>

              <p>
                Lebih dari <strong>70 tahun</strong> melayani masyarakat
                Bandung, Toko Roti Sidodadi telah menjadi bagian dari sejarah
                kuliner kota Bandung. Toko ini tidak hanya sekadar tempat
                membeli roti, tetapi juga tempat yang mengingatkan pada kenangan
                masa lalu dan cita rasa autentik yang sulit ditemukan di tempat
                lain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Perjalanan Kami" />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {MILESTONES.map((milestone, index) => (
                <MilestoneCard
                  key={index}
                  year={milestone.year}
                  title={milestone.title}
                  description={milestone.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Filosofi & Komitmen Kami"
            description="Nilai-nilai yang kami pegang teguh sejak awal"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PHILOSOPHY_POINTS.map((philosophy, index) => (
              <div key={index} className="bg-amber-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {philosophy.title}
                </h3>
                <p className="text-gray-700 mb-4">{philosophy.description}</p>
                <ul className="space-y-3 text-gray-700">
                  {philosophy.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-amber-600 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
