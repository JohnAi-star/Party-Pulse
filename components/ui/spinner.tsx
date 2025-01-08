// components/ui/spinner.tsx
export function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
    const sizes = {
      sm: 'h-6 w-6',
      md: 'h-8 w-8',
      lg: 'h-12 w-12',
    };
  
    return (
      <div className={`border-t-4 border-blue-500 border-solid rounded-full animate-spin ${sizes[size]}`} />
    );
  }
  