// apps/marketing/src/components/chat/ChatInput.tsx

'use client'

import { useState, KeyboardEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@krondle/common/components/ui/button'

interface ChatInputProps {
  onSend: (message: string) => void
  disabled?: boolean
  placeholder?: string
}

export function ChatInput({ onSend, disabled, placeholder = 'Digite sua mensagem...' }: ChatInputProps) {
  const [input, setInput] = useState('')
  
  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSend(input.trim())
      setInput('')
    }
  }
  
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }
  
  return (
    <div className="flex items-center gap-2 p-3 bg-slate-50 border-t border-slate-200">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      
      <Button
        onClick={handleSend}
        disabled={disabled || !input.trim()}
        size="icon"
        className="rounded-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
      </Button>
    </div>
  )
}
