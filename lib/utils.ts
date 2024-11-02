import { coinsIdsString } from "@/constants";
import { isValidCardNumber } from "@/schema/depositSchema";
import { formFunctionProps } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPricesUrl(): string {
  const baseUrl = process.env.COINGEKKO_BASE_URL;
  const auth = process.env.COINGEKKO_AUTH;
  const ids = coinsIdsString;
  return `${baseUrl}/simple/price?${auth}&ids=${ids}&vs_currencies=usd`;
}

export function getCoinDataUrl(id: string): string {
  const baseUrl = process.env.COINGEKKO_BASE_URL;
  const auth = process.env.COINGEKKO_AUTH;
  return `${baseUrl}/coins/${id}?${auth}&localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
}

export function getChartDataUrl(id: string): string {
  const baseUrl = process.env.COINGEKKO_BASE_URL;
  const auth = process.env.COINGEKKO_AUTH;
  return `${baseUrl}/coins/${id}/market_chart?${auth}&vs_currency=usd&days=365`;
}

export function formRegexAndBoolean({
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
}: formFunctionProps) {
  const expirationDateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
  const swiftBicRegex = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
  const mobilePhoneNumberRegex = /^[+]*[0-9]*$/;
  const cvvRegex = /^[0-9]{3}$/;
  const pinRegex = /^[0-9]{4}$/;
  const ibanRegex = /^[A-Z]{2}[0-9A-Z]{13,34}$/;
  const goodToGo: boolean =
    paymentMethod === "VISA" || paymentMethod === "MasterCard"
      ? cardNumber !== undefined &&
        isValidCardNumber(cardNumber) &&
        cardholderName !== undefined &&
        cardholderName.length > 0 &&
        expirationDate !== undefined &&
        expirationDateRegex.test(expirationDate) &&
        cvv !== undefined &&
        cvvRegex.test(cvv) &&
        billingAddress !== undefined &&
        billingAddress.length > 0
      : paymentMethod === "Paypal"
      ? paypalEmail !== undefined && paypalEmail.length > 0
      : paymentMethod === "SEPA"
      ? iban !== undefined &&
        iban.length > 0 &&
        ibanRegex.test(iban) &&
        accountHolderName !== undefined &&
        accountHolderName.length > 0 &&
        swiftBic !== undefined &&
        swiftBicRegex.test(swiftBic) &&
        country !== undefined &&
        country.length > 0
      : paymentMethod === "ApplePay"
      ? mobilePhoneNumber !== undefined &&
        mobilePhoneNumber.length >= 10 &&
        mobilePhoneNumberRegex.test(mobilePhoneNumber)
      : paymentMethod === "GooglePay"
      ? emailAddress !== undefined && emailAddress.length > 0
      : false;

  return {
    expirationDateRegex,
    swiftBicRegex,
    mobilePhoneNumberRegex,
    cvvRegex,
    pinRegex,
    ibanRegex,
    goodToGo,
  };
}
