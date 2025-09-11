import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav
      className="
      sticky top-4 z-50
        flex items-center justify-center
        w-[675px] h-[92px] px-[32px] py-[10px]
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
  );
};

export default Navbar;
