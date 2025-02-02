"use client";
import React, { useEffect, useRef, useState } from "react";

const ExperiencesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const experiencesRef = useRef<HTMLElement | null>(null);

  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Freelancer",
      date: "Atualmente",
      city: "Barueri, SP",
      description: "Desenvolvimento de aplicações web/mobile personalizadas, manutenção de sites e design,Portifólio empresarial, gestão de agendamentos,automatização de tarefas e testes.<br/> React, TypeScript, Tailwind, Nest.js, TypeORM, Python, Testify.",
    },
    {
      title: "Desenvolvedor Júnior",
      company: "E-Catálogos",
      date: "Maio 2024 - Outubro 2024",
      city: "Jandira, SP",
      description: "Desenvolvimento de aplicações personalizadas como: CRM, E-commerce de atacado, varejo e B2B. Assistência de integração e regra de negócio.<br/> React, TypeScript, Styled-components, Node.js, Express, PrismaORM, MySQL..",
    },
    {
        title: "Instrutor de Tecnologia",
        company: "Micro Ka Informática",
        date: "Fevereiro 2024 - Maio 2024",
        city: "Barueri, SP",
        description: "Responsável por aplicar aulas  na rede pública para crianças e adolescentes do 5° ano ao 9° ano do ensino fundamental sobre tecnologia, lógica, programação, inteligência artificial, conceito de machine learning e deep learning.<br/> Python, Scratch, Automação e Realidade Virtual.",
      },
      {
        title: "Analista Suporte Técnico",
        company: "Hosanna Tech",
        date: "Junho 2024 - Fevereiro 2024",
        city: "Barueri, SP",
        description: "Responsável por resolução de incidentes e atendimento ao cliente, treinamento e alinhamentos quanto as funcionalidades da plataforma, atividades de instalação e manutenção em web sites empresariais.<br/> HTML, CSS, PHP, Twig, MySQL Workbench",
      },
  ];

  useEffect(() => {
    const experiencesSection = experiencesRef.current;
    if (!experiencesSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(experiencesSection);

    return () => observer.unobserve(experiencesSection);
  }, []);

  return (
    <section
      id="experiences"
      ref={experiencesRef}
      className={`w-full pt-[5rem] pb-[3rem] sm:px-8 lg:px-8 transition-opacity duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2
            className="absolute inset-0 text-center text-6xl font-semibold text-white opacity-10"
            style={{ top: "4px" }}
            aria-hidden="true"
        >
          EXPERIÊNCIAS
        </h2>
        <h2 className="text-center text-4xl font-semibold text-greenCustom mb-10 relative z-10">
          Experiências
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="flex justify-between text-white">
              <div className="w-1/2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <h4 className="text-xl font-semibold text-greenCustom mb-2">{exp.company}</h4>
                <p className="text-md font-semibold text-[#979797]">{exp.date} / {exp.city}</p>
              </div>
              <div className="w-1/2 pl-6">
                <p className="text-md" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
