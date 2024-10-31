"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Responsive state
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuIsOpen((prev) => !prev);
  };
  // collapse sidebar state
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <main className="flex flex-row justify-start bg-white dark:bg-background-gray">
      <Sidebar
        isMobileMenuOpen={mobileMenuIsOpen}
        toggleMobileMenu={toggleMobileMenu}
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
      />
      <div className="flex min-h-screen flex-col items-start justify-start w-full">
        <Header toggleMobileMenu={toggleMobileMenu} isCollapsed={isCollapsed} />
        <section className="w-full">{children}</section>
        <Footer />
      </div>
    </main>
  );
}
