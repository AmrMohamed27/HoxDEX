import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";

const alata = localFont({
  src: "./fonts/Alata.ttf",
  variable: "--font-alata",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HoxDEX",
  description: "Cryptocurrency Exchange",
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
          <AuthProvider>
            <ProgressBarProvider>
              {/* I.e. using Tailwind CSS to show the progress bar with custom styling */}
              <ProgressBar className="fixed h-1 shadow-lg shadow-sky-500/20 bg-sky-500 top-0 z-[100]" />
              {children}
            </ProgressBarProvider>
          </AuthProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
