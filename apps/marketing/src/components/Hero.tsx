// apps/marketing/src/components/Hero.tsx
import { Button } from "@krondle/common/components/ui/button";
import { ArrowRight, Play, Check, MessageSquare, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32 lg:pt-32">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Automação 100% com IA
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl mb-6">
              Nunca mais perca{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  uma marcação
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 300 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 2.5 150 0 299 5.5"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#0891b2" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              O Krondle responde clientes, agenda marcações e gere o seu negócio{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                automaticamente via WhatsApp
              </span>
              . Disponível 24/7, sem intervenção humana.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {[
                "Setup em 5 minutos, sem conhecimentos técnicos",
                "IA que conversa como humano em português",
                "Integração nativa com WhatsApp, Instagram e Gmail",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all px-8 py-6 text-lg"
              >
                Agendar Demo com a Equipa
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 px-8 py-6 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Vídeo (2 min)
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Sem cartão</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-600" />
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          {/* Right - Demo Chat */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 shadow-2xl border border-slate-700/50">
              {/* Phone mockup header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                <div>
                  <div className="font-semibold text-white">Krondle Bot</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Online agora
                  </div>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-slate-700 p-4 max-w-[80%]">
                    <p className="text-sm text-slate-200">
                      Olá! Quero marcar um corte para amanhã às 15h
                    </p>
                    <span className="text-xs text-slate-400 mt-1 block">14:23</span>
                  </div>
                </div>

                {/* Bot message */}
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-600 to-blue-600 p-4 max-w-[80%]">
                    <p className="text-sm font-medium text-white">
                      Perfeito! Tenho disponível às 15h e às 16h30. Qual prefere? 😊
                    </p>
                    <span className="text-xs text-cyan-100 mt-1 block">14:23</span>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="rounded-2xl rounded-tr-none bg-slate-700 p-4 max-w-[80%]">
                    <p className="text-sm text-slate-200">15h está ótimo!</p>
                    <span className="text-xs text-slate-400 mt-1 block">14:24</span>
                  </div>
                </div>

                {/* Bot confirmation */}
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-none bg-gradient-to-br from-cyan-600 to-blue-600 p-4 max-w-[80%]">
                    <p className="text-sm font-medium text-white">
                      ✅ Marcação confirmada para amanhã às 15h!
                      <br />
                      <br />
                      Vai receber um lembrete 2h antes. Até amanhã! 👋
                    </p>
                    <span className="text-xs text-cyan-100 mt-1 block">14:24</span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                🤖 100% Automático
              </div>
            </div>

            {/* Decorative stats */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-xl border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-8 w-8 text-cyan-600" />
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">2.3s</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Tempo de resposta médio</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 rounded-xl bg-white dark:bg-slate-800 p-4 shadow-xl border border-slate-200 dark:border-slate-700 hidden lg:block">
              <div className="flex items-center gap-3">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Sempre disponível</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}