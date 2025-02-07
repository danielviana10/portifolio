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
import Head from "next/head";

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
          <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <title>Daniel Viana | Desenvolvedor Full Stack</title>
          </Head>
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
