import { Button } from "@/components/ui/button";
import { MessageSquare, Calendar, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--secondary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Agendamento Inteligente com IA</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Automatize seu
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> agendamento </span>
              via WhatsApp
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Poupe tempo, reduza a perda de clientes e aumente a eficiência operacional com nossa 
              plataforma de agendamento inteligente powered by IA.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="gap-2">
                <MessageSquare className="w-5 h-5" />
                Começar Agora
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Empresas Ativas</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte IA</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Krondle Platform Interface" 
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
