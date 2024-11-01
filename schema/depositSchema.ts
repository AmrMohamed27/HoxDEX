import { z } from "zod";

export const paymentMethods = [
  "VISA",
  "MasterCard",
  "Paypal",
  "SEPA",
  "ApplePay",
  "GooglePay",
  "InstaPay",
] as const;
export const methodEnum = z.enum(paymentMethods);
type methodEnum = z.infer<typeof methodEnum>;

// Function to validate the card number using the Luhn algorithm
export const isValidCardNumber = (cardNumber: string) => {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

export const depositSchema = z.object({
  coinId: z.string().min(1),
  amount: z.string().min(0),
  paymentMethod: methodEnum,
  cardNumber: z
    .string()
    .min(12, { message: "Card number must be at least 12 digits" })
    .max(19, { message: "Card number must be at most 19 digits" })
    .refine(isValidCardNumber, { message: "Invalid card number" }),
});
