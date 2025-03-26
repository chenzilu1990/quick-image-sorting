'use client';

import LanguageSwitcher from './LanguageSwitcher';

export default function ClientLayout({ children, locale }) {
  return (
    <div className="app-container">
      <LanguageSwitcher currentLocale={locale} />
      {children}
    </div>
  );
} 