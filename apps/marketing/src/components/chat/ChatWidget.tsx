// apps/marketing/src/components/chat/ChatWidget.tsx

'use client'

import { ChatUI, ChatUIHandle } from './ChatUI'
import { useRef, useImperativeHandle, forwardRef } from 'react'

export const ChatWidget = forwardRef<ChatUIHandle>((_, ref) => {
  const internalRef = useRef<ChatUIHandle>(null)

  useImperativeHandle(ref, () => ({
    openChat: () => internalRef.current?.openChat(),
  }))

  return <ChatUI ref={internalRef} />
})

export function openChatExternally(ref: React.RefObject<ChatUIHandle>) {
  ref.current?.openChat()
}
