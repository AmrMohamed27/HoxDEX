"use client";

import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin"); // Redirect to login page if not authenticated
    }
  }, [status, router]);

  if (status === "loading") {
    return <Loader2 className="text-theme-blue dark:text-white animate-spin" />; // Optionally show a loading indicator
  }

  return <>{session ? children : null}</>;
};

export default ProtectedRoute;
