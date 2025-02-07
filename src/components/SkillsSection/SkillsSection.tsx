import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from '../SectionTitle';
import skills from "./skills";
import { useTranslation } from "next-i18next";
import SkillCarousel from './SkillCarousel';

const SkillsSection: React.FC = () => {
  const { t } = useTranslation("skillsSection");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState<boolean[]>(skills.map(() => false));
  const skillsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const skillRef = skillsRef.current;
    if (!skillRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(skillRef);

    return () => observer.unobserve(skillRef);
  }, []);

  const handleMouseEnter = (lineIndex: number) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[lineIndex] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (lineIndex: number) => {
    setIsHovered((prev) => {
      const newHovered = [...prev];
      newHovered[lineIndex] = false;
      return newHovered;
    });
  };

  return (
    <motion.section
      id="skills"
      ref={skillsRef}
      className="w-full min-h-screen pt-12 mb-0 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle title={t("title").toUpperCase()} subtitle={t("title")} />

        {skills.map((line, lineIndex) => (
          <SkillCarousel
            key={lineIndex}
            line={line}
            lineIndex={lineIndex}
            isVisible={isVisible}
            isHovered={isHovered[lineIndex]}
            onMouseEnter={() => handleMouseEnter(lineIndex)}
            onMouseLeave={() => handleMouseLeave(lineIndex)}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;