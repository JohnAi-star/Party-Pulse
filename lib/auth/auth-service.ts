import { supabase } from '@/lib/supabase/client';
import type { AuthUser, Profile } from '@/lib/types/auth';

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  
  if (error) throw error;
  return data;
}

export async function signUp(email: string, password: string, name: string) {
  const { data: { user }, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name },
    },
  });

  if (error) throw error;
  if (!user) throw new Error('No user returned after signup');

  await createProfile(user.id, name, email);
  return user;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (!profile) return null;

  return {
    id: user.id,
    email: user.email!,
    name: profile.name,
    role: profile.role,
  };
}

async function createProfile(userId: string, name: string, email: string) {
  const { error } = await supabase
    .from('profiles')
    .insert([{ id: userId, name, email }]);

  if (error) throw error;
}