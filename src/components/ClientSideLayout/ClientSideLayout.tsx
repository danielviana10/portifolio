"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Navbar } from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientSideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <LanguageSwitcher />
      {children}
      <SpeedInsights />
      <ScrollToTopButton />
    </>
  );
}