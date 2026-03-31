# AI Streaming Chat

Real-time streaming chat interface with an LLM, built with Next.js and Vercel AI SDK.
https://portfolio-chat-streaming.vercel.app/
## Features

- Token-by-token streaming responses (like ChatGPT)
- Stop generation mid-response
- Copy AI responses to clipboard
- Auto-scrolling message list
- Typing indicator while AI is thinking
- Mobile-responsive layout
- Dark mode (system preference)
- Accessible (WCAG 2.2 AA)

## Architecture

```
src/
  app/
    api/chat/route.ts    # POST — streamText() with Google Gemini
    layout.tsx            # Root layout, fonts, metadata
    page.tsx              # Chat page
  components/             # UI components (ChatContainer, MessageList, etc.)
  hooks/                  # useCopyToClipboard, useAutoScroll
  lib/ai.ts              # AI provider config (swap model in one line)
  services/prompts/       # System prompt as typed constant
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| AI | Vercel AI SDK + Google Gemini (free tier) |
| Styling | Tailwind CSS v4 |
| Testing | Vitest + React Testing Library |
| E2E | Playwright |
| Language | TypeScript (strict mode) |

## Getting Started

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Create `.env.local` from the example:

```bash
cp .env.example .env.local
```

3. Get a free Google Gemini API key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and add it to `.env.local`.

4. Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_GENERATIVE_AI_API_KEY` | Yes | Google Gemini API key |

## Switching AI Provider

The AI provider is configured in `src/lib/ai.ts`. To switch to OpenAI or Anthropic:

```ts
// Google Gemini (default)
import { google } from '@ai-sdk/google';
export const chatModel = google('gemini-2.5-flash-preview-05-20');

// OpenAI
import { openai } from '@ai-sdk/openai';
export const chatModel = openai('gpt-4o');

// Anthropic
import { anthropic } from '@ai-sdk/anthropic';
export const chatModel = anthropic('claude-sonnet-4-20250514');
```

Install the corresponding provider package (`@ai-sdk/openai` or `@ai-sdk/anthropic`) and set the matching env var.
