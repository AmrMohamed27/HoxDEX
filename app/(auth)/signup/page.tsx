"use client";

import Image from "next/image";
import React from "react";
import RegisterForm from "@/components/forms/RegisterForm";
import { Link } from "react-transition-progress/next";
import { Suspense } from "react";

const Page = () => {
  return (
    <section className="flex flex-col xl:flex-row min-h-screen">
      <div className="bg-theme-blue/80 xl:min-h-screen flex items-center justify-center">
        <Link href="/">
          <Image
            src="assets/images/hox-logo-white.svg"
            width="800"
            height="140"
            alt="logo"
          />
        </Link>
      </div>
      <div className="px-4 sm:px-24 md:px-48 lg:px-64 xl:px-8 py-8 flex items-center justify-center flex-col flex-1 gap-8 w-full">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Create an account for HoxDEX
        </h1>
        {/* Form */}
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </section>
  );
};

export default Page;
