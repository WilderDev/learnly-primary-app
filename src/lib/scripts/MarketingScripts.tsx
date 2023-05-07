import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export default function MarketingScripts() {
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <>
      {/* Vercel Analytics */}
      <Analytics />

      {/* Microsoft Clarity */}
      <Script
        id="ms_clarity"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "gx5dx4mmk6");
          `,
        }}
      />
    </>
  );
}
