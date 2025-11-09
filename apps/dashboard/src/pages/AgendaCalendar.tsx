import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card } from "@krondle/common/components/ui/card";
import { Button } from "@krondle/common/components/ui/button";
import { Calendar } from "@krondle/common/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@krondle/common/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@krondle/common/components/ui/dialog";
import { Input } from "@krondle/common/components/ui/input";
import { Label } from "@krondle/common/components/ui/label";
import { Badge } from "@krondle/common/components/ui/badge";
import { Clock, User, Calendar as CalendarIcon, ArrowRightLeft, Search, Check, X, AlertTriangle, TrendingUp, BarChart3, Phone } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";

const AgendaCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedWorker, setSelectedWorker] = useState("all");
  const [viewType, setViewType] = useState<"day" | "week" | "month">("day");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("todos");

  const workers = [
    { id: "joao", name: "João Silva", chair: "Cadeira 1", color: "bg-blue-500/10 border-blue-500/30" },
    { id: "maria", name: "Maria Santos", chair: "Cadeira 2", color: "bg-purple-500/10 border-purple-500/30" },
    { id: "pedro", name: "Pedro Costa", chair: "Cadeira 3", color: "bg-green-500/10 border-green-500/30" },
  ];

  const weekDays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  
  const appointments = [
    { id: 1, time: "09:00", duration: 30, client: "Carlos Lima", phone: "912345678", service: "Corte Normal", worker: "João Silva", status: "confirmado" },
    { id: 2, time: "09:30", duration: 60, client: "Ana Ferreira", phone: "923456789", service: "Corte VIP", worker: "Maria Santos", status: "confirmado" },
    { id: 3, time: "10:00", duration: 30, client: "Rui Costa", phone: "934567890", service: "Corte Especial", worker: "Pedro Costa", status: "pendente" },
    { id: 4, time: "11:00", duration: 30, client: "Sofia Martins", phone: "945678901", service: "Corte Normal", worker: "João Silva", status: "confirmado" },
    { id: 5, time: "14:00", duration: 60, client: "Luís Santos", phone: "956789012", service: "Corte VIP", worker: "Maria Santos", status: "confirmado" },
    { id: 6, time: "15:30", duration: 30, client: "Teresa Alves", phone: "967890123", service: "Corte Normal", worker: "Pedro Costa", status: "pendente" },
    { id: 7, time: "16:00", duration: 30, client: "Miguel Rocha", phone: "978901234", service: "Corte Normal", worker: "João Silva", status: "atendido" },
  ];

  // Time slots (8h - 20h, 30min intervals)
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 8; hour < 20; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
    return slots;
  }, []);

  // Filtered appointments
  const filteredAppointments = useMemo(() => {
    return appointments.filter(apt => {
      const matchesWorker = selectedWorker === "all" || apt.worker === workers.find(w => w.id === selectedWorker)?.name;
      const matchesSearch = apt.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          apt.phone.includes(searchQuery);
      const matchesStatus = statusFilter === "todos" || apt.status === statusFilter;
      return matchesWorker && matchesSearch && matchesStatus;
    });
  }, [selectedWorker, searchQuery, statusFilter]);

  // Detect conflicts
  const conflicts = useMemo(() => {
    const conflictIds = new Set();
    filteredAppointments.forEach((apt1, i) => {
      filteredAppointments.forEach((apt2, j) => {
        if (i < j && apt1.worker === apt2.worker) {
          const time1 = parseInt(apt1.time.replace(':', ''));
          const time2 = parseInt(apt2.time.replace(':', ''));
          if (Math.abs(time1 - time2) < 100) {
            conflictIds.add(apt1.id);
            conflictIds.add(apt2.id);
          }
        }
      });
    });
    return conflictIds;
  }, [filteredAppointments]);

  // Statistics
  const stats = useMemo(() => {
    const totalSlots = timeSlots.length * workers.length;
    const occupied = filteredAppointments.length;
    const occupancyRate = Math.round((occupied / totalSlots) * 100);
    const confirmed = filteredAppointments.filter(a => a.status === 'confirmado').length;
    const pending = filteredAppointments.filter(a => a.status === 'pendente').length;
    return { occupancyRate, confirmed, pending, total: totalSlots, occupied };
  }, [filteredAppointments, timeSlots, workers]);

  const handleQuickAction = (aptId: number, action: 'confirm' | 'cancel' | 'complete') => {
    const apt = appointments.find(a => a.id === aptId);
    if (action === 'confirm') {
      toast({
        title: "✅ Marcação confirmada",
        description: `${apt?.client} - ${apt?.time}`,
      });
    } else if (action === 'cancel') {
      toast({
        title: "❌ Marcação cancelada",
        description: `${apt?.client} removido da agenda`,
        variant: "destructive",
      });
    } else {
      toast({
        title: "✓ Atendimento concluído",
        description: `${apt?.client} marcado como atendido`,
      });
    }
  };

  // Calculate height based on duration (30min = 80px, 60min = 164px)
  const getHeightClass = (duration: number) => {
    if (duration === 30) return 'h-[80px]';
    if (duration === 60) return 'h-[164px]';
    return 'h-[80px]';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-6 py-12 animate-fade-in">
        <Breadcrumb />
        
        {/* Header */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Agenda Inteligente</h1>
              <p className="text-muted-foreground">Timeline com deteção de conflitos e ações rápidas</p>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-4 gap-4">
            <Card className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{stats.occupancyRate}%</div>
                  <div className="text-xs text-muted-foreground">Ocupação</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.confirmed}</div>
                  <div className="text-xs text-muted-foreground">Confirmadas</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.pending}</div>
                  <div className="text-xs text-muted-foreground">Pendentes</div>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-gradient-card border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stats.occupied}/{stats.total}</div>
                  <div className="text-xs text-muted-foreground">Slots Usados</div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Pesquisar cliente ou telefone..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={selectedWorker} onValueChange={setSelectedWorker}>
              <SelectTrigger className="w-[220px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Cadeiras</SelectItem>
                {workers.map((worker) => (
                  <SelectItem key={worker.id} value={worker.id}>
                    {worker.name} - {worker.chair}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos Status</SelectItem>
                <SelectItem value="confirmado">Confirmado</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="atendido">Atendido</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex gap-2">
              <Button 
                variant={viewType === "day" ? "default" : "outline"}
                onClick={() => setViewType("day")}
                size="sm"
              >
                Dia
              </Button>
              <Button 
                variant={viewType === "week" ? "default" : "outline"}
                onClick={() => setViewType("week")}
                size="sm"
              >
                Semana
              </Button>
              <Button 
                variant={viewType === "month" ? "default" : "outline"}
                onClick={() => setViewType("month")}
                size="sm"
              >
                Mês
              </Button>
            </div>
          </div>

          {conflicts.size > 0 && (
            <Card className="p-4 bg-destructive/10 border-destructive/50">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <div>
                  <div className="font-semibold text-destructive">Conflitos Detetados!</div>
                  <div className="text-sm text-muted-foreground">
                    {conflicts.size} marcação(ões) com horários sobrepostos
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-6">
          {/* Calendar Sidebar */}
          <Card className="p-6 bg-gradient-card border-border/50 h-fit">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              Calendário
            </h3>
            
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md"
            />

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">Seleção Atual</h4>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start">
                  <Clock className="w-3 h-3 mr-2" />
                  {date?.toLocaleDateString('pt-PT')}
                </Badge>
                <Badge variant="outline" className="w-full justify-start">
                  <User className="w-3 h-3 mr-2" />
                  {selectedWorker === "all" ? "Todas" : workers.find(w => w.id === selectedWorker)?.chair}
                </Badge>
              </div>
            </div>
          </Card>

          {/* Timeline View */}
          <div className="space-y-4">
            {viewType === "day" && (
              <Card className="p-6 bg-gradient-card border-border/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    Timeline Multi-Cadeira - {date?.toLocaleDateString('pt-PT')}
                  </h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        Nova Marcação
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Nova Marcação</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="client">Cliente</Label>
                          <Input id="client" placeholder="Nome do cliente" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input id="phone" placeholder="912345678" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Serviço</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o serviço" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="normal">Corte Normal - 30min</SelectItem>
                              <SelectItem value="vip">Corte VIP - 60min</SelectItem>
                              <SelectItem value="especial">Corte Especial - 30min</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="worker">Barbeiro / Cadeira</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione o barbeiro" />
                            </SelectTrigger>
                            <SelectContent>
                              {workers.map(worker => (
                                <SelectItem key={worker.id} value={worker.id}>
                                  {worker.name} - {worker.chair}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Horário</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione horário" />
                            </SelectTrigger>
                            <SelectContent className="max-h-[300px]">
                              {timeSlots.map(slot => (
                                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Button 
                          className="w-full"
                          onClick={() => {
                            toast({
                              title: "✅ Marcação criada!",
                              description: "A marcação foi adicionada com sucesso à agenda.",
                            });
                          }}
                        >
                          Criar Marcação
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Multi-Chair Timeline Grid */}
                <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
                  {/* Header with worker names */}
                  <div className="flex gap-3 sticky top-0 bg-gradient-card z-10 pb-2 border-b border-border">
                    <div className="w-16"></div>
                    {(selectedWorker === "all" ? workers : workers.filter(w => w.id === selectedWorker)).map(worker => (
                      <div key={worker.id} className="flex-1 text-center">
                        <div className="font-semibold text-sm">{worker.name}</div>
                        <div className="text-xs text-muted-foreground">{worker.chair}</div>
                      </div>
                    ))}
                  </div>

                  {/* Time slots with multiple columns */}
                  {timeSlots.map((slot) => {
                    const displayWorkers = selectedWorker === "all" ? workers : workers.filter(w => w.id === selectedWorker);
                    
                    return (
                      <div key={slot} className="flex gap-3 items-start">
                        <div className="w-16 text-sm font-semibold text-muted-foreground pt-3">
                          {slot}
                        </div>
                        
                        {displayWorkers.map(worker => {
                          const workerAppointments = filteredAppointments.filter(
                            apt => apt.time === slot && apt.worker === worker.name
                          );
                          const isEmpty = workerAppointments.length === 0;
                          
                          return (
                            <div 
                              key={worker.id} 
                              className={`flex-1 min-h-[80px] rounded-lg border border-dashed p-2 hover:bg-muted/30 transition-colors ${
                                isEmpty ? 'border-border/50' : ''
                              }`}
                            >
                              {isEmpty ? (
                                <div className="text-xs text-muted-foreground italic flex items-center justify-center h-full">
                                  Livre
                                </div>
                              ) : (
                                <div className="space-y-2">
                                  {workerAppointments.map(apt => (
                                    <div 
                                      key={apt.id} 
                                      className={`p-3 rounded-lg border transition-all hover:shadow-md flex flex-col ${getHeightClass(apt.duration)} ${
                                        conflicts.has(apt.id) 
                                          ? 'bg-destructive/10 border-destructive/50'
                                        : apt.status === 'confirmado' 
                                          ? 'bg-primary/5 border-primary/30' 
                                          : apt.status === 'atendido'
                                            ? 'bg-green-500/5 border-green-500/30'
                                            : 'bg-yellow-500/5 border-yellow-500/30'
                                      }`}
                                    >
                                      <div className="flex items-start justify-between gap-2 flex-1">
                                        <div className="flex-1 min-w-0">
                                          <div className="flex items-center gap-1 mb-1">
                                            <span className="font-semibold text-sm truncate">{apt.client}</span>
                                            {conflicts.has(apt.id) && (
                                              <AlertTriangle className="w-3 h-3 text-destructive flex-shrink-0" />
                                            )}
                                          </div>
                                          <div className="text-xs text-muted-foreground truncate">{apt.service}</div>
                                          <div className="text-xs text-muted-foreground font-semibold mt-1">⏱ {apt.duration}min</div>
                                        </div>

                                        {/* Quick Actions */}
                                        <div className="flex gap-1 flex-shrink-0">
                                          <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-7 w-7 p-0 hover:bg-green-500/10"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              window.open(`https://wa.me/351${apt.phone}`, '_blank');
                                            }}
                                            title="WhatsApp"
                                          >
                                            <Phone className="w-3 h-3 text-green-500" />
                                          </Button>
                                          {apt.status === 'pendente' && (
                                            <Button
                                              size="sm"
                                              variant="ghost"
                                              className="h-7 w-7 p-0 hover:bg-green-500/10"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleQuickAction(apt.id, 'confirm');
                                              }}
                                              title="Confirmar"
                                            >
                                              <Check className="w-3 h-3 text-green-500" />
                                            </Button>
                                          )}
                                          {apt.status === 'confirmado' && (
                                            <Button
                                              size="sm"
                                              variant="ghost"
                                              className="h-7 w-7 p-0 hover:bg-primary/10"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                handleQuickAction(apt.id, 'complete');
                                              }}
                                              title="Marcar como Atendido"
                                            >
                                              <Check className="w-3 h-3 text-primary" />
                                            </Button>
                                          )}
                                          <Button
                                            size="sm"
                                            variant="ghost"
                                            className="h-7 w-7 p-0 hover:bg-destructive/10"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleQuickAction(apt.id, 'cancel');
                                            }}
                                            title="Cancelar"
                                          >
                                            <X className="w-3 h-3 text-destructive" />
                                          </Button>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </Card>
            )}

            {viewType === "week" && (
              <Card className="p-6 bg-gradient-card border-border/50">
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {weekDays.map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">{day}</div>
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-sm font-semibold ${
                        index === 0 ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {filteredAppointments.map((apt) => (
                    <Card key={apt.id} className={`p-4 transition-all hover:shadow-md ${
                      conflicts.has(apt.id) 
                        ? 'bg-destructive/10 border-destructive/50'
                        : apt.status === 'confirmado' 
                          ? 'bg-primary/5 border-primary/30' 
                          : apt.status === 'atendido'
                            ? 'bg-green-500/5 border-green-500/30'
                            : 'bg-yellow-500/5 border-yellow-500/30'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex flex-col items-center justify-center w-16 h-16 bg-muted rounded-lg">
                            <Clock className="w-4 h-4 text-muted-foreground mb-1" />
                            <span className="text-sm font-semibold">{apt.time}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{apt.client}</h4>
                              {conflicts.has(apt.id) && (
                                <AlertTriangle className="w-4 h-4 text-destructive" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{apt.service}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <Badge variant="outline" className="text-xs">
                                <User className="w-3 h-3 mr-1" />
                                {apt.worker}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{apt.duration}min</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-green-500/10"
                            onClick={() => window.open(`https://wa.me/351${apt.phone}`, '_blank')}
                          >
                            <Phone className="w-4 h-4 text-green-500" />
                          </Button>
                          {apt.status === 'pendente' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="hover:bg-green-500/10"
                              onClick={() => handleQuickAction(apt.id, 'confirm')}
                            >
                              <Check className="w-4 h-4 text-green-500" />
                            </Button>
                          )}
                          {apt.status === 'confirmado' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="hover:bg-primary/10"
                              onClick={() => handleQuickAction(apt.id, 'complete')}
                            >
                              <Check className="w-4 h-4 text-primary" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-destructive/10"
                            onClick={() => handleQuickAction(apt.id, 'cancel')}
                          >
                            <X className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            )}

            {viewType === "month" && (
              <Card className="p-6 bg-gradient-card border-border/50">
                <h3 className="text-xl font-semibold mb-4">
                  Vista Mensal - {date?.toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' })}
                </h3>
                
                <div className="grid grid-cols-1 gap-3">
                  {filteredAppointments.map((apt) => (
                    <Card key={apt.id} className={`p-4 transition-all hover:shadow-md ${
                      conflicts.has(apt.id) 
                        ? 'bg-destructive/10 border-destructive/50'
                        : apt.status === 'confirmado' 
                          ? 'bg-primary/5 border-primary/30' 
                          : apt.status === 'atendido'
                            ? 'bg-green-500/5 border-green-500/30'
                            : 'bg-yellow-500/5 border-yellow-500/30'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex flex-col items-center justify-center w-16 h-16 bg-muted rounded-lg">
                            <Clock className="w-4 h-4 text-muted-foreground mb-1" />
                            <span className="text-sm font-semibold">{apt.time}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{apt.client}</h4>
                              {conflicts.has(apt.id) && (
                                <AlertTriangle className="w-4 h-4 text-destructive" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{apt.service}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <Badge variant="outline" className="text-xs">
                                <User className="w-3 h-3 mr-1" />
                                {apt.worker}
                              </Badge>
                              <span className="text-xs text-muted-foreground">{apt.duration}min</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-green-500/10"
                            onClick={() => window.open(`https://wa.me/351${apt.phone}`, '_blank')}
                          >
                            <Phone className="w-4 h-4 text-green-500" />
                          </Button>
                          {apt.status === 'pendente' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="hover:bg-green-500/10"
                              onClick={() => handleQuickAction(apt.id, 'confirm')}
                            >
                              <Check className="w-4 h-4 text-green-500" />
                            </Button>
                          )}
                          {apt.status === 'confirmado' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="hover:bg-primary/10"
                              onClick={() => handleQuickAction(apt.id, 'complete')}
                            >
                              <Check className="w-4 h-4 text-primary" />
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            className="hover:bg-destructive/10"
                            onClick={() => handleQuickAction(apt.id, 'cancel')}
                          >
                            <X className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AgendaCalendar;

