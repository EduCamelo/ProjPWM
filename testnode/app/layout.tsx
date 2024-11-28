import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'R Camelo Topografia',
  description: 'Sua Parceira Ideal para Projetos de Engenharia e Construção',
  icons: {
    icon: '/favicon.ico',
    // Você também pode especificar diferentes tamanhos
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
      <body className="bg-[#f4f4f4] text-[#333] leading-relaxed">{children}</body>
    </html>
  )
}