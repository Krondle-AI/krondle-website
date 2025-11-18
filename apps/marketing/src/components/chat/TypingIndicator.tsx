// apps/marketing/src/components/chat/TypingIndicator.tsx

export function TypingIndicator() {
  return (
    <div className="flex w-full mb-4 justify-start animate-in fade-in duration-300">
      <div className="bg-white border border-slate-200 rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}
