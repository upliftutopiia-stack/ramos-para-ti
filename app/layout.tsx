
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramos Para Ti 214 | Floral Website Concept",
  description:
    "An independent floral storefront concept for Ramos Para Ti 214 in the Dallas–Forney area.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
