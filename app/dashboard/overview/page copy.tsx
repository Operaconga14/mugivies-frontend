"use client";
import { getUserDetails } from "@/app/actions/user.actions";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

export default function OverviewPage() {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchUser() {
			try {
				const userData = await getUserDetails();
				setUser(userData);
			} catch (error) {
				return error;
			} finally {
				setLoading(false);
			}
		}

		fetchUser();
	}, []);

	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		);
	}

	if (!user) {
		return <div>Unauthorised</div>;
	}

	return (
		<div>
			<h1>Welcome, {user.name}!</h1>
			<p>Your profile information:</p>
			<ul>
				<li>Email: {user.email}</li>
				<li>Role: {user.role}</li>
				<li>Subscription: {user.subscriptionType}</li>
				<li>Credits: {user.creditBalance}</li>
			</ul>
		</div>
	);
}
