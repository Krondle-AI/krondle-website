"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, Sparkles } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const SecuritySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Seguro, confiável e sempre atualizado
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Construído com as melhores práticas de segurança e infraestrutura cloud de alta disponibilidade.
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
            <Card className="p-8 text-center border-2 hover:border-cyan-500 transition-colors h-full">
              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                RGPD Compliant
              </h3>
              <p className="text-slate-600">
                Totalmente conforme com regulamentos de proteção de dados europeus.
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
            <Card className="p-8 text-center border-2 hover:border-green-500 transition-colors h-full">
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                99.9% Uptime
              </h3>
              <p className="text-slate-600">
                Infraestrutura cloud redundante garante disponibilidade contínua.
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
            <Card className="p-8 text-center border-2 hover:border-blue-500 transition-colors h-full">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Sempre Atualizado
              </h3>
              <p className="text-slate-600">
                Melhorias contínuas e novas funcionalidades adicionadas regularmente.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}