"use client";
import { Button } from "@/components/ui/button";
import { MenuIcon, MusicIcon, PersonStanding, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
	const [isMobileOpen, setIsmobileOpen] = useState(false);
	const [hasToken, sethasToken] = useState(false);

	useEffect(() => {
		const token = sessionStorage.getItem("access_token");
		if (token) {
			sethasToken(true);
		}
	}, []);

	return (
		<nav className="text-white w-full h-18 bg-black/80 fixed backdrop-blur-md z-50 border-b border-pink-500/30 justify-between">
			{/* Navbar Content Container */}
			<div className="flex justify-between items-center px-5">
				{/* Logo */}
				<Link href={"/"} className="flex items-center justify-center gap-2">
					<MusicIcon className="size-15 text-gray-500" />
					<p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">MUGIVIES</p>
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex">
					<ul className="flex gap-4">
						<li>
							<Link href={"gigs"} className="hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent hover:font-bold font-semibold text-lg">
								Gigs
							</Link>
						</li>
						<li>
							<Link href={"events"} className="hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent hover:font-bold font-semibold text-lg">
								Events
							</Link>
						</li>
						<li>
							<Link href={"vacancy"} className="hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent hover:font-bold font-semibold text-lg">
								Vacancies
							</Link>
						</li>
						<li>
							<Link href={"market"} className="hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent hover:font-bold font-semibold text-lg">
								Market Place
							</Link>
						</li>
						<li>
							<Link href={"blog"} className="hover:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text hover:text-transparent hover:font-bold font-semibold text-lg">
								Blog
							</Link>
						</li>
					</ul>
				</div>

				{/* Sign up button for Desktop */}
				<div className="flex">
					<Link
						className="hidden md:flex bg-gradient-to-r text-gray-300 from-purple-500 to-pink-500 px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition font-bold text-lg"
						href={hasToken ? "/dashboard/overview" : "auth/login"}>
						{hasToken ? "Dashboard" : "Get Started"}
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<Button className="bg-transparent hover:bg-transparent md:hidden" onClick={() => setIsmobileOpen(!isMobileOpen)}>
					{!isMobileOpen && <MenuIcon className="size-6" />}
					{isMobileOpen && <X className="size-6" />}
				</Button>
			</div>

			{/* Mobile Menu */}
			{isMobileOpen && (
				<div className="md:hidden absolute top-18 pt-2 bg-black/90 backdrop-blur-lg w-full h-60 px-8 gap-6 flex flex-col ">
					<ul className="flex flex-col gap-2">
						<li>
							<Link href={"gigs"} className="focus:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text focus:text-transparent focus:font-bold font-semibold text-md">
								Gigs
							</Link>
						</li>
						<li>
							<Link href={"events"} className="focus:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text foccus:text-transparent focus:font-bold font-semibold text-md">
								Events
							</Link>
						</li>
						<li>
							<Link href={"vacancy"} className="focus:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text foccus:text-transparent focus:font-bold font-semibold text-md">
								Vacancies
							</Link>
						</li>
						<li>
							<Link href={"market"} className="focus:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text foccus:text-transparent focus:font-bold font-semibold text-md">
								Market Place
							</Link>
						</li>
						<li>
							<Link href={"blog"} className="focus:bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text foccus:text-transparent focus:font-bold font-semibold text-md">
								Blog
							</Link>
						</li>
					</ul>
					{/* Sign up button for Mobile */}
					<div>
						<Link
							className="bg-gradient-to-r text-gray-300 from-purple-500 to-pink-500 px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition font-bold text-md"
							href={hasToken ? "/dashboard/overview" : "auth/login"}>
							{hasToken ? "Dashboard" : "Get Started"}
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
}
