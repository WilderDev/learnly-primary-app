export function getAgeFromBirthday(birthday: string) {
  const today = new Date(); // Today's date

  const birthDate = new Date(birthday); // Birth date

  const age = today.getFullYear() - birthDate.getFullYear(); // Calculate age

  return age; // Return age
}
