import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Ensure this is set in your environment variables
});

export async function POST(req: Request) {
  // Parse the incoming request JSON for messages
  const { messages } = await req.json();

  try {
    // Make a streaming request to OpenAI's chat API
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
      stream: true,  // Enable streaming
    });

    // Use async iterator to handle the streamed response
    const stream = response[Symbol.asyncIterator]();

    // Collect all the chunks of the response
    const streamChunks: string[] = [];
    //@ts-ignore
    for await (const chunk of stream) {
      streamChunks.push(chunk.choices[0].text);  // Push the text content of each chunk
    }

    // Combine all chunks into a single string
    const streamResponse = streamChunks.join("");  // Combine into full response

    // Return the final response to the client
    return new Response(streamResponse, {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Handle errors, such as invalid OpenAI API key or streaming issues
    console.error('Error with OpenAI streaming:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred during the request.' }),
      { status: 500 }
    );
  }
}
