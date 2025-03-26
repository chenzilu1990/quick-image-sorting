import { locales } from '../i18n';
import ClientLayout from '../components/ClientLayout';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body>
        <ClientLayout locale={locale}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
} 