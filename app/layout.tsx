import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";

const alata = localFont({
  src: "./fonts/Alata.ttf",
  variable: "--font-alata",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OKX Crypto",
  description: "Your Future Cryptocurrency Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.variable} antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
