import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MnhwaLnn - Baca Manhwa Terbaru",
  description: "Baca manhwa terbaru dan terpopuler di MnhwaLnn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-180px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
