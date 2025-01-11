import { redirect } from 'next/navigation';
import { stripe } from '@/lib/stripe/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface SuccessPageProps {
  searchParams: { session_id?: string }; // Explicitly define the type
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const sessionId = searchParams.session_id;

  if (!sessionId) {
    redirect('/');
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      redirect('/');
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg rounded-lg border border-gray-200">
            <CardHeader>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-center text-2xl font-bold text-gray-800">
                Booking Confirmed!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <p className="text-lg text-gray-600">
                Thank you for your booking! We've sent a confirmation email with all the details. 
                If you have any questions, feel free to reach out.
              </p>
              <Button asChild className="w-full py-3 bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition duration-200">
                <Link href="/activities">Browse More Activities</Link>
              </Button>
              <Link
                href="/"
                className="inline-block mt-4 text-sm text-blue-500 hover:underline"
              >
                Return to Home
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error retrieving session:', error);
    redirect('/');
  }
}
