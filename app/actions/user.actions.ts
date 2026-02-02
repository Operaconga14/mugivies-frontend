"use server";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../lib/data-source";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { JwtPayload } from "../types/jwt";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export const getUserDetails = async () => {
	try {
		// Get cookies
		const cookieStore = await cookies();
		const token = cookieStore.get("access_token")?.value;

		if (!token) {
			console.log("No token found");
			return null;
		}

		const { payload } = await jwtVerify<JwtPayload>(token, secret);
		// console.log("JWT payload:", payload);

		const db = await AppDataSource();
		const userRepo = await db.getRepository(User);
		const user = await userRepo.findOne({ where: { id: Number(payload.id) } });

		// console.log("Database query result:", user);

		if (!user) {
			return null;
		}

		// Convert TypeORM entity to plain object
		const plainUser = {
			id: user?.id,
			name: user?.name,
			email: user?.email,
			username: user?.username,
			picture: user?.picture,
			role: user?.role,
			instruments: user?.instruments,
			contact: user?.contact,
			facebook: user?.facebook,
			instagram: user?.instagram,
			youtube: user?.youtube,
			audiomack: user?.audiomack,
			tiktok: user?.tiktok,
			boomplay: user?.boomplay,
			applemusic: user?.applemusic,
			spotify: user?.spotify,
			genre: user?.genre,
			bio: user?.bio,
			collaborations: user?.collaborations,
			awards: user?.awards,
			location: user?.location,
			subscriptionType: user?.subscriptionType,
			subscriptionStatus: user?.subscriptionStatus,
			subscriptionExpiresAt: user?.subscriptionExpiresAt,
			creditBalance: user?.creditBalance,
			createdAt: user?.createdAt,
			updatedAt: user?.updatedAt,
		};

		// console.log(plainUser);
		return plainUser;
	} catch (error) {
		console.error(error);
		return null;
	}
};
