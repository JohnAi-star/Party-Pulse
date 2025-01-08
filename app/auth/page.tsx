import AuthTabs from '@/components/auth/auth-tabs';

export const metadata = {
  title: 'Sign In | ActivityHub',
  description: 'Sign in to your ActivityHub account or create a new one',
};

export default function AuthPage() {
  return (
    <div className="container flex min-h-[calc(100vh-4rem)] items-center justify-center py-8">
      <AuthTabs />
    </div>
  );
}