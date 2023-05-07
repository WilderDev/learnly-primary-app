function getBaseUrl(): string {
  return process.env.NEXT_PUBLIC_BASE_URL!;
}

export default getBaseUrl();
