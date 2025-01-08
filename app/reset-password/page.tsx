'use client';

import PasswordResetForm from '@/components/auth/password-reset-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ResetPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <Card className="w-full max-w-md shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Reset Password
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Enter your email, and we'll send you a password reset link.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <PasswordResetForm />
        </CardContent>
      </Card>
    </div>
  );
}
