"use client";

import { appliedGigs, userState } from "@/app/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function OverviewPage() {
	const userStats = userState;
	const gigApplications = appliedGigs;

	return (
		<div className="w-full px-5 py-5 text-white">
			{/* User Stat */}
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
				{userStats.map((stat) => (
					<Card key={stat.title} className="h-40 bg-gray-800/50 backdrop-blur-xl border-gray-700">
						<CardContent>
							<h1 className="text-gray-400 text-sm">{stat.title}</h1>
							<p className="text-white text-4xl font-bold mt-4">{stat.value}</p>
						</CardContent>
					</Card>
				))}
			</div>
			{/* Recent Gig Application */}
			<div className="mt-7">
				<div className="mt-4">
					<Card className="bg-gray-800/50 border-gray-700 backdrop-blur-xl">
						<CardHeader className="flex justify-between items-center">
							<CardTitle className="text-white">Recent Gig Applications</CardTitle>
							<Link className="text-purple-600 hover:text-purple-400" href={"/dashboard/gigs"}>
								View All
							</Link>
						</CardHeader>
						<CardContent className="flex-col flex">
							{gigApplications.map((application) => (
								<div className="border-1 border-gray-700 bg-gray-300/50 px-10 py-4 rounded-md grid grid-col-2 ">
									{/* First Content */}
									<div className="flex justify-between items-center">
										<h1 className="text-white font-bold text-[22px]">{application.title}</h1>
										<div className="mt-5 bg-yellow-500/20 text-yellow-400 text-white px-2 py-1 rounded-full px-4 py-1 font-semibold w-fit">{application.status}</div>
									</div>
									{/* Second Content */}
									<div className="flex items-center text-gray-400 gap-2">
										<MapPin className="" size={20} />
										<p className="text-mdtext-gray400">{application.location}</p>
										<Calendar className="" size={20} />
										<p>{application.date}</p>
										<Clock size={20} />
										<p>{application.time}</p>
										<div className="text-green-400 font-semibold">$500</div>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
