"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import SvgRenderer from "./SvgRenderer";
import GreenText from "./GreenText";
import SectionTitle from "../SectionTitle";

interface AboutContentProps {
  svgList: { id: number; top: number; left: number }[];
  divRef: React.RefObject<HTMLDivElement | null>;
  handleClick: () => void;
  isVisible: boolean;
}

const AboutContent: React.FC<AboutContentProps> = ({
  svgList,
  divRef,
  handleClick,
  isVisible,
}) => {
  const { t } = useTranslation("aboutSection");

  return (
    <motion.div
      className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <SectionTitle title={t("title").toUpperCase()} subtitle={t("title")} />

      <div className="flex flex-col md:flex-col items-center justify-between sm:mt-8 space-y-8 md:mt-12 md:space-y-0 lg:mt-8 lg:flex-row">
        <div ref={divRef as React.RefObject<HTMLDivElement>} className="w-60 md:w-1/2 lg:w-1/2 relative">
          <Image
            className="absolute top-0 left-0"
            src="/filled-circle.svg"
            alt="Círculo pontilhado verde"
            width={100}
            height={100}
            priority
          />
          <Image
            className="rounded-full object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:shadow-greenCustom mx-auto md:mx-0"
            src="/daniel-about-me.svg"
            alt="Imagem do Daniel"
            width={330}
            height={330}
            priority
          />

          {svgList.map((svg) => (
            <SvgRenderer key={svg.id} svg={svg} />
          ))}
        </div>

        <div className="w-full md:w-[36rem] md:pt-7 lg:w-1/2 font-semibold text-[1rem] relative">
          <p>
            {t("description1")} <GreenText>{t("create")}</GreenText> {t("description1b")}{" "}
            <GreenText>{t("experience")}</GreenText> {t("description1c")}{" "}
            <GreenText>{t("innovation")}</GreenText> {t("description1d")}{" "}
            <GreenText>{t("connecting")}</GreenText> {t("description1e")}{" "}
            <GreenText>{t("solutions")}</GreenText> {t("description1f")}{" "}
            <GreenText>{t("performance")}</GreenText>.
          </p>
          <br />
          <p>
            {t("description2a")} <GreenText>{t("systemsDevelopment")}</GreenText> {t("description2b")}{" "}
            <GreenText>{t("computerScience")}</GreenText> {t("description2c")}{" "}
            <GreenText>{t("fullStack")}</GreenText> {t("description2d")}{" "}
            <GreenText>{t("develop")}</GreenText> {t("description2e")}{" "}
            <GreenText>{t("wellStructured")}</GreenText>.
          </p>
          <br />
          <p>
            {t("description3a")} <GreenText>{t("accessible")}</GreenText> {t("description3b")}{" "}
            <GreenText>{t("practicalSolutions")}</GreenText>.
          </p>
          <br />
          <p>
            {t("description4a")} <GreenText>{t("family")}</GreenText> {t("description4b")}{" "}
            <GreenText>{t("read")}</GreenText> {t("description4c")}{" "}
            <GreenText onClick={handleClick} isClickable>{t("playLoL")}</GreenText>.
          </p>
          <Image
            className="absolute right-5 bottom-0"
            src="/deathly-hallows.svg"
            alt="Relíquias da Morte"
            width={30}
            height={30}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutContent;