import { t } from "i18next";

const message = t("message");

const contacts = [
    { name: "whatsapp", icon: "/icons/whatsapp.svg", info: "(11) 97740-8772", link: `https://wa.me/5511977408772${message}` },
    { name: "email", icon: "/icons/mail.svg", info: "danielvianna43", link: "mailto:danielvianna43@gmail.com" },
    { name: "linkedin", icon: "/icons/linkedin.svg", info: "@danielviana", link: "https://www.linkedin.com/in/daniel-viana-943420184/" },
    { name: "github", icon: "/icons/octacat.svg", info: "@danielviana", link: "https://github.com/danielviana10" },
  ];

export default contacts;