"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@krondle/common/components/ui/button"
import { Card } from "@krondle/common/components/ui/card"
import { Link } from "react-router-dom"

export const PricingCTA = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-2 bg-white shadow-lg">
            <div className="p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pronto para automatizar?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                Comece hoje com 14 dias de teste grátis. Sem cartão necessário.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/agendar-demo">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 h-12 text-base"
                  >
                    Começar teste gratuito
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/features">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-slate-300 h-12 px-8 text-base"
                  >
                    Ver funcionalidades
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}