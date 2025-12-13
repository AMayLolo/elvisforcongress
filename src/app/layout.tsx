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
