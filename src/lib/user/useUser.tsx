export default function useUser() {
  return {
    isLoggedIn: false,
    profile: null,
  } as {
    isLoggedIn: boolean;
    profile: {
      name: string;
      email: string;
    } | null;
  };
}
