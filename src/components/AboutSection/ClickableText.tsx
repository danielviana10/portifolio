import React from 'react';

interface ClickableTextProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ClickableText: React.FC<ClickableTextProps> = ({ onClick, children }) => (
  <span
    className="text-greenCustom cursor-pointer"
    onClick={onClick}
    aria-label="Clique para adicionar um emoji do Teemo"
  >
    {children}
  </span>
);

export default ClickableText;