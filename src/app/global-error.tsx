'use client';

interface IProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: IProps) {
  return (
    <html lang="en">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

// TSK: Add a global error handler to the app.
