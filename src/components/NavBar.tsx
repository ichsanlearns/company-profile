import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { useAuthStore } from "../store/authStore";

function NavBar() {
  const { email, clearEmail } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
        isScrolled ? "bg-white shadow-lg" : "bg-amber-900/90"
      }`}
    >
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-xl transition-colors ${
                  isScrolled ? "text-amber-900" : "text-white"
                }`}
              >
                Toko Roti Sidodadi
              </span>
              <span
                className={`text-xs transition-colors ${
                  isScrolled ? "text-amber-700" : "text-amber-100"
                }`}
              >
                Sejak 1954
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive("/")
                  ? "bg-amber-700 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive("/about")
                  ? "bg-amber-700 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Tentang Kami
            </Link>
            <Link
              to="/services"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive("/services")
                  ? "bg-amber-700 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Produk
            </Link>
            <Link
              to="/teams"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive("/teams")
                  ? "bg-amber-700 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Tim Kami
            </Link>
            <Link
              to="/bloglist"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive("/bloglist")
                  ? "bg-amber-700 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/createblog"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive("/createblog")
                  ? "bg-amber-700 text-white"
                  : isScrolled
                  ? "text-gray-700 hover:bg-amber-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Tulis Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {email ? (
          <div className="flex border mb-2 border-amber-400 rounded-2xl">
            <div className="w-[30%]"></div>
            <p
              className={`text-center w-[40%] pt-4 mb-2 ${
                isScrolled ? `text-amber-500` : "text-white"
              }`}
            >
              Welcome {email}
            </p>
            <div className="w-[30%] flex justify-end">
              <button
                onClick={clearEmail}
                className="p-4 text-white text-end cursor-pointer"
              >
                logout
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } ${isScrolled ? "bg-white" : "bg-amber-900/95"}`}
      >
        <div className="px-4 py-4 space-y-2">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/")
                ? "bg-amber-700 text-white"
                : isScrolled
                ? "text-gray-700 hover:bg-amber-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Beranda
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/about")
                ? "bg-amber-700 text-white"
                : isScrolled
                ? "text-gray-700 hover:bg-amber-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Tentang Kami
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/services")
                ? "bg-amber-700 text-white"
                : isScrolled
                ? "text-gray-700 hover:bg-amber-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Produk
          </Link>
          <Link
            to="/teams"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/teams")
                ? "bg-amber-700 text-white"
                : isScrolled
                ? "text-gray-700 hover:bg-amber-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Tim Kami
          </Link>
          <Link
            to="/bloglist"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/bloglist")
                ? "bg-amber-700 text-white"
                : isScrolled
                ? "text-gray-700 hover:bg-amber-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/createblog"
            onClick={() => setIsMenuOpen(false)}
            className={`block px-4 py-3 rounded-lg transition-colors ${
              isActive("/createblog")
                ? "bg-amber-700 text-white"
                : isScrolled
                ? "text-gray-700 hover:bg-amber-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            Tulis Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
