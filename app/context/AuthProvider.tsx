"use client";

import { AuthProviderProps } from "@/types";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: AuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
