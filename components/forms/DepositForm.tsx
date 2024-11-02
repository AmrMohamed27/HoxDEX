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
import {
  depositSchema,
  isValidCardNumber,
  paymentMethods,
} from "@/schema/depositSchema";
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
import { coinsIds, paymentMethodObjects } from "@/constants";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { DialogClose } from "../ui/dialog";
import { Menu } from "lucide-react";
import { formRegexAndBoolean } from "@/lib/utils";

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
  const paymentMethod = form.watch("paymentMethod");
  const cardNumber = form.watch("cardNumber");
  const cardholderName = form.watch("cardholderName");
  const expirationDate = form.watch("expirationDate");
  const cvv = form.watch("cvv");
  const billingAddress = form.watch("billingAddress");
  const paypalEmail = form.watch("paypalEmail");
  const iban = form.watch("iban");
  const accountHolderName = form.watch("accountHolderName");
  const swiftBic = form.watch("swiftBic");
  const country = form.watch("country");
  const mobilePhoneNumber = form.watch("mobilePhoneNumber");

  const emailAddress = form.watch("emailAddress");
  // data from watch variables
  const price = coinData[coinId].market_data.current_price.usd;
  const symbol = coinData[coinId].symbol;
  const currentBalance = balance[coinId];
  const amountInCoin = Number(amount) / price;
  // Validation
  const {
    expirationDateRegex,
    swiftBicRegex,
    mobilePhoneNumberRegex,
    cvvRegex,
    pinRegex,
    ibanRegex,
    goodToGo,
  } = formRegexAndBoolean({
    paymentMethod,
    cardNumber,
    cardholderName,
    expirationDate,
    cvv,
    billingAddress,
    paypalEmail,
    iban,
    accountHolderName,
    swiftBic,
    country,
    mobilePhoneNumber,
    emailAddress,
  });
  // Define submit handler
  async function onSubmit(values: z.infer<typeof depositSchema>) {
    const amountInCoin =
      Number(values.amount) /
      coinData[values.coinId].market_data.current_price.usd;
    const res = await deposit({
      coinId: values.coinId,
      amount: amountInCoin,
      paymentMethod: values.paymentMethod,
      cardNumber: values.cardNumber,
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
              {Number(amount) === 0 && (
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
              {(currentBalance + amountInCoin).toFixed(4)} {symbol}
            </span>
          </div>
        </div>
        {/* Payment Method */}
        <FormField
          control={form.control}
          name="paymentMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Method</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full h-16">
                    <SelectValue placeholder="Select a payment method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    {paymentMethodObjects.map(({ id, method, imageUrl }) => (
                      <SelectItem key={id} value={method}>
                        <div className="flex flex-row gap-2 items-center">
                          <div className="px-4 py-1 rounded bg-white">
                            <Image
                              src={imageUrl}
                              alt={method}
                              width={48}
                              height={48}
                              className=""
                            />
                          </div>
                          <span className="font-semibold ">{method}</span>
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
        {paymentMethod === "VISA" || paymentMethod === "MasterCard" ? (
          <>
            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {cardNumber && !isValidCardNumber(cardNumber) && (
                    <FormDescription className="text-theme-red">
                      Please enter a valid amount to deposit
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cardholderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Card Holder Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  {cardholderName && cardholderName.length < 2 && (
                    <FormDescription>
                      Card Holder name must be at least one character long
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expirationDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Expiration Date</FormLabel>
                  <FormControl>
                    <Input placeholder="MM/YY" {...field} />
                  </FormControl>
                  {expirationDate &&
                    !expirationDateRegex.test(expirationDate) && (
                      <FormDescription>
                        Expiration date must be in the format MM/YY
                      </FormDescription>
                    )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cvv"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CVV/CVC</FormLabel>
                  <FormControl>
                    <Input placeholder="000" {...field} />
                  </FormControl>
                  {cvv && !cvvRegex.test(cvv) && (
                    <FormDescription>CVV must be 3-digits long</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billingAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Billing Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your billing address"
                      {...field}
                    />
                  </FormControl>
                  {billingAddress && billingAddress.length === 0 && (
                    <FormDescription>
                      Billing Address must not be empty.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : paymentMethod === "Paypal" ? (
          <>
            <FormField
              control={form.control}
              name="paypalEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Address associated with your PayPal account
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  {paypalEmail && paypalEmail.length === 0 && (
                    <FormDescription>
                      Email Address must not be empty.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : paymentMethod === "SEPA" ? (
          <>
            <FormField
              control={form.control}
              name="iban"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>IBAN</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your IBAN (International Bank Account Number)"
                      {...field}
                    />
                  </FormControl>
                  {iban && !ibanRegex.test(iban) && (
                    <FormDescription>Invalid IBAN format.</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountHolderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Holder Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  {accountHolderName && accountHolderName.length === 0 && (
                    <FormDescription>
                      Account Holder Name must not be empty.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="swiftBic"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Swift/BIC</FormLabel>
                  <FormControl>
                    <Input placeholder="DEUTDEFF" {...field} />
                  </FormControl>
                  {swiftBic && !swiftBicRegex.test(swiftBic) && (
                    <FormDescription>Invalid SWIFT/BIC format</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="Germany" {...field} />
                  </FormControl>
                  {country && country.length === 0 && (
                    <FormDescription>
                      Country must not be empty.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : paymentMethod === "GooglePay" ? (
          <>
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter the email associated with your Google Pay account"
                      {...field}
                    />
                  </FormControl>
                  {emailAddress && emailAddress.length === 0 && (
                    <FormDescription>
                      Email Address must not be empty.
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : paymentMethod === "ApplePay" ? (
          <>
            <FormField
              control={form.control}
              name="mobilePhoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter the phone number associated with your ApplePay account"
                      {...field}
                    />
                  </FormControl>
                  {mobilePhoneNumber &&
                    !mobilePhoneNumberRegex.test(mobilePhoneNumber) && (
                      <FormDescription>
                        Phone Number is not valid.
                      </FormDescription>
                    )}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <p>Invalid payment method</p>
        )}
        <DialogClose>
          <Button
            type="submit"
            disabled={!goodToGo || Number(amount) === 0}
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
