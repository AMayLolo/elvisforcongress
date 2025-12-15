import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CampaignBanner from "@/components/CampaignBanner";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import HomeDonateModal from "@/components/HomeDonateModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.elvisforcongress.com"),
  title: {
    default: "Elvis for Congress",
    template: "%s | Elvis for Congress",
  },
  description:
    "Elvis is running for U.S. Congress to bring integrity, accountability, and real solutions to District 31.",
  openGraph: {
    type: "website",
    url: "https://www.elvisforcongress.com",
    title: "Elvis for Congress",
    description:
      "Integrity, accountability, and real solutions for Texas' 31st District.",
    images: [
      {
        url: "/og-logo.jpg", // place 1200x630 JPG/PNG in /public
        width: 1200,
        height: 630,
        alt: "Elvis for Congress",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis for Congress",
    description:
      "Integrity, accountability, and real solutions for Texas' 31st District.",
    images: ["/og-logo.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.elvisforcongress.com" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/elvis.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/elvis.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/elvis.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portrait.jpg" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph / Twitter meta (metadata API covers these; keeping for redundancy) */}
        <meta property="og:title" content="Elvis for Congress" />
        <meta
          property="og:description"
          content="Integrity, accountability, and real solutions for Texas' 31st District."
        />
        <meta property="og:image" content="https://www.elvisforcongress.com/og-logo.jpg" />
        <meta property="og:url" content="https://www.elvisforcongress.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elvis for Congress" />
        <meta
          name="twitter:description"
          content="Integrity, accountability, and real solutions for Texas' 31st District."
        />
        <meta name="twitter:image" content="https://www.elvisforcongress.com/og-logo.jpg" />

        {/* JSON-LD Organization snippet */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elvis for Congress",
              url: "https://www.elvisforcongress.com",
              logo: "https://www.elvisforcongress.com/elvis.png",
              sameAs: [
                "https://www.facebook.com/",
                "https://twitter.com/",
                "https://www.instagram.com/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HomeDonateModal />
          <Navbar />
          <CampaignBanner />
          <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}