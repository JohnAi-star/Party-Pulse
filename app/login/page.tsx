'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import AuthForm from '@/components/auth/auth-form';
import { signIn } from '@/lib/auth/auth-service';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/';
  const { toast } = useToast();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      await signIn(email, password);
      toast({
        title: 'Welcome back!',
        description: 'You have successfully logged in.',
      });
      router.push(redirectTo);
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Invalid email or password.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <Card className="w-full max-w-md shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-xl">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            Welcome Back
          </CardTitle>
          <CardDescription className="mt-2 text-gray-600 dark:text-gray-400">
            Please sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <AuthForm type="login" onSubmit={handleLogin} />
        </CardContent>
        <CardFooter className="p-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Don’t have an account?{' '}
            <Link href="/sign-up" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
