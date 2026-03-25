import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CopyButton } from './CopyButton';

describe('CopyButton', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    });
  });

  it('renders with "Copy" label', () => {
    render(<CopyButton text="hello" />);
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('copies text and shows "Copied!" on click', async () => {
    render(<CopyButton text="hello world" />);
    await userEvent.click(screen.getByText('Copy'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('hello world');
    expect(screen.getByText('Copied!')).toBeInTheDocument();
  });
});
