'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/app/components/ui/button'
import { Input }  from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Label } from '@/app/components/ui/label'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | '' }>({ message: '', type: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ message: 'Enviando...', type: '' })

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    if (res.ok) {
      setStatus({ message: 'Email enviado com sucesso!', type: 'success' })
      setName('')
      setEmail('')
      setMessage('')
    } else {
      setStatus({ message: 'Erro ao enviar email. Por favor, tente novamente.', type: 'error' })
    }

    // Clear status after 5 seconds
    setTimeout(() => setStatus({ message: '', type: '' }), 5000)
  }

  useEffect(() => {
    return () => {
      setStatus({ message: '', type: '' })
    }
  }, [])

  return (
    <section id="contatos" className="py-20 bg-[#8BA9C4] mb-10 rounded-xl shadow-lg">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#04080F] uppercase">Contate-nos</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
          <div className="mb-4">
            <Label htmlFor="name" className="text-[#04080F]">Nome</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full p-3 text-lg border border-gray-300 rounded-md focus:border-[#053C5E] focus:ring-2 focus:ring-[#053C5E] transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="email" className="text-[#04080F]">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full p-3 text-lg border border-gray-300 rounded-md focus:border-[#053C5E] focus:ring-2 focus:ring-[#053C5E] transition-all duration-300"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="message" className="text-[#04080F]">Mensagem</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 w-full p-3 text-lg border border-gray-300 rounded-md focus:border-[#053C5E] focus:ring-2 focus:ring-[#053C5E] transition-all duration-300"
              rows={5}
            />
          </div>
          <Button 
            type="submit"
            className="w-full md:w-1/2 mx-auto block mt-6 p-3 text-xl text-white bg-[#053C5E] rounded-md transition-all duration-300 hover:bg-[#0c5684] hover:shadow-lg active:bg-[#042d4a] active:shadow-md"
          >
            Enviar
          </Button>
          {status.message && (
            <p className={`mt-4 text-center text-lg font-semibold ${
              status.type === 'success' ? 'text-green-600' : 
              status.type === 'error' ? 'text-red-600' : 'text-gray-600'
            }`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

