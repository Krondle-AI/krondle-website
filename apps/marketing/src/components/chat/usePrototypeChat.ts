// apps/marketing/src/components/chat/usePrototypeChat.ts
'use client'

import { useState, useEffect, useRef } from 'react'
import { Message, ConversationContext, QuickReply } from '../../types/chat'
import { chatFlow, getNextStep } from '../../lib/chat-flow'
import { searchFAQ } from '../../lib/faq-data'

// Helper para resolver botMessage (pode ser string ou função)
const resolveBotMessage = (
  message: string | ((context: ConversationContext) => string),
  context: ConversationContext
): string => {
  return typeof message === 'function' ? message(context) : message
}

export function usePrototypeChat() {
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: `msg_${Date.now()}`,
      text: '👋 Olá! Sou o assistente virtual do Krondle. Como posso ajudar?',
      sender: 'bot',
      timestamp: new Date(),
      status: 'read',
    },
  ])

  const [quickReplies, setQuickReplies] = useState<QuickReply[]>([
    { id: 'schedule', text: '📅 Agendar reunião', value: 'agendar' },
    { id: 'faq', text: '❓ Tenho uma pergunta', value: 'faq' },
  ])

  const [isTyping, setIsTyping] = useState(false)
  const [mode, setMode] = useState<'initial' | 'scheduling' | 'faq'>('initial')
  
  const [context, setContext] = useState<ConversationContext>({
    currentStep: 'greeting',
    userData: {},
    conversationId: `conv_${Date.now()}`,
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const unansweredCount = useRef(0)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const addBotMessage = (text: string, replies?: QuickReply[]) => {
    const botMessage: Message = {
      id: `msg_${Date.now()}`,
      text,
      sender: 'bot',
      timestamp: new Date(),
      status: 'read',
    }

    setMessages((prev) => [...prev, botMessage])
    setQuickReplies(replies || [])
  }

  const addUserMessage = (text: string) => {
    const userMessage: Message = {
      id: `msg_${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent',
    }

    setMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      )
    }, 200)

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: 'read' } : msg
        )
      )
    }, 400)
  }

  const handleFAQQuery = async (query: string) => {
    addUserMessage(query)
    setQuickReplies([])
    setIsTyping(true)

    await new Promise(resolve => setTimeout(resolve, 800))

    const results = searchFAQ(query, 3)

    setIsTyping(false)

    if (results.length > 0) {
      unansweredCount.current = 0
      addBotMessage(results[0].answer)

      if (results.length > 1) {
        setTimeout(() => {
          const otherQuestions = results.slice(1, 3).map((faq) => ({
            id: `faq-${faq.id}`,
            text: faq.question,
            value: faq.question,
          }))

          addBotMessage(
            'Talvez estas também ajudem:',
            [
              ...otherQuestions,
              { id: 'back', text: '↩️ Voltar ao menu', value: 'menu' },
            ]
          )
        }, 1000)
      } else {
        setTimeout(() => {
          addBotMessage(
            'Posso ajudar com mais alguma coisa?',
            [
              { id: 'schedule', text: '📅 Agendar reunião', value: 'agendar' },
              { id: 'faq-more', text: '❓ Outra pergunta', value: 'faq' },
            ]
          )
        }, 1500)
      }
    } else {
      unansweredCount.current += 1

      if (unansweredCount.current >= 2) {
        addBotMessage(
          'Desculpe, não encontrei uma resposta específica. Quer que um humano entre em contacto consigo por email? 📧',
          [
            { id: 'email-yes', text: '✅ Sim, por favor', value: 'email_sim' },
            { id: 'email-no', text: '❌ Não, obrigado', value: 'menu' },
          ]
        )
      } else {
        addBotMessage(
          'Hmm, não tenho certeza sobre isso. Pode reformular a pergunta ou escolher uma opção:',
          [
            { id: 'schedule', text: '📅 Agendar reunião', value: 'agendar' },
            { id: 'faq-topics', text: '📚 Ver temas FAQ', value: 'faq_temas' },
            { id: 'email', text: '📧 Falar com humano', value: 'email_sim' },
          ]
        )
      }
    }
  }

  const showFAQTopics = () => {
    addBotMessage(
      'Sobre o que quer saber?',
      [
        { id: 'faq-geral', text: '🏢 Informações gerais', value: 'o que é krondle' },
        { id: 'faq-preco', text: '💰 Preços e planos', value: 'quanto custa' },
        { id: 'faq-tecnico', text: '⚙️ Como funciona', value: 'como funciona' },
        { id: 'faq-seguranca', text: '🔒 Segurança', value: 'dados seguros' },
        { id: 'back', text: '↩️ Voltar', value: 'menu' },
      ]
    )
  }

  const handleEmailRequest = () => {
    setMode('scheduling')
    setQuickReplies([])

    addBotMessage('Perfeito! Vou pedir alguns dados para que alguém entre em contacto consigo.')

    setTimeout(() => {
      addBotMessage('Qual é o seu nome?')
      setContext({ ...context, currentStep: 'ask_name' })
    }, 1000)
  }

  const handleUserInput = async (input: string, isQuickReply: boolean = false) => {
    setQuickReplies([])

    // MODO INICIAL
    if (mode === 'initial') {
      if (input === 'agendar') {
        addUserMessage('📅 Quero agendar uma reunião')
        setMode('scheduling')
        
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          
          const greetingStep = chatFlow.greeting
          const messageText = resolveBotMessage(greetingStep.botMessage, context)
          
          addBotMessage(messageText, greetingStep.quickReplies)
          setContext({ ...context, currentStep: 'greeting' })
        }, 800)
        return
      }

      if (input === 'faq') {
        addUserMessage('❓ Tenho uma pergunta')
        setMode('faq')
        
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          addBotMessage('Claro! Pode escrever a sua pergunta ou escolher um tema:')
          setTimeout(() => showFAQTopics(), 500)
        }, 800)
        return
      }
    }

    // MODO FAQ
    if (mode === 'faq') {
      if (input === 'menu') {
        addUserMessage('↩️ Voltar ao menu')
        setMode('initial')
        unansweredCount.current = 0
        
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          addBotMessage(
            'Como posso ajudar?',
            [
              { id: 'schedule', text: '📅 Agendar reunião', value: 'agendar' },
              { id: 'faq', text: '❓ Tenho uma pergunta', value: 'faq' },
            ]
          )
        }, 600)
        return
      }

      if (input === 'faq_temas') {
        addUserMessage('📚 Ver temas FAQ')
        showFAQTopics()
        return
      }

      if (input === 'email_sim') {
        addUserMessage('✅ Sim, quero contacto por email')
        handleEmailRequest()
        return
      }

      await handleFAQQuery(input)
      return
    }

    // MODO SCHEDULING
    if (mode === 'scheduling') {
      addUserMessage(input)

      const currentStepData = chatFlow[context.currentStep]
      
      if (!currentStepData) {
        console.error('Step not found:', context.currentStep)
        return
      }

      // Validação
      if (currentStepData.validate && !isQuickReply) {
        const validation = currentStepData.validate(input)
        if (validation !== true) {
          setIsTyping(true)
          setTimeout(() => {
            setIsTyping(false)
            addBotMessage(validation as string)
            setTimeout(() => {
              setIsTyping(true)
              setTimeout(() => {
                setIsTyping(false)
                const message = resolveBotMessage(currentStepData.botMessage, context)
                addBotMessage(message, currentStepData.quickReplies)
              }, 1000)
            }, 500)
          }, 800)
          return
        }
      }

      // Atualizar contexto
      const updatedContext: ConversationContext = { ...context }

      switch (context.currentStep) {
        case 'ask_name':
          updatedContext.userData.name = input
          break
        case 'ask_email':
          updatedContext.userData.email = input
          break
        case 'ask_company':
          updatedContext.userData.company = input
          break
        case 'ask_business_type':
          updatedContext.userData.businessType = input
          break
        case 'ask_date':
          updatedContext.userData.preferredDate = input
          break
        case 'ask_time':
          updatedContext.userData.preferredTime = input
          break
      }

      const nextStepId = getNextStep(context.currentStep, input)
      updatedContext.currentStep = nextStepId
      setContext(updatedContext)

      setIsTyping(true)
      const delay = 1000 + Math.random() * 1000

      setTimeout(() => {
        setIsTyping(false)

        const nextStep = chatFlow[nextStepId]
        if (nextStep) {
          const botMessageText = resolveBotMessage(nextStep.botMessage, updatedContext)
          addBotMessage(botMessageText, nextStep.quickReplies)

          if (nextStepId === 'confirmation') {
            sendNotificationEmail(updatedContext.userData)
          }
        }
      }, delay)
    }
  }

  const sendNotificationEmail = async (userData: any) => {
    console.log('📧 Enviando email:', userData)

    try {
      // await fetch('/api/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData),
      // })
    } catch (error) {
      console.error('Erro ao enviar email:', error)
    }
  }

  return {
    messages,
    isTyping,
    quickReplies,
    handleUserInput,
    messagesEndRef,
    context,
  }
}