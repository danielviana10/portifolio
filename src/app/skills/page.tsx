"use client";

import React, { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`w-full py-12 px-6 sm:px-8 lg:px-8 mt-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="absolute inset-0 text-center text-6xl font-semibold text-white opacity-10" style={{ top: '4px' }}>
          HABILIDADES
        </h2>

        <h2 className="text-center text-4xl font-semibold text-greenCustom mb-6 relative z-10">
          Habilidades
        </h2>
      </div>
    </section>
  );
};

export default SkillsSection;
