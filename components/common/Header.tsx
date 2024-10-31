"use client";
import { headerItems } from "@/constants";
import { Link } from "react-transition-progress/next";
import ThemeSwitch from "./ThemeSwitch";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Logo from "./Logo";
import { HeaderProps } from "@/types";
import { Menu } from "lucide-react";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import UserAvatar from "./UserAvatar";

const Header = ({ toggleMobileMenu, isCollapsed }: HeaderProps) => {
  const { status } = useCurrentSession();
  const showSession = () => {
    if (status === "authenticated") {
      return (
        <div className="flex flex-row items-center gap-4 z-50">
          <UserAvatar />
        </div>
      );
    } else if (status === "loading") {
      return <Loader2 className="animate-spin text-black dark:text-white" />;
    } else {
      return (
        <>
          <div className="flex gap-4 items-center flex-row">
            <Link href="/signin">Sign in</Link>
            <Button
              variant={"default"}
              className="bg-theme-blue hover:bg-theme-blue/40 text-white "
            >
              <Link href="/signup">Create an Account</Link>
            </Button>
          </div>
        </>
      );
    }
  };
  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 dark:bg-background-gray/80 flex flex-row justify-between items-end px-4 md:px-8 py-4 md:py-8 w-full`}
    >
      {/* Desktop Links */}
      <div className="flex-row items-center gap-8 hidden xl:flex">
        {headerItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <span className="text-theme-gray dark:hover:text-white hover:text-black font-semibold transition-colors duration-500">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
      {/* Mobile Image */}
      <div className="flex items-center xl:hidden">
        <Logo />
      </div>
      <div className="flex flex-row items-center gap-8 z-50">
        {/* Dark Mode Toggle */}
        <ThemeSwitch />
        {/* Desktop Links */}
        <div className="hidden xl:flex">{showSession()}</div>
        {/* Mobile Menu */}
        <Menu
          className="flex xl:hidden cursor-pointer"
          onClick={toggleMobileMenu}
        />
      </div>
    </header>
  );
};

export default Header;
