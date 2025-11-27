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
}

export function FAQCategory({ 
  icon: Icon, 
  title, 
  description, 
  items, 
  delay = 0 
}: FAQCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="mb-12"
    >
      {/* Category Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {/* Questions */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
        {items.map((item, index) => (
          <FAQAccordion
            key={index}
            question={item.question}
            answer={item.answer}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </motion.div>
  )
}