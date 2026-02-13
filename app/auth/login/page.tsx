"use client";
import { loginAction } from "@/app/actions/auth.actions";
import { loginSchema } from "@/app/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft, MusicIcon } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Waveform from "@/app/dashboard/mugi-ai/components/waveform";

export default function Login() {
	const [isLoading, setisloading] = useState(false);
	const router = useRouter()

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	// Handle Onsubmit Form
	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		setisloading(true);
		const result = await loginAction(values);

		if (result.status === "error") {
			setisloading(false);
			toast.error(result.message);
		} else {
			setisloading(false);
			toast.success(result.message);
			sessionStorage.setItem("access_token", result.token || "");
			setTimeout(() => {
				router.push("/dashboard/overview");
			}, 3000);
		}
	};
	return (
		<div className="w-full min-h-screen bg-gray-900 flex justify-center items-center px-3">
			<Card className="w-full md:w-[600px] min-h-[400px] bg-transparent border-1 border-pink-500/30">
				<CardContent className="flex flex-col gap-4 items-center">
					{/* Form Title */}
					<div className="flex flex-col items-center gap-2">
						<div className="flex items-center justify-center gap-2">
							<MusicIcon className="size-4 text-gray-500" />
							<p className="text-md font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">MUGIVIES</p>
						</div>
						<h1 className="text-3xl font-bold text-white">Login</h1>
						<Link href={"/"} className="flex items-center text-xs gap-1 text-purple-900 hover:text-purple-500 mt-2"><ChevronLeft className="size-4 text-gray-500" />Home</Link>
					</div>
					{/* Form Content */}
					<Form {...form}>
						<form id="login-form" className="w-full flex flex-col space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
							{/* Email Field */}
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-500 text-sm md:text-lg">Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												className="text-gray-300 border-1 border-pink-500/30 h-10 md:h-15 focus:border-1 focus:border-pink-500focus:outline-none focus:ring-1 focus:ring-pink-400"
												placeholder="john@example.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Password Field */}
							<FormField
								control={form.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-500 text-sm md:text-lg">Password</FormLabel>
										<FormControl>
											<Input
												type="password"
												className="text-gray-300 border-1 border-pink-500/30 h-10 md:h-15 focus:border-1 focus:border-pink-500focus:outline-none focus:ring-1 focus:ring-pink-400"
												placeholder="***********"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="justify-center flex-col gap-8">
					<Button className="bg-transparent border-2 w-50 h-13 border-pink-500/30 text-lg" type="submit" form="login-form">
						{isLoading ? <Waveform className={""} hieght1={5} hieght2={8} hieght3={15} hieght4={10} hieght5={7} /> : "Login"}
					</Button>
					<Separator className="border-1 border-pink-700/30 bg-transparent" />
					<div className="flex gap-2">
						<p className="text-gray-500 text-sm md:text-lg">Don't have an account?</p>
						<Link href="/auth/signup" className="text-pink-500 text-sm md:text-lg">
							Signup
						</Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
