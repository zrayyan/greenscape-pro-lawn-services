import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/use-theme";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "GreenScape Pro Lawn Services | Precision Lawn Care",
  description: "Premium lawn care services with smart monitoring, organic fertilization, and precision mowing. Serving a 50-mile radius with 24/7 emergency service.",
  keywords: "lawn care, lawn service, lawn mowing, lawn maintenance, organic fertilization, precision mowing",
  authors: [{ name: "GreenScape Pro" }],
  openGraph: {
    title: "GreenScape Pro Lawn Services",
    description: "Precision Lawn Care. Elevated Curb Appeal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
