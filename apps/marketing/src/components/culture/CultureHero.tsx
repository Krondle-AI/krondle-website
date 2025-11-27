// apps/marketing/src/components/culture/CultureHero.tsx

"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Button } from "@krondle/common/components/ui/button"

export function CultureHero() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      
      {/* Animated shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/30 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 mb-8"
        >
          <Sparkles className="w-4 h-4 text-cyan-600" />
          <span className="text-sm font-medium">Projeto ISCTE</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-6"
        >
          Democratizar{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            automação
          </span>
          <br />
          para PMEs portuguesas
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto"
        >
          Somos 6 estudantes de Informática e Gestão de Empresas no ISCTE com uma missão:
          Tornar a tecnologia de automação acessível a todos os negócios.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            size="lg"
            onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-7"
          >
            Junte-se a Nós
          </Button>
        </motion.div>
      </div>
    </section>
  )
}