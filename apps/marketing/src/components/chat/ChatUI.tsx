// apps/marketing/src/components/chat/ChatUI.tsx

'use client'

import { ChatMessage } from './ChatMessage'
import { ChatInput } from './ChatInput'
import { TypingIndicator } from './TypingIndicator'
import { QuickReplies } from './QuickReplies'
import { usePrototypeChat } from './usePrototypeChat'
import { MessageCircle, X, Minimize2 } from 'lucide-react'
import { useState, useImperativeHandle, forwardRef } from 'react'

export interface ChatUIHandle {
  openChat: () => void
}

interface ChatUIProps {
  onClose?: () => void
}

export const ChatUI = forwardRef<ChatUIHandle, ChatUIProps>(({ onClose }, ref) => {
  const { messages, isTyping, quickReplies, handleUserInput, messagesEndRef } = usePrototypeChat()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useImperativeHandle(ref, () => ({
    openChat: () => setIsOpen(true)
  }))

  const handleClose = () => {
    setIsOpen(false)
    onClose?.()
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-50"
        >
          <MessageCircle className="w-7 h-7 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
            1
          </span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-full max-w-md z-50 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Krondle Bot</h3>
                  <p className="text-cyan-50 text-xs">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMinimized(!isMinimized)} className="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button onClick={handleClose} className="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="h-[500px] overflow-y-auto bg-slate-50 p-4 bg-[url('/chat-bg.png')] bg-repeat">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isTyping && <TypingIndicator />}
                  {quickReplies.length > 0 && !isTyping && (
                    <QuickReplies replies={quickReplies} onSelect={(v) => handleUserInput(v, true)} disabled={isTyping} />
                  )}
                  <div ref={messagesEndRef} />
                </div>
                {quickReplies.length === 0 && (
                  <ChatInput onSend={(text) => handleUserInput(text, false)} disabled={isTyping} />
                )}
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
})
