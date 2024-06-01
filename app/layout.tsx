import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mateusz Salaga's Portfolio",
  description: "1",
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
      </body>
    </html>
  );
}
