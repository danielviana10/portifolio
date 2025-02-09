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
            {/* favicon */}
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

            {/* Open Graph*/}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Daniel Viana | Desenvolvedor Full Stack" />
            <meta property="og:description" content="Confira meu portfólio e projetos como desenvolvedor Full Stack!" />
            <meta property="og:image" content="https://danielviana.vercel.app/preview.png" />
            <meta property="og:image:secure_url" content="https://danielviana.vercel.app/preview.png" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <title>Daniel Viana | Desenvolvedor Full Stack</title>

            {/* Meta tags adicionais */}
            <meta name="description" content="Portfólio de Daniel Viana, desenvolvedor Full Stack." />
            <meta name="theme-color" content="#ffffff" />
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
