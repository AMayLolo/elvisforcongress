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
      { url: "/og-briefing-composite-v2.png", width: 1200, height: 630, alt: "Elvis for Congress" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis for Congress",
    description:
      "Integrity, accountability, and real solutions for Texas' 31st District.",
    images: ["/og-briefing-composite-v2.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.elvisforcongress.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/elvis.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/portrait.jpg" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Absolute URLs help some clients */}
        <meta property="og:image" content="https://www.elvisforcongress.com/og-briefing-composite-v2.png" />
        <meta name="twitter:image" content="https://www.elvisforcongress.com/og-briefing-composite-v2.png" />
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