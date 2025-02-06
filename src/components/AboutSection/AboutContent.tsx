"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import SvgRenderer from "./SvgRenderer";
import ClickableText from "./ClickableText";
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
            {t("description1")} <ClickableText>{t("create")}</ClickableText> {t("description1b")}{" "}
            <ClickableText>{t("experience")}</ClickableText> {t("description1c")}{" "}
            <ClickableText>{t("innovation")}</ClickableText> {t("description1d")}{" "}
            <ClickableText>{t("connecting")}</ClickableText> {t("description1e")}{" "}
            <ClickableText>{t("solutions")}</ClickableText> {t("description1f")}{" "}
            <ClickableText>{t("performance")}</ClickableText>.
          </p>
          <br />
          <p>
            {t("description2a")} <ClickableText>{t("systemsDevelopment")}</ClickableText> {t("description2b")}{" "}
            <ClickableText>{t("computerScience")}</ClickableText> {t("description2c")}{" "}
            <ClickableText>{t("fullStack")}</ClickableText> {t("description2d")}{" "}
            <ClickableText>{t("develop")}</ClickableText> {t("description2e")}{" "}
            <ClickableText>{t("wellStructured")}</ClickableText>.
          </p>
          <br />
          <p>
            {t("description3a")} <ClickableText>{t("accessible")}</ClickableText> {t("description3b")}{" "}
            <ClickableText>{t("practicalSolutions")}</ClickableText>.
          </p>
          <br />
          <p>
            {t("description4a")} <ClickableText>{t("family")}</ClickableText> {t("description4b")}{" "}
            <ClickableText>{t("read")}</ClickableText> {t("description4c")}{" "}
            <ClickableText onClick={handleClick}>{t("playLoL")}</ClickableText>.
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