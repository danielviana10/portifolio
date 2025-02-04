"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

const message = "?text=Oi,%20Daniel!%20Vi%20seu%20portifólio,%20vamos%20conversar?";

const contacts = [
  {
    name: "Telefone",
    icon: "/icons/whatsapp.svg",
    info: "(11) 97740-8772",
    link: `https://wa.me/5511977408772${message}`
  },
  {
    name: "E-mail",
    icon: "/icons/mail.svg",
    info: "danielviana43@gmail.com",
    link: "mailto:danielviana43@gmail.com"
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    info: "@danielviana",
    link: "https://www.linkedin.com/in/daniel-viana-943420184/"
  },
  {
    name: "GitHub",
    icon: "/icons/octacat.svg",
    info: "@danielviana",
    link: "https://github.com/danielviana10"
  }
];

const ContactsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const contactsElement = contactsRef.current;
    if (!contactsElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(contactsElement);

    return () => observer.unobserve(contactsElement);
  }, []);

  return (
    <motion.section
      id="contacts"
      ref={contactsRef}
      className="w-full pt-12 mt-12 px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle title="CONTATOS" subtitle="Contatos" />

      <h3 className="text-center text-3xl font-semibold mb-36">
        Estou a um clique de distância
      </h3>

      <div className="flex justify-center gap-12 flex-wrap">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div
              className="w-16 h-16 bg-iconCustom flex items-center justify-center rounded-full shadow-md relative
                        hover:before:absolute hover:before:inset-[-2px] hover:before:rounded-full hover:before:animate-circle-border"
            >
              <Image
                src={contact.icon}
                alt={contact.name}
                width={40}
                height={40}
              />
            </div>
            <p className="text-lg font-semibold text-white mt-2">{contact.name}</p>
            <p className="text-sm font-semibold text-greenCustom">{contact.info}</p>
          </motion.a>
        ))}
      </div>

      <footer className="w-full py-4 text-center bg-blackCustom mt-[7rem]">
        <p className="text-gray-400 text-sm">
          Copyright © 2025{" "}
          <a
            href="https://www.linkedin.com/in/daniel-viana-943420184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-greenCustom hover:text-greenCustom:hover"
          >
            Daniel Viana
          </a>
          . Todos os direitos reservados.
        </p>
      </footer>
    </motion.section>
  );
};

export default ContactsSection;
