import Image from 'next/image';
import React from 'react';

interface SvgItem {
  id: number;
  top: number;
  left: number;
}

interface SvgRendererProps {
  svg: SvgItem;
}

const SvgRenderer: React.FC<SvgRendererProps> = ({ svg }) => (
  <div
    style={{
      position: "absolute",
      top: `${svg.top}px`,
      left: `${svg.left}px`,
      transform: "translate(-50%, -50%)",
      zIndex: 9999,
    }}
  >
    <Image
      src="/teemo-emoji.svg"
      alt="Teemo emoji"
      width={100}
      height={100}
    />
  </div>
);

export default SvgRenderer;