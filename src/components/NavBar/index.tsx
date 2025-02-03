"use client";  

import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {

  const handleScrollWithOffset = (id: string, offset: number = 80) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full p-4 text-white bg-navbar-bg flex justify-between items-center px-[70px] md:px-[70px] sm:px-[20px] shadow-md z-50"
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
          <button onClick={() => handleScrollWithOffset("about", 50)}>sobre</button>
        </li>
        <li>
          <button onClick={() => handleScrollWithOffset("skills", 50)}>habilidades</button>
        </li>
        <li>
          <button onClick={() => handleScrollWithOffset("experiences", 50)}>experiências</button>
        </li>
        <li>
          <button onClick={() => handleScrollWithOffset("projects", 50)}>projetos</button>
        </li>
        <li>
          <button onClick={() => handleScrollWithOffset("contacts", 50)}>contatos</button>
        </li>
      </ul>
    </nav>
  );
};
