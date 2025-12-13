import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elvis for Congress | District 31",
  description:
    "Elvis is running for U.S. Congress to bring integrity, accountability, and real solutions to District 31.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.elvisforcongress.com" />
        {/* Favicons: uses the campaign image in /public (png accepted by browsers) */}
        <link rel="icon" href="/elvis.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/elvis.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/elvis.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portrait.jpg" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Twitter meta for better discovery and link previews */}
        <meta property="og:title" content="Elvis for Congress | District 31" />
        <meta property="og:description" content="Elvis is running for U.S. Congress to bring integrity, accountability, and real solutions to District 31." />
        <meta property="og:image" content="https://www.elvisforcongress.com/elvis.png" />
        <meta property="og:url" content="https://www.elvisforcongress.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elvis for Congress | District 31" />
        <meta name="twitter:description" content="Elvis is running for U.S. Congress to bring integrity, accountability, and real solutions to District 31." />
        <meta name="twitter:image" content="https://www.elvisforcongress.com/elvis.png" />

        {/* JSON-LD Organization snippet for Search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Elvis for Congress",
            "url": "https://www.elvisforcongress.com",
            "logo": "https://www.elvisforcongress.com/elvis.png",
            "sameAs": [
              "https://www.facebook.com/",
              "https://twitter.com/",
              "https://www.instagram.com/"
            ]
          }) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
