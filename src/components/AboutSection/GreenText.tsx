import React from 'react';

interface GreenTextProps {
  onClick?: () => void;
  children: React.ReactNode;
  isClickable?: boolean;
}

const GreenText: React.FC<GreenTextProps> = ({ onClick, children, isClickable }) => (
  <span
    className={`text-greenCustom ${isClickable ? "cursor-pointer" : ""}`}
    onClick={onClick}
    aria-label="Clique para adicionar um emoji do Teemo"
  >
    {children}
  </span>
);

export default GreenText;