import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Scissors, TrendingUp, Euro, Clock, Star, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const ServicesManagement = () => {
  const [services, setServices] = useState([
    { 
      id: 1, 
      name: "Corte Normal", 
      price: 12, 
      duration: 30, 
      bookings: 120,
      revenue: 1440,
      trend: "+15%",
      category: "normal"
    },
    { 
      id: 2, 
      name: "Corte VIP", 
      price: 25, 
      duration: 45, 
      bookings: 65,
      revenue: 1625,
      trend: "+22%",
      category: "vip"
    },
    { 
      id: 3, 
      name: "Corte Especial (Género)", 
      price: 18, 
      duration: 40, 
      bookings: 45,
      revenue: 810,
      trend: "+8%",
      category: "especial"
    },
  ]);

  const getCategoryColor = (category: string) => {
    const colors = {
      normal: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      vip: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      especial: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    };
    return colors[category as keyof typeof colors] || colors.normal;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 animate-fade-in">
        <Breadcrumb />
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Gestão de Serviços</h1>
            <p className="text-muted-foreground">Configure preços, durações e tipos de corte</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Scissors className="w-4 h-4 mr-2" />
                Novo Serviço
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Criar Novo Serviço</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="serviceName">Nome do Serviço</Label>
                  <Input id="serviceName" placeholder="Ex: Corte Premium" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Preço (€)</Label>
                    <Input id="price" type="number" placeholder="20" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duração (min)</Label>
                    <Input id="duration" type="number" placeholder="45" />
                  </div>
                </div>
                <Button className="w-full">Criar Serviço</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Scissors className="w-6 h-6 text-primary" />
              </div>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold mb-1">{services.length}</div>
            <div className="text-sm text-muted-foreground">Serviços Ativos</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <Euro className="w-6 h-6 text-secondary" />
              </div>
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-3xl font-bold mb-1">
              {services.reduce((acc, s) => acc + s.revenue, 0)}€
            </div>
            <div className="text-sm text-muted-foreground">Receita Total</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <Badge variant="default">Mais Popular</Badge>
            </div>
            <div className="text-3xl font-bold mb-1">Corte VIP</div>
            <div className="text-sm text-muted-foreground">Maior Receita</div>
          </Card>
        </div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service) => (
            <Card key={service.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getCategoryColor(service.category)}`}>
                    <Scissors className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{service.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Euro className="w-4 h-4" />
                        {service.price}€
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration} min
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Número de Cortes</div>
                  <div className="text-2xl font-bold">{service.bookings}</div>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Receita Total</div>
                  <div className="text-2xl font-bold text-primary">{service.revenue}€</div>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Preço Médio</div>
                  <div className="text-2xl font-bold">{service.price}€</div>
                </div>
                
                <div className="p-4 bg-background rounded-lg">
                  <div className="text-sm text-muted-foreground mb-1">Crescimento</div>
                  <div className="text-2xl font-bold text-secondary">{service.trend}</div>
                </div>
              </div>

              {/* Transformações/Detalhes adicionais */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm font-semibold mb-2">Transformações Disponíveis:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Corte Normal</Badge>
                  <Badge variant="outline">Corte c/ Barba</Badge>
                  <Badge variant="outline">Corte Especial</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Painel de Comparação */}
        <Card className="mt-8 p-6 bg-gradient-card border-border/50">
          <h3 className="text-xl font-semibold mb-6">Análise Comparativa</h3>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={service.id} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-muted-foreground">{service.revenue}€</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      index === 0 ? 'bg-blue-500' : 
                      index === 1 ? 'bg-amber-500' : 
                      'bg-purple-500'
                    }`}
                    style={{ 
                      width: `${(service.revenue / Math.max(...services.map(s => s.revenue))) * 100}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesManagement;