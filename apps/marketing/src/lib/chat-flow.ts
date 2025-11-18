// apps/marketing/src/lib/chat-flow.ts

import { ChatStep } from '@/types/chat'

export const chatFlow: Record<string, ChatStep> = {
  greeting: {
    id: 'greeting',
    botMessage: '👋 Olá! Sou o assistente virtual do Krondle.\n\nQuer agendar uma demonstração gratuita do nosso produto?',
    quickReplies: [
      { id: '1', text: '✅ Sim, quero!', value: 'sim' },
      { id: '2', text: 'ℹ️ Quero saber mais primeiro', value: 'info' },
    ],
    nextStep: 'ask_name',
  },
  
  show_info: {
    id: 'show_info',
    botMessage: '📊 Na demo de 30 minutos, vamos mostrar:\n\n• Como o bot responde clientes automaticamente\n• Integração com WhatsApp Business\n• Dashboard de gestão\n• Analytics em tempo real\n\nQuer agendar agora?',
    quickReplies: [
      { id: '1', text: '✅ Sim, vamos agendar!', value: 'sim' },
      { id: '2', text: '❌ Não, obrigado', value: 'nao' },
    ],
    nextStep: 'ask_name',
  },
  
  ask_name: {
    id: 'ask_name',
    botMessage: '😊 Perfeito! Qual é o seu nome?',
    inputType: 'text',
    nextStep: 'ask_email',
    validate: (input: string) => {
      if (input.trim().length < 2) return 'Por favor, insira um nome válido.'
      return true
    },
  },
  
  ask_email: {
    id: 'ask_email',
    botMessage: (context: any) => `Prazer em conhecê-lo, ${context.userData.name}! 👋\n\nQual é o seu email?`,
    inputType: 'email',
    nextStep: 'ask_company',
    validate: (input: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(input)) return 'Por favor, insira um email válido.'
      return true
    },
  },
  
  ask_company: {
    id: 'ask_company',
    botMessage: '🏢 Qual é o nome da sua empresa?',
    inputType: 'text',
    nextStep: 'ask_business_type',
  },
  
  ask_business_type: {
    id: 'ask_business_type',
    botMessage: '💼 Que tipo de negócio?',
    quickReplies: [
      { id: '1', text: '💇 Barbearia', value: 'barbearia' },
      { id: '2', text: '💅 Esteticista', value: 'esteticista' },
      { id: '3', text: '🏥 Clínica', value: 'clinica' },
      { id: '4', text: '🔧 Oficina', value: 'oficina' },
      { id: '5', text: '🎨 Outro', value: 'outro' },
    ],
    nextStep: 'ask_date',
  },
  
  ask_date: {
    id: 'ask_date',
    botMessage: '📅 Que dia prefere para a demo?',
    quickReplies: [
      { id: '1', text: 'Segunda-feira', value: 'segunda' },
      { id: '2', text: 'Terça-feira', value: 'terca' },
      { id: '3', text: 'Quarta-feira', value: 'quarta' },
      { id: '4', text: 'Quinta-feira', value: 'quinta' },
      { id: '5', text: 'Sexta-feira', value: 'sexta' },
    ],
    nextStep: 'ask_time',
  },
  
  ask_time: {
    id: 'ask_time',
    botMessage: '🕐 E que horas?',
    quickReplies: [
      { id: '1', text: '10:00', value: '10:00' },
      { id: '2', text: '11:00', value: '11:00' },
      { id: '3', text: '14:00', value: '14:00' },
      { id: '4', text: '15:00', value: '15:00' },
      { id: '5', text: '16:00', value: '16:00' },
      { id: '6', text: '17:00', value: '17:00' },
    ],
    nextStep: 'confirmation',
  },
  
  confirmation: {
    id: 'confirmation',
    botMessage: (context: any) => {
      const { name, email, company, businessType, preferredDate, preferredTime } = context.userData
      return `✅ Perfeito, ${name}!\n\n📋 Resumo da marcação:\n• Empresa: ${company}\n• Tipo: ${businessType}\n• Dia: ${preferredDate}\n• Hora: ${preferredTime}\n\n📧 Enviámos uma confirmação para ${email} com o link da reunião Zoom.\n\n🎉 Mal podemos esperar para mostrar o Krondle em ação!`
    },
    quickReplies: [
      { id: '1', text: '👍 Obrigado!', value: 'obrigado' },
    ],
    nextStep: 'end',
  },
  
  end: {
    id: 'end',
    botMessage: '😊 Até breve! Se tiver alguma dúvida, pode sempre falar connosco pelo email suporte@krondle.pt',
  },
  
  fallback: {
    id: 'fallback',
    botMessage: '🤔 Desculpe, não entendi. Pode reformular?',
  },
}

export function getNextStep(currentStepId: string, userInput?: string): string {
  const currentStep = chatFlow[currentStepId]
  
  if (!currentStep) return 'greeting'
  
  // Se tem quick replies e user escolheu uma
  if (currentStep.quickReplies && userInput) {
    const selectedReply = currentStep.quickReplies.find(r => r.value === userInput)
    
    // Casos especiais
    if (currentStepId === 'greeting' && userInput === 'info') {
      return 'show_info'
    }
    
    if (currentStepId === 'show_info' && userInput === 'nao') {
      return 'end'
    }
  }
  
  return currentStep.nextStep || 'end'
}

export function getBotMessage(stepId: string, context: any): string {
  const step = chatFlow[stepId]
  if (!step) return chatFlow.fallback.botMessage
  
  if (typeof step.botMessage === 'function') {
    return step.botMessage(context)
  }
  
  return step.botMessage
}
