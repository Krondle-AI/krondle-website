// apps/marketing/src/components/chat/QuickReplies.tsx

'use client'

import { QuickReply } from '../../types/chat'
import { cn } from '@krondle/common/lib/utils'

interface QuickRepliesProps {
  replies: QuickReply[]
  onSelect: (value: string) => void
  disabled?: boolean
}

export function QuickReplies({ replies, onSelect, disabled }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {replies.map((reply) => {
        const label =
          // tenta várias propriedades para garantir que há texto
          (reply as any).label ??
          (reply as any).text ??
          reply.value

        return (
          <button
            key={reply.value}
            disabled={disabled}
            onClick={() => onSelect(reply.value)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2',
              'border shadow-sm transition-all',
              // Light mode
              'bg-white border-cyan-200 text-slate-700 hover:bg-cyan-50',
              // Dark mode
              'dark:bg-slate-800 dark:text-slate-200 dark:border-cyan-900 dark:hover:bg-slate-700',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            {reply.icon && (
              <span className="flex items-center justify-center">
                {reply.icon}
              </span>
            )}
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}