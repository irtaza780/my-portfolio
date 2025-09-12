import type { Metadata } from "next";
import { Nunito_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irtaza - Full Stack Developer",
  description: "Portfolio of Irtaza - Full Stack Developer & Software Engineer",
  icons: {
    icon: [
      { url: "/my-avatar.png", sizes: "32x32", type: "image/png" },
      { url: "/my-avatar.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/my-avatar.png",
    apple: [
      { url: "/my-avatar.png", sizes: "180x180", type: "image/png" },
    ],
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
        <link rel="icon" href="/my-avatar.png" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/my-avatar.png" />
        <meta name="theme-color" content="#0066ff" />
      </head>
      <body
        className={`${nunitoSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
