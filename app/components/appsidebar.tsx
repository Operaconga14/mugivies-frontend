"use client";
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { sideBarItems } from "../lib/mock-data";
import Link from "next/link";
import { MusicIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function AppSidebar() {
	const [open, setOpen] = useState(false);

	const handleCloseSidebar = () => {
		setOpen(false);
	}
	return (
		<Sidebar className="bg-gray-900 border-gray-700">
			<SidebarHeader className="bg-gray-900 h-17">
				<div className="flex items-center justify-center gap-2">
					<MusicIcon className="size-10 text-gray-500" />
					<p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">MUGIVIES</p>
				</div>
			</SidebarHeader>
			<Separator className="w-full h-1 bg-gray-700" />

			<SidebarContent className="bg-gray-900 px-5 py-4">
				<SidebarMenu className="gap-6">
					{sideBarItems.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton
								className="h-16 flex text-white bg-transparent hover:bg-gray-700/30 hover:text-white text-md md:text-xl focus:bg-gradient-to-r focus:from-purple-900 focus:to-pink-900 focus:text-white"
								asChild>
								<Link href={item.url} onClick={handleCloseSidebar}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
			<SidebarFooter className="bg-gray-900 text-white px-5 py-4 shadow-lg border-t-1 border-gray-700">
				<div className="flex gap-4 items-center">
					<Image src="/logo.png" width={40} height={40} className="rounded-full" alt="" />
					<div className="flex flex-col">
						<p className="text-sm text-gray-400">Amire Joseph</p>
						<p className="text-xs text-gray-400">Role</p>
					</div>
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
