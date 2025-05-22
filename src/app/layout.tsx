import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dev Vortex",
  description: "A developer's hub for all things tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-white dark:bg-bg-dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
