import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${alata.variable} antialiased dark:bg-background-gray`}>
        <Providers>
          <AuthProvider>{children}</AuthProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
