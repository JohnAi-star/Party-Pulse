import { Activity } from '@/lib/types/activity';
import { activities } from '@/lib/data/activities';
import axios from 'axios';

// Replicate API Key and Model Version
const REPLICATE_API_KEY = process.env.REPLICATE_API_KEY;
const REPLICATE_MODEL_VERSION = 'dff94eaf770e1fc211e425a50b51baa8e4cac6c39ef074681f9e39d778773626'; // Replace with your model's version ID

export async function getPersonalizedRecommendations(
  userPreferences: {
    groupSize?: number;
    occasion?: string;
    location?: string;
    priceRange?: { min: number; max: number };
  },
  previousBookings: string[] = []
): Promise<Activity[]> {
  try {
    const prompt = `Given these user preferences:
      - Group Size: ${userPreferences.groupSize || 'Any'}
      - Occasion: ${userPreferences.occasion || 'Not specified'}
      - Location: ${userPreferences.location || 'Any'}
      - Price Range: ${
        userPreferences.priceRange
          ? `£${userPreferences.priceRange.min}-£${userPreferences.priceRange.max}`
          : 'Any'
      }
      
      And these previous bookings: ${previousBookings.join(', ') || 'None'}
      
      Recommend 3 activity IDs from this list that best match the preferences:
      ${activities.map((a) => `${a.id}: ${a.title} (${a.location}, £${a.price})`).join('\n')}`;

    // Step 1: Create Prediction
    const createResponse = await axios.post(
      'https://api.replicate.com/v1/predictions',
      {
        version: REPLICATE_MODEL_VERSION,
        input: {
          prompt: `You are a recommendation system. Respond only with activity IDs separated by commas.\n\n${prompt}`,
        },
      },
      {
        headers: {
          Authorization: `Token ${REPLICATE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const predictionId = createResponse.data.id;

    // Step 2: Poll for Prediction Result
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

    // Step 3: Parse the Result
    if (predictionResult.status === 'succeeded') {
      const recommendedIds = predictionResult.output
        ?.split(',')
        .map((id: string) => id.trim());

      return activities.filter((activity) => recommendedIds?.includes(activity.id));
    } else {
      console.error('Error with Replicate prediction:', predictionResult.error);
      // Fallback to random recommendations
      return activities
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    }
  } catch (error) {
    console.error('Error getting recommendations:', error);
    // Fallback to random recommendations
    return activities
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }
}
