// apps/marketing/src/components/faq/FAQHero.tsx

"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

export function FAQHero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge - "Simples e automático" */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 mb-6"
        >
          <HelpCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
            Simples e automático
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-50 mb-6"
        >
          Perguntas{" "}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            Frequentes
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
        >
          Encontre respostas rápidas para as suas dúvidas sobre o Krondle. 
          Não encontrou o que procura? Contacte-nos no final da página!
        </motion.p>
      </div>
    </section>
  )
}