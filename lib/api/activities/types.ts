export class ActivityError extends Error {
  constructor(message: string, public code: string) {
    super(message);
    this.name = 'ActivityError';
  }
}

export type ActivityFilters = {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  groupSize?: number;
};