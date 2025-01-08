import { OpenAI } from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are an AI assistant for ActivityHub, a platform for booking group activities.
          Help users find and book activities based on their preferences.
          Be friendly and concise. Provide specific activity recommendations when possible.
          Focus on our available categories: Team Building, Stag Parties, and Hen Parties.`,
      },
      ...messages,
    ],
    temperature: 0.7,
    max_tokens: 200,
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
