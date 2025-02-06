"use client";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 sm:right-6 md:right-14 lg:right-16 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-navbarBg text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
        >
          <IoIosArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;