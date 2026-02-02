"use client";

export default function Waveform({
	className,
	hieght1,
	hieght2,
	hieght3,
	hieght4,
	hieght5,
}: {
	className: string;
	hieght1: number;
	hieght2: number;
	hieght3: number;
	hieght4: number;
	hieght5: number;
}) {
	const bars = [{ height: hieght1 }, { height: hieght2 }, { height: hieght3 }, { height: hieght4 }, { height: hieght5 }];

	return (
		<div className={`flex items-center gap-1 ${className}`}>
			{bars.map((bar, i) => (
				<div
					key={i}
					className="bg-gradient-to-b from-purple-500 to-purple-700 rounded-full animate-wave"
					style={{
						width: "2px",
						minWidth: "2px",
						height: `${bar.height}px`,
						animationDelay: `${i * 0.5}s`,
					}}
				/>
			))}
		</div>
	);
}
