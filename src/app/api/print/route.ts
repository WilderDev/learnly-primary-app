import { createPdf } from '@/lib/common/createPdf';

export async function POST(request: Request) {
  const { markdown } = (await request.json()) as { markdown: string };

  if (!markdown) return new Response('Invalid request', { status: 400 });

  const pdf = await createPdf(markdown);

  const headers = new Headers();
  headers.append('Content-Type', 'application/pdf');
  headers.append('Content-Disposition', 'attachment; filename=output.pdf');

  return new Response(pdf, { headers });
}
