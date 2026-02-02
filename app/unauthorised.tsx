"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

const Unauthorised = () => {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="flex flex-col justify-center items-center">
				<p className="text-5xl md:text-8xl">😡</p>
				<h1 className="text-3xl font-bold text-white">Unauthorised</h1>
				<Link href="auth/login" className="text-purple-500 flex items-center gap-2 hover:underline">
					<MoveLeft />
					Login
				</Link>
			</div>
		</div>
	);
};

export default Unauthorised;
