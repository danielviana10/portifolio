"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-20 right-6 bg-navbarBg p-2 rounded-full shadow-lg z-40">
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
                i18n.language === "pt" ? "bg-greenCustom" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              <Image src="/icons/brasil.svg" alt="Português" width={24} height={24} />
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`p-2 rounded-full transition ${
                i18n.language === "en" ? "bg-greenCustom" : "bg-gray-700 hover:bg-gray-600"
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
