import React from "react";
import { useTranslation } from "next-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation("contactsSection");

  return (
    <footer className="w-full text-center bg-blackCustom py-4 mt-auto">
      <p className="text-gray-400 text-sm">
        Copyright © 2025{" "}
        <a
          href="https://www.linkedin.com/in/daniel-viana-943420184/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-greenCustom hover:text-greenCustom:hover"
        >
          Daniel Viana
        </a>
        {". "}
        {t("copyrightText")}
      </p>
    </footer>
  );
};

export default Footer;