export function addLeadingZeros(value: number | undefined): string {
  if (value === undefined) return "00";
  return value.toString().padStart(2, '0');
}