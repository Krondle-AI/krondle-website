// apps/marketing/src/components/culture/CultureMission.tsx

"use client"

import { motion } from "framer-motion"
import { AlertCircle, Lightbulb, Rocket, TrendingUp } from "lucide-react"

interface CultureMissionProps {
  variant?: "gradient" | "default";
}

export function CultureMission({ variant = "default" }: CultureMissionProps) {
  const timeline = [
    {
      icon: AlertCircle,
      year: "Q3 - 2025",
      label: "O Problema",
      title: "PMEs ficam para trás",
      description: "Observámos que pequenas e médias empresas perdem clientes todos os dias por não responderem a tempo. Enquanto grandes empresas têm equipas e tecnologia, as PMEs ficam para trás.",
      color: "from-red-500 to-orange-600",
      stats: [
        { value: "93%", label: "PMEs perdem clientes" },
        { value: "32h/mês", label: "Em tarefas manuais" }
      ]
    },
    {
      icon: Lightbulb,
      year: "Q1 - 2026",
      label: "A Nossa Solução",
      title: "Democratizar tecnologia",
      description: "O Krondle nasceu para mudar isto. Queremos que qualquer negócio, independentemente do tamanho, tenha acesso às mesmas ferramentas de automação que as grandes corporações.",
      color: "from-blue-500 to-indigo-600",
      stats: [
        { value: "24/7", label: "Assistente automático" },
        { value: "AI integrada", label: "Automatização inteligente" }
      ]
    },
    {
      icon: Rocket,
      year: "2026+",
      label: "O Nosso Objetivo",
      title: "Revolucionar PMEs portuguesas",
      description: "Tornar-nos a plataforma #1 de automação para PMEs em Portugal. Cada negócio com um assistente IA que nunca dorme, nunca erra, e está sempre disponível.",
      color: "from-green-500 to-emerald-600",
      stats: [
        { value: "+100h/ano", label: "Tempo devolvido a cada PME" },
        { value: "Portugal #1", label: "Plataforma líder em automação" }
      ]
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 mb-4">
            <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-900 dark:text-cyan-100">A Nossa Jornada</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            A Nossa Missão
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Da observação do problema à solução que está a mudar PMEs em Portugal
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < timeline.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700 -z-10" />
              )}

              {/* Card */}
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-all hover:shadow-xl">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                {/* Year Badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 mb-3">
                  {item.year}
                </div>

                {/* Label */}
                <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  {item.label}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}