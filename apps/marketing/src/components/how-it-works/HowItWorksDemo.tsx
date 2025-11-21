"use client"

import { motion } from "framer-motion"
import { Bot, CheckCircle2 } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const HowItWorksDemo = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Veja em ação
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Um exemplo real de como o Krondle gere uma marcação do início ao fim
          </p>
        </motion.div>

        {/* Demo mockup */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Chat mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 border-2 shadow-xl">
              {/* WhatsApp header */}
              <div className="flex items-center gap-3 pb-4 border-b mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Barbearia Krondle</h4>
                  <div className="flex items-center gap-1.5 text-xs text-green-600">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span>Online</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4">
                {/* Client message */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-2"
                >
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-slate-800">
                        Olá! Queria marcar um corte de cabelo para terça-feira à tarde 💈
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 ml-2 mt-1">14:23</span>
                  </div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2 text-slate-500 text-sm"
                >
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>Krondle está a escrever...</span>
                </motion.div>

                {/* Bot response 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                  className="flex gap-2 justify-end"
                >
                  <div className="flex-1 flex flex-col items-end">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl rounded-tr-sm p-4 max-w-[85%]">
                      <p className="text-white">
                        Olá! 😊 Tenho disponibilidade na terça-feira às <strong>15h</strong> e às <strong>17h</strong>. Qual prefere?
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 mr-2 mt-1">14:23</span>
                  </div>
                </motion.div>

                {/* Client response */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="flex gap-2"
                >
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4">
                      <p className="text-slate-800">
                        Perfeito! Confirmo às 15h 👍
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 ml-2 mt-1">14:24</span>
                  </div>
                </motion.div>

                {/* Bot confirmation */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5 }}
                  className="flex gap-2 justify-end"
                >
                  <div className="flex-1 flex flex-col items-end">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl rounded-tr-sm p-4 max-w-[85%]">
                      <p className="text-white">
                        ✅ <strong>Marcação confirmada!</strong>
                      </p>
                      <div className="mt-3 pt-3 border-t border-white/20 text-cyan-50 text-sm space-y-1">
                        <p>📅 Terça-feira, 15:00</p>
                        <p>✂️ Corte de cabelo</p>
                        <p>🔔 Enviarei um lembrete 1 hora antes</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-500 mr-2 mt-1">14:24</span>
                  </div>
                </motion.div>
              </div>

              {/* Processing time */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8 }}
                className="mt-6 pt-6 border-t"
              >
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium">Processado automaticamente</span>
                  </div>
                  <span className="text-slate-500">2 segundos</span>
                </div>
              </motion.div>
            </Card>
          </motion.div>

          {/* What happened behind the scenes */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                O que aconteceu nos bastidores?
              </h3>
              <p className="text-slate-600 mb-6">
                Enquanto a conversa decorria naturalmente, o Krondle executou automaticamente:
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "Receção",
                  description: "Mensagem recebida via WhatsApp API",
                  time: "0.1s"
                },
                {
                  step: "Interpretação",
                  description: 'IA identificou: serviço="corte", dia="terça", período="tarde"',
                  time: "0.3s"
                },
                {
                  step: "Consulta",
                  description: "Base de dados consultada para disponibilidade",
                  time: "0.2s"
                },
                {
                  step: "Proposta",
                  description: "2 horários livres identificados e propostos",
                  time: "0.1s"
                },
                {
                  step: "Confirmação",
                  description: "Marcação registada + lembretes agendados",
                  time: "0.3s"
                },
                {
                  step: "Notificação",
                  description: "Trabalhador notificado da nova marcação",
                  time: "0.1s"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Card className="p-4 border-2 hover:border-cyan-500 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 text-xs font-bold flex items-center justify-center">
                            {index + 1}
                          </div>
                          <h4 className="font-semibold text-slate-900">{item.step}</h4>
                        </div>
                        <p className="text-sm text-slate-600 ml-8">{item.description}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-500 whitespace-nowrap">
                        {item.time}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900">Tempo total: ~1 segundo</p>
                    <p className="text-sm text-green-700">100% automático, 0% intervenção manual</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}