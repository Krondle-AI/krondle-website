import { Card, CardContent } from "@krondle/common";
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
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tudo o que precisa para escalar
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Ferramentas profissionais ao alcance de pequenas empresas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-slate-200">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
                  <feature.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}