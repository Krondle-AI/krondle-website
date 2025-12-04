// apps/marketing/src/lib/faq-data.ts

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: 'geral' | 'tecnico' | 'preco' | 'seguranca';
    keywords: string[]; // Palavras-chave para matching
  }
  
  export const faqData: FAQItem[] = [
    // GERAL
    {
      id: 'faq-1',
      question: 'O que é o Krondle?',
      answer: 'O Krondle é uma plataforma de agendamento automático que responde aos seus clientes via WhatsApp, Instagram e Gmail 24/7, usando inteligência artificial. Marca automaticamente, envia lembretes e elimina trabalho manual.',
      category: 'geral',
      keywords: ['krondle', 'o que é', 'plataforma', 'funciona', 'serve'],
    },
    {
      id: 'faq-2',
      question: 'Como funciona o agendamento automático?',
      answer: 'Quando um cliente envia mensagem, a nossa IA interpreta o pedido, verifica disponibilidade no seu calendário e propõe horários. Após confirmação, a marcação é registada automaticamente e o cliente recebe confirmação.',
      category: 'geral',
      keywords: ['como funciona', 'agendamento', 'automático', 'marcar', 'processo'],
    },
    {
      id: 'faq-3',
      question: 'Que canais são suportados?',
      answer: 'O Krondle integra com WhatsApp (via API oficial), Instagram Direct Messages e Gmail. Todos funcionam 24/7 com respostas automáticas.',
      category: 'tecnico',
      keywords: ['canais', 'whatsapp', 'instagram', 'gmail', 'email', 'suportados'],
    },
    {
      id: 'faq-4',
      question: 'Preciso de conhecimentos técnicos?',
      answer: 'Não! O Krondle foi desenhado para ser simples. Liga as suas contas (WhatsApp/Instagram/Gmail), configura horários e serviços através de uma interface intuitiva, e está pronto. Não precisa de programar nada.',
      category: 'tecnico',
      keywords: ['técnicos', 'difícil', 'complicado', 'programar', 'conhecimentos', 'instalar'],
    },
  
    // PREÇOS
    {
      id: 'faq-5',
      question: 'Quanto custa o Krondle?',
      answer: 'Temos 3 planos: Starter (€29/mês - 1 utilizador), Professional (€79/mês - 5 utilizadores) e Enterprise (€149/mês - ilimitado). Todos incluem WhatsApp, Instagram e Gmail.',
      category: 'preco',
      keywords: ['preço', 'custo', 'quanto', 'valor', 'mensalidade', 'planos'],
    },
    {
      id: 'faq-6',
      question: 'Têm período experimental gratuito?',
      answer: 'Não temos trial gratuito, mas pode agendar uma demo connosco para ver o sistema em ação antes de subscrever.',
      category: 'preco',
      keywords: ['grátis', 'trial', 'teste', 'experimental', 'free', 'gratuito'],
    },
    {
      id: 'faq-7',
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim! Os nossos planos são mensais sem fidelização. Pode cancelar a qualquer momento e só paga pelo mês corrente.',
      category: 'preco',
      keywords: ['cancelar', 'contrato', 'fidelização', 'compromisso', 'sair'],
    },
  
    // SEGURANÇA
    {
      id: 'faq-8',
      question: 'Os meus dados estão seguros?',
      answer: 'Sim! Cumprimos o RGPD europeu, todos os dados são encriptados, e usamos servidores seguros na Europa. Nunca partilhamos informações com terceiros.',
      category: 'seguranca',
      keywords: ['segurança', 'dados', 'rgpd', 'privacidade', 'protegidos', 'seguros'],
    },
    {
      id: 'faq-9',
      question: 'Quem tem acesso às mensagens dos clientes?',
      answer: 'Apenas você e a sua equipa autorizada têm acesso. As mensagens são encriptadas e armazenadas de forma segura. A IA processa localmente sem expor dados.',
      category: 'seguranca',
      keywords: ['acesso', 'mensagens', 'privacidade', 'confidencial', 'quem vê'],
    },
  
    // TÉCNICO
    {
      id: 'faq-10',
      question: 'Funciona com o meu calendário atual?',
      answer: 'Sim! Integramos com Google Calendar, Outlook e outros calendários populares. As marcações sincronizam automaticamente.',
      category: 'tecnico',
      keywords: ['calendário', 'google calendar', 'outlook', 'integração', 'sincronizar'],
    },
    {
      id: 'faq-11',
      question: 'E se a IA não entender a mensagem?',
      answer: 'A IA está treinada para entender linguagem natural, mas se não conseguir interpretar, pede esclarecimentos ao cliente de forma educada ou encaminha para você.',
      category: 'tecnico',
      keywords: ['ia não entende', 'erro', 'não funciona', 'não compreende', 'mensagem errada'],
    },
    {
      id: 'faq-12',
      question: 'Posso personalizar as respostas automáticas?',
      answer: 'Sim! Pode personalizar o tom, as mensagens e até criar respostas específicas para diferentes situações ou serviços.',
      category: 'tecnico',
      keywords: ['personalizar', 'respostas', 'mensagens', 'customizar', 'editar', 'mudar'],
    },
  ];
  
  /**
   * Procura FAQs relevantes baseado na query do utilizador
   */
  export function searchFAQ(query: string, limit: number = 3): FAQItem[] {
    const lowerQuery = query.toLowerCase().trim();
    
    // Palavras irrelevantes
    const stopWords = ['o', 'a', 'de', 'para', 'com', 'como', 'que', 'é', 'em'];
    
    // Extrair palavras-chave da query
    const queryWords = lowerQuery
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopWords.includes(word));
  
    if (queryWords.length === 0) return [];
  
    // Calcular score para cada FAQ
    const scored = faqData.map(faq => {
      let score = 0;
  
      // Match exato na pergunta
      if (faq.question.toLowerCase().includes(lowerQuery)) {
        score += 100;
      }
  
      // Match em keywords
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
  
      // Match parcial na pergunta
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
      'funciona',
      'custa',
      'preço',
      'grátis',
      'seguro',
      'trial',
    ];
  
    return faqIndicators.some(indicator => lowerQuery.includes(indicator));
  }