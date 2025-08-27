import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";
import { ProgressBar, ProgressBarProvider } from "react-transition-progress";
import ChatWidget from "@/components/common/ChatWidget";

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
              <ProgressBar className="top-0 z-[100] fixed bg-sky-500 shadow-lg shadow-sky-500/20 h-1" />
              {children}
              <ChatWidget />
            </ProgressBarProvider>
          </AuthProvider>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
