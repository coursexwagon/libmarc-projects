import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";

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
  title: "BUILDCORE | Construction & Engineering Excellence",
  description:
    "BUILDCORE is a premier construction company delivering residential, commercial, and industrial projects with precision, safety, and unmatched craftsmanship.",
  keywords: [
    "construction company",
    "building contractor",
    "commercial construction",
    "residential construction",
    "civil engineering",
    "BUILDCORE",
  ],
  authors: [{ name: "BUILDCORE" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "BUILDCORE | Construction & Engineering Excellence",
    description:
      "Delivering landmark construction projects with precision and safety since 2009.",
    siteName: "BUILDCORE",
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
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <ScrollToTop />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
