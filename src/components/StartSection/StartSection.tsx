import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { FaDownload } from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";
import HoverImage from "./HoverImage";

const StartSection: React.FC = () => {
  const { t } = useTranslation("startSection");

  return (
    <motion.section
      id="inicio"
      className="flex flex-col items-center justify-center min-h-screen py-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="max-w-sm text-start flex flex-col items-start">
          <AnimatedTitle name="Daniel" title={t("startSection.title")} />

          <Button
            href="/daniel-viana-curriculo.pdf"
            ariaLabel={t("startSection.downloadCV")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t("startSection.cvButton")}</span>
            <FaDownload className="text-white" />
          </Button>
        </div>

        <HoverImage
          src="/me-presentation.svg"
          alt={t("startSection.imageAlt")}
          width={350}
          height={350}
          priority
        />
      </div>
    </motion.section>
  );
};

export default StartSection;
