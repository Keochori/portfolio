import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Component/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test3",
  description: "3",
  openGraph: {
    type: "website",
    url: "https://example.com",
    title: "My Website",
    description: "My Website Description",
    siteName: "My Website",
    images: [{
      url: "https://example.com/og.png",
    }],
  },
  icons: "https://example.com/icon.png",
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
