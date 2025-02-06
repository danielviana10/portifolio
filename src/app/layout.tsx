"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { useEffect, useState } from "react";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { Navbar } from "@/components/NavBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import i18n from "../../i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLanguageReady = () => {
      setIsReady(true);
      document.documentElement.lang = i18n.language;
    };

    if (typeof window !== 'undefined') {
      handleLanguageReady();
    }
  }, []);

  if (!isReady) {
    return (
      <html lang="pt">
        <body suppressHydrationWarning>
          <LoadingSpinner />
        </body>
      </html>
    );
  }

  return (
    <html lang={i18n.language}>
      <body suppressHydrationWarning>
        <I18nProvider>
          <Navbar />
          <LanguageSwitcher />
          {children}
          <SpeedInsights />
          <ScrollToTopButton />
        </I18nProvider>
      </body>
    </html>
  );
}
