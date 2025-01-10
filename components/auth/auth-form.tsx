import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthValidation } from '@/hooks/use-auth-validation';

type AuthFormProps = {
  type: 'login' | 'signup';
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
};

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const { errors, validateEmail, validatePassword } = useAuthValidation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = validateEmail(formData.email);
    const isPasswordValid = validatePassword(formData.password);

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {type === 'signup' && (
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
      )}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password}</p>
        )}
      </div>
      <Button type="submit" className="w-full">
        {type === 'login' ? 'Sign In' : 'Sign Up'}
      </Button>
    </form>
  );
}