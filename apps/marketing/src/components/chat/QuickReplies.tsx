// apps/marketing/src/components/chat/QuickReplies.tsx

import { QuickReply } from '@/types/chat'
import { Button } from '@krondle/common/components/ui/button'

interface QuickRepliesProps {
  replies: QuickReply[]
  onSelect: (value: string) => void
  disabled?: boolean
}

export function QuickReplies({ replies, onSelect, disabled }: QuickRepliesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4 px-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {replies.map((reply) => (
        <Button
          key={reply.id}
          onClick={() => onSelect(reply.value)}
          disabled={disabled}
          variant="outline"
          size="sm"
          className="bg-white hover:bg-slate-50 border-cyan-200 hover:border-cyan-300 text-slate-700 rounded-full shadow-sm"
        >
          {reply.text}
        </Button>
      ))}
    </div>
  )
}
