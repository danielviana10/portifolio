import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

interface HoverImageProps extends ImageProps {
  hoverScale?: string;
  alt: string;
}

const HoverImage: React.FC<HoverImageProps> = ({ hoverScale = "scale-110", alt, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        {...props}
        alt={alt}
        className={`rounded-full object-cover relative top-0 md:top-20 transition-transform duration-300 ${isHovered ? hoverScale : ""}`}
      />
    </div>
  );
};

export default HoverImage;