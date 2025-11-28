"use client"

import { motion } from "framer-motion"
import {
  Zap,
  MessageCircle,
  Brain,
  BarChart3,
  Calendar,
  Clock,
  CheckCircle2,
  Bot,
  Instagram,
  Mail,
  TrendingUp,
  LineChart,
  Users
} from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const FeaturesBento = () => {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Tudo o que precisa, num só lugar
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A plataforma completa que trata dos seus agendamentos, fala com os seus clientes e mostra exatamente como fazer o seu negócio crescer.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Automação Total */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group"
          >
            <Card className="p-8 h-full border-2 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-cyan-50 to-white dark:from-cyan-950/50 dark:to-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                Automação Total
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Operação contínua e totalmente automatizada, 24 horas por dia, 7 dias por semana.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Marcações automáticas em tempo real</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Confirmações e lembretes enviados automaticamente</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>Zero tempo gasto em logística</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Card 2: Multi-canal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <Card className="p-8 h-full border-2 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/50 dark:to-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                Multi-Canal
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Todos os canais, todos os clientes — um atendimento sempre disponível.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                  <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-medium text-slate-700 dark:text-slate-200">WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                  <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  <span className="font-medium text-slate-700 dark:text-slate-200">Instagram DMs</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-medium text-slate-700 dark:text-slate-200">Email</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: IA Inteligente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group"
          >
            <Card className="p-8 h-full border-2 hover:border-purple-500 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/50 dark:to-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                IA Conversacional
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Comunicação automática com qualidade humana, graças à nossa IA avançada.
              </p>
              <div className="space-y-3 bg-white dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-600 rounded-lg p-3">
                  <span className="font-medium">"Quero cortar cabelo amanhã à tarde"</span>
                </div>
                <div className="text-sm text-slate-700 dark:text-slate-200 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg p-3">
                  <Bot className="w-4 h-4 inline mr-2 text-cyan-600 dark:text-cyan-400" />
                  <span>"Temos vaga às 15h e às 17h. Qual prefere?"</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 4: Dashboard & Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <Card className="p-8 h-full border-2 hover:border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/50 dark:to-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                Analytics
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Decida com confiança: métricas em tempo real ao seu alcance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <TrendingUp className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Faturação e receitas em tempo real</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <LineChart className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Serviços mais rentáveis</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Users className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span>Clientes recorrentes identificados</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Card 5: Calendário Inteligente */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="group"
          >
            <Card className="p-8 h-full border-2 hover:border-green-500 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-green-50 to-white dark:from-green-950/50 dark:to-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                Gestão Inteligente
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Calendário sincronizado com disponibilidade em tempo real.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Gestão de múltiplos trabalhadores</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Horários personalizáveis por serviço</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Visualização por dia/semana/mês</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Card 6: 24/7 Disponível */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="group"
          >
            <Card className="p-8 h-full border-2 hover:border-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/50 dark:to-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-3 flex items-center gap-3">
                Sempre Disponível
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Atendimento sem pausas. Resultados sem perdas. O Krondle funciona dia e noite.
              </p>
              <div className="bg-white dark:bg-slate-700 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Status do Sistema</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">Online</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Uptime: 99.9% • Resposta &lt; 15 segundos
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}