import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Jacob Saju | Portfolio",
  description: "Electronics & Communication Engineer | Data Science Enthusiast | IEEE Student Chapter Chair. Passionate about AI, Embedded Systems, 5G, and solving global challenges.",
  keywords: ["Justin Jacob Saju", "Portfolio", "ECE", "Data Science", "IEEE", "SRMIST", "AI", "Embedded Systems", "5G"],
  authors: [{ name: "Justin Jacob Saju" }],
  openGraph: {
    title: "Justin Jacob Saju | Portfolio",
    description: "Electronics & Communication Engineer | Data Science Enthusiast | IEEE Student Chapter Chair",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Jacob Saju | Portfolio",
    description: "Electronics & Communication Engineer | Data Science Enthusiast | IEEE Student Chapter Chair",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground cursor-none relative`}
      >
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
