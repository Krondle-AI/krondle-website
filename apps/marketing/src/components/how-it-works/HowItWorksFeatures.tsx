"use client"

import { motion } from "framer-motion"
import { Zap, Clock, TrendingUp, Shield, Smartphone, BarChart3 } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const HowItWorksFeatures = () => {
  const features = [
    {
      icon: Zap,
      title: "100% Automático",
      description: "Zero intervenção manual necessária",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Disponível",
      description: "Funciona mesmo quando está fechado",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Aumenta Receitas",
      description: "Nunca mais perca clientes por demora",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Seguro e Confiável",
      description: "Dados protegidos e RGPD compliant",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Smartphone,
      title: "Multi-Canal",
      description: "WhatsApp, Instagram e Email",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: BarChart3,
      title: "Analytics Incluído",
      description: "Métricas e relatórios automáticos",
      color: "from-pink-500 to-rose-600"
    }
  ]

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
            Porque escolher o Krondle?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Mais do que agendamentos. Uma solução completa para gerir o seu negócio.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 border-2 hover:border-cyan-500 hover:shadow-xl transition-all duration-300 h-full group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}