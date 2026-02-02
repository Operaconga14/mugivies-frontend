"use client";

import { appliedGigs, upcomingEvents, userState } from "@/app/lib/mock-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function OverviewPage() {
	const userStats = userState;
	const gigApplications = appliedGigs;
	const upcominEvents = upcomingEvents;

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
			{/* Recent Gig Application And Upcoming Event */}
			<div className="mt-7 flex flex-col xl:flex-row gap-4">
				{/* Recent Gig Application */}
				<div className="mt-4 w-full">
					<Card className="bg-gray-800/50 border-gray-700 backdrop-blur-xl">
						<CardHeader className="flex justify-between items-center">
							<CardTitle className="text-white">Recent Gig Applications</CardTitle>
							<Link className="text-purple-600 hover:text-purple-400 text-sm" href={"/dashboard/gigs"}>
								View All
							</Link>
						</CardHeader>
						<CardContent className="flex-col flex">
							{gigApplications.map((application) => (
								<div key={application.title} className="border-1 border-gray-700 bg-gray-900/50 md:px-6 py-4 rounded-md my-2">
									{/* First Content */}
									<div className="flex flex-col md:flex-row justify-between items-center">
										<h1 className="text-white font-bold text-[18px] md:text-[22px]">{application.title}</h1>
										<div
											className={`mt-5 px-2 py-1 rounded-full px-4 py-1 font-semibold w-fit ${application.status === "Pending" ? "bg-yellow-500/20 text-yellow-400" : application.status === "Accepted" ? "bg-green-500/20 text-green-400" : application.status === "Applied" ? "bg-gray-500/20 text-gray-400" : application.status === "Rejected" ? "bg-red-500/20 text-red-400" : ""}`}>
											{application.status}
										</div>
									</div>
									{/* Second Content */}
									<div className="flex flex-col md:flex-row items-center text-gray-400 gap-2 mt-2 md:mt-0">
										<MapPin className="" size={20} />
										<p className="text-md text-gray400">{application.location}</p>
										<Calendar className="" size={20} />
										<p>{application.date}</p>
										<Clock size={20} />
										<p>{application.time}</p>
										<div className="text-green-400 font-semibold">${application.price}</div>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</div>

				{/* Upcming Event */}
				<div className="w-full xl:w-1/2 mt-4">
					<Card className="bg-gray-800/50 border-gray-600 text-white">
						<CardHeader>
							<CardTitle>Upcoming Event</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-col">
							{upcominEvents.map((event) => (
								<div key={event.title} className="border-1 border-gray-700 bg-gray-900/50 px-3 md:px-6 py-4 rounded-md my-2">
									{/* First Content */}
									<div className="flex flex-col md:flex-row justify-between items-start">
										<h1 className="text-white font-bold text-[16px] md:text-[22px]">{event.title}</h1>
									</div>
									{/* Second Content */}
									<div className="flex flex-col mt-2 items-start text-gray-400 gap-2">
										<div className="flex gap-2">
											<Calendar className="" size={18} />
											<p>{event.date}</p>
											<Clock size={18} />
											<p>{event.time}</p>
										</div>
										<div className="flex gap-2">
											<MapPin className="" size={18} />
											<p className="text-mdtext-gray400">{event.location}</p>
										</div>
									</div>
								</div>
							))}
						</CardContent>
						<CardFooter className="flex items-center justify-center">
							{/* Content Footer */}
							<Link className="bg-transparent border-1 border-purple-700 w-full md:w-50 h-13 rounded-md text-center flex items-center justify-center" href="/dashboard/events">
								View All Events
							</Link>
						</CardFooter>
					</Card>
				</div>
			</div>
		</div>
	);
}
