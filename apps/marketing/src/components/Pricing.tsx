import { Button, Card, CardContent, CardHeader } from "@krondle/common";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "29€",
    description: "Ideal para começar",
    features: [
      "Até 100 marcações/mês",
      "WhatsApp + Instagram",
      "Suporte email",
    ],
  },
  {
    name: "Pro",
    price: "59€",
    description: "Para negócios em crescimento",
    features: [
      "Marcações ilimitadas",
      "WhatsApp + Instagram + Gmail",
      "Analytics avançados",
      "Suporte prioritário",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "99€",
    description: "Máxima performance",
    features: [
      "Tudo do Pro",
      "Multi-localização",
      "API access",
      "Suporte 24/7",
      "Onboarding personalizado",
    ],
  },
];

export function Pricing() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Preços transparentes
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={tier.popular ? "border-cyan-600 border-2 shadow-xl" : "border-slate-200"}
            >
              {tier.popular && (
                <div className="bg-cyan-600 text-center py-2 text-sm font-semibold text-white">
                  Mais Popular
                </div>
              )}
              <CardHeader className="pb-6">
                <h3 className="text-2xl font-bold text-slate-900">{tier.name}</h3>
                <p className="text-sm text-slate-600">{tier.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-600">/mês</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-cyan-600" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={tier.popular ? "default" : "outline"}
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}