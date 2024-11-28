import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#053C5E] text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <Image src="/logo/logo-RCamelo-removebg.png" alt="Logo Camelo Empreendimentos" width={120} height={60} />
          </div>
          <div className="text-center md:text-left">
            <p className="mb-4">
              Luiz Carlos Barreto de Siqueira<br />
              Engº Civil<br />
              CREA 21459 D/PE
            </p>
            <p className="mb-4">
              Endereço:<br />
              Rua Armindo Moura, 478C - Varadouro<br />
              Olinda - PE
            </p>
          </div>
          <div className="text-center md:text-left">
            <p className="mb-4">
              Fones:<br />
              (81) 99313-9165<br />
              (81) 99257-1510
            </p>
            <p>
              Email: <a href="mailto:luizcalostopografia@yahoo.com.br" className="text-[#8BA9C4] hover:text-white transition-colors">luizcalostopografia@yahoo.com.br</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

