import { UserRole } from "@/app/types/enums";
import { z } from "zod";

export const signupSchema = z.object({
	name: z.string().min(3, {
		message: "Name must be at least 3 characters long",
	}),
	email: z.string().email({
		message: "Invalid email address",
	}),
	username: z.string().min(3, {
		message: "Username must be at least 3 characters long",
	}),
	role: z.enum(UserRole, { message: "Invalid role" }),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters long",
	}),
});

export const loginSchema = z.object({
	email: z.string().min(3, {
		message: "Email must be at least 3 characters long",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters long",
	}),
});
