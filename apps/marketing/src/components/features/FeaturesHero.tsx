"use client"

import { motion } from "framer-motion"
import { Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@krondle/common/components/ui/button"
import { Link } from "react-router-dom"

export const FeaturesHero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-white dark:bg-slate-900">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950 border border-cyan-200 dark:border-cyan-800 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              Onde o futuro dos negócios começa
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6">
              Menos trabalho manual{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Mais resultados
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            O Krondle utiliza Inteligência Artificial e automação total para simplificar e otimizar cada agendamento.
          </p>
        </motion.div>
      </div>
    </section>
  )
}