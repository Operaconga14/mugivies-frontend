import BriefAbout from "../components/brief-about";
import Features from "../components/features";
import Hero from "../components/hero";
import Stat from "../components/stat";

export default async function Home() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return (
		<div className="text-white">
			{/* Hero Section */}
			<section>
				<Hero />
			</section>
			{/* Breif About Section */}
			<section>
				<BriefAbout />
			</section>
			{/* Features Section */}
			<section>
				<Features />
			</section>
			{/* Stat Section */}
			<section>
				<Stat />
			</section>
		</div>
	);
}
