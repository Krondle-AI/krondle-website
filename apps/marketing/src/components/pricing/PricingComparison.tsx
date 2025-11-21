"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Card } from "@krondle/common/components/ui/card"

export const PricingComparison = () => {
  const features = [
    {
      category: "Canais de Comunicação",
      items: [
        { name: "WhatsApp", basic: true, pro: true, premium: true },
        { name: "Instagram DMs", basic: false, pro: true, premium: true },
        { name: "Email", basic: false, pro: true, premium: true },
        { name: "Chamadas telefónicas", basic: false, pro: false, premium: true }
      ]
    },
    {
      category: "Gestão e Automação",
      items: [
        { name: "Marcações automáticas", basic: true, pro: true, premium: true },
        { name: "Lembretes automáticos", basic: true, pro: true, premium: true },
        { name: "Confirmações automáticas", basic: true, pro: true, premium: true },
        { name: "Reagendamento automático", basic: false, pro: true, premium: true },
        { name: "Lista de espera", basic: false, pro: false, premium: true }
      ]
    },
    {
      category: "Capacidades",
      items: [
        { name: "Número de trabalhadores", basic: "1", pro: "5", premium: "Ilimitado" },
        { name: "Marcações por mês", basic: "50", pro: "Ilimitadas", premium: "Ilimitadas" },
        { name: "Clientes registados", basic: "100", pro: "1000", premium: "Ilimitados" }
      ]
    },
    {
      category: "Analytics e Relatórios",
      items: [
        { name: "Dashboard básico", basic: true, pro: true, premium: true },
        { name: "Relatórios avançados", basic: false, pro: true, premium: true },
        { name: "Analytics em tempo real", basic: false, pro: false, premium: true },
        { name: "Exportar dados", basic: false, pro: true, premium: true },
        { name: "API acesso", basic: false, pro: false, premium: true }
      ]
    },
    {
      category: "Suporte",
      items: [
        { name: "Suporte por email", basic: true, pro: true, premium: true },
        { name: "Suporte prioritário", basic: false, pro: true, premium: true },
        { name: "Gestor de conta dedicado", basic: false, pro: false, premium: true },
        { name: "Suporte 24/7", basic: false, pro: false, premium: true }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Compare todos os planos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja em detalhe o que está incluído em cada plano
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-2">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Table Header */}
                <thead className="bg-slate-50 border-b-2">
                  <tr>
                    <th className="text-left p-6 font-semibold text-slate-900">
                      Funcionalidades
                    </th>
                    <th className="text-center p-6 font-semibold text-slate-900 w-32">
                      Basic
                    </th>
                    <th className="text-center p-6 font-semibold text-slate-900 w-32 bg-cyan-50">
                      Pro
                    </th>
                    <th className="text-center p-6 font-semibold text-slate-900 w-32">
                      Premium
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {features.map((category, categoryIdx) => (
                    <>
                      {/* Category Header */}
                      <tr key={`category-${categoryIdx}`} className="bg-slate-100">
                        <td colSpan={4} className="p-4 font-semibold text-slate-700 text-sm">
                          {category.category}
                        </td>
                      </tr>

                      {/* Category Items */}
                      {category.items.map((item, itemIdx) => (
                        <tr 
                          key={`item-${categoryIdx}-${itemIdx}`}
                          className="border-b hover:bg-slate-50 transition-colors"
                        >
                          <td className="p-4 text-slate-700">
                            {item.name}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.basic === "boolean" ? (
                              item.basic ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-700 font-medium">{item.basic}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-cyan-50/50">
                            {typeof item.pro === "boolean" ? (
                              item.pro ? (
                                <Check className="w-5 h-5 text-cyan-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-700 font-medium">{item.pro}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof item.premium === "boolean" ? (
                              item.premium ? (
                                <Check className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-slate-300 mx-auto" />
                              )
                            ) : (
                              <span className="text-slate-700 font-medium">{item.premium}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}