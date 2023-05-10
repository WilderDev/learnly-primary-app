'use client';

// * Imports
import { TTheme } from '@/assets/typescript/theme';
import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { createContext } from 'react';
import { themeScript } from './themeScript';

// * Constants
const THEMES: TTheme[] = ['light', 'dark', 'system']; // Available Themes
const MEDIA = '(prefers-color-scheme: dark)'; // Media Query for System Theme
const IS_BROWSER = typeof window !== 'undefined'; // Is Browser

// * Context
// Interface
interface IThemeCtx {
  themes: TTheme[]; // Available Themes
  theme: TTheme; // Current Theme
  setTheme: (theme: TTheme) => void; // Set Theme
}

// Initial Value
const initialCtxValue: IThemeCtx = {
  themes: THEMES,
  theme: 'system',
  setTheme: () => {},
};

// Context
const ThemeCtx = createContext<IThemeCtx>(initialCtxValue);

// * Provider
export function ThemeProvider({ children }: PropsWithChildren) {
  // * Functions
  // Get Theme
  const getTheme = () =>
    IS_BROWSER
      ? (window.localStorage.getItem('theme') as TTheme) || 'system'
      : 'system';

  // Get System Theme
  const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
    if (!e) e = window.matchMedia(MEDIA);

    const isDark = e.matches;

    const systemTheme = isDark ? 'dark' : 'light';

    return systemTheme;
  };

  // Apply Theme
  const applyTheme = useCallback((theme: TTheme = 'light') => {
    const resolvedTheme = theme === 'system' ? getSystemTheme() : theme; // Resolve Theme

    // Remove Previous Theme
    document.documentElement.classList.replace(
      resolvedTheme === 'dark' ? 'light' : 'dark',
      resolvedTheme,
    );
  }, []);

  // Handle Theme Change
  const handleThemeChange = useCallback(
    (theme: TTheme) => {
      // Update Theme
      setTheme(theme);

      // Save Theme
      window.localStorage.setItem('theme', theme);

      // Apply Theme
      applyTheme(theme);
    },
    [applyTheme],
  );

  // * State
  const [theme, setTheme] = useState<TTheme>(() => getTheme());

  // Handle Media Query
  const handleMediaQuery = useCallback(
    (e: MediaQueryList | MediaQueryListEvent) => {
      const systemTheme = getSystemTheme(e);

      // Set Theme
      setTheme((theme) => {
        if (theme === 'system') {
          // Save Theme
          window.localStorage.setItem('theme', systemTheme);
        }

        return theme === 'system' ? systemTheme : theme;
      });

      // Apply Theme
      theme === 'system' && applyTheme(systemTheme);
    },
    [applyTheme, theme],
  );

  // * Effects
  // Apply Theme
  useLayoutEffect(() => {
    applyTheme(theme);
  }, [applyTheme, theme]);

  // Always listen to System preference
  useEffect(() => {
    const media = window.matchMedia(MEDIA);

    // Intentionally use deprecated listener methods to support iOS & old browsers
    media.addListener(handleMediaQuery);
    handleMediaQuery(media);

    return () => media.removeListener(handleMediaQuery);
  }, [handleMediaQuery]);

  // Local Storage Listener
  useEffect(() => {
    const listener = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const theme = e.newValue as TTheme;
        handleThemeChange(theme);
      }
    };

    window.addEventListener('storage', listener);

    return () => window.removeEventListener('storage', listener);
  }, [handleThemeChange]);

  // * Value
  const value = useMemo(
    () => ({
      themes: THEMES,
      theme,
      setTheme: handleThemeChange,
    }),
    [theme, handleThemeChange],
  );

  // * Render
  return (
    <ThemeCtx.Provider value={value}>
      {/* Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: themeScript,
        }}
      />

      {/* Children */}
      {children}
    </ThemeCtx.Provider>
  );
}

// * Hooks
export function useTheme() {
  const ctx = useContext(ThemeCtx); // Context

  // Throw Error if Context is not found
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return ctx; // Return Context
}
