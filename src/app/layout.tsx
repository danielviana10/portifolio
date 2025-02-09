import { ClientSideLayout } from "@/components/ClientSideLayout";
import Head from "next/head";
import './globals.css'

export const metadata = {
  title: "Daniel Viana | Desenvolvedor Full Stack",
  description: "Confira meu portfólio e projetos como desenvolvedor Full Stack!",
  openGraph: {
    type: "website",
    url: "https://danielviana.vercel.app/",
    title: "Daniel Viana | Desenvolvedor Full Stack",
    description: "Confira meu portfólio e projetos como desenvolvedor Full Stack!",
    images: [
      {
        url: "https://danielviana.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio de Daniel Viana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Viana | Desenvolvedor Full Stack",
    description: "Confira meu portfólio e projetos como desenvolvedor Full Stack!",
    images: ["https://danielviana.vercel.app/preview.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body suppressHydrationWarning>
        <Head>
          {/* favicon */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.images[0].url} />
          <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
        </Head>
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
