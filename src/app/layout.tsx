import type { Metadata } from "next";
import { Russo_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/layout/Footer";
import { SiteHeader } from "@/layout/Header";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/layout/ScrollToTop";

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ChainVerse",
  description: "A Web3.0 Agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={russoOne.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <Toaster />
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
