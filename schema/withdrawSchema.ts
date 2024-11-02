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

export const withdrawSchema = z.object({
  coinId: z.string().min(1),
  amount: z.string().min(0),
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

  // InstaPay-specific fields, phoneNumber for ApplyPay too
  mobilePhoneNumber: z.string().optional(),

  // GooglePay-specific fields
  emailAddress: z.string().optional(),
});
