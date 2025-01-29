import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 text-white bg-navbar-bg flex justify-between items-center px-[70px] md:px-[70px] sm:px-[20px] shadow-md z-50">
      <div className="text-[25px] font-semibold">
        Daniel<span className="text-greenCustom">.</span> Viana
      </div>

      <ul className="flex space-x-6 text-[17px] font-semibold">
        <li><Link href="/">início</Link></li>
        <li><Link href="/sobre">sobre</Link></li>
        <li><Link href="/habilidades">habilidades</Link></li>
        <li><Link href="/experiencias">experiências</Link></li>
        <li><Link href="/projetos">projetos</Link></li>
        <li><Link href="/contato">contatos</Link></li>
      </ul>
    </nav>
  );
}
