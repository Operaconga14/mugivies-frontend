"use server";
import bcrypt from "bcryptjs";

export const hashPassword = async (password: string) => {
	const hashedpassword = await bcrypt.hash(password, 10);
	return hashedpassword;
};

export const comparePassword = async (password: string, hashedPassword: string) => {
	const isMatched = await bcrypt.compare(password, hashedPassword);
	return isMatched;
};
