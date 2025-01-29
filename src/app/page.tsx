import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen mt-32">
      <div className="flex items-center justify-center space-x-8">
        <div className="text-start">
          <h2 className="text-5xl font-semibold leading-[1.30]">
            Olá, eu sou o<br />
            <span className="text-greenCustom">Daniel</span> :] <br />
            Desenvolvedor<br />
            Full Stack
          </h2>

          <button className="bg-greyCostum text-white px-4 py-2 rounded-full font-semibold border-2 border-green-500 hover:bg-greenCustom hover:border-green-500 hover:text-white btn-hover-effect mt-12 text-lg">
            Currículo
          </button>



        </div>

        <Image
          src="/me-presentation.svg"
          alt="Imagem do Daniel"
          width={350}
          height={350}
          className="rounded-full object-cover relative top-24"
        />
      </div>
    </main>
  );
}
