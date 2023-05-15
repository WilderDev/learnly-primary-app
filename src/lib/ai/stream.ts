import { SetStateAction } from 'react';

export async function streamReader(
  data: ReadableStream<Uint8Array>,
  setValue: (value: SetStateAction<string>) => void,
  doneAction: (output: string) => void,
) {
  const reader = data.getReader(); // Get the reader from the response body
  const decoder = new TextDecoder(); // Create a new text decoder

  let done = false; // Set done to false
  let output = ''; // Set output to '

  // Stream the response until it's done
  while (!done) {
    const { value, done: doneReading } = await reader.read();

    done = doneReading;

    const chunkValue = decoder.decode(value);

    setValue((prev) => prev + chunkValue);
    output += chunkValue;
  }

  done && doneAction(output);

  return output;
}
