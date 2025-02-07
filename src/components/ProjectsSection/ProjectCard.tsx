"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  url: string;
  svg: string;
  tecnologies: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  currentIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, currentIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
      style={{ zIndex: index === currentIndex ? 10 : 1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
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
                <Image src={`/green-icons/${tech}.svg`} alt={tech} width={32} height={32} className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
        <p className="mt-2 font-semibold mb-3">{project.title}</p>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
