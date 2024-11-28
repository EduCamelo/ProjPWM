import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-[#053C5E] text-white fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300">
      <div className="logo">
        <Image src="/logo/logo-RCamelo-removebg.png" alt="Logo Rcamelo" width={70} height={70} />
      </div>
      <nav className="flex gap-5">
        <Link href="/" className="text-white text-lg px-4 py-2 border-2 border-transparent rounded transition-all duration-300 hover:bg-[#0c5684] hover:border-[#777] hover:shadow-lg hover:scale-105">Home</Link>
        <Link href="#servicos-section" className="text-white text-lg px-4 py-2 border-2 border-transparent rounded transition-all duration-300 hover:bg-[#0c5684] hover:border-[#777] hover:shadow-lg hover:scale-105">Serviços</Link>
        <Link href="#sobre" className="text-white text-lg px-4 py-2 border-2 border-transparent rounded transition-all duration-300 hover:bg-[#0c5684] hover:border-[#777] hover:shadow-lg hover:scale-105">Sobre</Link>
        <Link href="#portfolio" className="text-white text-lg px-4 py-2 border-2 border-transparent rounded transition-all duration-300 hover:bg-[#0c5684] hover:border-[#777] hover:shadow-lg hover:scale-105">Portfólio</Link>
        <Link href="#contatos" className="text-white text-lg px-4 py-2 border-2 border-transparent rounded transition-all duration-300 hover:bg-[#0c5684] hover:border-[#777] hover:shadow-lg hover:scale-105">Contatos</Link>
      </nav>
    </header>
  )
}

