import { convertToModelMessages, streamText, UIMessage } from 'ai';
import { chatModel } from '@/lib/ai';
import { CHAT_SYSTEM_PROMPT } from '@/services/prompts/chat-system';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: chatModel,
    system: CHAT_SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
