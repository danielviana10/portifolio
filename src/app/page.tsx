"use client"; 

import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import SkillsSection from "./skills/page";
import ExperiencesSection from "./experiences/page";
import AboutSection from "@/components/AboutSection/AboutSection";
import ProjectsSection from "./projects/page";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <main className="flex flex-col items-center min-h-screen mt-20 md:mt-32">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mb-16">
        <div className="text-start flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.30] mb-10">
            Olá, eu sou o<br />
            <span
              className={`text-greenCustom transition-transform duration-300 ${isHovered ? "scale-110" : ""} inline-block`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Daniel
            </span> :] <br />
            Desenvolvedor<br />
            Full Stack
          </h2>

          <Button
            href="/daniel-viana-curriculo.pdf"
            ariaLabel="Baixar Currículo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Currículo</span>
            <FaDownload className="text-white" />
          </Button>
        </div>

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/me-presentation.svg"
            alt="Imagem do Daniel"
            width={350}
            height={350}
            className={`rounded-full object-cover relative top-0 md:top-20 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
            priority
          />
        </div>
      </div>

      <AboutSection />

      <SkillsSection />

      <ExperiencesSection />

      <ProjectsSection />
    </main>
  );
}
