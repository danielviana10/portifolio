import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/NavBar";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning 
        className={`${montserrat.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
