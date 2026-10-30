export function isPangram(sentence: string): boolean {
  const uniqueLetters = new Set(sentence.toLowerCase().match(/[a-z]/g));
  return uniqueLetters.size === 26;
}