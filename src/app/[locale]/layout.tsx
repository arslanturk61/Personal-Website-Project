import { notFound } from "next/navigation";
import { NextIntlClientProvider } from 'next-intl';
import { NavBarDemo } from "@/components/nav-bar-demo";
import { Inter } from 'next/font/google';
import { getTranslations } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abdullah ARSLANTÜRK',
  description: 'Kişisel Abdullah ARSLANTÜRK web sitesi',
}

export async function generateStaticParams() {
  return [{ locale: 'tr' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} bg-[#F5F5F7] text-[#1D1D1F]`} suppressHydrationWarning>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="min-h-screen flex flex-col">
            <header className="bg-[#FFFFFF] border-b border-gray-200">
              <NavBarDemo />
            </header>
            <main className="flex-1 w-full">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
