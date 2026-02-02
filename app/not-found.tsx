import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col gap-4 min-h-screen items-center justify-center overflow-hidden bg-gray-900">
			<p className="text-5xl md:text-8xl">😓</p>
			<h1 className="text-3xl md:text-5xl font-semibold text-white">404 – Page Not Found</h1>
			<Link href="/" className="text-purple-500 flex items-center gap-2 hover:underline">
				<MoveLeft />
				Go back home
			</Link>
		</div>
	);
}
