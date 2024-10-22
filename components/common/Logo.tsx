import { LogoProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ isCollapsed }: LogoProps) => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/logo-blue.png"
        width={isCollapsed ? 0 : 150}
        height={isCollapsed ? 0 : 140}
        className="transition-all duration-500"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
