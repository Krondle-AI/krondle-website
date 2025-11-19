// apps/marketing/src/components/chat/ChatUI.tsx

'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import { MessageCircle, X, Minimize2 } from 'lucide-react'
import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { TypingIndicator } from './TypingIndicator'
import { QuickReplies } from './QuickReplies'
import { usePrototypeChat } from './usePrototypeChat'

const BOT_AVATAR_SRC = '/logos/krondle_bold_logo_gradient.ico'

export interface ChatUIHandle {
  open: () => void
}

interface ChatUIProps {
  onClose?: () => void
  initialOpen?: boolean
}

export const ChatUI = forwardRef<ChatUIHandle, ChatUIProps>(function ChatUI(
  { onClose, initialOpen = false },
  ref
) {
  const { messages, isTyping, quickReplies, handleUserInput, messagesEndRef } =
    usePrototypeChat()

  const [isOpen, setIsOpen] = useState(initialOpen)
  const [isMinimized, setIsMinimized] = useState(false)
  const [avatarError, setAvatarError] = useState(false)

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
  }))

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  const renderAvatar = (size: 'small' | 'large' = 'large') => {
    const wrapperSize = size === 'large' ? 'w-10 h-10' : 'w-9 h-9'

    if (avatarError) {
      // fallback para o ícone clássico
      return (
        <div
          className={`${wrapperSize} rounded-full bg-white/10 flex items-center justify-center`}
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
      )
    }

    return (
      <div
        className={`${wrapperSize} rounded-full overflow-hidden bg-white/10 flex items-center justify-center`}
      >
        <img
          src={BOT_AVATAR_SRC}
          alt="Krondle Bot"
          className="w-full h-full object-cover"
          onError={() => setAvatarError(true)}
        />
      </div>
    )
  }

  return (
    <>
      {/* FAB – ícone azul no canto */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg hover:shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 flex items-center justify-center group hover:scale-110 z-50"
        >
          {renderAvatar('small')}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Janela de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md z-50 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {renderAvatar('large')}
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    Krondle Bot
                  </h3>
                  <p className="text-cyan-50 text-xs">Online</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Mensagens */}
                <div className="h-[500px] overflow-y-auto bg-slate-50 dark:bg-slate-900 p-4 bg-[url('/chat-bg.png')] bg-repeat dark:bg-none">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}

                  {isTyping && <TypingIndicator />}

                  {quickReplies.length > 0 && !isTyping && (
                    <QuickReplies
                      replies={quickReplies}
                      onSelect={(value) => handleUserInput(value, true)}
                      disabled={isTyping}
                    />
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                {quickReplies.length === 0 && (
                  <ChatInput
                    onSend={(text) => handleUserInput(text, false)}
                    disabled={isTyping}
                  />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
})