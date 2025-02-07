"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from '../SectionTitle';
import { skills } from "./skills";
import { useTranslation } from "next-i18next";

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
          <div
            className="carousel overflow-hidden top-20 md:top-[14rem] lg:top-14"
            key={lineIndex}
            onMouseEnter={() => handleMouseEnter(lineIndex)}
            onMouseLeave={() => handleMouseLeave(lineIndex)}
          >
            <div
              className={`group flex space-x-4 ${
                isVisible ? "scrolling" : ""
              }`}
              style={{
                animationName: isVisible ? "scrolling" : "none",
                animationDuration: `${140 + lineIndex * 5}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: isHovered[lineIndex] ? "paused" : "running",
              }}
            >
              {line.map((item, index) => (
                <div
                  key={index}
                  className="card flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[120px] sm:min-w-[150px] lg:w-[200px]"
                >
                  <Image
                    src={`/icons/${item}.svg`}
                    alt={item}
                    width={45}
                    height={45}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                    priority
                  />
                  <p className="ml-2 text-sm sm:text-base">
                    {item.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;