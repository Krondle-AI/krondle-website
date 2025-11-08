import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BarChart3, TrendingUp, DollarSign, Users, Calendar as CalendarIcon, Download, FileText } from "lucide-react";
import { format } from "date-fns";
import { pt } from "date-fns/locale";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AdvancedReports = () => {
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
    from: new Date(2025, 0, 1),
    to: new Date(),
  });

  // Sample data for charts
  const revenueData = [
    { month: "Jan", revenue: 4500, expenses: 2400, profit: 2100 },
    { month: "Fev", revenue: 5200, expenses: 2600, profit: 2600 },
    { month: "Mar", revenue: 4800, expenses: 2500, profit: 2300 },
    { month: "Abr", revenue: 6100, expenses: 2800, profit: 3300 },
    { month: "Mai", revenue: 5900, expenses: 2700, profit: 3200 },
    { month: "Jun", revenue: 7200, expenses: 3100, profit: 4100 },
  ];

  const serviceDistribution = [
    { name: "Corte de Cabelo", value: 35, color: "hsl(var(--primary))" },
    { name: "Barba", value: 25, color: "hsl(var(--secondary))" },
    { name: "Coloração", value: 20, color: "hsl(var(--accent))" },
    { name: "Manicure", value: 15, color: "hsl(var(--muted))" },
    { name: "Outros", value: 5, color: "hsl(var(--border))" },
  ];

  const workerPerformance = [
    { worker: "João Silva", appointments: 142, revenue: 7100, rating: 4.8 },
    { worker: "Maria Santos", appointments: 128, revenue: 6400, rating: 4.9 },
    { worker: "Pedro Costa", appointments: 115, revenue: 5750, rating: 4.7 },
    { worker: "Ana Oliveira", appointments: 98, revenue: 4900, rating: 4.6 },
  ];

  const clientRetention = [
    { period: "Semana 1", novos: 15, recorrentes: 45 },
    { period: "Semana 2", novos: 12, recorrentes: 52 },
    { period: "Semana 3", novos: 18, recorrentes: 48 },
    { period: "Semana 4", novos: 10, recorrentes: 55 },
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
          <Breadcrumb />
          <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Relatórios Avançados
            </h1>
            <p className="text-muted-foreground">
              Análises detalhadas do desempenho do seu negócio
            </p>
          </div>
          
          <div className="flex gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {dateRange.from && dateRange.to
                    ? `${format(dateRange.from, "dd/MM/yy", { locale: pt })} - ${format(dateRange.to, "dd/MM/yy", { locale: pt })}`
                    : "Selecionar período"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={(range) => range && setDateRange(range)}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
            
            <Button variant="default" className="gap-2">
              <Download className="w-4 h-4" />
              Exportar PDF
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
              <DollarSign className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€33,700</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500">+12.5%</span> vs período anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
              <Users className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">287</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500">+8.2%</span> novos clientes
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Agendamentos</CardTitle>
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">483</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500">+15.3%</span> vs período anterior
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Taxa de Retenção</CardTitle>
              <BarChart3 className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-green-500">+3.2%</span> vs período anterior
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="revenue">Receitas</TabsTrigger>
            <TabsTrigger value="services">Serviços</TabsTrigger>
            <TabsTrigger value="workers">Trabalhadores</TabsTrigger>
            <TabsTrigger value="clients">Clientes</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Evolução de Receitas e Despesas</CardTitle>
                <CardDescription>Comparação mensal de receitas, despesas e lucro</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" className="text-sm" />
                    <YAxis className="text-sm" />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                    <Legend />
                    <Bar dataKey="revenue" name="Receita" fill="hsl(var(--primary))" />
                    <Bar dataKey="expenses" name="Despesas" fill="hsl(var(--destructive))" />
                    <Bar dataKey="profit" name="Lucro" fill="hsl(var(--secondary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Distribuição de Serviços</CardTitle>
                  <CardDescription>Percentagem de agendamentos por tipo de serviço</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={serviceDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {serviceDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Serviços</CardTitle>
                  <CardDescription>Serviços mais populares e receita gerada</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {serviceDistribution.map((service, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }} />
                          <span className="font-medium">{service.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">€{(service.value * 100).toFixed(0)}</div>
                          <div className="text-xs text-muted-foreground">{service.value}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="workers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Desempenho dos Trabalhadores</CardTitle>
                <CardDescription>Métricas de produtividade e avaliação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workerPerformance.map((worker, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {worker.worker.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="font-semibold">{worker.worker}</div>
                          <div className="text-sm text-muted-foreground">
                            {worker.appointments} agendamentos
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-lg">€{worker.revenue}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>⭐ {worker.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Retenção de Clientes</CardTitle>
                <CardDescription>Comparação entre clientes novos e recorrentes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={clientRetention}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="period" className="text-sm" />
                    <YAxis className="text-sm" />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                    <Legend />
                    <Line type="monotone" dataKey="novos" name="Novos Clientes" stroke="hsl(var(--primary))" strokeWidth={2} />
                    <Line type="monotone" dataKey="recorrentes" name="Clientes Recorrentes" stroke="hsl(var(--secondary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AdvancedReports;
