"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
        setIsVisible(entry.isIntersecting)
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
    <section
      id="skills"
      ref={skillsRef}
      className={`w-full pt-[5rem] pb-[3rem] px-6 sm:px-8 lg:px-8 transition-opacity duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2
          className="absolute inset-0 text-center text-6xl font-semibold text-white opacity-10"
          style={{ top: "4px" }}
          aria-hidden="true"
        >
          HABILIDADES
        </h2>
        <h2 className="text-center text-4xl font-semibold text-greenCustom mb-10 relative z-10">
          Habilidades
        </h2>

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
    </section>
  );
};

export default SkillsSection;