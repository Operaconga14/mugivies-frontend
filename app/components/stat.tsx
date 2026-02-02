import { Card, CardContent } from "@/components/ui/card";
import { stats } from "../lib/mock-data";

export default function Stat() {
	return (
		<div className="min-h-100 w-full py-16 flex flex-col items-center">
			<div className="flex flex-col items-center text-gray-500">
				<h1 className="text-4xl md:text-6xl font-semibold">Website Statistics</h1>
				<p className="text-md text-center">How far we've grown and large our community is</p>
			</div>
			{/* Stat Content */}
			<div className="grid grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
				{stats.map((stat, index) => (
					<div key={index} className="text-center">
						<div className="text-4xl md:text-8xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">{stat.value}+</div>
						<div className="text-gray-400">{stat.label}</div>
					</div>
				))}
			</div>
		</div>
	);
}
