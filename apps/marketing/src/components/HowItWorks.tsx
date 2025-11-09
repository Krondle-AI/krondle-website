import { MessageSquare, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Cliente Envia Mensagem",
    description: "\"Quero cortar o cabelo amanhã às 15h\"",
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
    <section className="bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Como funciona?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Simples, rápido e automático
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-slate-200 md:block" />
              )}

              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-white shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}