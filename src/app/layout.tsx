import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurelia Interiors | Premium Interior Design Studio",
  description:
    "Luxury interior design studio for homes and commercial spaces. Explore our portfolio and book your free consultation.",
  keywords: [
    "interior design",
    "luxury interiors",
    "home interior designer",
    "commercial interior design",
    "interior renovation",
  ],
  openGraph: {
    title: "Aurelia Interiors",
    description:
      "Premium, elegant, and modern interior design services for residential and commercial clients.",
    type: "website",
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
