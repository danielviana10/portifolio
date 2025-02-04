"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import { I18nProvider } from "@/components/I18nProvider";
import { Navbar } from "@/components/NavBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import i18n from "../../i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLanguageReady = () => {
      setIsReady(true); // Define que a página está pronta para renderizar
    };

    // Simula o processo de carregamento do idioma
    if (typeof window !== 'undefined') {
      handleLanguageReady();  // Chama o callback assim que o carregamento é completo
    }
  }, []);

  // A página já carrega o conteúdo, mas enquanto o idioma não está pronto, exibe o spinner
  if (!isReady) {
    return (
      <html lang={i18n.language}>
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
          {children} {/* Agora o conteúdo será exibido normalmente */}
        </I18nProvider>
      </body>
    </html>
  );
}
