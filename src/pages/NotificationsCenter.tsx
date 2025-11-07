import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Bell, Mail, MessageSquare, Calendar, Clock, Send, Plus, Edit, Trash2, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NotificationsCenter = () => {
  const [templates, setTemplates] = useState([
    { id: 1, name: "Confirmação de Agendamento", type: "whatsapp", content: "Olá {nome}! Seu agendamento foi confirmado para {data} às {hora}. Até breve! 😊" },
    { id: 2, name: "Lembrete 24h", type: "sms", content: "Olá {nome}! Lembramos que você tem um agendamento amanhã às {hora}. Confirme sua presença." },
    { id: 3, name: "Agradecimento Pós-Serviço", type: "email", content: "Olá {nome}! Obrigado por escolher nossos serviços. Esperamos vê-lo novamente em breve!" },
    { id: 4, name: "Promoção Mensal", type: "whatsapp", content: "🎉 Promoção exclusiva para você! 20% de desconto em todos os serviços durante esta semana." },
  ]);

  const [notifications, setNotifications] = useState([
    { id: 1, type: "appointment", message: "Novo agendamento: João Silva - Corte de Cabelo", time: "há 5 min", read: false },
    { id: 2, type: "reminder", message: "Lembrete enviado para Maria Santos", time: "há 15 min", read: false },
    { id: 3, type: "cancellation", message: "Cancelamento: Pedro Costa - Barba", time: "há 1 hora", read: true },
    { id: 4, type: "confirmation", message: "Confirmação recebida de Ana Oliveira", time: "há 2 horas", read: true },
  ]);

  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    whatsappNotifications: true,
    autoReminders: true,
    reminderTime: "24",
    autoConfirmation: true,
    autoThankYou: false,
  });

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "appointment":
        return <Calendar className="w-4 h-4" />;
      case "reminder":
        return <Clock className="w-4 h-4" />;
      case "cancellation":
        return <Trash2 className="w-4 h-4" />;
      case "confirmation":
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getTemplateIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="w-4 h-4" />;
      case "sms":
        return <MessageSquare className="w-4 h-4" />;
      case "whatsapp":
        return <MessageSquare className="w-4 h-4 text-green-500" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
          <Breadcrumb />
          <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Notificações & Comunicação
            </h1>
            <p className="text-muted-foreground">
              Gerencie mensagens automáticas e mantenha contato com seus clientes
            </p>
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="gap-2">
                <Plus className="w-4 h-4" />
                Novo Template
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Criar Template de Mensagem</DialogTitle>
                <DialogDescription>
                  Crie mensagens personalizadas para diferentes situações
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Nome do Template</Label>
                  <Input placeholder="Ex: Confirmação de Agendamento" />
                </div>
                <div className="space-y-2">
                  <Label>Tipo de Envio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="sms">SMS</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Mensagem</Label>
                  <Textarea 
                    placeholder="Use {nome}, {data}, {hora} para personalização"
                    rows={5}
                  />
                  <p className="text-xs text-muted-foreground">
                    Variáveis disponíveis: {"{nome}"}, {"{data}"}, {"{hora}"}, {"{serviço}"}, {"{trabalhador}"}
                  </p>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Criar Template</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="notifications" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="notifications">Central de Notificações</TabsTrigger>
            <TabsTrigger value="templates">Templates de Mensagens</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="notifications" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Não Lidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Mensagens Enviadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">127</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Taxa de Leitura</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Notificações Recentes</CardTitle>
                <CardDescription>Histórico de atividades e alertas do sistema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border ${
                        notification.read ? "border-border bg-background" : "border-primary/30 bg-primary/5"
                      }`}
                    >
                      <div className={`mt-1 p-2 rounded-full ${notification.read ? "bg-muted" : "bg-primary/10"}`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${!notification.read && "text-primary"}`}>
                          {notification.message}
                        </p>
                        <p className="text-sm text-muted-foreground">{notification.time}</p>
                      </div>
                      {!notification.read && (
                        <Badge variant="default" className="text-xs">Nova</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Templates Salvos</CardTitle>
                <CardDescription>Mensagens prontas para envio automático</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {templates.map((template) => (
                    <div key={template.id} className="flex items-start justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="p-2 bg-muted rounded-full">
                          {getTemplateIcon(template.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{template.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {template.type.toUpperCase()}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{template.content}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Send className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferências de Notificação</CardTitle>
                <CardDescription>Configure como deseja receber e enviar notificações</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por Email</Label>
                      <p className="text-sm text-muted-foreground">Receba atualizações por email</p>
                    </div>
                    <Switch
                      checked={settings.emailNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por SMS</Label>
                      <p className="text-sm text-muted-foreground">Envie lembretes via SMS</p>
                    </div>
                    <Switch
                      checked={settings.smsNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Notificações por WhatsApp</Label>
                      <p className="text-sm text-muted-foreground">Envie mensagens via WhatsApp</p>
                    </div>
                    <Switch
                      checked={settings.whatsappNotifications}
                      onCheckedChange={(checked) => setSettings({ ...settings, whatsappNotifications: checked })}
                    />
                  </div>
                </div>

                <div className="border-t border-border pt-6 space-y-4">
                  <h3 className="font-semibold">Automações</h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Lembretes Automáticos</Label>
                      <p className="text-sm text-muted-foreground">Enviar lembrete antes do agendamento</p>
                    </div>
                    <Switch
                      checked={settings.autoReminders}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoReminders: checked })}
                    />
                  </div>

                  {settings.autoReminders && (
                    <div className="ml-6 space-y-2">
                      <Label>Enviar lembrete com antecedência de:</Label>
                      <Select value={settings.reminderTime} onValueChange={(value) => setSettings({ ...settings, reminderTime: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hora</SelectItem>
                          <SelectItem value="2">2 horas</SelectItem>
                          <SelectItem value="24">24 horas</SelectItem>
                          <SelectItem value="48">48 horas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Confirmação Automática</Label>
                      <p className="text-sm text-muted-foreground">Enviar confirmação ao agendar</p>
                    </div>
                    <Switch
                      checked={settings.autoConfirmation}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoConfirmation: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Agradecimento Automático</Label>
                      <p className="text-sm text-muted-foreground">Enviar mensagem após o serviço</p>
                    </div>
                    <Switch
                      checked={settings.autoThankYou}
                      onCheckedChange={(checked) => setSettings({ ...settings, autoThankYou: checked })}
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button>Salvar Configurações</Button>
                </div>
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

export default NotificationsCenter;
