import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-[#8BA9C4] text-white my-8 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 uppercase">Sobre Nós</h2>
          <p className="text-lg leading-relaxed italic">
            Com mais de 30 anos de experiência, a R Camelo Topografia se consolidou como uma referência no mercado de serviços topográficos, oferecendo soluções precisas e de alta qualidade para projetos de engenharia, construção, urbanismo e agrimensura. Durante mais de três décadas, a empresa tem se destacado pela excelência técnica, inovação constante e compromisso com a satisfação dos seus clientes.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="/elementos/sobre.jpg" 
            alt="Sobre a R Camelo Topografia" 
            width={500} 
            height={300} 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

