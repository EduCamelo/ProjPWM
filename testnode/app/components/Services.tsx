import Image from 'next/image'

const services = [
  {
    title: "Levantamento Topográfico",
    description: "Levantamento topográfico detalhado para precisão e planejamento.",
    image: "/elementos/imagem-levantamento-topografico.jpeg"
  },
  {
    title: "Georeferenciamento GPS",
    description: "Georeferenciamento GPS com alta precisão para mapeamento e validação.",
    image: "/elementos/Georreferenciamento.jpeg"
  },
  {
    title: "Curvas de Nível",
    description: "Elaboração de curvas de nível para análise e projetos de terrenos.",
    image: "/elementos/curvanivel.jpg"
  },
  {
    title: "Levantamento Arquitetônico",
    description: "Levantamento arquitetônico para projetos e reformas precisas.",
    image: "/elementos/levantamentoArquitetonico.jpg"
  }
]

export default function Services() {
  return (
    <section id="servicos-section" className="py-16 bg-white">
      <h2 className="text-3xl text-center mb-8 text-[#053C5E]">Nossos Serviços</h2>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 max-w-[300px]">
            <Image src={service.image} alt={service.title} width={300} height={200} className="w-full h-[200px] object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-[#053C5E]">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

