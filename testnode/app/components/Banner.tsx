import Image from 'next/image'

export default function Banner() {
  return (
    <section className="banner relative flex flex-col justify-start items-center text-center h-[120vh] w-full bg-[url('/elementos/trabalho.jpg')] bg-no-repeat bg-center bg-cover bg-fixed text-white pt-[calc(20vh+80px)] px-5 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <h2 className="text-6xl font-bold text-shadow-lg mb-10 z-20">Sua Parceira Ideal para Projetos de Engenharia e Construção</h2>
      <a href="#servicos-section" className="scroll-down flex justify-center items-center mt-5 z-20 transition-transform duration-300 ease-in-out hover:scale-110">
        <Image src="/elementos/arrow-down.png" alt="Seta para baixo" width={50} height={50} className="animate-bounce" />
      </a>
    </section>
  )
}

