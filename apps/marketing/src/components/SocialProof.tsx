// apps/marketing/src/components/SocialProof.tsx
import { Users, Calendar, Star } from "lucide-react";

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-12 text-center text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Projeto Académico ISCTE - Grupo 4
        </p>
        
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white">Em Beta</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Lançamento Q1 2025</div>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white">50%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Desconto Primeiros Clientes</div>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-slate-900 dark:text-white">100%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Automático & Inteligente</div>
          </div>
        </div>
      </div>
    </section>
  );
}