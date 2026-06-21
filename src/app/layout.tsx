import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bruno Grossi · Head of Emerging Technologies",
    template: "%s · Bruno Grossi",
  },
  description:
    "Technology executive shaping the future of financial infrastructure through Digital Assets, AI, CBDCs and Quantum Computing.",
  openGraph: {
    title: "Bruno Grossi · Head of Emerging Technologies",
    description:
      "Technology executive shaping the future of financial infrastructure through Digital Assets, AI, CBDCs and Quantum Computing.",
    url: "https://brunogrossi.com",
    siteName: "brunogrossi.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Grossi · Head of Emerging Technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" className="h-full">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
