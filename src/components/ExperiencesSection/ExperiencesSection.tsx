"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";
import ExperienceItem from "./ExperienceItem";

interface Experience {
  title: string;
  company: string;
  date: string;
  city: string;
  description: string;
}

const ExperiencesSection: React.FC = () => {
  const t = useTranslations("experiencesSection");
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

  const experiences: Experience[] = t.raw("experiences") as Experience[];

  return (
    <motion.section
      id="experiences"
      ref={experiencesRef}
      className="w-full min-h-screen py-12 mb-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: hasAnimated ? 1 : 0,
        y: hasAnimated ? 0 : 20,
      }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto relative">
        <SectionTitle title={t("title").toUpperCase()} subtitle={t("title")} />

        <div className="space-y-10 sm:space-y-4 md:space-y-4 lg:space-y-4">
          {Array.isArray(experiences) && experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              experience={exp}
              index={index}
              hasAnimated={hasAnimated}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ExperiencesSection;