'use client';

import { useChat } from '@ai-sdk/react';
import { useState } from 'react';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { ErrorMessage } from './ErrorMessage';

/** Main chat wrapper — orchestrates useChat, messages, input, and error states */
export function ChatContainer() {
  const [input, setInput] = useState('');
  const { messages, sendMessage, stop, status, error, regenerate, setMessages } = useChat();

  const isActive = status === 'streaming' || status === 'submitted';

  const handleSend = (text: string) => {
    sendMessage({ text });
    setInput('');
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-dvh flex-col bg-white dark:bg-zinc-900">
      <header className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
        <h1 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          AI Chat
        </h1>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={handleNewChat}
            className="rounded-lg px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            New Chat
          </button>
        )}
      </header>

      <MessageList messages={messages} isLoading={isActive} />

      {error && <ErrorMessage error={error} onRetry={regenerate} />}

      <ChatInput
        input={input}
        onInputChange={setInput}
        onSend={handleSend}
        onStop={stop}
        isLoading={isActive}
      />
    </div>
  );
}
