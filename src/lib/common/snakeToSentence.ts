export default function snakeToSentenceCase(value: string) {
  if (!value) return value;
  return value
    .split('_')
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        (word === word.toLowerCase()
          ? word.slice(1)
          : word.slice(1).toLowerCase())
    )
    .join(' ');
}
