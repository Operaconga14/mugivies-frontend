import { useState, useRef, useEffect } from "react";
import { MugiChatInputProps } from "../types";
import { Button } from "@/components/ui/button";
import { Music2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MugiChatInput({ disabled, onSendMessage }: MugiChatInputProps) {
	const [message, setMessage] = useState("");
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = () => {
		if (message.trim() && !disabled) {
			onSendMessage(message.trim());
			setMessage("");
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit();
		}
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
		}
	}, [message]);
	return (
		<div className="border-t border-gray-700 bg-transparent backdrop-blur-xl p-4">
			<div className="max-w-3xl mx-auto">
				<div className="relative flex items-end gap-2 bg-gray-transparent rounded-2xl border border-gray-700 focus-within:border-gray-700 focus-within:shadow-glow transition-all duration-300">
					<div className="absolute left-4 bottom-3.5 text-muted-foreground">
						<Music2 className="w-5 h-5" />
					</div>

					<textarea
						ref={textareaRef}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Describe the music you want to create..."
						disabled={disabled}
						rows={1}
						className={cn("flex-1 bg-transparent pl-12 pr-4 py-3.5 resize-none", "text-gray-400 placeholder:text-gray-500", "focus:outline-none min-h-[52px] max-h-[200px]", "scrollbar-thin")}
					/>

					<Button
						onClick={handleSubmit}
						disabled={!message.trim() || disabled}
						size="icon"
						className={cn(
							"mr-2 mb-2 rounded-xl h-9 w-9 transition-all duration-300",
							message.trim() ? "bg-transparent hover:bg-gray-800 hover:opacity-90 shadow-glow" : "bg-transparent text-muted-foreground",
						)}>
						<Send className="w-4 h-4" />
					</Button>
				</div>

				<p className="text-xs text-muted-foreground text-center mt-3">Composer AI helps you create, arrange, and refine musical ideas</p>
			</div>
		</div>
	);
}
