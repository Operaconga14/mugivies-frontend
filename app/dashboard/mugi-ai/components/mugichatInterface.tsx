"use client";
import { useEffect, useRef, useState } from "react";
import MugiSidebar from "./mugiSidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MugiChatInput from "./mugiChatInput";
import MugiWelcomeScreen from "./mugiWelcomeScreen";
import { useMusicChat } from "../hooks";
import MugiChatMessage from "./mugiChatMessage";

export default function MugiChatInterface() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const {
		conversations,
		activeConversationId,
		messages,
		isLoading,
		sendMessage,
		handleNewChat: onNewChat,
		handleSelectConversation: onSelectConversation,
		handleDeleteConversation: onDeleteConversation,
	} = useMusicChat();

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSend = async (content: string) => {
		await sendMessage(content);
	};

	const handleNewChat = () => {
		onNewChat();
		setMobileMenuOpen(false);
	};

	const handleSelectConversation = (id: string) => {
		onSelectConversation(id);
		setMobileMenuOpen(false);
	};

	const handleDeleteConversation = (id: string) => {
		onDeleteConversation(id);
	};

	return (
		<div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
			<div className="hidden md:block">
				<MugiSidebar
					sessions={conversations}
					currentSessionId={activeConversationId}
					onNewChat={handleNewChat}
					onSelectSession={handleSelectConversation}
					onDeleteSession={handleDeleteConversation}
					isCollapsed={sidebarCollapsed}
					onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
				/>
			</div>

			{/* Mobile bOverlay Sidebar */}
			{mobileMenuOpen && <div className="fixed inset-0 bg-gray-900/50 z-40 md:hidden" onClick={() => setMobileMenuOpen(false)}></div>}

			{/* Mobile Sidebar */}
			<div className={cn("fixed left-0 h-full z-50 md:hidden transition-transform duration-300", mobileMenuOpen ? "translate-x-0" : "-translate-x-full")}>
				<MugiSidebar
					sessions={conversations}
					currentSessionId={activeConversationId}
					onNewChat={handleNewChat}
					onSelectSession={handleSelectConversation}
					onDeleteSession={handleDeleteConversation}
					isCollapsed={sidebarCollapsed}
					onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
				/>
			</div>

			{/* Main Chat Area */}
			<div className="flex-1 flex flex-col min-w-0">
				<header className="md:hidden flex items-center gap-3 p-4 border-b border-gray-700">
					<Button variant={"ghost"} size={"icon"} className="h-9 w-9" onClick={() => setMobileMenuOpen(true)}>
						<Menu className="w-5 h-5 text-gray-400" />
					</Button>
					<span className="font-display font-semibold text-gray-400">Mugi AI</span>
				</header>

				{/* Message Area */}
				<div className="flex-1 overflow-y-auto scrollbar-thin text-white">
					<div className="flex-1 overflow-y-auto scrollbar-thin">
						{messages.length === 0 ? (
							<MugiWelcomeScreen onPromptClick={handleSend} />
						) : (
							<div className="max-w-3xl mx-auto">
								{messages.map((message) => (
									<MugiChatMessage key={message.id} {...message} />
								))}
								{isLoading && <MugiChatMessage role="assistant" content="" isLoading={true} />}
								<div ref={messagesEndRef} />
							</div>
						)}
					</div>
				</div>

				{/* Input Area */}
				<MugiChatInput onSendMessage={handleSend} disabled={isLoading} />
			</div>
		</div>
	);
}
