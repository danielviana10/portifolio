"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SvgRenderer from './SvgRenderer';
import ClickableText from './ClickableText';
import SectionTitle from '../SectionTitle';

interface AboutContentProps {
  svgList: { id: number; top: number; left: number }[];
  divRef: React.RefObject<HTMLDivElement | null>;
  handleClick: () => void;
  isVisible: boolean;
}

const AboutContent: React.FC<AboutContentProps> = ({
  svgList,
  divRef,
  handleClick,
  isVisible,
}) => (
  <motion.div
    className="max-w-6xl mx-auto relative"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} 
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    <SectionTitle title="SOBRE MIM" subtitle="Sobre Mim" />

    <div className="flex items-center justify-between mt-8">
      <div ref={divRef as React.RefObject<HTMLDivElement>} className="w-1/2 relative">
        <Image
          className="absolute top-0 left-0"
          src="/filled-circle.svg"
          alt="Círculo pontilhado verde"
          width={100}
          height={100}
          priority
        />
        <Image
          className="rounded-full object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md hover:shadow-greenCustom"
          src="/daniel-about-me.svg"
          alt="Imagem do Daniel"
          width={330}
          height={330}
          priority
        />

        {svgList.map((svg) => (
          <SvgRenderer key={svg.id} svg={svg} />
        ))}
      </div>

      <div className="w-1/2 font-semibold text-[1rem] relative">
        <p>
          Desenvolvedor Full Stack, apaixonado por{' '}
          <ClickableText>criar</ClickableText> interfaces intuitivas e designs que tornam a{' '}
          <ClickableText>experiência</ClickableText> do usuário mais simples e eficiente. Meu foco está na{' '}
          <ClickableText>inovação</ClickableText> e escalabilidade,{' '}
          <ClickableText>conectando</ClickableText> um back-end sólido a um front-end fluido para{' '}
          <ClickableText>entregar soluções</ClickableText> completas e de alto{' '}
          <ClickableText>desempenho</ClickableText>.
        </p>
        <br />
        <p>
          Sou formado em <ClickableText>Desenvolvimento de Sistemas</ClickableText> pela UNICV, estou cursando{' '}
          <ClickableText>Ciência da Computação</ClickableText> na UNIP e concluí o bootcamp{' '}
          <ClickableText>Full Stack</ClickableText> da Kenzie Academy. Com experiência em desenvolvimento web, mobile, UX/UI design e sistemas integrados,{' '}
          <ClickableText>desenvolvo</ClickableText> aplicações robustas, escaláveis e com código limpo e{' '}
          <ClickableText>bem estruturado</ClickableText>.
        </p>
        <br />
        <p>
          Acredito que a tecnologia deve ser <ClickableText>acessível</ClickableText> a todos e gosto de transformar conceitos complexos em{' '}
          <ClickableText>soluções práticas</ClickableText>.
        </p>
        <br />
        <p>
          No meu tempo livre, gosto de estar com minha <ClickableText>família</ClickableText> e amigos, viajar, patinar,{' '}
          <ClickableText>ler</ClickableText> um bom livro ou, de vez em quando,{' '}
          <ClickableText onClick={handleClick}>jogar League of Legends</ClickableText>.
        </p>
        <Image
          className="absolute right-5 bottom-0"
          src="/deathly-hallows.svg"
          alt="Relíquias da Morte"
          width={30}
          height={30}
        />
      </div>
    </div>
  </motion.div>
);

export default AboutContent;
