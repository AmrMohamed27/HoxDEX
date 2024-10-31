import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Username must be at least 2 characters.").max(50),
  email: z.string().email("Invalid email"),
  comment: z.string().min(2, "Comment must be at least 2 characters.").max(300),
  image: z
    .custom<File>((file) => file instanceof File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Image size must be 5MB or less",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only .jpg and .png files are accepted",
    })
    .optional(),
});
