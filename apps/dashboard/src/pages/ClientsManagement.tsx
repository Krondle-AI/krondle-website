import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@krondle/common/components/ui/button";
import { Input } from "@krondle/common/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@krondle/common/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@krondle/common/components/ui/dialog";
import { Label } from "@krondle/common/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@krondle/common/components/ui/table";
import { Badge } from "@krondle/common/components/ui/badge";
import { Search, UserPlus, Star, Calendar, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalVisits: number;
  loyaltyPoints: number;
  lastVisit: string;
  tier: "bronze" | "prata" | "ouro";
}

const ClientsManagement = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: "Ana Silva",
      email: "ana.silva@email.com",
      phone: "+351 912 345 678",
      totalVisits: 24,
      loyaltyPoints: 240,
      lastVisit: "2025-10-15",
      tier: "ouro",
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao.santos@email.com",
      phone: "+351 923 456 789",
      totalVisits: 12,
      loyaltyPoints: 120,
      lastVisit: "2025-10-18",
      tier: "prata",
    },
    {
      id: 3,
      name: "Maria Costa",
      email: "maria.costa@email.com",
      phone: "+351 934 567 890",
      totalVisits: 5,
      loyaltyPoints: 50,
      lastVisit: "2025-10-20",
      tier: "bronze",
    },
  ]);

  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "ouro":
        return "bg-yellow-500";
      case "prata":
        return "bg-gray-400";
      case "bronze":
        return "bg-orange-600";
      default:
        return "bg-muted";
    }
  };

  const handleAddClient = () => {
    if (!newClient.name || !newClient.email || !newClient.phone) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos",
        variant: "destructive",
      });
      return;
    }

    const client: Client = {
      id: clients.length + 1,
      ...newClient,
      totalVisits: 0,
      loyaltyPoints: 0,
      lastVisit: new Date().toISOString().split("T")[0],
      tier: "bronze",
    };

    setClients([...clients, client]);
    setNewClient({ name: "", email: "", phone: "" });
    
    toast({
      title: "Cliente adicionado",
      description: `${client.name} foi adicionado com sucesso`,
    });
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm)
  );

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
          <Breadcrumb />
          <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gestão de Clientes
          </h1>
          <p className="text-muted-foreground">
            Gerencie seus clientes e programa de fidelidade
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Clientes</CardTitle>
              <UserPlus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{clients.length}</div>
              <p className="text-xs text-muted-foreground">Clientes registrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clientes Ouro</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {clients.filter((c) => c.tier === "ouro").length}
              </div>
              <p className="text-xs text-muted-foreground">Programa de fidelidade</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visitas Totais</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {clients.reduce((acc, client) => acc + client.totalVisits, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Total de agendamentos</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle>Clientes</CardTitle>
                <CardDescription>Lista completa de todos os clientes</CardDescription>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar clientes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Adicionar Cliente
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Adicionar Novo Cliente</DialogTitle>
                      <DialogDescription>
                        Preencha os dados do novo cliente
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          value={newClient.name}
                          onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                          placeholder="Nome do cliente"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={newClient.email}
                          onChange={(e) => setNewClient({ ...newClient, email: e.target.value })}
                          placeholder="email@exemplo.com"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          value={newClient.phone}
                          onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                          placeholder="+351 912 345 678"
                        />
                      </div>
                    </div>
                    <Button onClick={handleAddClient} className="w-full">
                      Adicionar Cliente
                    </Button>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Contacto</TableHead>
                    <TableHead>Visitas</TableHead>
                    <TableHead>Pontos</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Última Visita</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-3 w-3 text-muted-foreground" />
                            {client.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Phone className="h-3 w-3 text-muted-foreground" />
                            {client.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{client.totalVisits}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          {client.loyaltyPoints}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getTierColor(client.tier)}>
                          {client.tier.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(client.lastVisit).toLocaleDateString("pt-PT")}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ClientsManagement;
