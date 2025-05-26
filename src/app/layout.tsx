import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { AppProvider } from "./_contexts/AppContext";
import CursorFollower from "./_components/CursorFollower";
import SmallNav from "./_components/SmallNav";

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
        <AppProvider>
          <CursorFollower />
          <SmallNav />
          <Header />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
