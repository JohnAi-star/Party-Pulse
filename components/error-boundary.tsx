'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4">Oops, something went wrong!</h2>
            <p className="mb-6 text-lg">
              {this.state.error?.message || 'An unexpected error occurred. Please try again later.'}
            </p>
            <Button
              className="mt-4 bg-white text-red-600 hover:bg-red-200 transition-all duration-300 ease-in-out rounded-lg px-6 py-2"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
