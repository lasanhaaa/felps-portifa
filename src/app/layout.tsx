import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/lib/content";
import "./globals.css";

const description = "Felipe Terra — Web & Branding designer based in São Carlos, Brazil.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description,
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  openGraph: { type: "website", title: site.name, description, url: site.url },
  twitter: { card: "summary_large_image", title: site.name, description },
  robots: { "max-image-preview": "large" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
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
