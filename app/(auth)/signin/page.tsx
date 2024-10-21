"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import OrSeparator from "@/components/OrSeparator";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import SignInForm from "@/components/forms/SignInForm";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Page = () => {
  // Define handle google sign in
  const [loading, setLoading] = useState(false);
  const handleGoogleSignIn = async () => {
    setLoading(true);
    await signIn("google", { callbackUrl: "/" });
    setLoading(false);
  };

  return (
    <section className="flex flex-col xl:flex-row min-h-screen">
      <div className="bg-theme-blue xl:min-h-screen flex items-center justify-center">
        <Link href="/">
          <Image
            src="assets/images/logo-white.svg"
            width="800"
            height="140"
            alt="logo"
          />
        </Link>
      </div>
      <div className="px-4 sm:px-24 md:px-48 lg:px-64 xl:px-8 py-8 flex items-center justify-center flex-col flex-1 gap-8 w-full">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Sign in to OKX Crypto
        </h1>
        {/* Sign in with Google */}
        <Button
          variant={"outline"}
          className="w-full border-black mt-2"
          onClick={handleGoogleSignIn}
        >
          {loading ? (
            "Loading..."
          ) : (
            <>
              <span>Sign in With Google</span>
              <GoogleIcon className="w-6 h-6 ml-4" />
            </>
          )}
        </Button>
        {/* Separator */}
        <OrSeparator />
        {/* Form */}
        <SignInForm />
      </div>
    </section>
  );
};

export default Page;
