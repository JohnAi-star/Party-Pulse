import { redirect } from 'next/navigation';
import { stripe } from '@/lib/stripe/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PageProps {
  params: { id: string }; // Adjust this based on your route structure
  searchParams: { session_id?: string }; // Ensure searchParams includes session_id
}

export default async function SuccessPage({ params, searchParams }: PageProps) {
  console.log('Params:', params); // Debug params
  console.log('SearchParams:', searchParams); // Debug searchParams

  // Retrieve session_id from searchParams
  const sessionId = searchParams.session_id;

  // Redirect if session_id is missing
  if (!sessionId) {
    redirect('/');
  }

  // Retrieve session from Stripe
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  if (!session) {
    redirect('/');
  }

  return (
    <div className="container py-16">
      <div className="mx-auto max-w-md">
        <Card>
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-center">Booking Confirmed!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">
              Thank you for your booking. We've sent a confirmation email with all the details.
            </p>
            <Button asChild>
              <Link href="/activities">Browse More Activities</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
