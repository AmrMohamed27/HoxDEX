import { z } from "zod";

export const paymentMethods = [
  "VISA",
  "MasterCard",
  "Paypal",
  "SEPA",
  "ApplePay",
  "GooglePay",
] as const;
export const methodEnum = z.enum(paymentMethods);
type methodEnum = z.infer<typeof methodEnum>;

// Function to validate the card number using the Luhn algorithm
export const isValidCardNumber = (cardNumber: string) => {
  let sum = 0;
  let shouldDouble = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = Number(cardNumber[i]);

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
  amount: z.string().min(1),
  paymentMethod: methodEnum,

  // Common credit card fields for VISA and MasterCard
  cardNumber: z.string().optional(),
  cardholderName: z.string().optional(),
  expirationDate: z.string().optional(),
  cvv: z.string().optional(),
  billingAddress: z.string().optional(),

  // Paypal-specific field
  paypalEmail: z.string().optional(),

  // SEPA-specific fields
  iban: z.string().optional(),
  accountHolderName: z.string().optional(),
  swiftBic: z.string().optional(),
  country: z.string().optional(),

  // ApplyPay-specific fields
  mobilePhoneNumber: z.string().optional(),

  // GooglePay-specific fields
  emailAddress: z.string().optional(),
});
