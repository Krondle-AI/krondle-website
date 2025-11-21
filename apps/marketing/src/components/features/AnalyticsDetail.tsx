"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Users, Calendar, LineChart, Settings } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const AnalyticsDetail = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl" />
            <Card className="relative p-8 bg-white border-2">
              <h4 className="font-semibold text-slate-900 mb-6">Dashboard de Negócio</h4>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-cyan-600" />
                    <span className="text-xs font-medium text-cyan-700">Clientes</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">247</p>
                  <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +12% vs mês anterior
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Receita</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">3.458€</p>
                  <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="w-3 h-3" />
                    +18% vs mês anterior
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-orange-600" />
                    <span className="text-xs font-medium text-orange-700">Marcações</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">89</p>
                  <p className="text-xs text-slate-500 mt-1">Esta semana</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-medium text-purple-700">Taxa</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">94%</p>
                  <p className="text-xs text-slate-500 mt-1">Confirmação</p>
                </div>
              </div>

              {/* Revenue by Service */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Corte de Cabelo</span>
                  <span className="font-semibold text-slate-900">1.245€</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full" style={{width: '75%'}} />
                </div>

                <div className="flex items-center justify-between text-sm mt-4">
                  <span className="text-slate-600">Barba</span>
                  <span className="font-semibold text-slate-900">892€</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" style={{width: '55%'}} />
                </div>

                <div className="flex items-center justify-between text-sm mt-4">
                  <span className="text-slate-600">Tratamento</span>
                  <span className="font-semibold text-slate-900">654€</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full" style={{width: '40%'}} />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
              <BarChart3 className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700">Analytics</span>
            </div>
            
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Decisões baseadas<br />em dados reais
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Acompanhe métricas em tempo real e identifique oportunidades de crescimento 
              com dashboards intuitivos e relatórios automáticos.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Faturação em Tempo Real</h4>
                  <p className="text-slate-600 text-sm">
                    Veja receitas, serviços mais rentáveis e tendências de crescimento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Clientes Recorrentes</h4>
                  <p className="text-slate-600 text-sm">
                    Identifique os clientes mais fiéis e períodos de maior procura.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <LineChart className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Previsões Inteligentes</h4>
                  <p className="text-slate-600 text-sm">
                    Análises automáticas de tendências para apoio à decisão estratégica.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Relatórios Personalizados</h4>
                  <p className="text-slate-600 text-sm">
                    Crie relatórios customizados para as métricas que mais importam.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}