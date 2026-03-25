'use client';

import { UIMessage } from 'ai';
import { useAutoScroll } from '@/hooks/useAutoScroll';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { EmptyState } from './EmptyState';

interface MessageListProps {
  messages: UIMessage[];
  isLoading: boolean;
}

/** Scrollable message list with auto-scroll and empty/loading states */
export function MessageList({ messages, isLoading }: MessageListProps) {
  const scrollRef = useAutoScroll<HTMLDivElement>(messages);

  if (messages.length === 0 && !isLoading) {
    return <EmptyState />;
  }

  return (
    <div
      ref={scrollRef}
      className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-6"
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
      {isLoading && <TypingIndicator />}
    </div>
  );
}
