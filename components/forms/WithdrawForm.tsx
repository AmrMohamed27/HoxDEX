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
import { withdrawSchema } from "@/schema/withdrawSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { withdraw } from "@/actions/withdraw";
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
const WithdrawForm = ({
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
  const form = useForm<z.infer<typeof withdrawSchema>>({
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      coinId: coinFromUrl,
      amount: "0",
      paymentMethod: "VISA",
    },
  });
  // Define toast
  const { toast } = useToast();
  // Watch variables
  const coinId = form.watch("coinId");
  const amount = form.watch("amount");
  // get coin data from props
  const price = coinData[coinId].market_data.current_price.usd;
  const symbol = coinData[coinId].symbol;
  const currentBalance = balance[coinId];
  // calculate balance in USD
  const balanceInUSD = (price * currentBalance).toFixed(2);
  const amountInCoin = Number(amount) / price;
  // Define submit handler
  async function onSubmit(values: z.infer<typeof withdrawSchema>) {
    const res = await withdraw({
      coinId: values.coinId,
      amount:
        Number(values.amount) /
        coinData[values.coinId].market_data.current_price.usd,
      paymentMethod: values.paymentMethod,
    });
    if (res?.ok) {
      toast({
        title: "Withdrawal Successful",
      });
      router.refresh();
    } else {
      toast({
        title: "Error Withdrawing",
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
        {/* Coin */}
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
        {/* Amount */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Amount in USD</FormLabel>
              <FormControl>
                <Input placeholder="0" type="number" {...field} />
              </FormControl>
              {amountInCoin > currentBalance && (
                <FormDescription className="text-theme-red">
                  Insufficient Balance
                </FormDescription>
              )}
              {Number(amount) === 0 && (
                <FormDescription className="text-theme-red">
                  Please enter a valid amount to withdraw
                </FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Available Balance */}
        <div className="bg-background-green border-2 border-theme-green rounded-xl p-4 flex flex-col gap-2">
          <h3 className="text-sm text-theme-green">Available Balance</h3>
          <span className="uppercase text-lg font-semibold">
            {currentBalance} {symbol}
          </span>
          <span className="text-sm font-semibold">{balanceInUSD} USD</span>
        </div>
        {/* Payment Method */}
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
        {/* Transaction Info */}
        <div className="bg-pure-white dark:bg-hover-gray border-2 border-theme-gray/20 rounded-xl p-4 flex flex-row gap-32">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-theme-gray/80">Transaction fee</h3>
            <span className="font-semibold uppercase">
              {amountInCoin.toFixed(4)} {symbol}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-theme-gray/80">Total Balance</h3>
            <span className="font-semibold uppercase">
              {(currentBalance - amountInCoin).toFixed(4)} {symbol}
            </span>
          </div>
        </div>
        {/* Submit Button */}
        <DialogClose>
          <Button
            type="submit"
            variant={"default"}
            disabled={amountInCoin > currentBalance || Number(amount) === 0}
            className="w-full"
          >
            Withdraw
          </Button>
        </DialogClose>
      </form>
    </Form>
  );
};

export default WithdrawForm;
