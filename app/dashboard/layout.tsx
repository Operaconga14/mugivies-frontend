import { Toaster } from "sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../components/appsidebar";
import Topbar from "../components/topbar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
	await new Promise((resolve) => setTimeout(resolve, 200));
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full bg-gray-900">
				<Topbar />
				<div className="">{children}</div>
			</main>
		</SidebarProvider>
	);
}
