// apps/marketing/src/pages/FAQPage.tsx

import { FAQHero } from "../components/faq/FAQHero"
import { FAQCategory } from "../components/faq/FAQCategory"
import { 
  Bot, 
  CreditCard, 
  Shield, 
  Settings, 
  LifeBuoy 
} from "lucide-react"

export default function FAQPage() {
  // 1️⃣ GERAL - Sobre o Krondle
  const generalFAQs = [
    {
      question: "O que é o Krondle?",
      answer: "O Krondle é uma plataforma inteligente de agendamento automático que utiliza Inteligência Artificial para gerir marcações através do WhatsApp, Instagram e Email. Elimina a necessidade de responder manualmente a pedidos de marcação, funcionando 24/7 de forma completamente automática."
    },
    {
      question: "Como funciona a Inteligência Artificial do Krondle?",
      answer: "A nossa IA interpreta mensagens em linguagem natural, identifica o tipo de serviço pretendido, consulta o calendário disponível e propõe automaticamente os melhores horários. Aprende com cada interação para melhorar as respostas e adaptar-se ao seu negócio."
    },
    {
      question: "Que canais de comunicação são suportados?",
      answer: "Atualmente o Krondle funciona com:\n• WhatsApp (via API oficial do Meta)\n• Instagram Direct Messages\n• Email (Gmail e outros)\n\nEstamos a trabalhar em chamadas telefónicas em tempo real para breve!"
    },
    {
      question: "É difícil de configurar?",
      answer: "Não! O Krondle foi desenhado para ser extremamente simples. A configuração inicial demora apenas 5 minutos:\n1. Criar conta\n2. Conectar WhatsApp/Instagram\n3. Adicionar serviços e preços\n4. Definir horários\n\nPronto! O sistema começa a funcionar imediatamente."
    },
    {
      question: "O Krondle funciona para o meu tipo de negócio?",
      answer: "O Krondle foi desenvolvido para pequenas e médias empresas que prestam serviços com marcação, incluindo:\n• Barbearias e cabeleireiros\n• Clínicas e consultórios\n• Centros de estética\n• Oficinas e reparações\n• Personal trainers\n• Qualquer negócio que trabalhe por marcação!"
    },
    {
      question: "Preciso de conhecimentos técnicos?",
      answer: "Absolutamente não! O Krondle foi pensado para ser utilizado por qualquer pessoa, sem necessidade de conhecimentos técnicos. A interface é intuitiva e temos suporte em português para ajudar em qualquer dúvida."
    }
  ]

  // 2️⃣ PREÇOS & PLANOS
  const pricingFAQs = [
    {
      question: "Que planos existem e qual devo escolher?",
      answer: "Temos 3 planos:\n\n• BASIC (29€/mês): Ideal para começar - 1 trabalhador, WhatsApp, 50 marcações/mês\n• PRO (59€/mês): O mais popular - até 5 trabalhadores, todos os canais, marcações ilimitadas, analytics\n• PREMIUM (99€/mês): Para negócios em crescimento - trabalhadores ilimitados, API, white-label, gestor dedicado\n\nRecomendamos começar pelo PRO para ter acesso completo às funcionalidades."
    },
    {
      question: "Posso mudar de plano a qualquer momento?",
      answer: "Sim! Pode fazer upgrade ou downgrade a qualquer momento. O upgrade é aplicado imediatamente, enquanto o downgrade entra em vigor no próximo ciclo de faturação. Não há penalizações nem taxas adicionais."
    },
    {
      question: "O que acontece após o período de teste gratuito?",
      answer: "Após os 14 dias de teste grátis, será automaticamente cobrado o valor do plano escolhido. Pode cancelar a qualquer momento durante o período de teste sem qualquer custo. Não pedimos cartão de crédito para começar o teste!"
    },
    {
      question: "Há custos escondidos ou taxas de configuração?",
      answer: "Não! O preço que vê é o preço que paga. Não há:\n• Taxas de setup\n• Custos de configuração\n• Taxas por mensagem\n• Custos escondidos\n\nTudo está incluído no preço mensal fixo."
    },
    {
      question: "Como funciona o desconto anual?",
      answer: "Ao escolher pagamento anual, poupa 20% do valor total:\n• Basic: 278€/ano (em vez de 348€) - poupa 70€\n• Pro: 566€/ano (em vez de 708€) - poupa 142€\n• Premium: 950€/ano (em vez de 1188€) - poupa 238€\n\nO pagamento é feito numa única cobrança anual."
    },
    {
      question: "Posso cancelar a minha subscrição?",
      answer: "Sim, pode cancelar a qualquer momento sem contratos de permanência. Se cancelar, o serviço continua ativo até ao fim do período já pago. Não há taxas de cancelamento."
    },
    {
      question: "Que métodos de pagamento aceitam?",
      answer: "Aceitamos:\n• Cartões de crédito (Visa, Mastercard, American Express)\n• Cartões de débito\n• MB WAY\n• Transferência bancária (planos anuais)\n\nTodos os pagamentos são processados de forma segura através do Stripe."
    }
  ]

  // 3️⃣ SEGURANÇA & PRIVACIDADE
  const securityFAQs = [
    {
      question: "Os meus dados estão seguros?",
      answer: "Sim! Levamos a segurança muito a sério:\n• Encriptação SSL/TLS em todas as comunicações\n• Dados armazenados em servidores seguros na Europa\n• Backups automáticos diários\n• Acesso restrito e autenticação de dois fatores\n• Conformidade total com RGPD"
    },
    {
      question: "O Krondle é RGPD compliant?",
      answer: "Sim, estamos em total conformidade com o Regulamento Geral de Proteção de Dados (RGPD). Todos os dados dos seus clientes são tratados de acordo com a legislação europeia de proteção de dados. Tem controlo total sobre os dados e pode exportá-los ou eliminá-los a qualquer momento."
    },
    {
      question: "Onde são armazenados os dados?",
      answer: "Todos os dados são armazenados em servidores seguros localizados na Europa (Supabase), garantindo conformidade com as leis europeias de proteção de dados. Os dados nunca saem da União Europeia."
    },
    {
      question: "Quem tem acesso aos dados dos meus clientes?",
      answer: "Apenas você e os utilizadores que autorizar na sua conta têm acesso aos dados dos clientes. A nossa equipa técnica apenas acede aos dados em situações de suporte técnico, com o seu consentimento explícito, e sempre de forma encriptada."
    },
    {
      question: "Posso exportar ou eliminar os meus dados?",
      answer: "Sim! Pode exportar todos os seus dados (clientes, marcações, conversas) a qualquer momento em formato CSV ou JSON. Se cancelar a conta, todos os dados são permanentemente eliminados após 30 dias, conforme o RGPD."
    }
  ]

  // 4️⃣ FUNCIONALIDADES
  const featuresFAQs = [
    {
      question: "Como funciona a marcação automática?",
      answer: "Quando um cliente envia uma mensagem (ex: 'Quero cortar cabelo terça à tarde'), a IA:\n1. Interpreta o pedido\n2. Identifica o serviço pretendido\n3. Consulta disponibilidade no calendário\n4. Propõe 2-3 horários disponíveis\n5. Cliente confirma\n6. Marcação registada automaticamente\n7. Lembretes enviados antes da hora\n\nTudo em 2-3 segundos!"
    },
    {
      question: "Posso personalizar as respostas da IA?",
      answer: "Sim! Pode configurar:\n• Tom de voz (formal, casual, amigável)\n• Mensagens de boas-vindas\n• Mensagens de confirmação\n• Lembretes personalizados\n• Respostas automáticas para situações específicas\n\nA IA mantém sempre o tom que definir."
    },
    {
      question: "O Krondle integra com o meu calendário atual?",
      answer: "Sim! O Krondle tem integração nativa com:\n• Google Calendar\n• Outlook Calendar\n• Apple Calendar (via CalDAV)\n\nAs marcações são sincronizadas em tempo real nos dois sentidos."
    },
    {
      question: "Que analytics e relatórios estão incluídos?",
      answer: "O dashboard do Krondle mostra:\n• Número de marcações (diário/semanal/mensal)\n• Taxa de ocupação\n• Receita gerada\n• Clientes mais frequentes\n• Serviços mais populares\n• Horários de pico\n• Taxa de no-shows\n• Tempo médio de resposta\n\nPlanos Pro e Premium têm relatórios avançados exportáveis."
    },
    {
      question: "Posso adicionar ou remover trabalhadores?",
      answer: "Sim! No painel de gestão pode:\n• Adicionar novos trabalhadores\n• Definir horários individuais\n• Atribuir serviços específicos\n• Gerir permissões\n• Remover trabalhadores\n\nNos planos Basic (1), Pro (5) e Premium (ilimitado)."
    },
    {
      question: "O sistema envia lembretes automáticos?",
      answer: "Sim! O Krondle envia automaticamente:\n• Confirmação imediata após marcação\n• Lembrete 24h antes\n• Lembrete 1h antes\n• Possibilidade de reagendar por mensagem\n\nPode configurar quando e como os lembretes são enviados."
    }
  ]

  // 5️⃣ SUPORTE & AJUDA
  const supportFAQs = [
    {
      question: "Que tipo de suporte está incluído?",
      answer: "Todos os planos incluem:\n• Suporte por email\n• Base de conhecimento completa\n• Tutoriais em vídeo\n• Documentação detalhada\n\nPlanos Pro: Suporte prioritário (resposta em 24h)\nPlano Premium: Gestor de conta dedicado + suporte 24/7"
    },
    {
      question: "O suporte é em português?",
      answer: "Sim! Toda a equipa fala português e o suporte é prestado no nosso idioma. A interface da plataforma, documentação e tutoriais também estão disponíveis em português."
    },
    {
      question: "Como posso contactar o suporte?",
      answer: "Pode contactar-nos através de:\n• Email: krondleai@gmail.com\n• Chat na plataforma (botão no canto inferior direito)\n• Telefone: +351 XXX XXX XXX (Premium)\n\nTempo médio de resposta: 2-4 horas (Basic/Pro), imediato (Premium)"
    },
    {
      question: "Existe documentação e tutoriais?",
      answer: "Sim! Disponibilizamos:\n• Guia de início rápido\n• Documentação completa online\n• Tutoriais em vídeo passo-a-passo\n• FAQs técnicas\n• Casos de uso reais\n• Webinars mensais gratuitos\n\nTudo acessível na sua conta."
    },
    {
      question: "Oferecem formação para a equipa?",
      answer: "Sim! O plano Premium inclui:\n• Sessão de onboarding personalizada (1h)\n• Formação para toda a equipa\n• Manuais personalizados\n• Suporte contínuo\n\nPlanos Basic e Pro têm acesso a webinars e tutoriais."
    }
  ]

  return (
    <div className="min-h-screen">
      <FAQHero />

      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto">
          
          <FAQCategory
            icon={Bot}
            title="Geral - Sobre o Krondle"
            description="Perguntas gerais sobre o que é e como funciona o Krondle"
            items={generalFAQs}
            delay={0.1}
          />

          <FAQCategory
            icon={CreditCard}
            title="Preços & Planos"
            description="Informações sobre preços, planos e pagamentos"
            items={pricingFAQs}
            delay={0.2}
          />

          <FAQCategory
            icon={Shield}
            title="Segurança & Privacidade"
            description="Como protegemos os seus dados e garantimos conformidade com RGPD"
            items={securityFAQs}
            delay={0.3}
          />

          <FAQCategory
            icon={Settings}
            title="Funcionalidades"
            description="Detalhes sobre como usar as funcionalidades do Krondle"
            items={featuresFAQs}
            delay={0.4}
          />

          <FAQCategory
            icon={LifeBuoy}
            title="Suporte & Ajuda"
            description="Como obter ajuda e suporte técnico"
            items={supportFAQs}
            delay={0.5}
          />

        </div>
      </section>
    </div>
  )
}