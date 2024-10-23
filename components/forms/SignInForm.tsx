"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OrSeparator from "../common/OrSeparator";
import { Link } from "react-transition-progress/next";
import { signinSchema } from "@/schema/signinSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const SignInForm = () => {
  // Define form
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // Define router
  const router = useRouter();
  // Define toast
  const { toast } = useToast();
  // Define submit handler
  async function onSubmit(values: z.infer<typeof signinSchema>) {
    try {
      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      toast({
        title: "Successfully Signed In",
        description: `Welcome back!`,
      });
      if (res?.ok) {
        router.push("/");
      } else {
        toast({
          title: "Error Signing In",
          description: res?.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error Signing In",
        description: error as string,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={`password`} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-theme-blue text-white w-full hover:bg-theme-blue/40"
        >
          Sign In
        </Button>
        {/* Separator */}
        <OrSeparator />
        {/* Signup */}
        <div className="flex items-center justify-center">
          Don&apos;t have an account?
          <Link href="/signup" className="text-theme-blue ml-2">
            Sign up for free!
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SignInForm;
