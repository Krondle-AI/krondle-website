// apps/marketing/src/components/faq/FAQCTA.tsx

import { Button } from "@krondle/common"
import { ArrowRight, MessageCircle, Mail } from "lucide-react"

export function FAQCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Card principal com gradiente */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">

            {/* Lado esquerdo */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <MessageCircle className="h-4 w-4" />
                <span>Resposta em 2-4 horas</span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight">
                Ainda tem dúvidas?
                <br /> Estamos aqui para ajudar!
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-cyan-50/90">
                Não encontrou a resposta que procurava? A nossa equipa está pronta 
                para esclarecer qualquer questão sobre o Krondle.
              </p>
            </div>

            {/* Lado direito – CTAs */}
            <div className="flex flex-col items-stretch lg:items-end gap-4">
              <div className="flex flex-col gap-3 w-full max-w-xs">
                
                {/* Botão principal – Chat */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/15"
                  onClick={() => window.dispatchEvent(new CustomEvent('openChat'))}
                >
                  <span>Falar com a equipa</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>

                {/* Botão secundário – Email */}
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/15"
                  asChild
                >
                  <a href="mailto:krondleai@gmail.com">
                    <Mail className="h-4 w-4 mr-2" />
                    <span>Enviar email</span>
                  </a>
                </Button>

              </div>
            </div>
          </div>
        </div>

        {/* Navegação cruzada */}
        <div className="mt-8 text-center text-sm sm:text-base">
          <p className="mb-3 text-slate-600 dark:text-slate-300">
            Quer saber mais sobre o Krondle?
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href="/features"
              className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
            >
              Ver funcionalidades →
            </a>

            <a
              href="/pricing"
              className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
            >
              Ver preços →
            </a>

            <a
              href="/como-funciona"
              className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-200 dark:hover:text-cyan-100"
            >
              Como funciona →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}