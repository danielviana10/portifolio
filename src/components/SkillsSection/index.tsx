"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from '../SectionTitle';
import { skills } from "./skills";

const SkillsSection: React.FC = () => {
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
      className="w-full min-h-screen py-12 my-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle title="HABILIDADES" subtitle="Habilidades"/>

        {skills.map((line, lineIndex) => (
          <div
            className="carousel"
            key={lineIndex}
            onMouseEnter={() => handleMouseEnter(lineIndex)}
            onMouseLeave={() => handleMouseLeave(lineIndex)}
          >
            <div
              className={`group ${isVisible ? "scrolling" : ""}`}
              style={{
                animationName: isVisible ? "scrolling" : "none",
                animationDuration: `${140 + lineIndex * 5}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationPlayState: isHovered[lineIndex] ? "paused" : "running",
              }}
            >
              {line.map((item, index) => (
                <div key={index} className="card flex items-center justify-center">
                  <Image
                    src={`/icons/${item}.svg`}
                    alt={item}
                    width={45}
                    height={45}
                    priority
                  />
                  <p>{item.toUpperCase()}</p>
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
