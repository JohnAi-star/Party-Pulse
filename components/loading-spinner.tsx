import { Loader2 } from 'lucide-react';

export default function LoadingSpinner() {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-gradient-to-r from-primary to-secondary rounded-xl p-8 shadow-lg">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Loader2 className="h-16 w-16 animate-spin text-gradient-to-r from-primary-foreground to-secondary-foreground" />
        <p className="text-primary-foreground font-semibold text-lg">Loading...</p>
      </div>
    </div>
  );
}
