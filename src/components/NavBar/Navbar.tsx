"use client";  // Isso marca o componente como cliente

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight * 0.4) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 text-white bg-navbar-bg flex justify-between items-center px-[70px] md:px-[70px] sm:px-[20px] shadow-md z-50 transition-all duration-300 ${isHidden ? "transform -translate-y-full" : ""}`}
    >
      <div className="text-[25px] font-semibold">
        Daniel<span className="text-greenCustom">.</span> Viana
      </div>

      <ul className="flex space-x-6 text-[17px] font-semibold">
        <li>
          <Link href="/" className={styles.hoverEffect}>
            início
          </Link>
        </li>
        <li>
          <Link href="#about" className={styles.hoverEffect}>
            sobre
          </Link>
        </li>
        <li>
          <Link href="#skills" className={styles.hoverEffect}>
            habilidades
          </Link>
        </li>
        <li>
          <Link href="/experiencias" className={styles.hoverEffect}>
            experiências
          </Link>
        </li>
        <li>
          <Link href="/projetos" className={styles.hoverEffect}>
            projetos
          </Link>
        </li>
        <li>
          <Link href="/contato" className={styles.hoverEffect}>
            contatos
          </Link>
        </li>
      </ul>
    </nav>
  );
};
