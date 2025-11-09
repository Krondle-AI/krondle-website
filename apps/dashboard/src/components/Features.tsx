import { Card } from "@krondle/common/components/ui/card";
import { MessageSquare, Calendar, Brain, BarChart3, Clock, Shield } from "lucide-react";
import aiFeature from "@/assets/ai-feature.jpg";
import whatsappIntegration from "@/assets/whatsapp-integration.jpg";

const features = [
  {
    icon: MessageSquare,
    title: "Integração WhatsApp",
    description: "Conecte diretamente com WhatsApp Business API para comunicação automática com clientes.",
  },
  {
    icon: Brain,
    title: "IA Inteligente",
    description: "Interpretação avançada de mensagens usando OpenAI para entender pedidos de agendamento.",
  },
  {
    icon: Calendar,
    title: "Calendário Inteligente",
    description: "Motor de disponibilidade com regras de negócio personalizáveis para cada empresa.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24/7",
    description: "Aceite marcações a qualquer hora, mesmo fora do horário comercial.",
  },
  {
    icon: BarChart3,
    title: "Analytics Completo",
    description: "Acompanhe métricas, taxa de conversão e performance do seu negócio.",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Dados encriptados e armazenados com segurança em cloud.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tudo o que precisa para
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> automatizar </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa com todas as ferramentas necessárias para gerir o seu negócio de forma eficiente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-card border-border/50 overflow-hidden relative group">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Powered by OpenAI</h3>
              <p className="text-muted-foreground mb-6">
                Utilizamos a mais avançada tecnologia de IA para interpretar mensagens naturais e processar pedidos 
                de agendamento com precisão.
              </p>
              <img 
                src={aiFeature} 
                alt="AI Feature" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border/50 overflow-hidden relative group">
            <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">WhatsApp Business API</h3>
              <p className="text-muted-foreground mb-6">
                Integração oficial com Meta Developer para garantir comunicação segura e confiável com seus clientes.
              </p>
              <img 
                src={whatsappIntegration} 
                alt="WhatsApp Integration" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
