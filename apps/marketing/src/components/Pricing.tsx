// apps/marketing/src/components/Pricing.tsx
import { Button } from "@krondle/common/components/ui/button";
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
    <section id="pricing" className="relative bg-slate-50 dark:bg-slate-900 px-6 py-24 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-4">
            Preços transparentes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 ${
                tier.popular
                  ? "bg-gradient-to-b from-cyan-600 to-blue-700 dark:from-slate-800 dark:to-slate-900 shadow-2xl ring-2 ring-cyan-500"
                  : "bg-white dark:bg-slate-800 shadow-lg ring-1 ring-slate-900/10 dark:ring-white/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <span className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1.5 text-sm font-bold text-white shadow-lg">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    tier.popular ? "text-white" : "text-slate-900 dark:text-white"
                  }`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm ${
                    tier.popular ? "text-cyan-100" : "text-slate-600 dark:text-slate-400"
                  }`}>
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 text-center">
                  <div className="flex items-baseline justify-center">
                    <span className={`text-5xl font-extrabold tracking-tight ${
                      tier.popular ? "text-white" : "text-slate-900 dark:text-white"
                    }`}>
                      {tier.price}
                    </span>
                    <span className={`ml-2 text-lg ${
                      tier.popular ? "text-cyan-100" : "text-slate-600 dark:text-slate-400"
                    }`}>
                      /mês
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-8 space-y-4 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`mt-1 rounded-full p-1 flex-shrink-0 ${
                        tier.popular
                          ? "bg-white/20"
                          : "bg-gradient-to-br from-cyan-500 to-blue-600"
                      }`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className={`text-base ${
                        tier.popular ? "text-white" : "text-slate-700 dark:text-slate-300"
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 text-lg font-semibold ${
                    tier.popular
                      ? "bg-white hover:bg-slate-100 text-cyan-700"
                      : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
                  }`}
                >
                  Começar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            <span>Sem cartão de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            <span>Cancele quando quiser</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-600" />
            <span>Suporte em português</span>
          </div>
        </div>
      </div>
    </section>
  );
}