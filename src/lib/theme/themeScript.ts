export const themeScript = `
  (function() {
    function getSystemTheme() {
      var media = window.matchMedia('(prefers-color-scheme: dark)');
      return media.matches ? 'dark' : 'light';
    }

    function applyTheme(theme) {
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(theme);
    }

    var savedTheme = window.localStorage.getItem('theme') || 'system';
    var theme = savedTheme === 'system' ? getSystemTheme() : savedTheme;
    applyTheme(theme);
  })();
`;
