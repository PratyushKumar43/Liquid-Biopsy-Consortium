import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "International Liquid Biopsy Consortium",
  description: "Advancing liquid biopsy research through global collaboration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}