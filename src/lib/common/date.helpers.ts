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

// * Get Time from Timestampz
export function getTimeFromTimestamp(timestamp: string): string {
  const hours = timestamp.split('T')[1].split(':')[0]; // Get hours
  const minutes = timestamp.split('T')[1].split(':')[1]; // Get minutes

  return `${hours}:${minutes} ${Number(hours) >= 12 ? 'PM' : 'AM'}`; // Return formatted time
}

// * Get Day of Week from Timestampz
export function getDayOfWeekFromTimestamp(timestamp: string): string {
  const date = new Date(timestamp);

  const day = date.getDay();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return days[day];
}

// * Get ISO Timestampz from Seconds
export function secondsToIso(seconds: number): string {
  const unixEpochStartDate = new Date('1970-01-01T00:30:00Z');

  unixEpochStartDate.setSeconds(seconds);

  return unixEpochStartDate.toISOString();
}

// * Get 12-hour time from date
export function get12HourTime(date: Date): string {
  // Extract hours and minutes
  let hours = date.getHours();
  let minutes: string | number = date.getMinutes();

  // Determine AM or PM
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours; // If hours is 0, set it to 12

  // Pad minutes with leading zeros if necessary
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Return formatted time
  return `${hours}:${minutes} ${amOrPm}`;
}
