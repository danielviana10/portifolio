"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleScrollWithOffset = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed top-[-2px] left-0 w-full p-4 text-white bg-navbarBg flex justify-between items-center px-[2rem] md:px-[2rem] shadow-md z-50">
      <div className="text-[25px] font-semibold">
        Daniel<span className="text-greenCustom">.</span> Viana
      </div>

      {/* Menu Desktop */}
      <ul className="hidden lg:flex space-x-6 text-[17px] font-semibold">
        {["home", "about", "skills", "experiences", "projects", "contacts"].map((section) => (
          <li key={section} className="relative group">
            <button
              onClick={() => handleScrollWithOffset(section, 50)}
              className={`transition-colors duration-300 ${
                activeSection === section ? "text-greenCustom" : "hover:text-greenCustom"
              }`}
            >
              {t(section)}
            </button>
            <span
              className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-greenCustom transition-transform duration-300 origin-center ${
                activeSection === section ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Botão do Menu Mobile */}
      <button className="lg:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Menu Mobile com Animação de Entrada e Saída */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-navbarBg flex flex-col items-center justify-center space-y-6 text-2xl font-semibold z-40"
          >
            {["home", "about", "skills", "experiences", "projects", "contacts"].map((section) => (
              <button
                key={section}
                onClick={() => handleScrollWithOffset(section, 50)}
                className={`relative group transition-colors duration-300 ${
                  activeSection === section ? "text-greenCustom" : "hover:text-greenCustom"
                }`}
              >
                {t(section)}
                <span
                  className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-greenCustom transition-transform duration-300 origin-center ${
                    activeSection === section ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
