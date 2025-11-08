import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown, Calendar, Euro, Users, BarChart3, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar } from "recharts";

const BusinessDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("outubro");
  const [isProfitable, setIsProfitable] = useState(true);

  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  const revenueData = [
    { month: "Jun", receita: 2100, gastos: 980, lucro: 1120 },
    { month: "Jul", receita: 2125, gastos: 1050, lucro: 1075 },
    { month: "Ago", receita: 2856, gastos: 1180, lucro: 1676 },
    { month: "Set", receita: 2945, gastos: 1120, lucro: 1825 },
    { month: "Out", receita: 3458, gastos: 1245, lucro: 2213 },
  ];

  const cutsData = [
    { day: "Seg", cortes: 32 },
    { day: "Ter", cortes: 41 },
    { day: "Qua", cortes: 38 },
    { day: "Qui", cortes: 45 },
    { day: "Sex", cortes: 52 },
    { day: "Sáb", cortes: 39 },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <div className="container mx-auto px-6 py-12 animate-fade-in">
          <Breadcrumb />
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Dashboard de Negócio</h1>
            <p className="text-muted-foreground">Visão geral da performance financeira</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem key={month} value={month} className="capitalize">
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Badge variant={isProfitable ? "default" : "destructive"} className="px-4 py-2 text-sm">
              {isProfitable ? "✓ Saudável" : "✗ Não Saudável"}
            </Badge>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-1">247</div>
            <div className="text-sm text-muted-foreground">Número de Cortes</div>
            <div className="mt-2 text-xs text-primary">+18% vs mês anterior</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Euro className="w-6 h-6 text-secondary" />
              </div>
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-3xl font-bold mb-1">3.458€</div>
            <div className="text-sm text-muted-foreground">Receita Total</div>
            <div className="mt-2 text-xs text-secondary">+12% vs mês anterior</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold mb-1">14€</div>
            <div className="text-sm text-muted-foreground">Preço Médio por Corte</div>
            <div className="mt-2 text-xs text-accent">Semelhante ao anterior</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <TrendingDown className="w-5 h-5 text-destructive" />
            </div>
            <div className="text-3xl font-bold mb-1">1.245€</div>
            <div className="text-sm text-muted-foreground">Gastos Totais</div>
            <div className="mt-2 text-xs text-destructive">+5% vs mês anterior</div>
          </Card>
        </div>

        {/* Profitability Analysis */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Rentabilidade do Negócio
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                <span className="text-muted-foreground">Receita Total</span>
                <span className="font-bold text-lg text-primary">+ 3.458€</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-background rounded-lg">
                <span className="text-muted-foreground">Gastos Totais</span>
                <span className="font-bold text-lg text-destructive">- 1.245€</span>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded-lg">
                  <span className="font-semibold">Lucro Líquido</span>
                  <span className="font-bold text-2xl text-primary">2.213€</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-primary mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    Cálculo baseado nos últimos 3 meses de atividade
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-secondary" />
              Comparação com Meses Anteriores
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Setembro 2025</span>
                  <Badge variant="outline" className="text-primary">Melhor</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '85%' }} />
                  </div>
                  <span className="text-sm font-bold">2.945€</span>
                </div>
              </div>

              <div className="p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Agosto 2025</span>
                  <Badge variant="outline" className="text-muted-foreground">Semelhante</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-secondary" style={{ width: '78%' }} />
                  </div>
                  <span className="text-sm font-bold">2.856€</span>
                </div>
              </div>

              <div className="p-4 bg-background rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Julho 2025</span>
                  <Badge variant="outline" className="text-destructive">Pior</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: '65%' }} />
                  </div>
                  <span className="text-sm font-bold">2.125€</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Evolução Financeira (5 meses)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorReceita" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLucro" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" stroke="hsl(var(--muted-foreground))" />
                <YAxis className="text-xs" stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Area type="monotone" dataKey="receita" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorReceita)" />
                <Area type="monotone" dataKey="lucro" stroke="hsl(var(--secondary))" fillOpacity={1} fill="url(#colorLucro)" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-accent" />
              Cortes Esta Semana
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <RechartsBarChart data={cutsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="day" className="text-xs" stroke="hsl(var(--muted-foreground))" />
                <YAxis className="text-xs" stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar dataKey="cortes" fill="hsl(var(--accent))" radius={[8, 8, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Workers Performance */}
        <Card className="p-6 bg-gradient-card border-border/50">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Desempenho por Trabalhador
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "João Silva", cuts: 92, revenue: "1.288€", efficiency: 95 },
              { name: "Maria Santos", cuts: 85, revenue: "1.190€", efficiency: 88 },
              { name: "Pedro Costa", cuts: 70, revenue: "980€", efficiency: 82 },
            ].map((worker, index) => (
              <div key={index} className="p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{worker.name}</div>
                    <div className="text-xs text-muted-foreground">{worker.cuts} cortes</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Receita</span>
                    <span className="font-bold text-primary">{worker.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Eficiência</span>
                    <span className="font-bold">{worker.efficiency}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary" 
                      style={{ width: `${worker.efficiency}%` }} 
                    />
                  </div>
                </div>
              </div>
          ))}
        </div>
      </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessDashboard;