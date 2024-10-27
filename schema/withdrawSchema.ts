"use client";

import { z } from "zod";

const methodEnum = z.enum(["VISA", "MasterCard"]);
type methodEnum = z.infer<typeof methodEnum>;

export const withdrawSchema = z.object({
  coinId: z.string().min(1),
  amount: z.string().min(0),
  paymentMethod: methodEnum,
});
