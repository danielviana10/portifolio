"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1]; // pega "pt" ou "en"

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (lng: string) => {
    const newPath = `/${lng}${pathname.substring(3)}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-20 right-6 sm:right-6 md:right-14 lg:right-16 bg-navbarBg p-2 rounded-full shadow-lg z-40"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="options"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="flex space-x-2"
          >
            <button
              onClick={() => changeLanguage("pt")}
              className={`p-2 rounded-full transition ${
                currentLocale === "pt"
                  ? "bg-greenCustom"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              <Image src="/icons/brasil.svg" alt="Português" width={24} height={24} />
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`p-2 rounded-full transition ${
                currentLocale === "en"
                  ? "bg-greenCustom"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              <Image src="/icons/usa.svg" alt="English" width={24} height={24} />
            </button>
          </motion.div>
        ) : (
          <motion.button
            key="globe"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}
            className="p-2 text-white font-semibold text-lg"
          >
            <Globe size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;