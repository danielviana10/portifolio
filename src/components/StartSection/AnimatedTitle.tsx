import React, { useState } from "react";
import { useTranslation } from "next-i18next";

interface AnimatedTitleProps {
  name: string;
  title: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ name, title }) => {
  const { t } = useTranslation('startSection');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <h2 className="text-4xl md:text-5xl font-semibold leading-[1.30] mb-10">
      {t("animatedTitle.greeting")}
      <br />
      <span
        className={`text-greenCustom transition-transform duration-300 ${isHovered ? "scale-110" : ""} inline-block`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {name}
      </span>{" "} 
      :] <br />
      {title}
    </h2>
  );
};

export default AnimatedTitle;
