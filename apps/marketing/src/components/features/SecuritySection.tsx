"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, Sparkles } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const SecuritySection = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Sempre seguro, sempre fiável, sempre atualizado
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Desenvolvido com padrões de segurança avançados e infraestrutura cloud altamente disponível.
          </p>
        </motion.div>

        {/* Security Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* RGPD Compliant */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-8 text-center border-2 border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors h-full bg-white dark:bg-slate-800">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                RGPD Compliant
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Totalmente compatível com as diretrizes RGPD e outras normas europeias de privacidade.
              </p>
            </Card>
          </motion.div>

          {/* 99.9% Uptime */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 text-center border-2 border-slate-200 dark:border-slate-700 hover:border-green-500 dark:hover:border-green-500 transition-colors h-full bg-white dark:bg-slate-800">
              <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                99.9% Uptime
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Disponibilidade contínua assegurada por uma infraestrutura cloud robusta e redundante.
              </p>
            </Card>
          </motion.div>

          {/* Sempre Atualizado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-8 text-center border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors h-full bg-white dark:bg-slate-800">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                Atualizações contínuas
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                O Krondle evolui continuamente com atualizações e novidades constantes.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}