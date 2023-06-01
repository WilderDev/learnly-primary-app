import { marked } from 'marked';
import puppeteer from 'puppeteer';

export async function createPdf(markdown: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const html = marked(markdown);
  await page.setContent(html);
  await page.emulateMediaType('screen');
  const pdf = await page.pdf({
    format: 'A4',
    printBackground: true,
  });
  await browser.close();
  return pdf;
}
