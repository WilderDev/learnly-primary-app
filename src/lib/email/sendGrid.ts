import { IEmail } from '@/assets/typescript/misc';

export async function sendEmail(email: IEmail, path: string) {
  try {
    const res = await fetch(`/api/email/${path}`, {
      method: 'POST',
      body: JSON.stringify({
        to: email.to,
        from: email.from || 'Will <will@learnly.ai>',
        subject: email.subject,
        text: email.text,
        html: email.html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }

    return data;
  } catch (e) {
    throw new Error((e as Error).message);
  }
}
