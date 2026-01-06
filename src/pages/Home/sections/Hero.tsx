import { Link } from "react-router";

function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero/hero-bakery.jpg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-800/80 via-amber-700/70 to-amber-900/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <span className="text-amber-100 text-sm font-semibold">
                Legenda Kuliner Bandung Sejak 1954
              </span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Toko Roti Sidodadi
          </h1>
          <p className="text-2xl md:text-3xl mb-4 text-amber-100 font-semibold">
            Roti Tradisional Tanpa Pengawet
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-amber-50 leading-relaxed">
            Menjaga tradisi sejak 1954 dengan roti panggang arang, diuleni
            tangan, dan tanpa bahan pengawet. Cita rasa autentik yang
            mengingatkan pada kenangan masa lalu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-white text-amber-800 rounded-lg font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Lihat Produk Kami
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Cerita Kami
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
      ;
    </>
  );
}
export default Hero;
