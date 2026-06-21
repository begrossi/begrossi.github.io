import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruno Grossi · Head of Digital Assets",
  description:
    "Bruno Grossi — builder at the intersection of finance, blockchain, AI, and frontier tech. Head of Digital Assets & Emerging Technologies.",
  openGraph: {
    title: "Bruno Grossi · Head of Digital Assets",
    description:
      "Builder at the intersection of finance, blockchain, AI, and frontier tech.",
    url: "https://brunogrossi.com",
    siteName: "brunogrossi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Grossi · Head of Digital Assets",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
