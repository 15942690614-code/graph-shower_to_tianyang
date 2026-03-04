import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Excel Graph Shower",
  description: "AI-powered data visualization",
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
