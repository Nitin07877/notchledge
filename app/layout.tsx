import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { product } from "@/config/product";
import { Providers } from "./providers";
import ThemeToggle from "@/components/ThemeToggle";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// 🚀 Advanced SEO Metadata with notchledge.com
export const metadata: Metadata = {
  metadataBase: new URL("https://notchledge.com"),
  title: {
    default: `${product.name} — ${product.tagline}`,
    template: `%s | ${product.name}`
  },
  description: "Access 20+ powerful tools like Screen Time, Analytics, Weather, and Quick Notes directly from your MacBook notch. No subscriptions, just a seamless workflow.",
  
  // 🚀 Favicon / Icons path set here
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  keywords: [
    "macOS productivity app", 
    "MacBook notch tools", 
    "NotchLedge", 
    "clipboard manager mac", 
    "mac screen time", 
    "notch utilities",
    "mac menu bar app",
    "one time purchase mac app"
  ],
  authors: [{ name: "NotchLedge Team" }],
  creator: "NotchLedge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: `${product.name} — ${product.tagline}`,
    description: "Access 20+ powerful tools directly from your MacBook notch.",
    siteName: product.name,
    images: [
      {
        url: "/og-image.png", // 🚀 यहाँ चेंज किया है (message.png हटाकर)
        width: 1200,
        height: 630,
        alt: "NotchLedge - Mac Workspace in your Notch"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${product.name} — ${product.tagline}`,
    description: "Your entire Mac workspace, right inside your notch.",
    images: ["/og-image.png"], // 🚀 यहाँ भी चेंज किया है
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <ThemeToggle />
        </Providers>

        {/* Cloudflare Web Analytics */}
        <script type='module' src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "e6d005ac439f4330b50bbc419d376e55"}'></script>
      </body>
    </html>
  );
}