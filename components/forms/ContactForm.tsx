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
import { contactSchema } from "@/schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { vipPlaceholder } from "@/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  // router
  const router = useRouter();
  // Preview State
  const [preview, setPreview] = useState<string | null>(null);
  // Define form
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });
  // Define toast
  const { toast } = useToast();
  // Define submit handler
  async function onSubmit(values: z.infer<typeof contactSchema>) {
    toast({
      title: `Thanks for contacting us, ${values.name}!`,
      description: `We will get back to you soon at your email: ${values.email}.`,
    });
    router.push("/");
  }

  // Handle image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      form.setValue("image", file); // Set the file in the form state
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col w-full"
      >
        <div className="flex flex-row flex-wrap justify-between w-full">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="max-lg:w-full min-w-[200px]">
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  className="font-bold py-6 dark:bg-black  "
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="max-lg:w-full min-w-[200px]">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="font-bold py-6 dark:bg-black min-w-[200px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Comment */}
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Comment</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={vipPlaceholder}
                  className="resize-none min-h-[150px] placeholder:text-theme-gray placeholder:font-bold font-bold dark:bg-black"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Image */}
        <FormItem>
          <FormLabel>Upload an Image (optional)</FormLabel>
          <FormControl>
            <div
              className={`flex items-center justify-center relative rounded-xl border-2 ${
                preview
                  ? "border-transparent"
                  : "border-dashed border-theme-blue"
              } w-20 h-20 cursor-pointer`}
            >
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
              />
              {!preview && (
                <span className="text-theme-blue text-3xl text-center flex items-center justify-center mb-2">
                  +
                </span>
              )}
              {preview && (
                <Image
                  src={preview}
                  alt="Image preview"
                  width={100}
                  height={100}
                  className="object-cover rounded-xl w-full h-full"
                />
              )}
            </div>
          </FormControl>
          <FormDescription className="text-theme-gray text-xs font-bold">
            Image formats of only PNG, JPG, and JPEG will be supported. Maximum
            image size is 10MB.
          </FormDescription>
          <FormMessage />
        </FormItem>
        {/* Submit */}
        <Button type="submit" variant={"default"}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
