"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import SectionTitle from "../SectionTitle";

// Definindo o tipo para a experiência
interface Experience {
  title: string;
  company: string;
  date: string;
  city: string;
  description: string;
}

const ExperiencesSection: React.FC = () => {
  const { t } = useTranslation("experiencesSection");
  const [hasAnimated, setHasAnimated] = useState(false);
  const experiencesRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const experiencesSection = experiencesRef.current;
    if (!experiencesSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(experiencesSection);
    return () => observer.unobserve(experiencesSection);
  }, [hasAnimated]);

  const experiences: Experience[] = t("experiences", { returnObjects: true }) as Experience[];

  return (
    <motion.section
      id="experiences"
      ref={experiencesRef}
      className="w-full min-h-screen py-12 my-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: hasAnimated ? 1 : 0,
        y: hasAnimated ? 0 : 20,
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle title={t("title").toUpperCase()} subtitle={t("title")} />

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: hasAnimated ? 1 : 0,
                y: hasAnimated ? 0 : 20,
              }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="flex justify-between text-white"
            >
              <div className="w-1/2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <h4 className="text-xl font-semibold text-greenCustom mb-2">{exp.company}</h4>
                <p className="text-md font-semibold text-[#979797]">
                  {exp.date} / {exp.city}
                </p>
              </div>
              <div className="w-1/2 pl-6">
                <p className="text-md" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperiencesSection;
