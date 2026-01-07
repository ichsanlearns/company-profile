import { COMPANY_INFO } from "../constants";

function Footer() {
  return (
    <footer className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Kunjungi Toko Kami</h2>
            <div className="space-y-4 text-lg">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
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
                <div>
                  <p className="font-semibold mb-1">Alamat</p>
                  <p className="text-amber-100">
                    Jl. Otto Iskandardinata No. 255, Karanganyar,
                    <br />
                    Kec. Astanaanyar, Kota Bandung, Jawa Barat
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
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
                <div>
                  <p className="font-semibold mb-1">Jam Operasional</p>
                  <p className="text-amber-100">
                    Senin - Sabtu: 10:00 - 20:00 WIB
                    <br />
                    Minggu: 10:00 - 15:00 WIB
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
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
                <div>
                  <p className="font-semibold mb-1">Telepon</p>
                  <p className="text-amber-100">(022) 4203361</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Tips Berkunjung</h3>
            <ul className="space-y-3 text-amber-100">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>
                  Datang lebih awal untuk mendapatkan pilihan roti yang lebih
                  lengkap
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>
                  Toko sering ramai, siap-siap untuk antri terutama di akhir
                  pekan
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>
                  Pemesanan dilakukan secara manual dengan menulis di kertas
                  yang disediakan
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>
                  Roti tanpa pengawet, simpan di suhu ruangan dan konsumsi dalam
                  beberapa hari
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
