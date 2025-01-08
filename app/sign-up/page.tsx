'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import AuthForm from '@/components/auth/auth-form';
import { signUp } from '@/lib/auth/auth-service';

export default function SignUpPage() {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignUp = async ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name?: string;
  }) => {
    if (!name) return;

    try {
      await signUp(email, password, name);
      toast({
        title: 'Account created!',
        description: 'You can now log in with your credentials.',
      });
      router.push('/login');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="container flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-100 p-4">
      <Card className="w-full max-w-md rounded-lg shadow-lg bg-white border border-gray-200">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-extrabold text-gray-800">
            Create an Account
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Enter your details below to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <AuthForm
            //@ts-ignore
            type="signup"
            onSubmit={handleSignUp}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
