import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curriculum Mastery - IB & IGCSE Music Educators Course",
  description:
    "Master the skills to teach IB & IGCSE Music with confidence. Real-world training for music educators with hands-on tools, expert guidance, and curriculum support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* PNG favicons for different sizes */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/curriculum-mastery-logo-small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="/assets/curriculum-mastery-logo-small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/assets/curriculum-mastery-logo-small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/curriculum-mastery-logo-small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/curriculum-mastery-logo-small92.png"
        />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
