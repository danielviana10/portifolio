import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

const Button = ({
  children,
  href,
  onClick,
  className = "",
  ariaLabel,
  target,
  rel,
}: ButtonProps) => {
  const buttonClasses = `${styles.button} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;
