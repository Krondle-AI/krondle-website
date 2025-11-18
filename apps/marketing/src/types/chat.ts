// apps/marketing/src/types/chat.ts

export type MessageSender = 'bot' | 'user'

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read'

export interface Message {
  id: string
  text: string
  sender: MessageSender
  timestamp: Date
  status?: MessageStatus
}

export interface QuickReply {
  id: string
  text: string
  value: string
}

export interface ChatStep {
  id: string
  botMessage: string
  quickReplies?: QuickReply[]
  inputType?: 'text' | 'email' | 'date' | 'time'
  nextStep?: string
  validate?: (input: string) => boolean | string
}

export interface ConversationContext {
  currentStep: string
  userData: {
    name?: string
    email?: string
    company?: string
    businessType?: string
    preferredDate?: string
    preferredTime?: string
  }
  conversationId: string
}

export type ChatMode = 'prototype' | 'production'
