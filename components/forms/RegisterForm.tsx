"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OrSeparator from "../common/OrSeparator";
import { Link } from "react-transition-progress/next";
import { registerSchema } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { register } from "@/actions/register";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  // Define search params for email passed in url
  const searchParams = useSearchParams();
  const emailFromParams = searchParams.get("email");
  // Define form
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: emailFromParams ?? "",
      password: "",
    },
  });
  // Define router
  const router = useRouter();
  // Define toast
  const { toast } = useToast();
  // Define submit handler
  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const res = await register({
      name: values.name,
      email: values.email,
      password: values.password,
    });
    if (res?.error) {
      toast({
        title: "Error Creating account",
        description: res.error,
        variant: "destructive",
      });
    } else if (res?.ok) {
      toast({
        title: "Account Created",
        description: `Welcome, ${values.name}!`,
      });
      // Automatically sign in the user after registration
      const loginRes = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });
      if (loginRes?.error) {
        toast({
          title: "Login failed",
          description: loginRes.error,
          variant: "destructive",
        });
      } else if (loginRes?.ok) {
        // Redirect to home or dashboard
        return router.push("/");
      }
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
              <FormDescription>Use a strong password</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"default"} className="w-full">
          Sign Up
        </Button>
        {/* Separator */}
        <OrSeparator />
        {/* Signup */}
        <div className="flex items-center justify-center">
          already have an account?
          <Link href="/signin" className="text-button-blue ml-2">
            Sign in to your account!
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default RegisterForm;
