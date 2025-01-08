export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  created_at: string;
  updated_at: string;
};