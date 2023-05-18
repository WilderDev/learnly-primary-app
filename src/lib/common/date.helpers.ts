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

// * Get the week range from a date
export function getWeekRange(date: Date): { start: Date; end: Date } {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust for Sunday (day 0)

  const startDate = new Date(date);
  startDate.setDate(diff);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  endDate.setHours(23, 59, 59, 999);

  return { start: startDate, end: endDate };
}

// * Check if two dates are the same day
export function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

// * Get Datestring from Timestampz
export function getDatestringFromTimestamp(
  timestamp: string,
  showMonth = true,
  showDay = true,
  showYear = false,
): string {
  const date = new Date(timestamp);
  // Change it into format MONTH/DAY (March 20th)
  const month = date.toLocaleString('default', { month: 'long' });
  // Add the nd or th
  const getDaySuffix = (day: number): string => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const day = date.getDate() + getDaySuffix(date.getDate());

  const year = date.getFullYear();

  let dateString = '';

  if (showMonth) {
    dateString += month;
  }

  if (showDay) {
    dateString += ` ${day}`;
  }

  if (showYear) {
    dateString += `, ${year}`;
  }

  return dateString;
}
