import ThemeTogglerButton from '@/lib/theme/ThemeTogglerBtn';

export default function MarketingThemeToggler() {
  return (
    <ul className="fixed bottom-0 right-0 z-50 m-4 flex items-center space-x-4">
      {/* Theme Toggler */}
      <li>
        <ThemeTogglerButton />
      </li>
    </ul>
  );
}
