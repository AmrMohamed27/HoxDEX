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
import { depositSchema } from "@/schema/depositSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { deposit } from "@/actions/deposit";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { coinsIds } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DialogClose } from "../ui/dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DepositForm = ({ coinData }: { coinData: any }) => {
  // Get router
  const router = useRouter();
  // Define form
  const form = useForm<z.infer<typeof depositSchema>>({
    resolver: zodResolver(depositSchema),
    defaultValues: {
      coinId: "bitcoin",
      amount: "0",
      paymentMethod: "VISA",
    },
  });
  // Define toast
  const { toast } = useToast();
  // Define submit handler
  async function onSubmit(values: z.infer<typeof depositSchema>) {
    const res = await deposit({
      coinId: values.coinId,
      amount: Number(values.amount),
      paymentMethod: values.paymentMethod,
    });
    if (res?.ok) {
      toast({
        title: "Deposit Successful",
      });
      router.refresh();
    } else {
      toast({
        title: "Error Depositing",
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
          name="coinId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Coin</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-16">
                    <SelectValue placeholder="Select a coin" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {coinsIds.map((id) => (
                      <SelectItem key={id} value={id}>
                        <div className="flex flex-row gap-2">
                          <Image
                            src={coinData[id].image.large}
                            alt={id}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                          <div className="flex flex-col gap-1 items-start">
                            <span className="font-semibold uppercase">
                              {coinData[id].symbol}
                            </span>
                            <span className="text-sm text-theme-gray">
                              {coinData[id].name}
                            </span>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Amount in USD</FormLabel>
              <FormControl>
                <Input placeholder="0" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <FormControl>
                <Input placeholder="VISA" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose>
          <Button type="submit" variant={"default"} className="w-full">
            Buy Now
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default DepositForm;
