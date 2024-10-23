"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-transition-progress/next";
import { CTAProps } from "@/types";
import { useCurrentSession } from "@/hooks/useCurrentSession";

const CallToActionInput = ({ children }: CTAProps) => {
  //   Email state
  const [email, setEmail] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  //   Session
  const { session } = useCurrentSession();
  return (
    <div className="flex flex-row gap-0 items-center relative min-w-full md:min-w-[450px] lg:min-w-[450px] bg-pure-white dark:bg-hover-gray rounded-xl">
      <Input
        type={"email"}
        placeholder="Enter your email address"
        className="p-6 sm:p-8 rounded-xl w-full placeholder:text-theme-gray outline-none ring-0 border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 max-w-[65%]"
        value={email}
        onChange={handleEmailChange}
      />
      <Button
        variant={"default"}
        className="bg-theme-blue hover:bg-theme-blue/40 text-white px-2 sm:px-8 sm:py-[26px] sm font-bold sm:text-lg absolute right-1 top-1"
      >
        <Link
          href={
            session?.user ? "/" : `/signup?email=${encodeURIComponent(email)}`
          }
        >
          {children}
        </Link>
      </Button>
    </div>
  );
};

export default CallToActionInput;
