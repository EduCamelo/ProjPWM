import Image from 'next/image'

const companies = [
  { name: "Fiat", logo: "/empresas/Fiat-Logo.png" },
  { name: "JBS Foods", logo: "/empresas/jbs-foods-logo.png" },
  { name: "McDonald's", logo: "/empresas/mcdonalds.png" },
  { name: "Petrobras", logo: "/empresas/Petrobras-Logo.png" },
  { name: "Queiroz Galvão", logo: "/empresas/QUEIROZ-GALVAO.png" },
  { name: "Walmart", logo: "/empresas/Walmart_logo.svg.png" }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#053C5E] mb-10 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-10 text-white uppercase tracking-wide">Portfólio</h2>
      <div className="flex justify-center gap-8 overflow-x-auto py-10 px-4">
        {companies.map((company, index) => (
          <div key={index} className="w-[150px] h-[150px] bg-white border border-gray-200 rounded-xl shadow-lg flex-shrink-0 flex items-center justify-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Image src={company.logo} alt={company.name} width={120} height={120} className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

