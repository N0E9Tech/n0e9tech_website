import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "N0E9Tech — Code.Secure.Deploy",
    template: "%s | N0E9Tech",
  },
  description:
    "N0E9Tech is a startup delivering cybersecurity solutions, IoT, web & mobile development.",
  keywords: [
    "cybersecurity",
    "penetration testing",
    "IoT",
    "software development",
    "embedded systems",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "N0E9Tech",
    title: "N0E9Tech — Code.Secure.Deploy",
    description:
      "Cybersecurity, IoT , software development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
