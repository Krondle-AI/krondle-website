// apps/marketing/src/components/CTAFinal.tsx
import { Button } from "@krondle/common/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900 dark:to-slate-900">
      {/* Blobs / decoração */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-20%] w-96 h-96 bg-cyan-400/25 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-20%] w-96 h-96 bg-blue-400/25 dark:bg-blue-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-slate-900/60 px-4 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300 shadow-sm mb-5">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            <span>Pronto para ver o Krondle em ação?</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Automatize as suas marcações{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              sem complicações.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Agende uma demonstração gratuita e veja como o assistente trata das marcações, lembretes e respostas por si — em minutos.
          </p>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              size="lg"
              onClick={() => window.dispatchEvent(new CustomEvent("openChat"))}
              className="group px-10 py-7 text-lg font-semibold rounded-full
                         bg-gradient-to-r from-cyan-600 to-blue-600
                         hover:from-cyan-700 hover:to-blue-700
                         text-white shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50
                         transition-all"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar reunião gratuita
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust bullets */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Setup em menos de 5 minutos
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Demonstração personalizada ao seu negócio
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Suporte em português
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}