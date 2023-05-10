import { TTheme } from '@/assets/typescript/theme';

export function getServerSideInjectedStyles(theme: TTheme) {
  return `
    <style id="server-side-injected-styles">
      html {
        background-color: ${
          theme === 'dark' ? 'var(--color-navy-900)' : 'var(--color-slate-50)'
        };
        color: ${
          theme === 'dark' ? 'var(--color-navy-50)' : 'var(--color-slate-900)'
        };
      }
    </style>
  `;
}
