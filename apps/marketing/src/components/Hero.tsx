import { Button } from "@krondle/common/components/ui/button";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-6 pt-16 pb-24 lg:px-8 lg:pt-24 lg:pb-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 transform opacity-20">
          <div className="h-72 w-72 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 transform opacity-20">
          <div className="h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 blur-3xl" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column - Copy */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-4 w-4" />
              IA + Automação + WhatsApp
            </div>

            {/* Main headline */}
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Nunca mais perca{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                uma marcação
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mb-8 text-xl leading-relaxed text-slate-600 lg:text-2xl">
              O Krondle responde clientes, agenda marcações e gere o seu negócio{" "}
              <span className="font-semibold text-slate-900">automaticamente via WhatsApp</span>.
              Disponível 24/7, sem intervenção humana.
            </p>

            {/* Benefits list */}
            <ul className="mb-10 space-y-3">
              {[
                "Setup em 5 minutos, sem conhecimentos técnicos",
                "IA que conversa como humano em português",
                "Integração com WhatsApp, Instagram e Gmail",
                "Dashboard com analytics em tempo real",
              ].map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-lg text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-6 text-lg font-semibold shadow-xl shadow-cyan-500/25 transition-all hover:shadow-2xl hover:shadow-cyan-500/30"
              >
                Começar Grátis por 14 Dias
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group gap-2 border-2 px-8 py-6 text-lg font-semibold"
              >
                <Play className="h-5 w-5" />
                Ver Demo (2 min)
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Suporte em português</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            {/* Placeholder for screenshot/demo */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-2xl shadow-slate-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
              
              {/* Mock chat interface */}
              <div className="relative space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700" />
                  <div className="flex-1 rounded-2xl rounded-tl-none bg-slate-700 p-4">
                    <p className="text-sm text-slate-300">
                      Olá! Quero marcar um corte de cabelo para amanhã às 15h
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                  <div className="flex-1 rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-500 to-blue-600 p-4">
                    <p className="text-sm font-medium text-white">
                      Perfeito! Tenho disponível às 15h e às 16h30. Qual prefere?
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700" />
                  <div className="flex-1 rounded-2xl rounded-tl-none bg-slate-700 p-4">
                    <p className="text-sm text-slate-300">15h está ótimo!</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                  <div className="flex-1 rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-500 to-blue-600 p-4">
                    <p className="text-sm font-medium text-white">
                      ✅ Marcação confirmada para amanhã às 15h. Vai receber um lembrete 2h antes!
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                🤖 100% Automático
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}