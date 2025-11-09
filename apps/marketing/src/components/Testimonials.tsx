// apps/marketing/src/components/Testimonials.tsx
import { Card, CardContent } from "@krondle/common/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "Dono de Barbearia",
    business: "Cortes & Estilos, Lisboa",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Joao&backgroundColor=b6e3f4",
    content:
      "Antes perdia 3-4 clientes por semana por não responder a tempo. Com o Krondle, tenho 100% de resposta imediata. Faturei mais 40% no primeiro mês!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Barbeiro",
    business: "Barbearia Vintage, Porto",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos&backgroundColor=c0aede",
    content:
      "Setup super fácil e intuitivo. Em 10 minutos estava tudo configurado. O dashboard com analytics ajudou-me a otimizar os horários de maior procura.",
    rating: 5,
  },
  {
    name: "Miguel Costa",
    role: "Dono de Barbearia",
    business: "Barbearia Moderna, Braga",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel&backgroundColor=ffd5dc",
    content:
      "A melhor decisão que tomei! Agora consigo focar nos cortes enquanto o Krondle gere todas as marcações. Os clientes adoram a rapidez nas respostas.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-white dark:bg-slate-800 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
            O que dizem os nossos clientes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Barbeiros reais, resultados reais
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.name} 
              className="relative border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 animate-pulse" />
              </div>

              <CardContent className="relative p-8 flex flex-col h-full">
                <Quote className="mb-6 h-12 w-12 text-cyan-600/20 group-hover:text-cyan-600/60 transition-colors duration-300" />
                
                <div className="mb-6 flex gap-1 justify-center">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                <p className="mb-8 text-slate-700 dark:text-slate-300 leading-relaxed text-lg flex-grow text-center">
                  "{testimonial.content}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full ring-2 ring-cyan-600/20 group-hover:ring-4 group-hover:ring-cyan-600/60 transition-all duration-300"
                  />
                  <div className="text-center">
                    <div className="font-bold text-slate-900 dark:text-white text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-500">
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