import Link from "next/link";

export default function Footer() {
	const fullYear = new Date().getFullYear();

	return (
		<div className="border-t bg-gray-900/100 border-pink-500/30 h-16 flex justify-center items-center">
			<div className="flex gap-1">
				<p className="flex text-white">&copy; {fullYear} </p>
				<Link href={"/"} className="hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent hover:font-bold font-semibold text-white">
					MUGIVIES.
				</Link>{" "}
				<p className="text-white">All rights reserved.</p>
			</div>
		</div>
	);
}
