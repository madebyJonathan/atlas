import type { Metadata } from "next";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const perfectlyNineties = localFont({
  src: "../public/fonts/PerfectlyNineties-Regular.ttf",
  variable: "--font-nineties",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Construction Co. — West Los Angeles Contractors",
  description:
    "Licensed contractors serving West Los Angeles homeowners since 2014. Expert renovations, custom builds, and kitchen & bath remodeling.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${perfectlyNineties.variable} ${jetbrainsMono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
