import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Contact {
  name: string;
  icon: string;
  info: string;
  link: string;
}

interface ContactItemProps {
  contact: Contact;
  isVisible: boolean;
  delay: number;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, isVisible, delay }) => {
  return (
    <motion.a
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-center flex flex-col items-center mb-8 sm:mb-12 lg:mb-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="w-16 h-16 bg-iconCustom flex items-center justify-center rounded-full shadow-md relative hover:before:absolute hover:before:inset-[-2px] hover:before:rounded-full hover:before:animate-circle-border">
        <Image src={contact.icon} alt={contact.name} width={40} height={40} />
      </div>
      <p className="text-lg font-semibold text-white mt-2">{contact.name}</p>
      <p className="text-sm font-semibold text-greenCustom">{contact.info}</p>
    </motion.a>
  );
};

export default ContactItem;