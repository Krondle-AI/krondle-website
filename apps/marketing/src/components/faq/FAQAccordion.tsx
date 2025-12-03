// apps/marketing/src/components/faq/FAQAccordion.tsx

"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@krondle/common/lib/utils"

interface FAQAccordionProps {
  question: string
  answer: string
  defaultOpen?: boolean
  accentColor?: "cyan" | "blue" | "purple" | "green" | "orange"
}

// Mapa de cores estáticas (Tailwind precisa de classes completas)
const colorClasses = {
  cyan: {
    hover: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    icon: "text-cyan-600 dark:text-cyan-400"
  },
  blue: {
    hover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    icon: "text-blue-600 dark:text-blue-400"
  },
  purple: {
    hover: "group-hover:text-purple-600 dark:group-hover:text-purple-400",
    icon: "text-purple-600 dark:text-purple-400"
  },
  green: {
    hover: "group-hover:text-green-600 dark:group-hover:text-green-400",
    icon: "text-green-600 dark:text-green-400"
  },
  orange: {
    hover: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
    icon: "text-orange-600 dark:text-orange-400"
  }
}

export function FAQAccordion({ 
  question, 
  answer, 
  defaultOpen = false,
  accentColor = "cyan"
}: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const colors = colorClasses[accentColor]

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
      >
        <h3 className={cn(
          "text-lg font-semibold text-slate-900 dark:text-slate-50 pr-8 transition-colors",
          colors.hover
        )}>
          {question}
        </h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 flex-shrink-0 transition-transform duration-300",
            colors.icon,
            isOpen && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}