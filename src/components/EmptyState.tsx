/** Welcome screen shown before the first message */
export function EmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        AI Chat
      </h2>
      <p className="max-w-sm text-zinc-500 dark:text-zinc-400">
        Start a conversation by typing a message below. Responses stream in
        real-time.
      </p>
    </div>
  );
}
