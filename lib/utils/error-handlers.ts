export function handleApiError(error: unknown): never {
  if (error instanceof Error) {
    throw new Error(`API Error: ${error.message}`);
  }
  throw new Error('An unexpected error occurred');
}

export function handleDatabaseError(error: unknown): never {
  if (error instanceof Error) {
    throw new Error(`Database Error: ${error.message}`);
  }
  throw new Error('A database error occurred');
}