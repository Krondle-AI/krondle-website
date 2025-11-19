'use client'

import { useRef } from 'react'
import { ChatWidget, openChatExternally } from '../components/chat/ChatWidget'
import { Button } from '@krondle/common'
import type { ChatUIHandle } from '../components/chat/ChatUI'
import { CheckCheck } from 'lucide-react'

export default function AgendarReuniaoPage() {
  const chatRef = useRef<ChatUIHandle>(null)

  return (
    <div className="relative min-h-screen bg-white py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* Esquerda */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Agende agora uma reunião com a equipa do Krondle
          </h1>
          <p className="text-slate-600 mb-4 max-w-xl">
            Observe como o sistema realiza o agendamento de forma totalmente automática, em poucos segundos, disponível 24 horas por dia, sem qualquer intervenção humana.
          </p>
          <p className="text-slate-500 text-sm mb-6 max-w-lg">
            Aceda ao chat no canto inferior direito e interaja como se fosse um cliente a agendar uma reunião.
          </p>

          <Button onClick={() => openChatExternally(chatRef)} className="mb-8">
            💬 Testar Assistente Agora
          </Button>
        </div>

        {/* Direita */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-cyan-50 p-4 rounded-xl text-sm">
              <p className="text-slate-900 font-semibold">🕒 Duração</p>
              <p className="text-slate-600">30 a 45 minutos via Zoom</p>
            </div>
            <div className="bg-cyan-50 p-4 rounded-xl text-sm">
              <p className="text-slate-900 font-semibold">📅 Horários</p>
              <p className="text-slate-600">Segunda-Sexta, 9h às 18h</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-xl">
            <p className="font-semibold mb-2">Nesta demonstração, você verá:</p>
            <ul className="text-sm text-slate-700 list-disc ml-5 space-y-1">
              <li>Como o bot responde clientes automaticamente</li>
              <li>Integração com WhatsApp Business e Instagram</li>
              <li>Analytics e dashboard de marcações</li>
              <li>Customização para o seu negócio</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2 text-slate-700 flex items-center gap-2">
              <CheckCheck className="w-5 h-5 text-cyan-500" />
              Demonstração 100% Gratuita
            </h3>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>✅ Sem compromisso</li>
              <li>✅ Sem cartão de crédito</li>
              <li>✅ Personalizada para o seu negócio</li>
              <li>✅ Suporte em português</li>
            </ul>
          </div>


          {/* Testemunho */}
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
            <p className="italic text-slate-700 mb-4">
              “A Krondle automatizou 100% das marcações no meu salão. Hoje o bot responde por mim enquanto estou a atender.”
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=MariaCosta&backgroundColor=ffd5dc"
                alt="Maria Costa"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-slate-900">Maria Costa</p>
                <p className="text-slate-500 text-sm">Esteticista • GlowStudio</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat flutuante */}
      <ChatWidget ref={chatRef} />
    </div>
  )
}
