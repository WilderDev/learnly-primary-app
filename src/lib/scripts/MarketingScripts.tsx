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

      {/* Provely */}
      <Script
        id="provely-container"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,n){if(typeof(w[n])=='undefined'){w[n]=[];w.provelySet=function(){w[n].push(arguments);};d=document.createElement('script');d.type='text/javascript';d.async=1;d.charset="UTF-8";d.src='https://provely-public.s3.amazonaws.com/scripts/provely-widget.js?version=1.0';x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(d,x);}})(window, 'provelyObj');provelySet('config', 'uuid', '3b0bfdf8-1acd-4a02-a54d-02f2536871d4');provelySet('config', 'type', 'notification');
          `,
        }}
      />
    </>
  );
}
