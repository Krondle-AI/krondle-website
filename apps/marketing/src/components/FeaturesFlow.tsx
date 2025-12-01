// apps/marketing/src/components/FeaturesFlow.tsx
"use client";

import { Zap, MessageCircle, BarChart3 } from "lucide-react";

export function FeaturesFlow() {
  return (
    <section className="bg-white dark:bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full bg-cyan-50 dark:bg-cyan-900/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-700 dark:text-cyan-300">
            Pensado para o dia a dia das PMEs
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Tudo o que precisa, sem complicações
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Em três passos simples: do primeiro contacto até aos resultados em dashboard.
          </p>
        </div>

        {/* Card único com os 3 passos/pilares */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 shadow-sm px-6 py-8 sm:px-10 sm:py-10">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Passo / Pilar 1 */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>Passo 1 · Fala onde os clientes estão</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Cliente envia mensagem
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                WhatsApp, Instagram ou Email – o assistente responde automaticamente em português.
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                  WhatsApp · Instagram DMs
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                  Tom do seu negócio
                </span>
              </div>
            </div>

            {/* Passo / Pilar 2 */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                  <Zap className="h-5 w-5" />
                </span>
                <span>Passo 2 · Marcações em piloto automático</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                IA propõe horário e confirma
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                Verifica disponibilidade em tempo real, sugere opções e confirma a marcação.
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                  Marcações 24/7
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                  Lembretes automáticos
                </span>
              </div>
            </div>

            {/* Passo / Pilar 3 */}
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                  <BarChart3 className="h-5 w-5" />
                </span>
                <span>Passo 3 · Decisões guiadas por dados</span>
              </div>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Vê resultados em dashboard
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                Acompanha marcações, serviços mais rentáveis e clientes fiéis num só ecrã.
              </p>

              <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                  Serviços mais rentáveis
                </span>
                <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                  Clientes recorrentes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}