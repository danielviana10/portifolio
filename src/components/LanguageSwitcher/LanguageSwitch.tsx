"use client";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    
    const currentPath = pathname.replace(`/${i18n.language}`, `/${lng}`);
    router.push(currentPath);  
    i18n.changeLanguage(lng);  
  };

  return (
    <div className="fixed bottom-6 right-6 flex space-x-2 bg-gray-800 p-2 rounded-full shadow-lg">
      <button
        onClick={() => changeLanguage("pt")}  
        className={`p-2 rounded-full ${i18n.language === "pt" ? "bg-gray-600" : ""}`}
      >
        🇧🇷
      </button>
      <button
        onClick={() => changeLanguage("en")}  
        className={`p-2 rounded-full ${i18n.language === "en" ? "bg-gray-600" : ""}`}
      >
        🇺🇸
      </button>
    </div>
  );
};

export default LanguageSwitcher;
