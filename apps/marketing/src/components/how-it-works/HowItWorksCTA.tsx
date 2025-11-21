"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@krondle/common/components/ui/button"
import { Card } from "@krondle/common/components/ui/card"
import { Link } from "react-router-dom"

export const HowItWorksCTA = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-2 shadow-xl">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600" />
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl" />
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Pronto para automatizar?
              </h2>
              <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto">
                Configure em 5 minutos e deixe a IA trabalhar por si.
              </p>
              
              {/* CTA Button */}
              <Link to="/agendar-demo">
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-slate-50 text-slate-900 px-10 h-14 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Começar teste gratuito
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              {/* Features list */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-cyan-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>14 dias grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Sem cartão necessário</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Cancele quando quiser</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center space-y-3"
        >
          <p className="text-slate-600">
            Ainda tem dúvidas sobre como funciona?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/features" className="text-cyan-600 hover:text-cyan-700 font-semibold">
              Ver todas as funcionalidades →
            </Link>
            <Link to="/pricing" className="text-cyan-600 hover:text-cyan-700 font-semibold">
              Ver preços →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}