import { z } from "zod";

export const accountSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
});
