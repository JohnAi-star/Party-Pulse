'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Activity } from '@/lib/types/activity';

type ActivityContextType = {
  activity: Activity | null;
  isLoading: boolean;
  error: Error | null;
};

const ActivityContext = createContext<ActivityContextType>({
  activity: null,
  isLoading: false,
  error: null
});

export function ActivityProvider({ 
  children,
  activity,
  isLoading = false,
  error = null
}: ActivityContextType & { children: ReactNode }) {
  return (
    <ActivityContext.Provider value={{ activity, isLoading, error }}>
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity = () => useContext(ActivityContext);