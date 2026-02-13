"use server";
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function proxy(request: NextRequest) {
	const token = request.cookies.get("access_token")?.value;

	if (!token) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	try {
		await jwtVerify(token, secret);
		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
}

export const config = {
	matcher: ["/dashboard/:path*"],
};
