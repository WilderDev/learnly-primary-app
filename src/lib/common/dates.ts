// * Format a date string into a human readable format
export function formatDateString(
  dateStr: string,
  format: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  const dateObj = new Date(dateStr); // Turn string into date object

  // Replace the format string with the date values without regular expressions
  const formattedDate = new Intl.DateTimeFormat('en-US', format).format(
    dateObj,
  );

  return formattedDate;
}
