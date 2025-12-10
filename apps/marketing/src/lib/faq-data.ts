// apps/marketing/src/lib/faq-data.ts

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'geral' | 'precos' | 'seguranca' | 'funcionalidades' | 'suporte';
  keywords: string[];
}

export const faqData: FAQItem[] = [
  // ==================== GERAL ====================
  {
    id: 'faq-geral-1',
    question: 'O que é o Krondle?',
    answer: 'O Krondle é uma plataforma inteligente de agendamento automático que utiliza Inteligência Artificial para gerir marcações através do WhatsApp e Instagram. Elimina a necessidade de responder manualmente a pedidos de marcação, funcionando 24/7 de forma completamente automática.',
    category: 'geral',
    keywords: ['krondle', 'o que é', 'plataforma', 'ia', 'inteligencia artificial', 'whatsapp', 'instagram'],
  },
  {
    id: 'faq-geral-2',
    question: 'Como funciona a Inteligência Artificial do Krondle?',
    answer: 'A nossa IA interpreta mensagens em linguagem natural, identifica o tipo de serviço pretendido, consulta o calendário disponível e propõe automaticamente os melhores horários. Aprende com cada interação para melhorar as respostas e adaptar-se ao seu negócio.',
    category: 'geral',
    keywords: ['ia', 'inteligencia', 'artificial', 'como funciona', 'linguagem natural', 'aprende'],
  },
  {
    id: 'faq-geral-3',
    question: 'Que canais de comunicação são suportados?',
    answer: 'Atualmente o Krondle funciona com WhatsApp Business e Instagram Direct Messages. Estamos a trabalhar em chamadas telefónicas em tempo real para o futuro!',
    category: 'geral',
    keywords: ['canais', 'whatsapp', 'instagram', 'comunicacao', 'suportados', 'telefone'],
  },
  {
    id: 'faq-geral-4',
    question: 'É difícil de configurar?',
    answer: 'Não! O Krondle foi desenhado para ser extremamente simples. A configuração inicial demora cerca de 1 hora: criar conta, conectar WhatsApp/Instagram, adicionar serviços e preços, definir horários. Pronto! O sistema começa a funcionar imediatamente.',
    category: 'geral',
    keywords: ['configurar', 'dificil', 'setup', 'instalacao', 'simples', 'facil'],
  },
  {
    id: 'faq-geral-5',
    question: 'O Krondle funciona para o meu tipo de negócio?',
    answer: 'O Krondle foi desenvolvido para pequenas e médias empresas que prestam serviços com marcação: barbearias, cabeleireiros, clínicas, consultórios, centros de estética, oficinas, personal trainers - qualquer negócio que trabalhe por marcação via WhatsApp e Instagram!',
    category: 'geral',
    keywords: ['negocio', 'barbearia', 'clinica', 'estetica', 'tipo', 'serve', 'funciona'],
  },
  {
    id: 'faq-geral-6',
    question: 'Preciso de conhecimentos técnicos?',
    answer: 'Absolutamente não! O Krondle foi pensado para ser utilizado por qualquer pessoa, sem necessidade de conhecimentos técnicos. A interface é intuitiva e temos suporte em português para ajudar em qualquer dúvida.',
    category: 'geral',
    keywords: ['tecnicos', 'conhecimentos', 'dificil', 'complicado', 'portugues', 'facil'],
  },

  // ==================== PREÇOS & PLANOS ====================
  {
    id: 'faq-precos-1',
    question: 'Que planos existem e qual devo escolher?',
    answer: 'Temos 3 planos: BASIC (29€/mês) para 1 trabalhador e 50 marcações; PRO (59€/mês) o mais popular, até 5 trabalhadores com marcações ilimitadas e analytics; PREMIUM (99€/mês) para trabalhadores ilimitados, API e gestor dedicado. Recomendamos começar pelo PRO.',
    category: 'precos',
    keywords: ['planos', 'precos', 'quanto custa', 'valor', 'mensalidade', 'basic', 'pro', 'premium'],
  },
  {
    id: 'faq-precos-2',
    question: 'Posso mudar de plano a qualquer momento?',
    answer: 'Sim! Pode fazer upgrade ou downgrade a qualquer momento. O upgrade é aplicado imediatamente, enquanto o downgrade entra em vigor no próximo ciclo de faturação. Não há penalizações nem taxas adicionais.',
    category: 'precos',
    keywords: ['mudar', 'plano', 'upgrade', 'downgrade', 'alterar', 'trocar'],
  },
  {
    id: 'faq-precos-3',
    question: 'Há custos escondidos ou taxas de configuração?',
    answer: 'Existe apenas uma taxa única de configuração de 50€ que cobre todo o processo de setup inicial, incluindo integração do WhatsApp, configuração do bot, personalização e testes. Depois disso, paga apenas o valor mensal fixo do plano. Sem custos escondidos.',
    category: 'precos',
    keywords: ['custos', 'escondidos', 'taxas', 'configuracao', 'setup', 'surpresas'],
  },
  {
    id: 'faq-precos-4',
    question: 'Como funciona o desconto anual?',
    answer: 'Ao escolher pagamento anual, poupa até 20%: Basic 420€/ano (poupa 48€), Pro 600€/ano (poupa 108€), Premium 948€/ano (poupa 240€). O pagamento é feito numa única cobrança anual.',
    category: 'precos',
    keywords: ['desconto', 'anual', 'poupar', 'ano', 'pagamento'],
  },
  {
    id: 'faq-precos-5',
    question: 'Posso cancelar a minha subscrição?',
    answer: 'Sim, pode cancelar a qualquer momento sem contratos de permanência. Se cancelar, o serviço continua ativo até ao fim do período já pago. Não há taxas de cancelamento.',
    category: 'precos',
    keywords: ['cancelar', 'subscrição', 'contrato', 'permanencia', 'sair'],
  },
  {
    id: 'faq-precos-6',
    question: 'Que métodos de pagamento aceitam?',
    answer: 'Aceitamos cartões de crédito (Visa, Mastercard, American Express), cartões de débito, MB WAY e transferência bancária (planos anuais). Todos os pagamentos são processados de forma segura através do Stripe.',
    category: 'precos',
    keywords: ['pagamento', 'metodos', 'cartao', 'mbway', 'stripe', 'pagar'],
  },

  // ==================== SEGURANÇA & PRIVACIDADE ====================
  {
    id: 'faq-seguranca-1',
    question: 'Os meus dados estão seguros?',
    answer: 'Sim! Encriptação SSL/TLS em todas as comunicações, dados armazenados em servidores seguros na Europa, backups automáticos diários, autenticação de dois fatores e conformidade total com RGPD.',
    category: 'seguranca',
    keywords: ['dados', 'seguros', 'seguranca', 'protegidos', 'encriptacao', 'ssl'],
  },
  {
    id: 'faq-seguranca-2',
    question: 'O Krondle é RGPD compliant?',
    answer: 'Estamos em total conformidade com o RGPD. Todos os dados dos seus clientes são tratados de acordo com a legislação europeia de proteção de dados. Tem controlo total e pode exportá-los ou eliminá-los a qualquer momento.',
    category: 'seguranca',
    keywords: ['rgpd', 'gdpr', 'conformidade', 'lei', 'protecao', 'dados'],
  },
  {
    id: 'faq-seguranca-3',
    question: 'Onde são armazenados os dados?',
    answer: 'Todos os dados são armazenados em servidores seguros localizados na Europa (Supabase), garantindo conformidade com as leis europeias. Os dados nunca saem da União Europeia.',
    category: 'seguranca',
    keywords: ['armazenados', 'servidores', 'europa', 'onde', 'localizacao', 'supabase'],
  },
  {
    id: 'faq-seguranca-4',
    question: 'Posso exportar ou eliminar os meus dados?',
    answer: 'Sim! Pode exportar todos os seus dados (clientes, marcações, conversas) a qualquer momento em formato CSV ou JSON. Se cancelar a conta, todos os dados são permanentemente eliminados após 30 dias, conforme o RGPD.',
    category: 'seguranca',
    keywords: ['exportar', 'eliminar', 'apagar', 'dados', 'csv', 'json', 'backup'],
  },

  // ==================== FUNCIONALIDADES ====================
  {
    id: 'faq-func-1',
    question: 'Como funciona a marcação automática?',
    answer: 'Quando um cliente envia mensagem, a IA interpreta o pedido, identifica o serviço, consulta disponibilidade no calendário, propõe 2-3 horários, cliente confirma e a marcação é registada automaticamente. Tudo em 2-3 segundos!',
    category: 'funcionalidades',
    keywords: ['marcacao', 'automatica', 'como funciona', 'processo', 'agendar'],
  },
  {
    id: 'faq-func-2',
    question: 'Posso personalizar as respostas da IA?',
    answer: 'Sim! Pode configurar tom de voz (formal, casual, amigável), mensagens de boas-vindas, confirmações, lembretes personalizados e respostas automáticas para situações específicas. A IA mantém sempre o tom que definir.',
    category: 'funcionalidades',
    keywords: ['personalizar', 'respostas', 'tom', 'mensagens', 'customizar', 'editar'],
  },
  {
    id: 'faq-func-3',
    question: 'O Krondle integra com o meu calendário atual?',
    answer: 'Sim! O Krondle tem integração nativa com Google Calendar. As marcações são sincronizadas em tempo real nos dois sentidos.',
    category: 'funcionalidades',
    keywords: ['calendario', 'google', 'calendar', 'integracao', 'sincronizar'],
  },
  {
    id: 'faq-func-4',
    question: 'Que analytics e relatórios estão incluídos?',
    answer: 'O dashboard mostra: número de marcações, taxa de ocupação, receita gerada, clientes frequentes, serviços populares, horários de pico, taxa de no-shows e tempo médio de resposta. Planos Pro e Premium têm relatórios avançados exportáveis.',
    category: 'funcionalidades',
    keywords: ['analytics', 'relatorios', 'dashboard', 'estatisticas', 'metricas', 'dados'],
  },
  {
    id: 'faq-func-5',
    question: 'Posso adicionar ou remover trabalhadores?',
    answer: 'Sim! No painel pode adicionar trabalhadores, definir horários individuais, atribuir serviços específicos, gerir permissões e remover trabalhadores. Planos: Basic (1), Pro (5) e Premium (ilimitado).',
    category: 'funcionalidades',
    keywords: ['trabalhadores', 'adicionar', 'remover', 'equipa', 'funcionarios', 'colaboradores'],
  },

  // ==================== SUPORTE & AJUDA ====================
  {
    id: 'faq-suporte-1',
    question: 'Que tipo de suporte está incluído?',
    answer: 'Todos os planos incluem suporte por email, base de conhecimento, tutoriais em vídeo e documentação. Pro tem suporte prioritário (24h). Premium inclui gestor de conta dedicado + suporte 24/7.',
    category: 'suporte',
    keywords: ['suporte', 'ajuda', 'apoio', 'incluido', 'help', 'assistencia'],
  },
  {
    id: 'faq-suporte-2',
    question: 'O suporte é em português?',
    answer: 'Sim! Toda a equipa fala português e o suporte é prestado no nosso idioma. A interface, documentação e tutoriais também estão em português.',
    category: 'suporte',
    keywords: ['portugues', 'lingua', 'idioma', 'pt', 'brasil'],
  },
  {
    id: 'faq-suporte-3',
    question: 'Como posso contactar o suporte?',
    answer: 'Pode contactar-nos através de email (krondleai@gmail.com) ou chat na plataforma (botão no canto inferior direito).',
    category: 'suporte',
    keywords: ['contactar', 'contacto', 'email', 'chat', 'falar', 'ajuda'],
  },
  {
    id: 'faq-suporte-4',
    question: 'Existe documentação e tutoriais?',
    answer: 'Sim! Disponibilizamos guia de início rápido, tutoriais em vídeo passo-a-passo e casos de uso reais. Tudo acessível na sua conta.',
    category: 'suporte',
    keywords: ['documentacao', 'tutoriais', 'guia', 'ajuda', 'aprender', 'videos'],
  },
];

/**
 * Procura FAQs relevantes baseado na query do utilizador
 */
export function searchFAQ(query: string, limit: number = 3): FAQItem[] {
  const lowerQuery = query.toLowerCase().trim();
  
  // Palavras irrelevantes (stopwords)
  const stopWords = ['o', 'a', 'de', 'para', 'com', 'como', 'que', 'é', 'em', 'do', 'da', 'os', 'as'];
  
  // Extrair palavras-chave da query
  const queryWords = lowerQuery
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.includes(word));

  if (queryWords.length === 0) return [];

  // Calcular score para cada FAQ
  const scored = faqData.map(faq => {
    let score = 0;

    // Match exato na pergunta (peso máximo)
    if (faq.question.toLowerCase().includes(lowerQuery)) {
      score += 100;
    }

    // Match em keywords (peso alto)
    faq.keywords.forEach(keyword => {
      queryWords.forEach(word => {
        if (keyword.toLowerCase().includes(word)) {
          score += 10;
        }
        if (word.includes(keyword.toLowerCase())) {
          score += 5;
        }
      });
    });

    // Match parcial na pergunta (peso médio)
    queryWords.forEach(word => {
      if (faq.question.toLowerCase().includes(word)) {
        score += 3;
      }
      if (faq.answer.toLowerCase().includes(word)) {
        score += 1;
      }
    });

    return { faq, score };
  });

  // Filtrar scores > 0 e ordenar
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.faq);
}

/**
 * Verifica se a query parece ser uma pergunta FAQ
 */
export function isFAQQuery(query: string): boolean {
  const lowerQuery = query.toLowerCase();
  
  const faqIndicators = [
    'como',
    'quanto',
    'o que',
    'qual',
    'onde',
    'quando',
    'quem',
    'porque',
    'porquê',
    'funciona',
    'custa',
    'preço',
    'grátis',
    'seguro',
    'plano',
    'posso',
    'consigo',
    'existe',
    'há',
    'tem',
  ];

  return faqIndicators.some(indicator => lowerQuery.includes(indicator));
}