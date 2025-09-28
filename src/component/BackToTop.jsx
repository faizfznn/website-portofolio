import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 sm:w-14 sm:h-14
        rounded-full
        border border-white/20
        text-white
        transition-all duration-300
        transform hover:scale-110 hover:brightness-125
        backdrop-blur-[12px]
        shadow-lg hover:shadow-xl
        flex items-center justify-center
      "
      style={{
        background:
          "linear-gradient(96deg, rgba(26, 30, 43, 0.80) -0.38%, rgba(13, 15, 23, 0.70) 49.96%, rgba(53, 62, 95, 0.70) 100.31%), rgba(26, 30, 43, 0.90)",
      }}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg sm:text-xl" />
    </button>
  );
};

export default BackToTop;