// * Turn a string into a slug for use in URLs
export default function sluggify(str: string) {
  const kebobbed = str
    .replace(/[^a-zA-Z0-9\s]/g, '') // Remove non-alphanumeric characters
    .trim() // Remove leading and trailing spaces
    .toLowerCase() // Convert all characters to lowercase
    .replace(/\s+/g, '-'); // Replace spaces with hyphens

  return kebobbed;
}
