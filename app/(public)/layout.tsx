import Footer from "../components/footer";
import Header from "../components/header";

export default function Publiclayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<div className="pt-18">{children}</div>
			<Footer />
		</div>
	);
}
