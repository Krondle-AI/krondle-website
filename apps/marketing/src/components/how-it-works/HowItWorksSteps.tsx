// apps/marketing/src/components/HowItWorksSteps.tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Settings, MessageCircle, Brain, Calendar, Bell, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"
import { useState } from "react"

export const HowItWorksSteps = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: 1,
      title: "Configure o Krondle",
      description: "Conecte o seu WhatsApp Business (requer número profissional), adicione serviços e horários e deixe o Krondle automatizar tudo por si.",
      icon: Settings,
      color: "from-cyan-500 to-blue-600",
      details: [
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
      isChat: true,
      messages: [
        { from: "client", text: "Quero cortar cabelo terça à tarde", time: "14:30" }
      ]
    },
    {
      number: 3,
      title: "IA interpreta o pedido",
      description: "A Inteligência Artificial compreende a mensagem e analisa a disponibilidade em tempo real.",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      details: [
        "Identifica serviço pretendido",
        "Analisa calendário em tempo real",
        "Encontra os melhores horários"
      ]
    },
    {
      number: 4,
      title: "Propõe horários disponíveis",
      description: "O Krondle responde automaticamente com 2-3 opções de horários livres.",
      icon: Calendar,
      color: "from-orange-500 to-red-600",
      isChat: true,
      messages: [
        { from: "bot", text: "Temos vaga às 15h ou 17h, qual prefere?", time: "14:30" }
      ]
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
        "Notificação ao trabalhador"
      ]
    }
  ]

  const currentStep = steps[activeStep]

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
  }

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Roda Horizontal - Icons Selector */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex justify-center items-center gap-3 md:gap-6 mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = idx === activeStep
              const isPast = idx < activeStep
              
              return (
                <div key={idx} className="flex items-center">
                  {/* Step Button - TAMANHO FIXO */}
                  <motion.button
                    onClick={() => setActiveStep(idx)}
                    className={`
                      relative flex flex-col items-center justify-center gap-2
                      w-28 h-28 rounded-2xl
                      transition-all duration-300 group
                      ${isActive 
                        ? 'bg-gradient-to-br ' + step.color + ' shadow-xl scale-110' 
                        : isPast
                        ? 'bg-slate-200 dark:bg-slate-700 hover:scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 hover:scale-105'
                      }
                    `}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Icon - TAMANHO FIXO */}
                    <Icon className="w-10 h-10 text-white" />
                    
                    {/* Number Badge - TAMANHO FIXO */}
                    <div className={`
                      absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center
                      text-xs font-bold border-2
                      ${isActive
                        ? 'bg-white text-slate-900 border-white shadow-lg'
                        : isPast
                        ? 'bg-cyan-500 text-white border-cyan-500'
                        : 'bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-700'
                      }
                    `}>
                      {step.number}
                    </div>

                    {/* Label - SEMPRE VISÍVEL */}
                    <span className={`
                      text-xs font-medium
                      ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'}
                    `}>
                      {step.title.split(' ')[0]}
                    </span>
                  </motion.button>

                  {/* Connecting Line */}
                  {idx < steps.length - 1 && (
                    <div className="w-6 md:w-12 h-1 mx-1 md:mx-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        initial={{ width: "0%" }}
                        animate={{ width: idx < activeStep ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl hover:scale-110 transition-all"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Card Container - ANIMATED */}
        <div className="relative min-h-[400px] mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="absolute inset-0"
            >
              <Card className="p-8 md:p-10 border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 shadow-lg bg-white dark:bg-slate-800">
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  {/* Large Icon */}
                  <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${currentStep.color} flex items-center justify-center shadow-lg`}>
                    <currentStep.icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-3">
                      Passo {currentStep.number} de {steps.length}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                      {currentStep.title}
                    </h3>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                      {currentStep.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8">
                  {/* WhatsApp Messages - BACKGROUND MELHORADO */}
                  {currentStep.isChat && currentStep.messages && (
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-2xl p-6 mb-6 border border-emerald-200/20 dark:border-emerald-500/30">
                      {currentStep.messages.map((msg, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'} mb-3`}
                        >
                          <div className={`
                            max-w-md px-5 py-4 rounded-2xl shadow-md
                            ${msg.from === 'client' 
                              ? 'bg-cyan-500 text-white rounded-br-none' 
                              : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-bl-none'
                            }
                          `}>
                            <div className="flex items-start gap-3">
                              <span className="text-3xl">{msg.from === 'client' ? '👤' : '🤖'}</span>
                              <div>
                                <p className="leading-relaxed">{msg.text}</p>
                                <span className={`text-xs mt-2 block ${msg.from === 'client' ? 'text-cyan-100' : 'text-slate-500 dark:text-slate-400'}`}>
                                  {msg.time}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Details List */}
                  {currentStep.details && (
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {currentStep.details.map((detail, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-start gap-4 p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${currentStep.color} mt-2 flex-shrink-0`} />
                          <span className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}