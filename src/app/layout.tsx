// Root layout with fonts and metadata

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UI_STRINGS } from "@/messages";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { GlobalFooter } from "@/components/layout/GlobalFooter";
import { PageTransitions } from "@/components/providers/PageTransitions";
import { BreadcrumbProvider } from "@/components/providers/BreadcrumbProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: UI_STRINGS.app.name,
  description: UI_STRINGS.app.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <BreadcrumbProvider>
            <div className='relative flex flex-col min-h-screen'>
              <Navbar />
              <main className='flex-1 pt-20'>
                <PageTransitions>{children}</PageTransitions>
              </main>
              <GlobalFooter />
            </div>
          </BreadcrumbProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
