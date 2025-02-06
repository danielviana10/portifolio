"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import SectionTitle from "../SectionTitle";

const ContactsSection: React.FC = () => {
  const { t } = useTranslation("contactsSection");
  const [isVisible, setIsVisible] = useState(false);
  const contactsRef = useRef<HTMLElement | null>(null);

  const message = t("message");

  const contacts = [
    {
      name: "whatsapp",
      icon: "/icons/whatsapp.svg",
      info: "(11) 97740-8772",
      link: `https://wa.me/5511977408772${message}`,
    },
    {
      name: "email",
      icon: "/icons/mail.svg",
      info: "danielviana43@gmail.com",
      link: "mailto:danielviana43@gmail.com",
    },
    {
      name: "linkedin",
      icon: "/icons/linkedin.svg",
      info: "@danielviana",
      link: "https://www.linkedin.com/in/daniel-viana-943420184/",
    },
    {
      name: "github",
      icon: "/icons/octacat.svg",
      info: "@danielviana",
      link: "https://github.com/danielviana10",
    },
  ];

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
      className="w-full min-h-screen flex flex-col px-8 pt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.8 }}
    >
      <SectionTitle title={t("title").toUpperCase()} subtitle={t("title")} />

      <h3 className="text-center text-2xl font-semibold mt-14 md:text-3xl lg:text-3xl">
        {t("cta")}
      </h3>

      <div className="flex justify-center gap-12 flex-wrap mt-36 flex-col md:flex-row lg:flex-row">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center flex flex-col items-center mb-8 sm:mb-12 lg:mb-0"
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
                alt={t(contact.name)}
                width={40}
                height={40}
              />
            </div>
            <p className="text-lg font-semibold text-white mt-2">{t(contact.name)}</p>
            <p className="text-sm font-semibold text-greenCustom">{contact.info}</p>
          </motion.a>
        ))}
      </div>

      <footer className="w-full text-center bg-blackCustom py-4 mt-auto">
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
          {". "}
          {t("copyrightText")}
        </p>
      </footer>
    </motion.section>
  );
};

export default ContactsSection;
