/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useRouter, useSearchParams } from "next/navigation";
import { DialogClose } from "../ui/dialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DepositForm = ({
  coinData,
  balance,
}: {
  coinData: any;
  balance: any;
}) => {
  // Get router
  const router = useRouter();
  // Get coinId from URL
  const searchParams = useSearchParams();
  const coinFromUrl = searchParams.has("id")
    ? searchParams.get("id")!
    : "bitcoin";

  // Define form
  const form = useForm<z.infer<typeof depositSchema>>({
    resolver: zodResolver(depositSchema),
    defaultValues: {
      coinId: coinFromUrl,
      amount: "0",
      paymentMethod: "VISA",
    },
  });
  // Define toast
  const { toast } = useToast();
  // Watch variables
  const amount = form.watch("amount");
  const coinId = form.watch("coinId");
  const price = coinData[coinId].market_data.current_price.usd;
  const symbol = coinData[coinId].symbol;
  const currentBalance = balance[coinId];
  const amountInCoin = Number(amount) / price;
  // Define submit handler
  async function onSubmit(values: z.infer<typeof depositSchema>) {
    const amountInCoin =
      Number(values.amount) /
      coinData[values.coinId].market_data.current_price.usd;
    const res = await deposit({
      coinId: values.coinId,
      amount: amountInCoin,
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
              {parseInt(amount) === 0 && (
                <FormDescription className="text-theme-red">
                  Please enter a valid amount to deposit
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="bg-pure-white dark:bg-hover-gray border-2 border-theme-gray/20 rounded-xl p-4 flex flex-row gap-32">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-theme-gray/80">Transaction</h3>
            <span className="font-semibold uppercase">
              {amount} {"USD"}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-theme-gray/80">Total Balance</h3>
            <span className="font-semibold uppercase">
              {currentBalance + amountInCoin} {symbol}
            </span>
          </div>
        </div>
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
          <Button
            type="submit"
            disabled={Number(amount) === 0}
            variant={"default"}
            className="w-full"
          >
            Buy Now
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default DepositForm;
