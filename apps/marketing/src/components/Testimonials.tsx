"use client"

import { Card, CardContent } from "@krondle/common/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    stat: "+40%",
    label: "mais faturação no 1.º mês",
    shortQuote: "Deixei de perder clientes por falta de resposta.",
    fullQuote:
      "Antes perdia 3–4 clientes por semana por não responder a tempo. Com o Krondle, tenho 100% de resposta imediata e faturei mais 40% no primeiro mês.",
    name: "João Silva",
    role: "Dono de Barbearia",
    business: "Cortes & Estilos, Lisboa",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao&backgroundColor=b6e3f4",
  },
  {
    stat: "10 min",
    label: "para configurar tudo",
    shortQuote:
      "Em poucos minutos o assistente já estava a marcar clientes sozinho.",
    name: "Carlos Mendes",
    role: "Barbeiro",
    business: "Barbearia Vintage, Porto",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&backgroundColor=c0aede",
  },
  {
    stat: "24/7",
    label: "respostas automáticas",
    shortQuote:
      "Foco-me nos cortes, o Krondle trata das marcações e respostas.",
    name: "Miguel Costa",
    role: "Dono de Barbearia",
    business: "Barbearia Moderna, Braga",
    image:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel&backgroundColor=ffd5dc",
  },
]

export function Testimonials() {
  const [featured, ...others] = testimonials

  return (
    <section className="px-6 py-24 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Resultados reais, todos os meses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pequenos negócios portugueses a crescer com o Krondle.
          </p>
        </div>

        {/* FEATURED CARD */}
        <Card className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl rounded-3xl">
          <CardContent className="p-10 md:p-12 space-y-8">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
              História em destaque
            </div>

            {/* STAT */}
            <div className="flex flex-wrap items-end gap-3">
              <span className="text-5xl font-bold text-slate-900 dark:text-white">
                {featured.stat}
              </span>
              <span className="text-lg text-slate-600 dark:text-slate-400">
                {featured.label}
              </span>
            </div>

            {/* QUOTE */}
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-cyan-700 dark:text-cyan-300 font-medium">
                <Quote className="h-5 w-5 opacity-70" />
                {featured.shortQuote}
              </div>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {featured.fullQuote}
              </p>
            </div>

            {/* PERSON */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <img
                src={featured.image}
                className="h-14 w-14 rounded-full border border-slate-300 dark:border-slate-600"
              />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">{featured.name}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {featured.role} • {featured.business}
                </div>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* OTHER 2 CARDS */}
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((t) => (
            <Card
              key={t.name}
              className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 rounded-3xl shadow-md hover:shadow-lg transition-all"
            >
              <CardContent className="p-8 space-y-6">

                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
                    Resultado
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                      {t.stat}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {t.label}
                    </span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  “{t.shortQuote}”
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    className="h-12 w-12 rounded-full border border-slate-300 dark:border-slate-600"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {t.role} • {t.business}
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}