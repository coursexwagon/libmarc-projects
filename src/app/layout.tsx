import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { ScrollProgress, WhatsAppFloat } from "@/components/site/sections";
import { StickyMobileBar } from "@/components/site/sticky-mobile-bar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://libmarcprojects.co.za"),
  title: "Libmarc Projects | Demolition, Plant Hire & Security Johannesburg",
  description:
    "Libmarc Projects is a Johannesburg-based contractor specialising in demolition, rock blasting, rubble removal, plant hire, CCTV installation, and roller shutter doors & automatic gates. Serving Gauteng since 2021.",
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
  creator: "Libmarc Projects",
  publisher: "Libmarc Projects",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://libmarcprojects.co.za",
  },
  openGraph: {
    title: "Libmarc Projects | Demolition, Plant Hire & Security Johannesburg",
    description:
      "Johannesburg's trusted contractor for demolition, rubble removal, plant hire, CCTV, and gate installations. Call 078 150 0069.",
    siteName: "Libmarc Projects",
    type: "website",
    url: "https://libmarcprojects.co.za",
    locale: "en_ZA",
    countryName: "South Africa",
  },
  twitter: {
    card: "summary_large_image",
    title: "Libmarc Projects | Demolition, Plant Hire & Security Johannesburg",
    description: "Johannesburg's trusted contractor for demolition, rubble removal, plant hire, CCTV, and gate installations.",
    images: ["/images/real/libmarc-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION", // Replace with actual code from Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://libmarcprojects.co.za/#organization",
        "name": "Libmarc Projects",
        "url": "https://libmarcprojects.co.za",
        "logo": {
          "@type": "ImageObject",
          "url": "https://libmarcprojects.co.za/images/real/libmarc-logo.png",
          "width": 400,
          "height": 160,
        },
        "description": "Johannesburg-based contractor specialising in demolition, rock blasting, rubble removal, plant hire, CCTV installation, and roller shutter doors & automatic gates.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+27-78-150-0069",
            "contactType": "sales",
            "availableLanguage": "English",
            "areaServed": "Gauteng",
          },
        ],
        "sameAs": [
          "https://www.facebook.com/libmarcprojects",
          "https://www.instagram.com/libmarcprojects",
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Johannesburg",
          "addressRegion": "Gauteng",
          "addressCountry": "ZA",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://libmarcprojects.co.za/#business",
        "parentOrganization": { "@id": "https://libmarcprojects.co.za/#organization" },
        "name": "Libmarc Projects",
        "image": "https://libmarcprojects.co.za/images/real/libmarc-logo.png",
        "telephone": "+27-78-150-0069",
        "email": "info@libmarcprojects.co.za",
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "07:00", "closes": "17:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "07:00", "closes": "17:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "07:00", "closes": "17:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "07:00", "closes": "17:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "07:00", "closes": "17:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" },
        ],
        "areaServed": [
          { "@type": "City", "name": "Johannesburg" },
          { "@type": "State", "name": "Gauteng" },
        ],
        "priceRange": "R500 - R50000",
        "url": "https://libmarcprojects.co.za",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Construction Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Demolition & Rock Blasting" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rubble Removal" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plant Hire" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roller Shutter Doors & Gates" } },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://libmarcprojects.co.za/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://libmarcprojects.co.za" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://libmarcprojects.co.za/services" },
          { "@type": "ListItem", "position": 3, "name": "Contact", "item": "https://libmarcprojects.co.za/contact" },
        ],
      },
      {
        "@type": "AggregateRating",
        "@id": "https://libmarcprojects.co.za/#rating",
        "item": { "@id": "https://libmarcprojects.co.za/#organization" },
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "27",
        "reviewCount": "27"
      },
      {
        "@type": "WebSite",
        "@id": "https://libmarcprojects.co.za/#website",
        "url": "https://libmarcprojects.co.za",
        "name": "Libmarc Projects",
        "description": "Johannesburg-based demolition, plant hire, CCTV and gate installation contractor.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://libmarcprojects.co.za/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${barlowCondensed.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
