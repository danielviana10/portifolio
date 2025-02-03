"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { FaDownload } from "react-icons/fa";


const StartSection: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      id="inicio"
      className="flex flex-col items-center justify-center min-h-screen py-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
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
    </motion.section>

  );
};

export default StartSection;
