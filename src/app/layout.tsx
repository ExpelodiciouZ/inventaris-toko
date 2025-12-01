import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InventarisTokoATK by Jeffry UNDIRA",
  description: "Aplikasi Inventaris Toko ATK Modern by Jeffry UNDIRA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider defaultTheme="dark" storageKey="inventaris-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
