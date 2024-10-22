"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Loader2 } from "lucide-react";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Loader2 className="animate-spin" />;

  if (resolvedTheme === "dark") {
    return (
      <FiMoon
        className="cursor-pointer text-2xl"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiSun
        className="cursor-pointer text-2xl"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
