"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle";
import projects from "./projects";

const ProjectsSection: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  const sectionRef = useRef<HTMLElement | null>(null);
  const totalSlides = projects.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

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

    observer.observe(sectionElement);

    return () => observer.unobserve(sectionElement);
  }, []);

  return (
    <motion.section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen py-12 my-12 px-8 transition-opacity duration-1000"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle title="PROJETOS" subtitle="Projetos" />

        <div className="flex items-center justify-center space-x-4 mt-28">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="text-greenCustom disabled:opacity-50"
            aria-label="Slide anterior"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 6L10 12L14 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="relative w-[600px] h-[300px] overflow-hidden flex justify-center">
            <AnimatePresence initial={false}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: index === currentIndex ? 100 : 0 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0.5,
                    x: index === currentIndex ? 0 : index < currentIndex ? -600 : 600,
                  }}
                  exit={{ opacity: 0, x: index < currentIndex ? 600 : -600 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute bg-[#101012] mt-[10px] text-white rounded-lg shadow-lg w-[285px] h-[270px] flex flex-col justify-between text-center cursor-pointer"
                  style={{
                    zIndex: index === currentIndex ? 10 : 1,
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)} 
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="w-full h-[232px] overflow-hidden relative">
                      <Image
                        src={project.svg}
                        alt={project.title}
                        width={305}
                        height={232}
                        className="w-full h-full object-cover rounded-t-lg"
                      />

                      <motion.div
                        className="absolute inset-0 bg-black opacity-60 rounded-t-lg"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: isHovered ? 0 : 0.6 }}
                        transition={{ duration: 0.3 }}
                      />

                      <motion.div
                        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex justify-center gap-2"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isHovered ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.tecnologies.map((tech) => (
                          <div key={tech} className="w-8 h-8 flex justify-center items-center">
                            <Image
                              src={`/green-icons/${tech}.svg`}
                              alt={tech}
                              width={32}
                              height={32}
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </motion.div>
                    </div>
                    <p className="mt-2 font-semibold mb-3">{project.title}</p>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={goToNext}
            disabled={currentIndex === totalSlides - 1}
            className="text-greenCustom disabled:opacity-50"
            aria-label="Próximo slide"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 6L14 12L10 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
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
