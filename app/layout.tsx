import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THE EXODUS BEGINS • GridPhantoms.app",
  description: "Grid Phantoms — Standby for Activation",
  openGraph: {
    title: "THE EXODUS BEGINS",
    description: "Grid Phantoms — Standby for Activation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}