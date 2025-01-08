import { OpenAI } from 'openai';  // Make sure the OpenAI SDK is installed

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your environment variable is set correctly
}); 

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    // Send a request to OpenAI for chat completions with streaming enabled
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
        ...messages,  // Include user-provided messages
      ],
      temperature: 0.7,
      max_tokens: 200,
      stream: true, // Enable streaming
    });

    // Collect the streaming response text
    const streamChunks: string[] = [];
    //@ts-ignore 
    for await (const chunk of response[Symbol.asyncIterator]()) {
      streamChunks.push(chunk.choices[0].text); // Push each chunk's text
    }

    // Join the chunks into one complete response
    const streamResponse = streamChunks.join(""); 

    // Return the final streamed response as JSON
    return new Response(JSON.stringify({ text: streamResponse }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Handle errors (e.g., invalid API key, bad request)
    console.error('Error with OpenAI streaming:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred during the request.' }),
      { status: 500 }
    );
  }
}
