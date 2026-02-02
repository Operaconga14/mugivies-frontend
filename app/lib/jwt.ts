import jwt from "jsonwebtoken";
import { User } from "../entities/user.entity";

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (user: User) => {
	const payload = {
		username: user.username,
		email: user.email,
		role: user.role,
		id: user.id,
	};
	return jwt.sign(payload, JWT_SECRET!, { expiresIn: "1d" });
};

// export const verifyToken = (token: string) => {
// return jwt.verify(token, JWT_SECRET!);
// };
