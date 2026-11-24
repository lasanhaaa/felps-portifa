import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/content";
import "./globals.css";

const title = `${site.fullName} (${site.name}) · ${site.title}`;
const description =
  "Felipe Terra (Felps) is a Web & Branding designer based in São Carlos, Brazil, working on UI/UX, product design, art direction and motion design.";
const ogImage = { url: "/og.jpg", width: 1200, height: 630, alt: "Hi, I'm Felps, a Web & Branding designer." };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.fullName,
  keywords: ["Felipe Terra", "Felps", "web designer", "branding designer", "UI/UX", "product design", "São Carlos"],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-light.png", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title,
    description,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  robots: { index: true, follow: true, "max-image-preview": "large" },
  // Search Console "HTML tag" method: set GOOGLE_SITE_VERIFICATION in Vercel (just the content="..." value).
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION.replace(/^.*content="([^"]+)".*$/s, "$1") }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/awesome-serif-italic-light.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
