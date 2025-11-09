import { Card, CardContent } from "@krondle/common/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Dono de Barbearia",
    business: "Cortes & Estilos, Lisboa",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao",
    content:
      "Antes perdia 3-4 clientes por semana por não responder a tempo. Com o Krondle, tenho 100% de resposta imediata. Faturei mais 40% no primeiro mês!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Esteticista",
    business: "Beauty Center, Porto",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    content:
      "A melhor decisão que tomei! Agora consigo focar nos tratamentos enquanto o Krondle gere todas as marcações. Os clientes adoram a rapidez.",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Veterinário",
    business: "Clínica Animal, Braga",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
    content:
      "Setup super fácil e intuitivo. Em 10 minutos estava tudo configurado. O dashboard com analytics ajudou-me a otimizar os horários de maior procura.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            O que dizem os nossos clientes
          </h2>
          <p className="text-xl text-slate-600">
            PMEs reais, resultados reais
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-none shadow-lg">
              <CardContent className="p-8">
                <Quote className="mb-4 h-10 w-10 text-cyan-600/20" />
                
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="mb-6 text-slate-700 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}