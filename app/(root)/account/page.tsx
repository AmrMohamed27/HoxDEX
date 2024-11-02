"use client";
import ProtectedRoute from "@/components/common/ProtectedRouter";
import AccountForm from "@/components/forms/AccountForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import { useSession } from "next-auth/react";
import Image from "next/image";

const AccountPage = () => {
  const { data: session } = useSession();
  const { session: currentSession } = useCurrentSession();
  const source: string | undefined = currentSession?.user?.image ?? undefined;

  return (
    <ProtectedRoute>
      <div className="px-8 min-h-screen w-full flex flex-col gap-8">
        {/* Image and Header */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-semibold">
          Your Account
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-8 items-center">
            {/* Avatar */}
            <Avatar className="cursor-pointer w-32 h-32">
              <AvatarImage src={source} referrerPolicy="no-referrer" />
              <AvatarFallback>
                <Image
                  src="/assets/images/avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full w-full h-full"
                />
              </AvatarFallback>
            </Avatar>
            {/* Username */}
            <div className="flex flex-col gap-2 items-start justify-start">
              <h3 className="text-lg lg:text-3xl font-semibold">
                {session?.user?.name}
              </h3>
              <p className="lg:text-xl text-theme-gray">
                {session?.user?.email}
              </p>
            </div>
          </div>
          {/* Update Form */}
          {session?.provider === "credentials" && <AccountForm />}
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default AccountPage;
