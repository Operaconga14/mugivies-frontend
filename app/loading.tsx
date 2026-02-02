import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
	return (
		<div className="flex h-screen bg-gray-900 items-center overflow-y-hidden justify-center text-white text-2xl">
			<Spinner className="size-20" />
		</div>
	);
};

export default Loading;
