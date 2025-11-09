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
    <section id="how-it-works" className="bg-white dark:bg-slate-800 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Simples, rápido e automático
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3">
          {/* Connecting lines - hidden on mobile, visible on md+ */}
          <div className="absolute top-1/4 left-0 right-0 hidden md:block" style={{ height: '2px' }}>
            <div className="relative h-full mx-auto" style={{ maxWidth: '85%' }}>
              {/* Line 1 */}
              <div 
                className="absolute left-0 h-full bg-gradient-to-r from-cyan-600 to-blue-600"
                style={{ width: '45%', top: 0 }}
              />
              {/* Line 2 */}
              <div 
                className="absolute right-0 h-full bg-gradient-to-r from-cyan-600 to-blue-600"
                style={{ width: '45%', top: 0 }}
              />
            </div>
          </div>

          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              <div className="flex flex-col items-center text-center">
                {/* Icon with hover animation */}
                <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-2xl shadow-cyan-500/25 group-hover:shadow-cyan-500/50 group-hover:scale-110 transition-all duration-300">
                  <step.icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-cyan-500 opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                </div>

                {/* Step number badge */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
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
    </section>
  );
}