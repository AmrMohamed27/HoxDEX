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
import { accountSchema } from "@/schema/accountSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { vipPlaceholder } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateAccount } from "@/actions/updateAccount";
import { useCurrentSession } from "@/hooks/useCurrentSession";
import { useSession } from "next-auth/react";

const AccountForm = () => {
  // router
  const router = useRouter();
  // session
  const { data: session, update } = useSession();
  // Define form
  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });
  // Define toast
  const { toast } = useToast();
  // Define submit handler
  async function onSubmit(values: z.infer<typeof accountSchema>) {
    const res = await updateAccount({
      email: session?.user?.email,
      name:
        values.firstName === "" ? "" : `${values.firstName} ${values.lastName}`,
      password: values.password,
    });
    if (res?.ok) {
      const updatedSession = await update({
        user: {
          ...session?.user,
          name: `${values.firstName} ${values.lastName}`,
        },
      });
      toast({
        title: "Account Updated",
        description: `Welcome back, ${values.firstName} ${values.lastName}!`,
      });
      router.refresh();
    } else {
      toast({
        title: "Error Updating Account",
        variant: "destructive",
      });
    }
  }
  // Watch variables
  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");
  const firstName = form.watch("firstName");
  const lastName = form.watch("lastName");
  // Validation
  const passwordsMatch: boolean =
    password === "" ? true : password === confirmPassword;
  const nameChanged: boolean = firstName !== "";
  const areFieldsEmpty: boolean =
    firstName === "" &&
    lastName === "" &&
    password === "" &&
    confirmPassword === "";
  const emptyPassword = password === "" && confirmPassword === "";
  const emptyName = firstName === "" && lastName === "";
  const goodToGo: boolean = areFieldsEmpty
    ? false
    : (!emptyPassword && passwordsMatch) || (!emptyName && nameChanged);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col w-full"
      >
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                className="font-bold py-6 dark:bg-black  "
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="font-bold py-6 dark:bg-black min-w-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="font-bold py-6 dark:bg-black min-w-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="font-bold py-6 dark:bg-black min-w-[200px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit */}
        <Button type="submit" variant={"default"} disabled={!goodToGo}>
          Update Profile
        </Button>
      </form>
    </Form>
  );
};

export default AccountForm;
