// apps/marketing/src/components/chat/ChatWidget.tsx

'use client'

import React, { forwardRef } from 'react'
import { ChatUI, ChatUIHandle } from './ChatUI'
import { ChatMode } from '../../types/chat'

interface ChatWidgetProps {
  mode?: ChatMode
  apiUrl?: string
  onClose?: () => void
}

// Wrapper que suporta ref para o ChatUI
export const ChatWidget = forwardRef<ChatUIHandle, ChatWidgetProps>(
  function ChatWidgetInner({ mode = 'prototype', apiUrl, onClose }, ref) {
    if (mode === 'prototype') {
      return <ChatUI ref={ref} onClose={onClose} />
    }

    if (mode === 'production') {
      // placeholder para quando o backend estiver pronto
      return (
        <div className="fixed bottom-6 right-6 bg-white p-4 rounded-lg shadow-lg border border-slate-200">
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
)

// helper para abrir o chat a partir de qualquer sítio
export function openChatExternally(ref: React.RefObject<ChatUIHandle>) {
  ref.current?.open()
}