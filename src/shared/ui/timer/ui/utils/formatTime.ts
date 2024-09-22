export default function formatTime(value: number): string {
  return value.toString().padStart(2, '0');
}