"use client";
import React, { useEffect, useRef, useState } from 'react';
import AboutContent from './AboutContent';

interface SvgItem {
  id: number;
  top: number;
  left: number;
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [svgList, setSvgList] = useState<SvgItem[]>([]);
  const divRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef(null);

  const handleClick = () => {
    if (divRef.current) {
      const divRect = divRef.current.getBoundingClientRect();
      const divWidth = divRect.width;
      const divHeight = divRect.height;

      const randomTop = Math.floor(Math.random() * divHeight);
      const randomLeft = Math.floor(Math.random() * divWidth);

      const newSvg: SvgItem = {
        id: Date.now(),
        top: randomTop,
        left: randomLeft,
      };

      setSvgList((prevList) => [...prevList, newSvg]);

      const timeoutId = setTimeout(() => {
        setSvgList((prevList) => prevList.filter((svg) => svg.id !== newSvg.id));
      }, 2500);

      return timeoutId;
    }
  };

  useEffect(() => {
    const currentRef = aboutRef.current;

    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`w-full min-h-screen py-12 mb-12 px-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <AboutContent
        svgList={svgList}
        divRef={divRef}
        handleClick={handleClick}
        isVisible={isVisible}
      />
    </section>
  );
};

export default AboutSection;
