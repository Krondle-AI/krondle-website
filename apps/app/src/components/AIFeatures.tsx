import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bot, Zap, Clock, FileText, Calendar, TrendingUp, MessageSquare, Users, ChevronRight } from "lucide-react";
import { useState } from "react";

const AIFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const workflowSteps = [
    { 
      id: 1, 
      label: "Recebimento no WhatsApp", 
      icon: MessageSquare,
      color: "hsl(var(--primary))",
      description: "Cliente envia mensagem"
    },
    { 
      id: 2, 
      label: "Processamento IA", 
      icon: Bot,
      color: "hsl(var(--secondary))",
      description: "IA analisa pedido"
    },
    { 
      id: 3, 
      label: "Agendamento", 
      icon: Calendar,
      color: "hsl(var(--accent))",
      description: "Marcação automática"
    },
  ];

  const aiBots = [
    {
      name: "AgendaBot",
      icon: Calendar,
      avatar: "🤖",
      tasks: "856 marcações criadas",
      metric: "Automação 24/7",
      color: "primary"
    },
    {
      name: "FinanceBot",
      icon: TrendingUp,
      avatar: "💰",
      tasks: "Poupou 2.340€ este mês",
      metric: "ROI +180%",
      color: "secondary"
    },
    {
      name: "InsightsBot",
      icon: Sparkles,
      avatar: "📊",
      tasks: "89 oportunidades detetadas",
      metric: "Precisão 94%",
      color: "accent"
    },
  ];

  const automations = [
    { task: "Mensagens Auto-Respondidas", time: "1.245 min", icon: MessageSquare },
    { task: "Marcações Auto-Criadas", time: "2.156 min", icon: Calendar },
    { task: "Relatórios Auto-Gerados", time: "890 min", icon: FileText },
    { task: "Follow-ups Automáticos", time: "1.560 min", icon: Users },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--primary)/0.1),transparent_50%)]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-4 gap-2 px-4 py-2">
            <Sparkles className="w-4 h-4" />
            Powered by AI
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Inteligência Artificial
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Trabalhando por Si</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automatize completamente o seu negócio com assistentes IA que nunca dormem
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Workflow */}
          <Card 
            className="p-8 bg-gradient-card border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:w-48 group-hover:h-48 transition-all duration-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Da Ideia à Execução</h3>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Do pedido do cliente ao agendamento. Instantâneo.
            </p>

            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    hoveredCard === 1 
                      ? 'border-primary/50 bg-primary/5 translate-x-2' 
                      : 'border-border bg-background/50'
                  }`}
                  style={{ 
                    transitionDelay: hoveredCard === 1 ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <step.icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{step.label}</div>
                      <div className="text-xs text-muted-foreground">{step.description}</div>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 2: AI Workforce */}
          <Card 
            className="p-8 bg-gradient-card border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 group-hover:w-48 group-hover:h-48 transition-all duration-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold">A Sua Equipa IA</h3>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Assistentes digitais sempre ativos.
            </p>

            <div className="space-y-4">
              {aiBots.map((bot, index) => (
                <div 
                  key={bot.name}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    hoveredCard === 2 
                      ? 'border-secondary/50 bg-secondary/5 translate-x-2' 
                      : 'border-border bg-background/50'
                  }`}
                  style={{ 
                    transitionDelay: hoveredCard === 2 ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{bot.avatar}</div>
                    <div className="flex-1">
                      <div className="font-semibold mb-1">{bot.name}</div>
                      <div className="text-sm text-muted-foreground">{bot.tasks}</div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {bot.metric}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card 3: Infinite Automations */}
          <Card 
            className="p-8 bg-gradient-card border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden group"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10 group-hover:w-48 group-hover:h-48 transition-all duration-500" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Automações Infinitas</h3>
            </div>
            
            <p className="text-muted-foreground mb-8">
              Operações mais inteligentes. Powered by AI.
            </p>

            <div className="space-y-3">
              {automations.map((auto, index) => (
                <div 
                  key={auto.task}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    hoveredCard === 3 
                      ? 'border-accent/50 bg-accent/5 translate-x-2' 
                      : 'border-border bg-background/50'
                  }`}
                  style={{ 
                    transitionDelay: hoveredCard === 3 ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                      <auto.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold">{auto.task}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-11">
                    <Clock className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">{auto.time} poupados</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5.851 min</div>
                <div className="text-xs text-muted-foreground">Tempo Total Poupado Este Mês</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Workflow Flow */}
        <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Fluxo de Automação IA</h3>
              <p className="text-sm text-muted-foreground">Automatizando cada passo sem esforço</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="px-6 py-4 bg-primary/10 rounded-lg border border-primary/20 min-w-[200px] text-center hover:scale-105 transition-transform">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="font-semibold">Mensagem Cliente</div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-primary animate-pulse" />
            
            <div className="px-6 py-4 bg-secondary/10 rounded-lg border border-secondary/20 min-w-[200px] text-center hover:scale-105 transition-transform">
              <Bot className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="font-semibold">Processamento IA</div>
            </div>
            
            <ChevronRight className="w-6 h-6 text-secondary animate-pulse" />
            
            <div className="px-6 py-4 bg-accent/10 rounded-lg border border-accent/20 min-w-[200px] text-center hover:scale-105 transition-transform">
              <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="font-semibold">Agendamento</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIFeatures;
