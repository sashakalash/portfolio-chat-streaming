import { UIMessage } from 'ai';
import { CopyButton } from './CopyButton';

interface MessageBubbleProps {
  message: UIMessage;
}

/** Single chat message bubble — user (right) or assistant (left) */
export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  const textContent = message.parts
    .filter((part): part is Extract<typeof part, { type: 'text' }> => part.type === 'text')
    .map((part) => part.text)
    .join('');

  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`group relative max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-100'
        }`}
      >
        <div className="whitespace-pre-wrap break-words">{textContent}</div>

        {!isUser && textContent && (
          <div className="mt-2 flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
            <CopyButton text={textContent} />
          </div>
        )}
      </div>
    </div>
  );
}
