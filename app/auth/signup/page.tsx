"use client";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ChevronLeft, MusicIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signupSchema } from "@/app/lib/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { hashPassword } from "@/app/lib/auth";
import { UserRole } from "@/app/types/enums";
import { userRoles } from "@/app/lib/mock-data";
import { signUpAction } from "@/app/actions/auth.actions";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import { redirect } from "next/navigation";
import { useState } from "react";
import Waveform from "@/app/dashboard/mugi-ai/components/waveform";

export default function Signup() {
	const [isLoading, setIsloading] = useState(false);
	// Register Form
	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			name: "",
			email: "",
			username: "",
			role: UserRole.MUSICIAN,
			password: "",
		},
	});

	// Handle Onsubmit Form
	const onSubmit = async (values: z.infer<typeof signupSchema>) => {
		setIsloading(true);
		const hashedPassword = await hashPassword(values.password);
		values.password = hashedPassword;

		const result = await signUpAction(values);

		if (result.status === "error") {
			setIsloading(false);
			toast.error(result.message);
		} else {
			setIsloading(false);
			toast.success(result.message);
			setTimeout(() => {
				redirect("/auth/login");
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
						<h1 className="text-3xl font-bold text-white">Sign Up</h1>
						<Link href={"/"} className="flex items-center text-xs gap-1 text-purple-900 hover:text-purple-500 mt-2"><ChevronLeft className="size-4 text-gray-500" />Home</Link>
					</div>
					{/* Form Content */}
					<Form {...form}>
						<form id="signup-form" className="w-full flex flex-col space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
							{/* Name Field */}
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-500 text-sm md:text-lg">Name</FormLabel>
										<FormControl>
											<Input
												type="text"
												className="text-gray-300 border-1 border-pink-500/30 h-10 md:h-15 focus:border-1 focus:border-pink-500focus:outline-none focus:ring-1 focus:ring-pink-400"
												placeholder="John Deo"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
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
							{/* Username Field */}
							<FormField
								control={form.control}
								name="username"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-500 text-sm md:text-lg">Username</FormLabel>
										<FormControl>
											<Input
												type="text"
												className="text-gray-300 border-1 border-pink-500/30 h-10 md:h-15 focus:border-1 focus:border-pink-500focus:outline-none focus:ring-1 focus:ring-pink-400"
												placeholder="johndoe"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							{/* Role Field */}
							<FormField
								control={form.control}
								name="role"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-500 text-sm md:text-lg">Role</FormLabel>
										<FormControl>
											<Select onValueChange={field.onChange} value={field.value}>
												<SelectTrigger
													className="border-1 border-pink-500/30 focus:border-1 focus:border-pink-500focus:outline-none focus:ring-1 focus:ring-pink-400 w-full text-gray-400 text-md"
													style={{ height: "60px", maxHeight: "45px" }}>
													<SelectValue placeholder="Select a role" />
												</SelectTrigger>
												<SelectContent className="bg-gray-900 border-1 border-pink-500/30">
													{userRoles.map((role) => (
														<SelectItem key={role.value} value={role.value} className="text-gray-300 text-md">
															{role.label}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
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
					<Button className="bg-transparent border-2 w-50 h-13 border-pink-500/30 text-lg" type="submit" form="signup-form">
						{isLoading ? <Waveform className={""} hieght1={5} hieght2={8} hieght3={15} hieght4={10} hieght5={7} /> : "Signup"}
					</Button>

					<Separator className="border-1 border-pink-700/30 bg-transparent" />
					<div className="flex gap-2">
						<p className="text-gray-500 text-sm md:text-lg">Already have an account?</p>
						<Link href="/auth/login" className="text-pink-500 text-sm md:text-lg">
							Login
						</Link>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
