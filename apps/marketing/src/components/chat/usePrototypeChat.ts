// apps/marketing/src/components/chat/usePrototypeChat.ts

'use client'

import { useState, useEffect, useRef } from 'react'
import { Message, ConversationContext, QuickReply } from '../../types/chat'
import { chatFlow, getNextStep, getBotMessage } from '../../lib/chat-flow'

export function usePrototypeChat() {
  // Mensagem inicial do bot + quick replies logo no estado inicial
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: `msg_${Date.now()}`,
      text: chatFlow.greeting.botMessage,
      sender: 'bot',
      timestamp: new Date(),
      status: 'read',
    },
  ])

  const [quickReplies, setQuickReplies] = useState<QuickReply[]>(
    chatFlow.greeting.quickReplies ?? []
  )

  const [isTyping, setIsTyping] = useState(false)
  const [context, setContext] = useState<ConversationContext>({
    currentStep: 'greeting',
    userData: {},
    conversationId: `conv_${Date.now()}`,
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll para o fundo sempre que há novas mensagens ou typing
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

    // delivered depois de 200ms
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: 'delivered' } : msg
        )
      )
    }, 200)

    // read depois de 400ms
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, status: 'read' } : msg
        )
      )
    }, 400)
  }

  const handleUserInput = async (input: string, isQuickReply: boolean = false) => {
    // Limpar quick replies
    setQuickReplies([])

    // Adicionar mensagem do user
    addUserMessage(input)

    // Validar input se necessário
    const currentStepData = chatFlow[context.currentStep]
    if (currentStepData.validate && !isQuickReply) {
      const validation = currentStepData.validate(input)
      if (validation !== true) {
        // Mensagem de erro
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          addBotMessage(validation as string)
          // Repetir a pergunta
          setTimeout(() => {
            setIsTyping(true)
            setTimeout(() => {
              setIsTyping(false)
              addBotMessage(
                getBotMessage(context.currentStep, context),
                currentStepData.quickReplies
              )
            }, 1000)
          }, 500)
        }, 800)
        return
      }
    }

    // Atualizar contexto com dados do utilizador
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

    // Próximo passo no flow
    const nextStepId = getNextStep(context.currentStep, input)
    updatedContext.currentStep = nextStepId
    setContext(updatedContext)

    // Simular typing do bot
    setIsTyping(true)
    const delay = 1000 + Math.random() * 1000

    setTimeout(() => {
      setIsTyping(false)

      const nextStep = chatFlow[nextStepId]
      if (nextStep) {
        const botMessageText = getBotMessage(nextStepId, updatedContext)
        addBotMessage(botMessageText, nextStep.quickReplies)

        // Se for o fim (confirmação), “envia” notificação
        if (nextStepId === 'confirmation') {
          sendNotificationEmail(updatedContext.userData)
        }
      }
    }, delay)
  }

  const sendNotificationEmail = async (userData: any) => {
    // Por agora só log — futuro: chamar API real
    console.log('📧 Enviando email de confirmação:', userData)

    try {
      // await fetch('/api/send-email', {
      //   method: 'POST',
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