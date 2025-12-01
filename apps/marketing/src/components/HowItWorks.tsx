// apps/marketing/src/components/HowItWorks.tsx
import { MessageSquare, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Cliente Envia Mensagem",
    description: '"Quero marcar corte de cabelo terça à tarde"',
  },
  {
    icon: Cpu,
    title: "IA Processa Pedido",
    description: "Analisa disponibilidade e propõe horários",
  },
  {
    icon: CheckCircle,
    title: "Marcação Confirmada",
    description: "Calendário atualizado automaticamente",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white dark:bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Simples, rápido e automático
          </p>
        </div>

        {/* Steps container with proper line positioning */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background line - positioned absolutely behind icons */}
          <div className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-500 dark:via-blue-500 dark:to-cyan-500 hidden md:block" style={{ width: 'calc(100% - 80px)', marginLeft: '40px', marginRight: '40px' }} />

          <div className="relative grid gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                <div className="flex flex-col items-center text-center">
                  {/* Icon with proper z-index - mantém gradiente vibrante */}
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-2xl shadow-cyan-500/25 dark:shadow-cyan-500/20 group-hover:shadow-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                    
                    {/* Pulse effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-cyan-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                  </div>

                  {/* Step number badge - mantém cor vibrante */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 z-20">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 max-w-xs leading-relaxed group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}