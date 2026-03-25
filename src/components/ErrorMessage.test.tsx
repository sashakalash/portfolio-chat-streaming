import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('renders error text', () => {
    render(<ErrorMessage error={new Error('Network failed')} onRetry={vi.fn()} />);
    expect(screen.getByText('Network failed')).toBeInTheDocument();
  });

  it('renders fallback message when error has no message', () => {
    render(<ErrorMessage error={new Error('')} onRetry={vi.fn()} />);
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('calls onRetry when retry button is clicked', async () => {
    const onRetry = vi.fn();
    render(<ErrorMessage error={new Error('fail')} onRetry={onRetry} />);
    await userEvent.click(screen.getByText('Retry'));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it('has alert role for accessibility', () => {
    render(<ErrorMessage error={new Error('fail')} onRetry={vi.fn()} />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
});
