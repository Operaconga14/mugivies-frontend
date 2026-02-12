"use server";
import { User } from "../entities/user.entity";
import { AppDataSource } from "../lib/data-source";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { JwtPayload } from "../types/jwt";
import { toast } from "sonner";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export const getUserDetails = async () => {
	try {
		// Get cookies
		const cookieStore = await cookies();
		const token = cookieStore.get("access_token")?.value;

		if (!token) {
			toast.error("No token found	")
			return null
		}

		const { payload } = await jwtVerify<JwtPayload>(token, secret);

		const db = await AppDataSource();
		const userRepo = await db.getRepository(User);
		const user = await userRepo.findOne({ where: { id: Number(payload.id) } });

		if (!user) {
			toast.error("User not found")
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
			country: user?.country,
			subscriptionType: user?.subscriptionType,
			subscriptionStatus: user?.subscriptionStatus,
			subscriptionExpiresAt: user?.subscriptionExpiresAt,
			creditBalance: user?.creditBalance,
			createdAt: user?.createdAt,
			updatedAt: user?.updatedAt,
		};

		return plainUser;
	} catch (error) {
		toast.error("Failed to get user details")
		return null;
	}
};

export const updateSocial = async (social: string, link: string) => {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get("access_token")?.value;

		if (!token) {
			return { success: false, error: "No token found" };
		}

		const { payload } = await jwtVerify<JwtPayload>(token, secret);


		const db = await AppDataSource()
		const userRepo = await db.getRepository(User)

		const ValidateSocialFields: Record<string, keyof User> = {
			facebook: "facebook",
			instagram: "instagram",
			youtube: "youtube",
			audiomack: "audiomack",
			tiktok: "tiktok",
			boomplay: "boomplay",
			applemusic: "applemusic",
			spotify: "spotify",
		}

		const socialField = ValidateSocialFields[social]

		if (!socialField) {
			return { success: false, error: "Invalid social" }
		}

		const user = await userRepo.findOne({ where: { id: Number(payload.id) } })

		if (!user) {
			return { success: false, error: "User not found" }
		}

		const newValue = link.trim() === '' ? null : link

		await userRepo.update({ id: Number(payload.id) }, { [socialField]: newValue })

		return { success: true }

	} catch (error) {
		return { success: false, error: "Failed to update social" }
	}
}

export const removeSocial = async (social: string) => {
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get("access_token")?.value;

		if (!token) {
			return { success: false, error: "No token found" };
		}

		const { payload } = await jwtVerify<JwtPayload>(token, secret);


		const db = await AppDataSource()
		const userRepo = await db.getRepository(User)

		const ValidateSocialFields: Record<string, keyof User> = {
			facebook: "facebook",
			instagram: "instagram",
			youtube: "youtube",
			audiomack: "audiomack",
			tiktok: "tiktok",
			boomplay: "boomplay",
			applemusic: "applemusic",
			spotify: "spotify",
		}

		const socialField = ValidateSocialFields[social]

		if (!socialField) {
			return { success: false, error: "Invalid social" }
		}

		const user = await userRepo.findOne({ where: { id: Number(payload.id) } })

		if (!user) {
			return { success: false, error: "User not found" }
		}

		await userRepo.update({ id: Number(payload.id) }, { [socialField]: null })

		return { success: true }

	} catch (error) {
		return { success: false, error: "Failed to remove social" }
	}
}

export const logOut = async () => {
	const cookieStore = await cookies()
	cookieStore.delete("access_token")
	cookieStore.delete("refresh_token")
	return { success: true }
}