import "./global.css";
import { StructuredData } from "@/components/shared";
import { Footer } from "@/components/shared";
import {
  DEPLOYED_URL,
  PROPER_NAME,
  TAGLINE,
  TWITTER_HANDLE,
} from "@/utils/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata, NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${PROPER_NAME}`,
    default: PROPER_NAME,
  },
  description: TAGLINE,
  keywords: [
    "Lattice AI",
    "artificial intelligence",
    "machine learning",
    "AI platform",
    "LLM",
  ],
  authors: [{ name: "Lattice AI Team" }],
  creator: "Lattice AI",
  publisher: "Lattice AI",
  metadataBase: new URL(DEPLOYED_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: PROPER_NAME,
    description: TAGLINE,
    url: DEPLOYED_URL,
    siteName: PROPER_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${PROPER_NAME} - ${TAGLINE}`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lattice AI",
    description: TAGLINE,
    images: ["/twitter-image.jpg"],
    creator: `@${TWITTER_HANDLE}`,
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

const RootLayout: NextPage<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <StructuredData />
          {children}
          <Footer />
        </RootProvider>
      </body>

      <GoogleAnalytics gaId="G-DB6K47GML6" />
    </html>
  );
};

export default RootLayout;
