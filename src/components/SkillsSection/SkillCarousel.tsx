import React from "react";
import Image from "next/image";

interface SkillCarouselProps {
  line: string[];
  lineIndex: number;
  isVisible: boolean;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SkillCarousel: React.FC<SkillCarouselProps> = ({
  line,
  lineIndex,
  isVisible,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="carousel overflow-hidden top-20 md:top-[14rem] lg:top-14"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`group flex space-x-4 ${isVisible ? "scrolling" : ""}`}
        style={{
          animationName: isVisible ? "scrolling" : "none",
          animationDuration: `${140 + lineIndex * 5}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {line.map((item, index) => (
          <div
            key={index}
            className="card flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-[120px] sm:min-w-[150px] lg:w-[200px]"
          >
            <Image
              src={`/icons/${item}.svg`}
              alt={item}
              width={45}
              height={45}
              className="w-8 h-8 sm:w-10 sm:h-10"
              priority
            />
            <p className="ml-2 text-sm sm:text-base">{item.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCarousel;