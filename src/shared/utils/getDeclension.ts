export const hours = [
  'час',
  'часа',
  'часов',
]

export const minutes = [
  'минута',
  'минуты',
  'минут'
]

export const seconds = [
  'секунда',
  'секунды',
  'секунд',
]

export const days = [
  'день',
  'дня',
  'дней',
]

export function getDeclension(number: number, words: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  return words[(n > 4 && n < 21) ? 2 : cases[Math.min(n1, 5)]];
}