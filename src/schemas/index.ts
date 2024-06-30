import * as z from "zod";
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Email address is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
  saveSession: z.boolean(),
});

export const SignUpSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Email address is invalid" }),
  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z
    .string()
    .min(1, { message: "Confirm password is required" }),
});
