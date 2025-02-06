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
      id="home"
      className="flex flex-col items-center justify-center min-h-screen py-12 px-10 sm:px-2 md:px-12 lg:px-16 xl:px-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
<div className="flex flex-col items-center justify-center w-full max-w-5xl space-y-10 md:space-y-0 md:space-x-12 lg:flex-row">
  <div className="text-start sm:max-sm:flex md:text-start flex flex-col items-start md:items-start space-y-0 md:space-y-0 lg:space-y-8 lg:w-[22rem] pt-4 sm:pt-0">
    <AnimatedTitle name="Daniel" title={t("title")} />

    <Button
      href="/daniel-viana-curriculo.pdf"
      ariaLabel={t("downloadCV")}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{t("cvButton")}</span>
      <FaDownload className="text-white" />
    </Button>
  </div>

  <div className="w-60 md:w-96 lg:w-96">
    <HoverImage
      src="/me-presentation.svg"
      alt={t("imageAlt")}
      width={350}
      height={350}
      priority
      className="w-full"
    />
  </div>
</div>

    </motion.section>
  );
};

export default StartSection;
