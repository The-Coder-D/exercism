export function hey(message: unknown): string {
  const trimmed = String(message).trim();

  const isSilence = trimmed === '';
  const hasLetters = /[a-zA-Z]/.test(trimmed);
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();
  const isQuestion = trimmed.endsWith('?');

  if (isSilence) {
    return 'Fine. Be that way!'; //[cite: 11]
  }
  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!"; //[cite: 11]
  }
  if (isYelling) {
    return 'Whoa, chill out!'; //[cite: 11]
  }
  if (isQuestion) {
    return 'Sure.'; //[cite: 11]
  }
  
  return 'Whatever.'; //[cite: 11]
}