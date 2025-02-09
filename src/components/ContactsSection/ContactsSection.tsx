"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import SectionTitle from "../SectionTitle";
import ContactList from "./ContactList";
import Footer from "./Footer";

const ContactsSection: React.FC = () => {
  const { t } = useTranslation("contactsSection");
  const [isVisible, setIsVisible] = useState(false);
  const contactsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!contactsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0.1 }
    );

    observer.observe(contactsRef.current);
    return () => observer.disconnect();
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
      <h3 className="text-center text-2xl font-semibold mt-10 md:mt-14 lg:mt-14 md:text-3xl lg:text-3xl">
        {t("cta")}
      </h3>
      <ContactList isVisible={isVisible} />
      <Footer />
    </motion.section>
  );
};

export default ContactsSection;