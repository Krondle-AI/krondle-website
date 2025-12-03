// apps/marketing/src/components/faq/FAQFooterCTA-Clean.tsx

"use client"

import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

interface FAQFooterCTAProps {
  openChat: () => void
}

export function FAQCTA({ openChat }: FAQFooterCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 mb-12"
    >
      {/* SEM CARD, SEM BORDER - Inline direto */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Icon + Text */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          </div>
          <span className="text-slate-700 dark:text-slate-300 font-medium">
            Ainda tem questões?
          </span>
        </div>

        {/* Button - Link style */}
        <button
          onClick={openChat}
          className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-semibold group transition-colors whitespace-nowrap"
        >
          Fale com o Krondle
          <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>
      </div>
    </motion.div>
  )
}