import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ChatInput } from './ChatInput';

const defaultProps = {
  input: '',
  onInputChange: vi.fn(),
  onSend: vi.fn(),
  onStop: vi.fn(),
  isLoading: false,
};

describe('ChatInput', () => {
  it('renders textarea with placeholder', () => {
    render(<ChatInput {...defaultProps} />);
    expect(screen.getByPlaceholderText('Type a message...')).toBeInTheDocument();
  });

  it('disables send button when input is empty', () => {
    render(<ChatInput {...defaultProps} />);
    expect(screen.getByLabelText('Send message')).toBeDisabled();
  });

  it('enables send button when input has text', () => {
    render(<ChatInput {...defaultProps} input="hello" />);
    expect(screen.getByLabelText('Send message')).toBeEnabled();
  });

  it('calls onSend when form is submitted', async () => {
    const onSend = vi.fn();
    render(<ChatInput {...defaultProps} input="hello" onSend={onSend} />);
    await userEvent.click(screen.getByLabelText('Send message'));
    expect(onSend).toHaveBeenCalledWith('hello');
  });

  it('shows stop button when loading', () => {
    render(<ChatInput {...defaultProps} isLoading />);
    expect(screen.getByLabelText('Stop generating')).toBeInTheDocument();
  });

  it('calls onStop when stop button is clicked', async () => {
    const onStop = vi.fn();
    render(<ChatInput {...defaultProps} isLoading onStop={onStop} />);
    await userEvent.click(screen.getByLabelText('Stop generating'));
    expect(onStop).toHaveBeenCalledOnce();
  });
});
