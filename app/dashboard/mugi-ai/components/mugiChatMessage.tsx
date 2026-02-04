"use client";
import { cn } from "@/lib/utils";
import { MugiMessageProps } from "../types";
import { Music, Sparkles, User } from "lucide-react";
import Waveform from "./waveform";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export default function MugiChatMessage({ content, role, isLoading }: MugiMessageProps) {
	const isUser = role === "user";

	// ADD THESE LINES
	const [displayedContent, setDisplayedContent] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (!isUser && !isLoading && currentIndex < content!.length) {
			const timeout = setTimeout(() => {
				setDisplayedContent((prev) => prev + content![currentIndex]);
				setCurrentIndex((prev) => prev + 1);
			}, 1); // Speed: lower = faster

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, content, isUser, isLoading]);

	useEffect(() => {
		// Reset when content changes
		setDisplayedContent("");
		setCurrentIndex(0);
	}, [content]);
	// END OF ADDITION

	return (
		<div className={cn("flex gap-4 px-4 py-6 animate-fade-in", isUser ? "bg-message-user" : "bg-message-ai")}>
			<div className="flex-shrink-0">
				<div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", isUser ? "bg-secondary" : "bg-gradient-primary shadow-glow")}>
					{isUser ? <User className="w-4 h-4 text-foreground" /> : <Music className="w-4 h-4 text-primary-foreground" />}
				</div>
			</div>

			<div className="flex-1 min-w-0">
				<div className="flex items-center gap-2 mb-1">
					<span className="font-medium text-sm">{isUser ? "You" : "Mugi AI"}</span>
					{!isUser && <Sparkles className="w-3 h-3 text-gray-300" />}
				</div>
				{isLoading ? (
					<div className="flex items-center gap-2 text-muted-foreground">
						<Waveform className="h-4" hieght1={10} hieght2={30} hieght3={20} hieght4={15} hieght5={30} />
						<span className="text-sm">Composing...</span>
					</div>
				) : isUser ? (
					<div className="text-gray-300 whitespace-pre-wrap leading-relaxed ">{content}</div>
				) : (
					<div className="prose prose-sm prose-invert max-w-none text-gray-300 leading-relaxed">
						<ReactMarkdown
							components={{
								p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
								ul: ({ children }) => <ul className="mb-3 list-disc pl-4">{children}</ul>,
								ol: ({ children }) => <ol className="mb-3 list-decimal pl-4">{children}</ol>,
								li: ({ children }) => <li className="mb-1">{children}</li>,
								strong: ({ children }) => <strong className="font-semibold text-gray-300">{children}</strong>,
								h1: ({ children }) => <h1 className="text-lg font-bold mb-2 text-foreground">{children}</h1>,
								h2: ({ children }) => <h2 className="text-base font-bold mb-2 text-foreground">{children}</h2>,
								h3: ({ children }) => <h3 className="text-sm font-bold mb-1 text-foreground">{children}</h3>,
								code: ({ children }) => <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-gray-300 font-mono text-sm">{children}</code>,
								pre: ({ children }) => <pre className="bg-secondary/30 p-3 rounded-lg overflow-x-auto mb-3">{children}</pre>,
							}}>
							{displayedContent}
						</ReactMarkdown>
					</div>
				)}
			</div>
		</div>
	);
}
