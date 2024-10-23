"use client";
import { LogoProps } from "@/types";
import { Loader2 } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Link } from "react-transition-progress/next";
import React, { useEffect, useState } from "react";

const Logo = ({ isCollapsed }: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <Loader2 className="animate-spin" />;
  const src = `${
    resolvedTheme === "dark"
      ? "/assets/images/hox-logo-white.svg"
      : "/assets/images/hox-logo-black.svg"
  }`;

  return (
    <Link href="/">
      <Image
        src={src}
        width={isCollapsed ? 0 : 150}
        height={isCollapsed ? 0 : 140}
        className="transition-all duration-500"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
