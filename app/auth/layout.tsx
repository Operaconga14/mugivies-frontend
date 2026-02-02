import { Toaster } from "sonner";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return (
		<div className="min-w-screen">
			{children}
			<Toaster position="top-right" closeButton richColors />
		</div>
	);
}
