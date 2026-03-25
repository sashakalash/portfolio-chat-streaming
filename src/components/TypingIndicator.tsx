/** Animated dots indicator shown while AI is generating */
export function TypingIndicator() {
  return (
    <div
      className="flex items-center gap-1 px-4 py-3"
      role="status"
      aria-label="AI is thinking"
    >
      <span className="size-2 rounded-full bg-zinc-400 animate-bounce dark:bg-zinc-500" style={{ animationDelay: '0ms' }} />
      <span className="size-2 rounded-full bg-zinc-400 animate-bounce dark:bg-zinc-500" style={{ animationDelay: '150ms' }} />
      <span className="size-2 rounded-full bg-zinc-400 animate-bounce dark:bg-zinc-500" style={{ animationDelay: '300ms' }} />
    </div>
  );
}
