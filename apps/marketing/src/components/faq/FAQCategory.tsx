// apps/marketing/src/components/faq/FAQCategory.tsx

"use client"

import { FAQAccordion } from "./FAQAccordion"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategoryProps {
  icon: LucideIcon
  title: string
  description: string
  items: FAQItem[]
  delay?: number
  gradient: string // Ex: "from-cyan-500 to-blue-600"
  accentColor: "cyan" | "blue" | "purple" | "green" | "orange" // Type-safe
}

export function FAQCategory({ 
  icon: Icon, 
  title, 
  description, 
  items, 
  delay = 0,
  gradient,
  accentColor
}: FAQCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-16"
    >
      {/* Category Header */}
      <div className="relative mb-8">
        {/* Background Card */}
        <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-r ${gradient} p-8 shadow-xl`}>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative flex items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30">
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                {title}
              </h2>
              <p className="text-white/90 text-lg">
                {description}
              </p>
            </div>

            {/* Question count badge */}
            <div className="flex-shrink-0 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-white font-bold">{items.length} perguntas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Questions - COM COR DA CATEGORIA */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <FAQAccordion
            key={index}
            question={item.question}
            answer={item.answer}
            defaultOpen={index === 0}
            accentColor={accentColor}
          />
        ))}
      </div>
    </motion.div>
  )
}