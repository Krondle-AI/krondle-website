"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@krondle/common/components/ui/button"
import { Card } from "@krondle/common/components/ui/card"
import { Link } from "react-router-dom"

interface PricingCardsProps {
  billingCycle: "monthly" | "yearly"
}

export const PricingCards = ({ billingCycle }: PricingCardsProps) => {
  const plans = [
    {
      name: "Basic",
      description: "Para começar a automatizar",
      monthlyPrice: 39,
      yearlyPrice: 35, // 10% desconto
      features: [
        "1 trabalhador",
        "WhatsApp integrado",
        "Até 50 marcações/mês",
        "Lembretes automáticos",
        "Calendário básico",
        "Suporte por email"
      ],
      cta: "Começar agora",
      popular: false,
      gradient: "from-slate-50 to-white",
      borderColor: "border-slate-200 dark:border-slate-700"
    },
    {
      name: "Pro",
      description: "Mais popular para PMEs",
      monthlyPrice: 59,
      yearlyPrice: 50, // 15% desconto
      features: [
        "Até 5 trabalhadores",
        "WhatsApp + Instagram + Email",
        "Marcações ilimitadas",
        "IA conversacional avançada",
        "Dashboard com analytics",
        "Relatórios personalizados",
        "Gestão de clientes",
        "Suporte prioritário"
      ],
      cta: "Começar agora",
      popular: true,
      gradient: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-500 dark:border-cyan-400"
    },
    {
      name: "Premium",
      description: "Para negócios em crescimento",
      monthlyPrice: 99,
      yearlyPrice: 79, // 20% desconto
      features: [
        "Trabalhadores ilimitados",
        "Todos os canais",
        "Marcações ilimitadas",
        "IA + personalização avançada",
        "Analytics em tempo real",
        "API acesso",
        "White-label (branding próprio)",
        "Gestor de conta dedicado",
        "Suporte 24/7"
      ],
      cta: "Começar agora",
      popular: false,
      gradient: "from-slate-50 to-white",
      borderColor: "border-slate-200 dark:border-slate-700"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}

              <Card
                className={`
                  relative overflow-hidden border-2 ${plan.borderColor}
                  ${plan.popular ? "shadow-2xl scale-105" : "shadow-lg hover:shadow-xl"}
                  transition-all duration-300 h-full
                  bg-gradient-to-br ${plan.gradient}
                  dark:bg-slate-900 dark:bg-none
                `}
              >
                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-slate-900 dark:text-white">
                        {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}€
                      </span>
                      <span className="text-slate-600 dark:text-slate-300">/mês</span>
                    </div>
                    {billingCycle === "yearly" && (
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium mt-2">
                        Poupa {(plan.monthlyPrice - plan.yearlyPrice) * 12}€/ano
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <div className="block mb-8">
                    <Button
                      onClick={() => window.dispatchEvent(new CustomEvent("openChat"))}
                      className={`w-full h-12 text-base font-semibold ${plan.popular
                          ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                          : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900"
                        }`}
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular
                              ? "text-cyan-600 dark:text-cyan-400"
                              : "text-slate-600 dark:text-slate-400"
                            }`}
                        />
                        <span className="text-slate-700 dark:text-slate-200 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 dark:text-slate-400 text-sm mt-12"
        >
          A configuração inicial tem um custo de 50€, exceto para assinantes do plano Premium.
        </motion.p>
      </div>
    </section>
  )
}