import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@krondle/common/components/ui/card";
import { Button } from "@krondle/common/components/ui/button";
import { Input } from "@krondle/common/components/ui/input";
import { Label } from "@krondle/common/components/ui/label";
import { Badge } from "@krondle/common/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@krondle/common/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@krondle/common/components/ui/tabs";
import { User, Mail, Phone, Calendar, TrendingUp, Award, Clock, MapPin } from "lucide-react";

const WorkersManagement = () => {
  const workers = [
    {
      id: 1,
      name: "João Silva",
      email: "joao.silva@example.com",
      phone: "+351 912 345 678",
      role: "Barbeiro Senior",
      rating: 4.9,
      totalCuts: 847,
      revenue: 11890,
      joinDate: "2023-01-15",
      region: "Lisboa",
      availability: "disponível",
      efficiency: 95,
      specialties: ["Cortes Clássicos", "Barba", "Design"]
    },
    {
      id: 2,
      name: "Maria Santos",
      email: "maria.santos@example.com",
      phone: "+351 913 456 789",
      role: "Barbeira",
      rating: 4.8,
      totalCuts: 692,
      revenue: 9745,
      joinDate: "2023-03-22",
      region: "Porto",
      availability: "disponível",
      efficiency: 92,
      specialties: ["Coloração", "Tratamentos", "Cortes Modernos"]
    },
    {
      id: 3,
      name: "Pedro Costa",
      email: "pedro.costa@example.com",
      phone: "+351 914 567 890",
      role: "Barbeiro Junior",
      rating: 4.6,
      totalCuts: 534,
      revenue: 7123,
      joinDate: "2024-01-10",
      region: "Coimbra",
      availability: "ocupado",
      efficiency: 88,
      specialties: ["Cortes Modernos", "Fade", "Design"]
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 animate-fade-in">
        <Breadcrumb />
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Gestão de Trabalhadores</h1>
            <p className="text-muted-foreground">Equipa, performance e informação de contacto</p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <User className="w-4 h-4 mr-2" />
                Adicionar Trabalhador
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Trabalhador</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" placeholder="Nome do trabalhador" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="+351 ..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Região</Label>
                  <Input id="region" placeholder="Lisboa, Porto..." />
                </div>
                <Button className="w-full">Adicionar à Equipa</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Overview Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{workers.length}</div>
            <div className="text-sm text-muted-foreground">Total de Trabalhadores</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">
              {workers.reduce((acc, w) => acc + w.totalCuts, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Cortes Totais</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">4.8</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">92%</div>
            <div className="text-sm text-muted-foreground">Eficiência Média</div>
          </Card>
        </div>

        {/* Workers List */}
        <div className="space-y-6">
          {workers.map((worker) => (
            <Card key={worker.id} className="p-6 bg-gradient-card border-border/50 hover:shadow-lg transition-all">
              <Tabs defaultValue="geral" className="w-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center">
                      <User className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{worker.name}</h3>
                      <p className="text-muted-foreground mb-2">{worker.role}</p>
                      <div className="flex items-center gap-3">
                        <Badge variant={worker.availability === 'disponível' ? 'default' : 'outline'}>
                          {worker.availability}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-amber-500" />
                          <span className="font-semibold">{worker.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <TabsList>
                    <TabsTrigger value="geral">Geral</TabsTrigger>
                    <TabsTrigger value="trabalhadores">Informação</TabsTrigger>
                    <TabsTrigger value="regiao">Região & Contacto</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="geral" className="space-y-4">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="p-4 bg-background rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Total de Cortes</div>
                      <div className="text-2xl font-bold">{worker.totalCuts}</div>
                    </div>
                    
                    <div className="p-4 bg-background rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Receita Gerada</div>
                      <div className="text-2xl font-bold text-primary">{worker.revenue}€</div>
                    </div>
                    
                    <div className="p-4 bg-background rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Eficiência</div>
                      <div className="text-2xl font-bold">{worker.efficiency}%</div>
                    </div>
                    
                    <div className="p-4 bg-background rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Avaliação</div>
                      <div className="text-2xl font-bold text-accent">{worker.rating}/5</div>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <div className="text-sm font-semibold mb-3">Especialidades</div>
                    <div className="flex flex-wrap gap-2">
                      {worker.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline">{specialty}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Performance</div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${worker.efficiency}%` }}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="trabalhadores" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Data de Entrada</span>
                      </div>
                      <div className="font-semibold">
                        {new Date(worker.joinDate).toLocaleDateString('pt-PT', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>

                    <div className="p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Tempo na Equipa</span>
                      </div>
                      <div className="font-semibold">
                        {Math.floor((new Date().getTime() - new Date(worker.joinDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} meses
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-background rounded-lg">
                    <div className="text-sm font-semibold mb-3">Lembretes</div>
                    <p className="text-sm text-muted-foreground">
                      Trabalhador ativo e disponível para agendamentos. Performance consistente nos últimos 3 meses.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="regiao" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Email</span>
                      </div>
                      <div className="font-semibold">{worker.email}</div>
                    </div>

                    <div className="p-4 bg-background rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Telefone</span>
                      </div>
                      <div className="font-semibold">{worker.phone}</div>
                    </div>

                    <div className="p-4 bg-background rounded-lg md:col-span-2">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="text-sm text-muted-foreground">Região de Atuação</span>
                      </div>
                      <div className="font-semibold">{worker.region}</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkersManagement;