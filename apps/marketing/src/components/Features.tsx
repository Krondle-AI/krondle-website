// apps/marketing/src/components/Features.tsx
import { Card, CardContent } from "@krondle/common/components/ui/card";
import { Bot, Clock, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA Conversacional",
    description: "Respostas naturais que parecem humanas. Seus clientes nem vão perceber que é automático.",
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Nunca mais perca uma marcação. O Krondle trabalha enquanto você descansa.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Integrados",
    description: "Dashboards com métricas de faturação, clientes recorrentes e períodos de maior procura.",
  },
  {
    icon: Zap,
    title: "Setup em 5 Minutos",
    description: "Configure horários, serviços e colaboradores. Sem complicações técnicas.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 dark:bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Tudo o que precisa para escalar
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Ferramentas profissionais ao alcance de pequenas empresas
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}