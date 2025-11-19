// apps/marketing/src/pages/AgendarReuniaoPage.tsx

'use client'

import { useRef } from 'react'
import { CheckCheck } from 'lucide-react'
import { Button } from '@krondle/common'
import { ChatWidget } from '../components/chat/ChatWidget'
import type { ChatUIHandle } from '../components/chat/ChatUI'
import { openChatExternally } from '../components/chat/ChatWidget'

export default function AgendarReuniaoPage() {
  const chatRef = useRef<ChatUIHandle>(null)

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* -------------------------------------------------- */}
        {/* ESQUERDA – hero + botão + mockup                  */}
        {/* -------------------------------------------------- */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-50 leading-tight">
            Agende agora uma reunião com a equipa do Krondle
          </h1>

          <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-xl">
            Observe como o sistema realiza o agendamento de forma totalmente
            automática, em poucos segundos, disponível 24 horas por dia, sem
            qualquer intervenção humana.
          </p>

          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 max-w-lg">
            Aceda ao chat no canto inferior direito e interaja como se fosse um
            cliente a agendar uma reunião.
          </p>

          <Button
            onClick={() => openChatExternally(chatRef)}
            className="mb-2 inline-flex items-center gap-2 px-6"
          >
            <span>💬</span>
            <span>Testar Assistente Agora</span>
          </Button>

          <p className="text-xs text-slate-500 dark:text-slate-500 mb-8">
            Não precisa de instalar nada. Basta clicar e falar com o assistente.
          </p>

          {/* Mockup do assistente em ação */}
          <div className="mt-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/80 px-6 py-5 flex flex-col sm:flex-row gap-6 items-start
                  dark:bg-slate-900/60 dark:border-slate-700">
              {/* Coluna das bolhas de chat (esquerda) */}
              <div className="flex flex-col gap-2">
                {/* Mensagem 1 */}
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-relaxed shadow-sm max-w-[230px]
                      dark:bg-slate-900 dark:border-slate-700">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mb-1">
                    Olá! 👋 Sou o assistente virtual do Krondle.
                  </span>
                </div>

                {/* Mensagem 2 */}
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-xs leading-relaxed shadow-sm max-w-[230px]
                      dark:bg-slate-900 dark:border-slate-700">
                  <span className="text-[11px] text-slate-600 dark:text-slate-300">
                    Quer agendar uma demonstração gratuita para ver como tudo funciona?
                  </span>
                </div>

                {/* Quick reply */}
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-4 py-2
                   shadow-sm border border-emerald-200 max-w-[170px]
                   dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/40"
                >
                  ✅ Sim, quero ✅
                </button>
              </div>

              {/* Texto (direita) */}
              <div className="text-sm text-slate-700 dark:text-slate-200 max-w-xl">
                <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">
                  Veja o assistente em ação
                </h3>
                <p className="mb-3">
                  O chat aparece no canto inferior direito. Clique no ícone azul e converse como se fosse um cliente real.
                </p>
                <ul className="space-y-1 list-disc ml-4">
                  <li>Propostas automáticas de horários</li>
                  <li>Conversa natural em português</li>
                  <li>Experiência igual à dos seus clientes</li>
                </ul>
              </div>
            </div>
          </div>
          </div>

          {/* -------------------------------------------------- */}
          {/* DIREITA – duração, conteúdo da demo, benefícios   */}
          {/* -------------------------------------------------- */}
          <div className="space-y-6">
            {/* Duração + Horários */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm">
                <p className="text-slate-900 dark:text-slate-50 font-semibold">
                  🕒 Duração
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  30 a 45 minutos via Zoom
                </p>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm">
                <p className="text-slate-900 dark:text-slate-50 font-semibold">
                  📅 Horários
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Segunda–Sexta, 9h às 18h
                </p>
              </div>
            </div>

            {/* Nesta demonstração */}
            <div className="bg-cyan-50 dark:bg-slate-900 border border-cyan-100 dark:border-slate-800 rounded-xl p-6">
              <p className="font-semibold mb-2 text-slate-900 dark:text-slate-50">
                Nesta demonstração, você verá:
              </p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 list-disc ml-5 space-y-1">
                <li>Como o bot responde clientes automaticamente</li>
                <li>Integração com WhatsApp Business e Instagram</li>
                <li>Analytics e dashboard de marcações</li>
                <li>Customização para o seu negócio</li>
              </ul>
            </div>

            {/* Demonstração gratuita */}
            <div className="bg-cyan-50 dark:bg-slate-900 border border-cyan-100 dark:border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2 text-slate-700 dark:text-slate-50 flex items-center gap-2">
                <CheckCheck className="w-5 h-5 text-cyan-500" />
                Demonstração 100% Gratuita
              </h3>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li>✅ Sem compromisso</li>
                <li>✅ Sem cartão de crédito</li>
                <li>✅ Personalizada para o seu negócio</li>
                <li>✅ Suporte em português</li>
              </ul>
            </div>

            {/* Testemunho */}
            <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl">
              <p className="italic text-slate-700 dark:text-slate-200 mb-4">
                “A Krondle automatizou 100% das marcações no meu salão. Hoje o bot
                responde por mim enquanto estou a atender.”
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
                  <p className="font-semibold text-slate-900 dark:text-slate-50">
                    Maria Costa
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Esteticista • GlowStudio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat flutuante (sempre preparado para dark mode) */}
        <ChatWidget ref={chatRef} />
      </div>
      )
}