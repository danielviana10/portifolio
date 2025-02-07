"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle";
import projects from "./projects";
import { useTranslation } from "next-i18next";
import NavigationButton from "./NavigationButton";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { t } = useTranslation("projectsSection");
  const totalSlides = projects.length;

  const goToPrevious = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goToNext = () => setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { rootMargin: "0px", threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen pt-12 px-8 transition-opacity duration-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle title={t("title").toUpperCase()} subtitle={t("title")} />

        <div className="flex items-center justify-center space-x-4 mt-28 lg:mt-14">
          <NavigationButton direction="left" onClick={goToPrevious} disabled={currentIndex === 0} />
          
          <div className="relative w-[600px] h-[300px] overflow-hidden flex justify-center">
            <AnimatePresence initial={false}>
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} currentIndex={currentIndex} />
              ))}
            </AnimatePresence>
          </div>

          <NavigationButton direction="right" onClick={goToNext} disabled={currentIndex === totalSlides - 1} />
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-greenCustom" : "bg-gray-600"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
