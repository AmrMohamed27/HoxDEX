"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CgProfile as ProfileIcon } from "react-icons/cg";
import { FaSignOutAlt as SignOutIcon } from "react-icons/fa";
import Image from "next/image";

const UserAvatar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    session !== undefined &&
    session !== null &&
    session.user !== undefined &&
    session?.user.image !== null && (
      <>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={session.user.image}
                referrerPolicy="no-referrer"
              />
              <AvatarFallback>
                <Image
                  src="/assets/images/avatar.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="rounded-lg bg-white dark:bg-background-gray  border-2 border-theme-gray/20 mt-2 mr-8 z-[60] group">
            <DropdownMenuLabel className="text-lg font-semibold pl-4">
              {session?.user?.name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="hover:bg-theme-blue dark:hover:bg-hover-gray">
              <Link
                href="/account"
                className="flex flex-row gap-2 px-2 py-4 cursor-pointer"
              >
                <div className="flex items-start justify-start">
                  <ProfileIcon className="text-xl mt-1" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <h3 className="text-lg font-semibold">Account</h3>
                  <p className="text-sm text-theme-gray">
                    Important account details
                  </p>
                </div>
              </Link>
              <DropdownMenuSeparator />
            </DropdownMenuItem>
            <DropdownMenuItem
              className="hover:bg-theme-blue dark:hover:bg-hover-gray"
              onClick={() => {
                signOut();
              }}
            >
              <div className="flex flex-row gap-2 px-2 py-4 cursor-pointer">
                <div className="flex items-start justify-start">
                  <SignOutIcon className="text-xl mt-1" />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start">
                  <h3 className="text-lg font-semibold">Sign out</h3>
                  <p className="text-sm text-theme-gray">
                    Log out of your account
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    )
  );
};

export default UserAvatar;
