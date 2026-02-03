// The Fisher-Yates Shuffle (The gold standard for randomization)
export function shuffleArray<T>(array: T[] | undefined): T[] {
  if (!array) return [];
  const shuffled = [...array]; // Create a copy so we don't mutate the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
