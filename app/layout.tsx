import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// GitHub Pages serves this repo at /second-breakfast-studio/, not the domain
// root. Metadata strings (unlike next/image imports) aren't auto-prefixed by
// Next's basePath config, so build the prefix in by hand.
const basePath = process.env.GITHUB_ACTIONS ? "/second-breakfast-studio" : "";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.GITHUB_ACTIONS
    ? "https://owenakers.github.io/second-breakfast-studio"
    : "http://localhost:3000");
const DESCRIPTION =
  "Established in 2024, Second Breakfast Studio has been designing and creating high quality handcrafted furniture in Charlotte, North Carolina.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Second Breakfast Studio | Handcrafted Furniture in Charlotte, NC",
  description: DESCRIPTION,
  icons: {
    icon: `${basePath}/icon.png`,
    apple: `${basePath}/apple-icon.png`,
  },
  openGraph: {
    title: "Second Breakfast Studio",
    description: DESCRIPTION,
    siteName: "Second Breakfast Studio",
    images: [
      {
        url: `${basePath}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "A handcrafted live-edge wood slab coffee table by Second Breakfast Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Breakfast Studio",
    description: DESCRIPTION,
    images: [`${basePath}/images/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
