'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase/client';
import { LogIn, LogOut } from 'lucide-react';

type AuthButtonProps = {
  isAuthenticated: boolean;
};

export default function AuthButton({ isAuthenticated }: AuthButtonProps) {
  const router = useRouter();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Signed out',
      description: 'You have been successfully signed out.',
    });

    router.push('/');
    router.refresh();
  };

  if (isAuthenticated) {
    return (
      <Button variant="ghost" onClick={handleSignOut}>
        <LogOut className="mr-2 h-4 w-4" />
        Sign out
      </Button>
    );
  }

  return (
    <Button variant="default" onClick={() => router.push('/login')}>
      <LogIn className="mr-2 h-4 w-4" />
      Sign in
    </Button>
  );
}