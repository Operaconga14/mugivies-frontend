"use server";
import z from "zod";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../lib/data-source";
import { loginSchema, signupSchema } from "../lib/formSchema";
import { comparePassword } from "../lib/auth";
import { generateToken } from "../lib/jwt";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const db = await AppDataSource();
const userRepo = db.getRepository(User);

export const signUpAction = async (values: z.infer<typeof signupSchema>) => {
	try {
		const result = signupSchema.safeParse(values);
		const existingUser = await userRepo.findOneBy({ email: values.email });
		if (existingUser) {
			return {
				status: "error",
				message: "User already exists",
			};
		}

		if (!result.success) {
			return {
				status: "error",
				message: result.error.message,
			};
		}

		const newUser = userRepo.create({
			name: values.name,
			email: values.email,
			role: values.role,
			password: values.password,
		});
		await userRepo.save(newUser);

		return {
			status: "success",
			message: "User created successfully",
		};
	} catch (error) {
		return {
			status: "error",
			message: `Something went wrong ${error}`,
		};
	}
};

export const loginAction = async (values: z.infer<typeof loginSchema>) => {
	try {
		const user = await userRepo.findOneBy({ email: values.email });
		const result = loginSchema.safeParse(values);

		if (!user) {
			return {
				status: "error",
				message: "User not found",
			};
		}

		const isMatched = await comparePassword(values.password, user.password);

		if (!isMatched) {
			return {
				status: "error",
				message: "Invalid password",
			};
		}

		if (!result.success) {
			return {
				status: "error",
				message: result.error.message,
			};
		}

		const token = generateToken(user);

		(await cookies()).set({
			name: "access_token",
			value: token,
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7,
		});

		return {
			status: "success",
			message: `User Login successfully`,
		};
	} catch (error) {
		return {
			status: "error",
			message: `Something went wrong ${error}`,
		};
	}
};
