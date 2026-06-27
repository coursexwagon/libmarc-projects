import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { ScrollProgress, WhatsAppFloat } from "@/components/site/sections";
import { StickyMobileBar } from "@/components/site/sticky-mobile-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://libmarcprojects.co.za"),
  title: "Libmarc Projects | Demolition, Plant Hire & Security Installations Johannesburg",
  description:
    "Libmarc Projects is a Johannesburg-based contractor specialising in demolition, rock blasting, rubble removal, plant hire, CCTV installation, and roller shutter doors & automatic gates. Serving Gauteng since 2015.",
  keywords: [
    "demolition Johannesburg",
    "rock blasting Gauteng",
    "rubble removal Johannesburg",
    "plant hire TLB excavator",
    "CCTV installation Johannesburg",
    "roller shutter doors",
    "automatic gates",
    "Libmarc Projects",
  ],
  authors: [{ name: "Libmarc Projects" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Libmarc Projects | Demolition, Plant Hire & Security Installations",
    description:
      "Johannesburg's trusted contractor for demolition, rubble removal, plant hire, CCTV, and gate installations. Call 078 150 0069.",
    siteName: "Libmarc Projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <ScrollProgress />
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <ScrollToTop />
          <WhatsAppFloat />
          <StickyMobileBar />
        </ThemeProvider>
        <Toaster />
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
