import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://syed-irtaza.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Syed Muhammad Irtaza — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer building scalable products, AI/LLM workflows, and cloud systems that solve real business problems. Next.js, NestJS, PostgreSQL, AWS, Flowise & n8n.",
  keywords: [
    "Syed Muhammad Irtaza",
    "Full-Stack Software Engineer",
    "AI Engineer",
    "Next.js",
    "NestJS",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Flowise",
    "n8n",
    "LLM workflows",
    "Cloud systems",
  ],
  authors: [{ name: "Syed Muhammad Irtaza" }],
  openGraph: {
    title: "Syed Muhammad Irtaza — Full-Stack Software Engineer",
    description:
      "I build scalable full-stack products, AI workflows, and cloud systems that solve real business problems.",
    url: siteUrl,
    siteName: "Syed Muhammad Irtaza",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Muhammad Irtaza — Full-Stack Software Engineer",
    description:
      "Full-stack engineer building AI workflows, cloud systems, and scalable products.",
  },
  icons: {
    icon: [
      { url: "/my-avatar.png", sizes: "32x32", type: "image/png" },
      { url: "/my-avatar.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/my-avatar.png",
    apple: [{ url: "/my-avatar.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#060912" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
