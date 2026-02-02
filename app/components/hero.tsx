import { Music, Music2, Music3, Music4 } from "lucide-react";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="min-h-150 md:h-200 flex justify-center items-center bg-gray-900">
			{/* Hero Mask 1 */}
			<div className="absolute bg-pink-400/10 w-full h-100 rounded-full top-20 md:top-70 right-0">
				<Music3 className="size-8 text-gray-400/10 absolute top-60 left-40" />
				<Music className="size-8 text-gray-400/10 absolute bottom-10 right-51" />
				<Music2 className="size-8 text-gray-400/10 absolute top-40 right-130" />
				<Music4 className="size-8 text-gray-400/10 absolute top-20 left-30" />
				<p className="text-5xl text-gray-400/10 absolute font-bold top-18 right-50">M</p>
			</div>
			{/* hero Content */}
			<div className="flex flex-col items-center">
				<p className="font-bold text-md bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">MUGIVIES</p>
				<h1 className="text-5xl md:text-7xl font-bold px-5 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">YOUR ALL IN ONE MUSIC HUB</h1>
				<p className="font-semibold text-sm md:text-lg text-gray-400">Conect, create, Collaborate</p>
				<p className="text-gray-400  mt-3 px-5 text-center">Discover a vibrant community of musicians and music lovers. Find your next gig, seek talented bandmates, or share your original music.</p>
				{/* Buttons */}
				<div className="flex flex-col md:flex-row mt-5 gap-4 ">
					<Link className="bg-gradient-to-r text-gray-300 from-purple-500 to-pink-500 px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition font-bold text-md" href={"gigs"}>
						Explore Gigs
					</Link>
					<Link className="bg-transparent border-1 border-pink-500 px-4 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition font-bold text-md" href={"auth/signup"}>
						Get Started
					</Link>
				</div>
			</div>
			{/* Hero Mask 2 */}
			<div className="absolute hidden md:block bg-pink-400/5 w-50 h-50 rounded-full top-150 left-0">
				<Music3 className="size-8 text-gray-400/10 absolute top-0 right-23" />
				<Music className="size-8 text-gray-400/10 absolute bottom-0 right-21" />
				<Music2 className="size-8 text-gray-400/10 absolute top-20 right-0" />
				<Music4 className="size-8 text-gray-400/10 absolute top-20 left-0" />
				<p className="text-5xl text-gray-400/10 absolute font-bold top-18 right-20">M</p>
			</div>
		</div>
	);
}
