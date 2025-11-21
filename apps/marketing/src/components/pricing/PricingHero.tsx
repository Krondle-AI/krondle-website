"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useState } from "react"

interface PricingHeroProps {
  billingCycle: "monthly" | "yearly"
  setBillingCycle: (cycle: "monthly" | "yearly") => void
}

export const PricingHero = ({ billingCycle, setBillingCycle }: PricingHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 mb-6">
            <Check className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">
              Clareza total. Simplicidade real.
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Escolha o plano ideal{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              para si
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            A transparência que o seu negócio merece: automação acessível e sem surpresas.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-slate-100 rounded-full">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${billingCycle === "monthly"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all relative ${billingCycle === "yearly"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                até -20%
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}