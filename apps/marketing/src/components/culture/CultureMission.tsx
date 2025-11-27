// apps/marketing/src/components/culture/CultureMission.tsx

"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function CultureMission() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            A Nossa Missão
          </h2>

          {/* Story - Paragraph 1 */}
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            Observámos que pequenas e médias empresas em Portugal perdem clientes todos os dias
            por não conseguirem responder a tempo a pedidos de marcação. Enquanto grandes empresas
            têm equipas e tecnologia para automatizar tudo, as PMEs ficam para trás.
          </p>

          {/* Story - Paragraph 2 */}
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            O Krondle nasceu para mudar isto. Queremos que qualquer negócio, independentemente
            do seu tamanho, tenha acesso às mesmas ferramentas de automação que as grandes
            corporações. Democratizar a tecnologia é a nossa missão.
          </p>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl"
          >
            <Sparkles className="w-8 h-8 flex-shrink-0" />
            <p className="text-lg font-semibold">
              "Tecnologia de ponta acessível a todos os negócios"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}