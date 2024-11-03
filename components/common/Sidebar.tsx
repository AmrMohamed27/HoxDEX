"use client";
import { sidebarLinks } from "@/constants";
import { Link } from "react-transition-progress/next";
import { usePathname } from "next/navigation";
import {
  MdKeyboardDoubleArrowLeft as LeftArrows,
  MdKeyboardDoubleArrowRight as RightArrows,
} from "react-icons/md";
import Logo from "./Logo";
import { SidebarProps } from "@/types";
import { MdClose as Close } from "react-icons/md";
import UserAvatar from "./UserAvatar";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import { Button } from "@/components/ui/button";

const Sidebar = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  isCollapsed,
  toggleCollapse,
}: SidebarProps) => {
  const pathname = usePathname(); // Get the current route
  const { status } = useCurrentSession();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`min-h-screen border-r-[1px] border-theme-gray/20 flex flex-col px-4 py-8 gap-16 transition-transform duration-500 ${
          isCollapsed ? "min-w-[260px] xl:min-w-[120px]" : "xl:min-w-[260px]"
        } ${
          isMobileMenuOpen
            ? "translate-x-0" // When menu is open, slide in
            : "-translate-x-full" // Off-screen when menu is closed
        }
        xl:translate-x-0
        max-xl:fixed max-xl:top-0 max-xl:left-0 z-40 bg-inherit
        `}
      >
        {/* Desktop header */}
        <div className={`hidden xl:flex items-center flex-row gap-8 mt-2`}>
          <Logo isCollapsed={isCollapsed} />
          <button onClick={toggleCollapse}>
            {isCollapsed ? (
              <RightArrows
                className={`mt-1 text-3xl text-theme-blue transition-all duration-500 ${
                  isCollapsed ? "-translate-x-1/2" : ""
                }`}
              />
            ) : (
              <LeftArrows
                className={`mt-1 text-3xl text-theme-blue transition-all duration-500 ${
                  isCollapsed ? "-translate-x-1/2" : ""
                }`}
              />
            )}
          </button>
        </div>
        {/* Mobile Header */}
        <div
          className={`flex xl:hidden flex-row w-full items-center ${
            status === "authenticated" ? "justify-between" : "justify-end"
          }`}
        >
          {status === "authenticated" && <UserAvatar />}
          <Close
            className="cursor-pointer text-3xl hover:text-theme-blue "
            onClick={toggleMobileMenu}
          />
        </div>
        {/* Links */}
        <div className="flex flex-col items-start gap-4">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.link; // Check if the link is active
            return (
              <Link
                key={link.id}
                href={link.link}
                className={`w-full px-6 py-4 rounded-xl group ${
                  isActive
                    ? "bg-hover-blue dark:bg-hover-gray text-white" // Apply active styles
                    : "dark:hover:bg-hover-gray hover:bg-hover-blue"
                }`}
              >
                <div className="flex items-center gap-2">
                  {/* Conditionally apply active styles to the icon */}
                  <link.iconComponent.type
                    className={`text-3xl ${
                      isActive
                        ? "text-button-blue"
                        : "text-theme-gray group-hover:text-button-blue"
                    }`}
                  />
                  <span
                    className={`ml-2 font-semibold transition-[display] delay-1000 duration-300 ${
                      isActive
                        ? "text-theme-blue dark:text-white" // Active text styles
                        : "text-theme-gray group-hover:text-theme-blue group-hover:dark:text-white whitespace-nowrap"
                    } ${isCollapsed ? "xl:hidden" : "xl:flex"} truncate`}
                  >
                    {link.title}
                  </span>
                </div>
              </Link>
            );
          })}
          {status !== "authenticated" && status !== "loading" && (
            <div className="mt-16 flex flex-col items-center gap-8">
              <Button
                variant={"secondary"}
                className="w-full font-bold text-lg"
              >
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button variant={"default"}>
                <Link href="/signup">Create an Account</Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-30 transition-opacity duration-300"
          onClick={toggleMobileMenu} // Close the menu when the overlay is clicked
        />
      )}
    </>
  );
};

export default Sidebar;
