// apps/marketing/src/components/SocialProof.tsx
import { Users, Calendar, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "6",
    label: "estudantes de IGE",
    helper: "Projeto académico ISCTE 2025",
  },
  {
    icon: Calendar,
    value: "Q2 2026",
    label: "lançamento beta",
    helper: "Primeiras PMEs a testar o Krondle",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "assistente sempre ligado",
    helper: "Marcações automáticas mesmo fora de horário",
  },
];

export function SocialProof() {
  return (
    <section className="border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-14">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Badge / título pequeno */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
          Construído no ISCTE para PMEs portuguesas
        </p>

        {/* Linha de métricas */}
        <div className="grid gap-8 sm:grid-cols-3">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center sm:items-start gap-4 sm:justify-start justify-center text-center sm:text-left"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-100 dark:border-cyan-800">
                  <Icon className="h-6 w-6 text-cyan-600 dark:text-cyan-300" />
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {item.helper}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}