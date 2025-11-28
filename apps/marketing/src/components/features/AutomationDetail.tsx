"use client"

import { motion } from "framer-motion"
import { Zap, MessageCircle, Bot, CheckCircle2, Bell } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const AutomationDetail = () => {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 mb-6">
              <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Automação</span>
            </div>

            <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Enquanto você descansa, <br />o seu negócio continua a crescer
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              O Krondle automatiza totalmente a gestão de agendamentos, eliminando os processos manuais.
              Após configurado, o sistema opera de forma autónoma e contínua.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Receção Automática</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Todas as mensagens dos clientes são automaticamente processadas pela IA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Resposta Inteligente</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    A IA compreende o pedido e propõe horários disponíveis instantaneamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Confirmação Automática</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Após confirmação do cliente, a marcação é registada no sistema.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                  <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-1">Lembretes Automáticos</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Envia lembretes antes da marcação para reduzir faltas.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <Card className="relative p-8 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                {/* User message */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-sm text-slate-700 dark:text-slate-200">
                        Olá! Queria marcar corte de cabelo para terça às 15h
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-2">14:23</p>
                  </div>
                </div>

                {/* Bot response 1 */}
                <div className="flex gap-3 justify-end">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl rounded-tr-sm p-4 ml-12">
                      <p className="text-sm text-white">
                        Olá! 😊 Tenho disponibilidade às 15h30. Confirmo a marcação?
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mr-2 text-right">14:23</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* User confirmation */}
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-sm text-slate-700 dark:text-slate-200">
                        Perfeito! Confirmo 👍
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-2">14:24</p>
                  </div>
                </div>

                {/* Bot confirmation */}
                <div className="flex gap-3 justify-end">
                  <div className="flex-1">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl rounded-tr-sm p-4 ml-12">
                      <p className="text-sm text-white">
                        ✅ Marcação confirmada para Terça, 15:30. Enviarei um lembrete 1 hora antes.
                      </p>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mr-2 text-right">14:24</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Processing indicator */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="font-medium">Processado automaticamente</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400">30 segundos</span>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}