import React from 'react';
import Image from 'next/image';
import SvgRenderer from './SvgRenderer';
import ClickableText from './ClickableText';

interface AboutContentProps {
  svgList: { id: number; top: number; left: number }[];
  divRef: React.RefObject<HTMLDivElement | null>;
  handleClick: () => void;
}

const AboutContent: React.FC<AboutContentProps> = ({
  svgList,
  divRef,
  handleClick,
}) => (
  <div className="max-w-6xl mx-auto relative">
    <h2 className="absolute inset-0 text-center text-6xl font-semibold text-white opacity-10" style={{ top: '4px' }}>
      SOBRE MIM
    </h2>

    <h2 className="text-center text-4xl font-semibold text-greenCustom mb-6 relative z-10">
      Sobre mim
    </h2>

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
          <ClickableText onClick={handleClick}>criar</ClickableText> interfaces intuitivas e designs que tornam a{' '}
          <ClickableText onClick={handleClick}>experiência</ClickableText> do usuário mais simples e eficiente. Meu foco está na{' '}
          <ClickableText onClick={handleClick}>inovação</ClickableText> e escalabilidade,{' '}
          <ClickableText onClick={handleClick}>conectando</ClickableText> um back-end sólido a um front-end fluido para{' '}
          <ClickableText onClick={handleClick}>entregar soluções</ClickableText> completas e de alto{' '}
          <ClickableText onClick={handleClick}>desempenho</ClickableText>.
        </p>
        <br />
        <p>
          Sou formado em <ClickableText onClick={handleClick}>Desenvolvimento de Sistemas</ClickableText> pela UNICV, estou cursando{' '}
          <ClickableText onClick={handleClick}>Ciência da Computação</ClickableText> na UNIP e concluí o bootcamp{' '}
          <ClickableText onClick={handleClick}>Full Stack</ClickableText> da Kenzie Academy. Com experiência em desenvolvimento web, mobile, UX/UI design e sistemas integrados,{' '}
          <ClickableText onClick={handleClick}>desenvolvo</ClickableText> aplicações robustas, escaláveis e com código limpo e{' '}
          <ClickableText onClick={handleClick}>bem estruturado</ClickableText>.
        </p>
        <br />
        <p>
          Acredito que a tecnologia deve ser <ClickableText onClick={handleClick}>acessível</ClickableText> a todos e gosto de transformar conceitos complexos em{' '}
          <ClickableText onClick={handleClick}>soluções práticas</ClickableText>.
        </p>
        <br />
        <p>
          No meu tempo livre, gosto de estar com minha <ClickableText onClick={handleClick}>família</ClickableText> e amigos, viajar, patinar,{' '}
          <ClickableText onClick={handleClick}>ler</ClickableText> um bom livro ou, de vez em quando,{' '}
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
  </div>
);

export default AboutContent;