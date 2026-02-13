"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { logOut } from "../actions/user.actions";

interface Message {
	id: number;
	title: string;
	content: string;
	time: string;
}

const newMessages: Message[] = [
	{
		id: 1,
		title: "Message 1",
		content: "This is message 1 sdhdsudfdhbshhdbsbfdgofsgduhsgugdugiufgdifygidyg",
		time: "2 hours ago",
	},
];

export default function Topbar() {
	const [notification, setIsNotification] = useState(false);
	const [userMenu, setUserMenu] = useState(false);
	const [message, setMessage] = useState<Message[]>([]);
	const newmessage = newMessages;

	const handleMessages = () => {
		setMessage([...newmessage]);
	};

	const handleLogout = async () => {
		await logOut();
		sessionStorage.removeItem("access_token");
		redirect("/auth/login");
	};

	useEffect(() => {
		handleMessages();
	}, []);

	return (
		<div className="w-full h-16 text-white bg-gray-900 flex justify-between items-center px-3 shadow-lg border-b-[1px] border-gray-800">
			<div className="flex items-center gap-2">
				<SidebarTrigger />
				<h1 className="text-lg font-semibold">Dashboard</h1>
			</div>
			<div className="flex items-center gap-2">
				{/* Notification Button */}
				<Button
					className="text-lg font-semibold bg-transparent border-none hover:bg-transparent hover:text-gray-400"
					onClick={() => {
						setIsNotification(!notification);
						setUserMenu(false);
					}}>
					<Bell size={40} />
				</Button>
				{/* User Button */}
				<Button
					className="text-lg font-semibold bg-transparent border-none hover:bg-transparent hover:text-gray-400"
					onClick={() => {
						setUserMenu(!userMenu);
						setIsNotification(false);
					}}>
					<Image src="/logo.png" width={40} height={40} className="rounded-full" alt="" />
				</Button>
			</div>

			{/* Notification Box */}
			{notification && (
				<div className="absolute top-16 z-50 right-0 w-full md:w-100 md:right-22 px-5 py-2	 border-1 border-gray-700 rounded-sm bg-gray-900">
					<div className="absolute top-[-26] right-23 md:right-1">
						<ChevronUp size={40} className="text-gray-600" />
					</div>
					{/* Content */}
					<div className="flex justify-between items-center py-1">
						<h1 className="text-md">Messages</h1>
						<X size={20} className="text-gray-400" onClick={() => setIsNotification(false)} />
					</div>
					<Separator className="bg-gray-700 h-1 w-full mb-2" />
					<div className="flex justify-between items-center w-full text-center py-2">
						{/* No Messages */}
						{message.length <= 0 && (
							<div className="flex justify-center items-center w-full">
								<p className="text-gray-400">No messages</p>
							</div>
						)}

						{message.length > 0 &&
							newmessage.map((message, id) => (
								<div key={id} className="flex flex-col w-full border-1 border-gray-700 px-2 py-2 rounded-sm">
									<div className="flex justify-between">
										<h1 className="text-md font-bold text-gray-300">{message.title}</h1>
										<p className="text-sm text-gray-400">{message.time}</p>
									</div>
									<div className="text-start">
										<p className="text-sm text-gray-400">{message.content.slice(0, 45) + (message.content.length > 45 ? "..." : "")}</p>
									</div>
								</div>
							))}
					</div>
					{/* Load More */}
					<div className="flex justify-center items-center w-full">
						<Link href="/dashboard/messages" className="text-sm bg-transparent border-none hover:bg-transparent hover:text-gray-400">
							all messages
						</Link>
					</div>
				</div>
			)}

			{/* User box */}
			{userMenu && (
				<div className="absolute top-16 right-6 w-50 px-5 py-2	 border-1 border-gray-700 rounded-sm bg-gray-900 z-50">
					<div className="absolute top-[-26] right-1">
						<ChevronUp size={40} className="text-gray-600" />
					</div>
					{/* Content */}
					<div className="flex justify-between items-center py-1">
						<h1 className="text-lg">Profile</h1>
						<X size={20} className="text-gray-400" onClick={() => setUserMenu(false)} />
					</div>
					<Separator className="bg-gray-700 h-1 w-full mb-2" />
					<div className="">
						<h1 className="text-lg font-semibold">Profile</h1>
					</div>
					<Separator className="bg-gray-700 h-1 w-full" />
					<div className="flex mt-2">
						<Button className="w-full px-1 py-2 bg-transparent border-none hover:bg-transparent hover:text-gray-400" onClick={() => handleLogout()}>
							Logout
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}
