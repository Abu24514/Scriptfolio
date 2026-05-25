import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import logo from "../../assets/scriptfolio-logo.svg";

const Navbar = () => {

  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = useState(false);

  // stop body scroll when mobile menu open
  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [menuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">

        <nav className="max-w-7xl mx-auto h-16 sm:h-18 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          {/* ============ Logo ============ */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src={logo}
              alt="Scriptfolio Logo"
              className="h-14 w-auto"
            />

            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors">
              Scriptfolio
            </span>
          </Link>

          {/* ============ Desktop Navigation ============ */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-medium text-gray-700">

            <a
              href="#"
              className="hover:text-indigo-600 transition-colors"
            >
              Home
            </a>

            <a
              href="#features"
              className="hover:text-indigo-600 transition-colors"
            >
              Features
            </a>

            <a
              href="#testimonials"
              className="hover:text-indigo-600 transition-colors"
            >
              Testimonials
            </a>

            <a
              href="#cta"
              className="hover:text-indigo-600 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* ============ Desktop Buttons ============ */}
          <div className="hidden lg:flex items-center gap-3">

            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-full bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition-all"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <Link
                to="/app"
                className="px-6 py-2.5 rounded-full bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 active:scale-95 transition-all"
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* ============ Tablet + Mobile Right ============ */}
          <div className="flex items-center gap-3 lg:hidden">

            {!user ? (
              <Link
                to="/login"
                className="hidden sm:flex px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-all"
              >
                Login
              </Link>
            ) : (
              <Link
                to="/app"
                className="hidden sm:flex px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-all"
              >
                Dashboard
              </Link>
            )}

            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-all"
              aria-label="Open Menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE / TABLET MENU ================= */}
      <div
        className={`fixed inset-0 z-100 lg:hidden transition-all duration-300 ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >

        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Sidebar */}
        <aside
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* ===== Top ===== */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-5 border-b border-gray-200">

            <div className="flex ">

              <img
                src={logo}
                alt="logo"
                className="h-14 w-auto"
              />
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100 transition-all"
              aria-label="Close Menu"
            >
              <X className="size-6" />
            </button>
          </div>

          {/* ===== Links ===== */}
          <div className="flex flex-col px-6 py-8">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-100 transition-colors"
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-100 transition-colors"
            >
              Features
            </a>

            <a
              href="#testimonials"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-100 transition-colors"
            >
              Testimonials
            </a>

            <a
              href="#cta"
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-gray-700 hover:text-indigo-600 border-b border-gray-100 transition-colors"
            >
              Contact
            </a>

            {/* ===== Mobile Buttons ===== */}
            <div className="flex flex-col gap-3 mt-8">

              {!user ? (
                <>
                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
                  >
                    Get Started
                  </Link>

                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="w-full text-center py-3 rounded-xl border border-gray-300 font-medium hover:bg-gray-100 transition-all"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <Link
                  to="/app"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Navbar;