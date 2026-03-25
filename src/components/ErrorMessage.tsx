interface ErrorMessageProps {
  error: Error;
  onRetry: () => void;
}

/** Inline error banner with a retry button */
export function ErrorMessage({ error, onRetry }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="mx-4 my-2 flex items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
    >
      <p>{error.message || 'Something went wrong. Please try again.'}</p>
      <button
        type="button"
        onClick={onRetry}
        className="shrink-0 rounded-md bg-red-100 px-3 py-1 font-medium transition-colors hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800"
      >
        Retry
      </button>
    </div>
  );
}
