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

// * Turn a date object into a timestampz string
export function dateToTimestampz(date: Date) {
  const dt = Date.parse(date.toISOString()); // convert to UTC

  const tzoffset = date.getTimezoneOffset() * 60000; // offset in milliseconds

  return new Date(dt - tzoffset).toISOString(); // return timestampz string
}

// * Turn Date into a readable string
export function dateToReadableString(date: Date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// * Get Age from Birthday
export function getAgeFromBirthday(birthday: string) {
  const today = new Date(); // Today's date

  const birthDate = new Date(birthday); // Birth date

  const age = today.getFullYear() - birthDate.getFullYear(); // Calculate age

  return age; // Return age
}
