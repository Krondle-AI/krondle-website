// apps/marketing/src/components/chat/ChatWidget.tsx

'use client'

import { ChatUI } from './ChatUI'
import { ChatMode } from '@/types/chat'

interface ChatWidgetProps {
  mode?: ChatMode
  apiUrl?: string
}

export function ChatWidget({ mode = 'prototype', apiUrl }: ChatWidgetProps) {
  if (mode === 'prototype') {
    return <ChatUI />
  }
  
  if (mode === 'production') {
    // TODO: Implementar no próximo semestre quando backend estiver pronto
    return (
      <div className="fixed bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg">
        <p className="text-sm text-slate-600">
          Modo de produção ainda não implementado.
          <br />
          API URL: {apiUrl}
        </p>
      </div>
    )
  }
  
  return null
}
