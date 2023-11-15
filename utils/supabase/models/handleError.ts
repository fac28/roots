// Handles errors by logging them to the console.
export function handleError(context: string, error: any): void {
  console.error(`Error ${context}:`, error.message);
}
