# Krondle - Agendamento Inteligente Automático

![Krondle Logo](./src/assets/krondle-logo.jpeg)

> Plataforma de agendamento automático via WhatsApp, Instagram e Email para pequenas e médias empresas.

## 📋 Sobre o Projeto

O **Krondle** é uma solução inovadora que automatiza o processo de agendamento de serviços através de Inteligência Artificial integrada com os principais canais de comunicação (WhatsApp, Instagram e Gmail).

Desenvolvido como projeto académico do curso de **Engenharia e Gestão de Empresas (IGE)** no **ISCTE - Instituto Universitário de Lisboa**.

### 🎯 Problema que Resolvemos

Pequenas e médias empresas (barbearias, esteticistas, clínicas) perdem:
- ⏰ **Tempo** respondendo manualmente a pedidos de marcação
- 💰 **Clientes** por falta de resposta imediata
- 📊 **Controlo** sobre a gestão do negócio

### ✨ Nossa Solução

- 🤖 **IA que compreende linguagem natural** ("Queria cortar o cabelo terça à tarde")
- 📱 **Integração direta** com WhatsApp, Instagram e Email
- 📅 **Agendamento automático 24/7**
- 📊 **Dashboard completo** com métricas e relatórios
- 👥 **Gestão de clientes, trabalhadores e serviços**

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Shadcn/ui** - Componentes UI
- **Recharts** - Gráficos e visualizações
- **React Router** - Navegação
- **React Hook Form + Zod** - Formulários e validação

### Backend (em desenvolvimento)
- **FastAPI** (Python) - API REST
- **Supabase** - Base de dados (PostgreSQL)
- **OpenAI API** - Inteligência Artificial
- **Meta API** - WhatsApp & Instagram
- **Gmail API** - Email

---

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ ([Instalar com NVM](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm ou yarn

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/Krondle-AI/krondle-frontend.git

# 2. Entre na pasta do projeto
cd krondle

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas credenciais

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

---

## 🛠️ Scripts Disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Build para produção
npm run preview    # Preview do build de produção
npm run lint       # Verifica erros de código
```

---

## 📂 Estrutura do Projeto

```
krondle/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── ui/          # Componentes Shadcn
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── ...
│   ├── pages/           # Páginas da aplicação
│   │   ├── Index.tsx             # Landing page
│   │   ├── Login.tsx
│   │   ├── BusinessDashboard.tsx
│   │   ├── AgendaCalendar.tsx
│   │   └── ...
│   ├── layouts/         # Layouts (DashboardLayout, etc)
│   ├── contexts/        # Context API (Auth, etc)
│   ├── hooks/           # Custom hooks
│   ├── types/           # TypeScript types
│   ├── utils/           # Funções utilitárias
│   └── App.tsx          # Componente principal
├── public/              # Assets estáticos
└── ...
```

---

## 🎨 Funcionalidades Principais

### ✅ Implementado (Frontend MVP)
- [x] Landing Page
- [x] Dashboard de Negócio com métricas
- [x] Calendário de marcações (vista mensal)
- [x] Gestão de Clientes
- [x] Gestão de Trabalhadores
- [x] Gestão de Serviços
- [x] Gestão de Inventário
- [x] Centro de Notificações
- [x] Relatórios Avançados
- [x] Tema Dark/Light

### 🚧 Em Desenvolvimento
- [ ] Sistema de Autenticação
- [ ] Calendário (vistas dia/semana)
- [ ] Formulários com validação
- [ ] Filtros e pesquisa avançada
- [ ] Responsividade mobile completa
- [ ] Estados de loading/erro
- [ ] Integração com backend

### 🔮 Planeado (Backend)
- [ ] API REST (FastAPI)
- [ ] Integração WhatsApp Business API
- [ ] Integração Instagram API
- [ ] Integração Gmail API
- [ ] Agente IA (OpenAI)
- [ ] Base de dados (Supabase)

---

## 👥 Equipa de Desenvolvimento

**Grupo 4 - IGE ISCTE**

| Nome | Papel | Email |
|------|-------|-------|
| **Afonso Cartaxo** | Head of Data and Backend Developer | ahcos@iscte-iul.pt |
| **Francisco Ribeiro** | Finance Director and Frontend Developer | fproo@iscte-iul.pt |
| **João Freire** | Communications Director and UI/UX Designer | jcfeo1@iscte-iul.pt |
| **Marta Pinto** | - | mcpoa3@iscte-iul.pt |
| **Miguel Ribeiro** | Backend Developer & System Architect | mproo@iscte-iul.pt |
| **Pedro Primo** | Director of UI/UX and Frontend Developer  | pgmpo@iscte-iul.pt |

---

## 📄 Licença

Este projeto é académico e foi desenvolvido no âmbito da UC de **Conceção e Viabilidade de Projeto de Base Tecnológica** no ISCTE.

---

## 📞 Contacto

Para questões sobre o projeto:
- Email: krondleai@gmail.com

---

## 🙏 Agradecimentos

- ISCTE - Instituto Universitário de Lisboa
- Professor Pedro Sebastião
- Professor André Xavier
- Todos os que testaram e deram feedback

---

**Desenvolvido com ❤️ pela equipa Krondle - ISCTE 2025**
