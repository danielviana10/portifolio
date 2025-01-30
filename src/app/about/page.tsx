"use client";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

interface SvgItem {
  id: number;
  top: number;
  left: number;
}

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [svgList, setSvgList] = useState<SvgItem[]>([]); 
  const divRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef(null);
  
  const handleClick = () => {
    if (divRef.current) {
      const divRect = divRef.current.getBoundingClientRect();
      const divWidth = divRect.width;
      const divHeight = divRect.height;

      const randomTop = Math.floor(Math.random() * divHeight); 
      const randomLeft = Math.floor(Math.random() * divWidth); 

      const newSvg: SvgItem = {
        id: Date.now(),
        top: randomTop,
        left: randomLeft,
      };

      setSvgList((prevList) => [...prevList, newSvg]);

      setTimeout(() => {
        setSvgList((prevList) => prevList.filter((svg) => svg.id !== newSvg.id));
      }, 2500);
    }
  };


  useEffect(() => {
    const currentRef = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`w-full py-12 px-6 sm:px-8 lg:px-8 mt-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-6xl mx-auto relative">
        <h2 className="absolute inset-0 text-center text-6xl font-semibold text-white opacity-10" style={{ top: '4px' }}>
          SOBRE MIM
        </h2>

        <h2 className="text-center text-4xl font-semibold text-greenCustom mb-6 relative z-10">
          Sobre mim
        </h2>

        <div className="flex items-center justify-between mt-8">
          <div  ref={divRef} className="w-1/2 relative">
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
              <div
                key={svg.id}
                style={{
                  position: "absolute",
                  top: `${svg.top}px`,
                  left: `${svg.left}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: 9999,
                }}
              >
                <Image
                  src="/teemo-emoji.svg"
                  alt="Teemo emoji"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          
          <div className="w-1/2 font-semibold text-[1rem] relative">
            <p>
              Desenvolvedor Full Stack, apaixonado por <span className="text-greenCustom">criar</span> interfaces intuitivas e designs que tornam a <span className="text-greenCustom">experiência</span> do usuário mais simples e eficiente. Meu foco está na <span className="text-greenCustom">inovação</span> e escalabilidade, <span className="text-greenCustom">conectando</span> um back-end sólido a um front-end fluido para <span className="text-greenCustom">entregar soluções</span> completas e de alto <span className="text-greenCustom">desempenho</span>.
            </p>
            <br />
            <p>
              Sou formado em <span className="text-greenCustom">Desenvolvimento de Sistemas</span> pela UNICV, estou cursando <span className="text-greenCustom">Ciência da Computação</span> na UNIP e concluí o bootcamp <span className="text-greenCustom">Full Stack</span> da Kenzie Academy. Com experiência em desenvolvimento web, mobile, UX/UI design e sistemas integrados, <span className="text-greenCustom">desenvolvo</span> aplicações robustas, escaláveis e com código limpo e <span className="text-greenCustom">bem estruturado</span>.
            </p>
            <br />
            <p>
              Acredito que a tecnologia deve ser <span className="text-greenCustom">acessível</span> a todos e gosto de transformar conceitos complexos em <span className="text-greenCustom">soluções práticas</span>.
            </p>
            <br />
            <p>
              No meu tempo livre, gosto de estar com minha <span className="text-greenCustom">família</span> e amigos, viajar, patinar, <span className="text-greenCustom">ler</span> um bom livro ou, de vez em quando, <span className="text-greenCustom cursor-pointer" onClick={handleClick}>jogar League of Legends</span> .
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
    </section>
  );
};

export default AboutSection;