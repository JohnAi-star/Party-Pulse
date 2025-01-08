import { Activity } from '@/lib/types/activity';
import { activities } from '@/lib/data/activities';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You are a recommendation system. Respond only with activity IDs separated by commas.',
        },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 50,
    });

    const recommendedIds = response.choices[0].message.content
      ?.split(',')
      .map((id) => id.trim());

    return activities.filter((activity) => recommendedIds?.includes(activity.id));
  } catch (error) {
    console.error('Error getting recommendations:', error);
    // Fallback to random recommendations
    return activities
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
  }
}