// apps/marketing/src/components/Features.tsx
import { Card, CardContent } from "@krondle/common/components/ui/card";
import { Bot, Clock, TrendingUp, Zap } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "IA Conversacional",
    description: "Respostas naturais que parecem humanas. Seus clientes nem vão perceber que é automático.",
    borderColor: "dark:border-l-cyan-500"
  },
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Nunca mais perca uma marcação. O Krondle trabalha enquanto você descansa.",
    borderColor: "dark:border-l-blue-500"
  },
  {
    icon: TrendingUp,
    title: "Analytics Integrados",
    description: "Dashboards com métricas de faturação, clientes recorrentes e períodos de maior procura.",
    borderColor: "dark:border-l-indigo-500"
  },
  {
    icon: Zap,
    title: "Setup em 5 Minutos",
    description: "Configure horários, serviços e colaboradores. Sem complicações técnicas.",
    borderColor: "dark:border-l-purple-500"
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
              className={`border-2 border-slate-200 dark:border-slate-700 dark:border-l-4 ${feature.borderColor} bg-white dark:bg-slate-800 hover:shadow-xl hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300`}
            >
              <CardContent className="p-8">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 dark:shadow-cyan-500/20 hover:scale-110 transition-transform duration-300">
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