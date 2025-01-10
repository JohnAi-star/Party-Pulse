import axios from 'axios'; // Ensure Axios is installed

// Replicate API Key (ensure it's set in your environment variables)
const REPLICATE_API_KEY = process.env.REPLICATE_API_KEY;

// Replicate Model Version ID (get this from the Replicate model page)
const REPLICATE_MODEL_VERSION = 'dff94eaf770e1fc211e425a50b51baa8e4cac6c39ef074681f9e39d778773626'; // Replace with the specific version ID

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    // Prepare the user input prompt based on the messages
    const prompt = messages.map((msg: any) => `${msg.role}: ${msg.content}`).join('\n');

    // Send a request to Replicate to generate text
    const response = await axios.post(
      'https://api.replicate.com/v1/predictions',
      {
        version: REPLICATE_MODEL_VERSION,
        input: {
          prompt: `You are an AI assistant for ActivityHub, a platform for booking group activities.
            Help users find and book activities based on their preferences.
            Be friendly and concise. Provide specific activity recommendations when possible.
            Focus on our available categories: Team Building, Stag Parties, and Hen Parties.\n\n${prompt}`,
        },
      },
      {
        headers: {
          Authorization: `Token ${REPLICATE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Get the prediction ID
    const predictionId = response.data.id;

    // Poll for the result
    let predictionResult: any;
    do {
      const resultResponse = await axios.get(
        `https://api.replicate.com/v1/predictions/${predictionId}`,
        {
          headers: {
            Authorization: `Token ${REPLICATE_API_KEY}`,
          },
        }
      );
      predictionResult = resultResponse.data;
    } while (predictionResult.status === 'starting' || predictionResult.status === 'processing');

    // Check if the prediction succeeded
    if (predictionResult.status === 'succeeded') {
      const generatedText = predictionResult.output;
      return new Response(JSON.stringify({ text: generatedText }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      console.error('Error with Replicate prediction:', predictionResult.error);
      return new Response(
        JSON.stringify({ error: 'An error occurred during text generation.' }),
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error with Replicate API:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred during the request.' }),
      { status: 500 }
    );
  }
}
