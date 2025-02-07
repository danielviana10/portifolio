import React from "react";

interface NavigationButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ direction, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="text-greenCustom disabled:opacity-50" aria-label={`Slide ${direction}`}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d={direction === "left" ? "M14 6L10 12L14 18" : "M10 6L14 12L10 18"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default NavigationButton;
