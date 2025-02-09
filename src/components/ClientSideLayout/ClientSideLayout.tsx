"use client";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import { I18nProvider } from "@/components/I18nProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Navbar } from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import i18n from "../../../i18n";

export default function ClientSideLayout({ children }: { children: React.ReactNode }) {
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
    <I18nProvider>
      <Navbar />
      <LanguageSwitcher />
      {children}
      <SpeedInsights />
      <ScrollToTopButton />
    </I18nProvider>
  );
}
