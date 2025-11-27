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
  accentColor?: string
}

export function FAQAccordion({ 
  question, 
  answer, 
  defaultOpen = false,
  accentColor = "cyan"
}: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group rounded-2xl"
      >
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 pr-8 group-hover:text-${accentColor}-600 dark:group-hover:text-${accentColor}-400 transition-colors">
          {question}
        </h3>
        <ChevronDown
          className={cn(
            `w-5 h-5 flex-shrink-0 text-${accentColor}-600 dark:text-${accentColor}-400 transition-transform duration-300`,
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
            <div className="px-6 pb-6">
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