"use client"

import { motion } from "framer-motion"
import { Settings, MessageCircle, Brain, Calendar, Bell } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const HowItWorksSteps = () => {
  const steps = [
    {
      number: 1,
      title: "Configure em 5 minutos",
      description: "Conecte o seu WhatsApp Business, defina horários e serviços. É rápido e intuitivo.",
      icon: Settings,
      color: "from-cyan-500 to-blue-600",
      details: [
        "Criar conta gratuita",
        "Conectar WhatsApp/Instagram",
        "Adicionar serviços e preços",
        "Definir horários de trabalho"
      ]
    },
    {
      number: 2,
      title: "Cliente envia mensagem",
      description: "O seu cliente escreve naturalmente pelo WhatsApp, Instagram ou Email.",
      icon: MessageCircle,
      color: "from-blue-500 to-indigo-600",
      details: [
        '"Quero cortar cabelo terça à tarde"',
        '"Preciso marcar limpeza de pele"',
        '"Disponibilidade para amanhã?"'
      ],
      example: true
    },
    {
      number: 3,
      title: "IA interpreta o pedido",
      description: "A Inteligência Artificial compreende a mensagem e analisa a disponibilidade em tempo real.",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      details: [
        "Compreende linguagem natural",
        "Identifica serviço pretendido",
        "Analisa calendário em tempo real",
        "Encontra melhores horários"
      ]
    },
    {
      number: 4,
      title: "Propõe horários disponíveis",
      description: "O Krondle responde automaticamente com 2-3 opções de horários livres.",
      icon: Calendar,
      color: "from-orange-500 to-red-600",
      details: [
        '"Temos vaga às 15h ou 17h, qual prefere?"',
        'Resposta instantânea (<2 segundos)',
        'Tom natural e profissional'
      ],
      example: true
    },
    {
      number: 5,
      title: "Confirmação automática",
      description: "Cliente escolhe o horário, marcação é registada e lembrete é agendado.",
      icon: Bell,
      color: "from-green-500 to-emerald-600",
      details: [
        "Marcação registada no calendário",
        "Confirmação enviada ao cliente",
        "Lembrete 1 hora antes",
        "Notificação ao trabalhador"
      ]
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-14 top-24 w-0.5 h-full bg-gradient-to-b from-slate-200 to-transparent -z-10" />
              )}

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Step number + icon */}
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-slate-900 shadow-lg border-2 border-slate-100">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="p-6 md:p-8 border-2 hover:border-cyan-500 hover:shadow-xl transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className={`space-y-3 ${step.example ? 'bg-slate-50 rounded-xl p-4' : ''}`}>
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          {step.example ? (
                            <div className="text-slate-700 italic">
                              💬 {detail}
                            </div>
                          ) : (
                            <>
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} mt-2`} />
                              <span className="text-slate-700">{detail}</span>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-full">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-slate-700">
              Tempo total: ~2 segundos por marcação
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}