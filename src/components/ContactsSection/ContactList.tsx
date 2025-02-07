import React from "react";
import ContactItem from "./ContactItem";
import contacts from "./contacts";

const ContactList: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {

  return (
    <div className="flex justify-center gap-12 flex-wrap mt-20 md:mt-36 lg:mt-36 flex-grow md:flex-row lg:flex-row">
      {contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} isVisible={isVisible} delay={index * 0.2} />
      ))}
    </div>
  );
};

export default ContactList;