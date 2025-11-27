// apps/marketing/src/components/culture/CultureCTA.tsx

"use client"

import { Button } from "@krondle/common"
import { ArrowRight, Zap } from "lucide-react"

export function CultureCTA() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* --- CARD PRINCIPAL EM GRADIENTE --- */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
            
            {/* Lado esquerdo */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <Zap className="h-4 w-4" />
                <span>Projeto feito por estudantes portugueses</span>
              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight">
                Vamos transformar o seu negócio juntos?
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-cyan-50/90">
                Faça parte da revolução da automação para PMEs portuguesas.  
                Em poucos minutos tem um assistente a trabalhar por si 24/7.
              </p>
            </div>

            {/* Lado direito – Botão */}
            <div className="flex flex-col items-stretch lg:items-end gap-4">
              <div className="flex flex-col gap-3 w-full max-w-xs">
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 text-white bg-white/10 hover:bg-white/15"
                  onClick={() => window.dispatchEvent(new CustomEvent("openChat"))}
                >
                  <span>Agendar reunião gratuita</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}