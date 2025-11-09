import { Card } from "@krondle/common/components/ui/card";
import { MessageCircle, Brain, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Cliente Envia Mensagem",
    description: "O cliente contacta via WhatsApp para marcar um serviço.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "IA Processa Pedido",
    description: "Nossa IA interpreta a mensagem e extrai informações relevantes.",
    color: "secondary",
  },
  {
    icon: Calendar,
    title: "Sistema Verifica Disponibilidade",
    description: "O motor consulta calendário e regras de negócio para sugerir horários.",
    color: "accent",
  },
  {
    icon: CheckCircle,
    title: "Confirmação Automática",
    description: "Cliente recebe confirmação e a marcação fica registada no sistema.",
    color: "primary",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Como
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e automatizado em 4 passos para transformar mensagens em marcações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
          
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                {index + 1}
              </div>
              
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-hero rounded-2xl border border-border/50">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">-70%</div>
              <div className="text-muted-foreground">Tempo em Agendamentos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">+85%</div>
              <div className="text-muted-foreground">Taxa de Conversão</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Automatizado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
