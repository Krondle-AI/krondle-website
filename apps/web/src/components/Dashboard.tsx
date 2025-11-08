import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Users, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  const appointments = [
    { time: "09:00", client: "Maria Silva", service: "Consulta", status: "confirmado" },
    { time: "10:30", client: "João Santos", service: "Tratamento", status: "confirmado" },
    { time: "14:00", client: "Ana Costa", service: "Check-up", status: "pendente" },
    { time: "16:00", client: "Pedro Alves", service: "Consulta", status: "confirmado" },
  ];

  const stats = [
    { label: "Total Agendamentos", value: "156", trend: "+12%", icon: Calendar, color: "primary" },
    { label: "Mensagens Hoje", value: "43", trend: "+8%", icon: MessageSquare, color: "secondary" },
    { label: "Novos Clientes", value: "28", trend: "+15%", icon: Users, color: "accent" },
    { label: "Taxa Conversão", value: "87%", trend: "+5%", icon: TrendingUp, color: "primary" },
  ];

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Dashboard
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Completo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gerencie todos os seus agendamentos e acompanhe métricas em tempo real.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                  {stat.trend}
                </span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-6 bg-gradient-card border-border/50">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Agendamentos de Hoje</h3>
                  <p className="text-sm text-muted-foreground">Terça-feira, 20 Out 2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Ver Todos</Button>
            </div>

            <div className="space-y-4">
              {appointments.map((apt, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold">{apt.client}</div>
                      <div className="text-sm text-muted-foreground">{apt.service}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-medium">{apt.time}</div>
                      <div className={`text-xs ${apt.status === 'confirmado' ? 'text-primary' : 'text-muted-foreground'}`}>
                        {apt.status}
                      </div>
                    </div>
                    {apt.status === 'confirmado' && (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Mensagens Recentes</h3>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { name: "Sofia Martins", msg: "Gostaria de marcar para amanhã", time: "há 5 min", unread: true },
                { name: "Rui Costa", msg: "Obrigado pela confirmação!", time: "há 15 min", unread: false },
                { name: "Luísa Ferreira", msg: "Posso remarcar?", time: "há 1h", unread: true },
                { name: "Carlos Lima", msg: "Está tudo confirmado?", time: "há 2h", unread: false },
              ].map((msg, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg border ${msg.unread ? 'bg-primary/5 border-primary/20' : 'border-border'} hover:bg-muted/50 transition-colors cursor-pointer`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-semibold text-sm">{msg.name}</div>
                    <div className="text-xs text-muted-foreground">{msg.time}</div>
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-1">{msg.msg}</div>
                  {msg.unread && (
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  )}
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4">
              Ver Todas as Mensagens
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
