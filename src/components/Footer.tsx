import { COMPANY_INFO } from "../constants";

function Footer() {
  return (
    <footer className="relative py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-amber-700/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Kunjungi Toko Kami</h2>
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
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.district}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
