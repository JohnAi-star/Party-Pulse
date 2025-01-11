import { redirect } from 'next/navigation';
import { stripe } from '@/lib/stripe/config';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

type SuccessPageProps = {
  searchParams: {
    session_id?: string;
  };
};

export default async function SuccessPage({
  searchParams,
}: SuccessPageProps) {
  if (!searchParams.session_id) {
    redirect('/');
  }

  const session = await stripe.checkout.sessions.retrieve(
    searchParams.session_id
  );
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
              Thank you for your booking. We've sent a confirmation email with
              all the details.
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