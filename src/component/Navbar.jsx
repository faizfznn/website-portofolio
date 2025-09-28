import { useState } from "react";
import logo from "../assets/Logo.png";
import app from "../App.jsx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className="
          sticky top-4 z-50 hidden md:flex
          items-center justify-center
          w-full max-w-[675px] h-[92px] px-[32px] py-[10px]
          rounded-[18px] border border-[#1A1E2B]
          box-border
          backdrop-blur-[12px]
          shadow-[inset_0_1px_0_2px_rgba(255,255,255,0.10)]
        "
        style={{
          background:
            "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
        }}
      >
        <ul className="flex items-center justify-between gap-[28px] w-full">
          <li className="text-xl text-white font-medium leading-[28px] px-[18px] py-[12px] rounded-[8px] hover:bg-[#202630] transition">
            <a href="#">Home</a>
          </li>
          <li className="text-xl text-white font-medium leading-[28px] px-[18px] py-[12px] rounded-[8px] hover:bg-[#202630] transition">
            <a href="#about-me">About</a>
          </li>

          {/* Logo */}
          <li className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-[70px] h-auto" />
          </li>

          <li className="text-xl text-white font-medium leading-[28px] px-[18px] py-[12px] rounded-[8px] hover:bg-[#202630] transition">
            <a href="#experience">Experience</a>
          </li>
          <li className="text-xl text-white font-medium leading-[28px] px-[18px] py-[12px] rounded-[8px] hover:bg-[#202630] transition">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="sticky top-4 z-50 md:hidden w-full max-w-sm">
        <div
          className="
            flex items-center justify-between
            w-full h-[72px] px-6 py-3
            rounded-[18px] border border-[#1A1E2B]
            backdrop-blur-[12px]
            shadow-[inset_0_1px_0_2px_rgba(255,255,255,0.10)]
          "
          style={{
            background:
              "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
          }}
        >
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-[50px] h-auto" />
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white p-2 rounded-lg hover:bg-[#202630] transition"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMenuOpen ? 'rotate-90' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div
            className="
              absolute top-[80px] left-0 right-0
              rounded-[18px] border border-[#1A1E2B]
              backdrop-blur-[12px]
              shadow-[inset_0_1px_0_2px_rgba(255,255,255,0.10)]
              overflow-hidden
              animate-fade-in
            "
            style={{
              background:
                "linear-gradient(96deg, rgba(26, 30, 43, 0.30) -0.38%, rgba(13, 15, 23, 0.20) 49.96%, rgba(53, 62, 95, 0.20) 100.31%), rgba(26, 30, 43, 0.40)",
            }}
          >
            <ul className="flex flex-col">
              <li>
                <a
                  href="#"
                  className="block text-white font-medium px-6 py-4 hover:bg-[#202630] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-me"
                  className="block text-white font-medium px-6 py-4 hover:bg-[#202630] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="block text-white font-medium px-6 py-4 hover:bg-[#202630] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="block text-white font-medium px-6 py-4 hover:bg-[#202630] transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;