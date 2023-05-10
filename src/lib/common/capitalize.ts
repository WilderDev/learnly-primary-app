export default function capitalize(str: string): string {
  return str.toLowerCase().replace(/\b(\w)/g, (match) => match.toUpperCase());
}
