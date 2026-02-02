import { Card, CardContent } from "@/components/ui/card";
import { features } from "../lib/mock-data";

export default function Features() {
	return (
		<div className="min-h-100 w-full pb-5 flex flex-col items-center">
			<div className="flex flex-col">
				<h1 className="text-gray-800 text-5xl font-semibold">Featues</h1>
				<p className="text-gray-500 font-semibold text-md">What mugivies offer's you</p>
			</div>
			{/* Features Content */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 px-3">
				{features.map((feature, index) => (
					<Card key={index} className="w-full lg:w-94 px-5">
						<CardContent className="flex flex-col text-center">
							<div className="text-5xl mb-4">{feature.icon}</div>
							<div className="text-2xl font-semibold text-transparent  bg-clip-text bg-gradient-to-br from-pink-500 to-purple-900 font-bolder">{feature.title}</div>
							<div className="text-lg text-gray-500 mt-2">{feature.desc}</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
