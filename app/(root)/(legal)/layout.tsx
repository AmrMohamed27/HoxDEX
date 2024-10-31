"use client";

import { usePathname } from "next/navigation";
import { legalLinks } from "@/constants";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main className="flex flex-col px-8 gap-8 bg-white dark:bg-background-gray">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-xl lg:text-3xl font-bold">Terms of Use</h1>
        <p>
          Join our community now to get free updates and also alot of events are
          waiting for you
        </p>
      </div>
      {/* main section */}
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Selector */}
        <div className="flex flex-row md:flex-col max-md:flex-wrap gap-4 md:min-w-[200px]">
          {legalLinks.map(({ id, title, url }) => (
            <Link
              className={`font-bold cursor-pointer ${
                pathname === url ? "text-foreground" : "text-theme-gray"
              }`}
              key={id}
              href={url}
            >
              {title}
            </Link>
          ))}
        </div>
        {/* Content */}
        {children}
      </div>
    </main>
  );
}
