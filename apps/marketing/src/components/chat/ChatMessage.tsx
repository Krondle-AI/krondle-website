// apps/marketing/src/components/chat/ChatMessage.tsx

import { Message } from '../../types/chat'
import { cn } from '@krondle/common/lib/utils'
import { Check, CheckCheck } from 'lucide-react'

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.sender === 'bot'
  
  return (
    <div
      className={cn(
        'flex w-full mb-4 animate-in fade-in slide-in-from-bottom-2 duration-300',
        isBot ? 'justify-start' : 'justify-end'
      )}
    >
      <div
        className={cn(
          'max-w-[75%] rounded-lg px-4 py-2.5 shadow-sm',
          'whitespace-pre-wrap break-words',
          isBot
            ? 'bg-white border border-slate-200 text-slate-900 rounded-tl-none'
            : 'bg-[#DCF8C6] text-slate-900 rounded-tr-none'
        )}
      >
        {/* Message text */}
        <p className="text-sm leading-relaxed">{message.text}</p>
        
        {/* Timestamp and status */}
        <div
          className={cn(
            'flex items-center gap-1 mt-1',
            isBot ? 'justify-start' : 'justify-end'
          )}
        >
          <span className="text-[10px] text-slate-500">
            {message.timestamp.toLocaleTimeString('pt-PT', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </span>
          
          {!isBot && message.status && (
            <span className="text-slate-500">
              {message.status === 'sent' && <Check className="w-3 h-3" />}
              {(message.status === 'delivered' || message.status === 'read') && (
                <CheckCheck className="w-3 h-3" />
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
