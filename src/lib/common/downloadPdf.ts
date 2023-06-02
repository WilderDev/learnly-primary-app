export async function downloadPdf(res: Response, title: string) {
  const blob = await res.blob(); // Get the response as a Blob
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', title + '.pdf');
  document.body.appendChild(link);
  link.click();
  link.remove();
}
