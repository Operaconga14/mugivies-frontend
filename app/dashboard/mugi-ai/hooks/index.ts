import { useState, useCallback } from "react";
// import { supabase } from "@/integrations/supabase/client";
// import { toast } from "@/hooks/use-toast";

interface Message {
	id: string;
	role: "user" | "assistant";
	content: string;
}

interface Conversation {
	id: string;
	title: string;
	timestamp: Date;
	messages: Message[];
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useMusicChat = () => {
	const [conversations, setConversations] = useState<Conversation[]>([]);
	const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	const activeConversation = conversations.find((c) => c.id === activeConversationId);
	const messages = activeConversation?.messages || [];

	const sendMessage = useCallback(
		async (content: string) => {
			const userMessage: Message = {
				id: generateId(),
				role: "user",
				content,
			};

			let currentConversation = activeConversation;
			let currentConversationId = activeConversationId;

			// Create new conversation if needed
			if (!currentConversation) {
				const newConversation: Conversation = {
					id: generateId(),
					title: content.slice(0, 30) + (content.length > 30 ? "..." : ""),
					timestamp: new Date(),
					messages: [],
				};
				setConversations((prev) => [newConversation, ...prev]);
				setActiveConversationId(newConversation.id);
				currentConversation = newConversation;
				currentConversationId = newConversation.id;
			}

			// Add user message
			setConversations((prev) => prev.map((conv) => (conv.id === currentConversationId ? { ...conv, messages: [...conv.messages, userMessage] } : conv)));

			setIsLoading(true);

			try {
				// Get all messages for context (including the new user message)
				const allMessages = [...(currentConversation?.messages || []), userMessage].map((msg) => ({
					role: msg.role,
					content: msg.content,
				}));

				// const { data, error } = await supabase.functions.invoke("music-chat", {
				// body: { messages: allMessages },
				// });
				//
				// if (error) {
				// throw new Error(error.message);
				// }
				//
				// if (data.error) {
				// throw new Error(data.error);
				// }
				//
				// const aiResponse: Message = {
				// id: generateId(),
				// role: "assistant",
				// content: data.content,
				// };
				//
				// // // setConversations((prev) => prev.map((conv) => (conv.id === currentConversationId ? { ...conv, messages: [...conv.messages, aiResponse] } : conv)));
			} catch (error) {
				console.error("Chat error:", error);

				// Show toast with error message
				// toast({
				// title: "Error",
				// // description: error instanceof Error ? error.message : "Failed to get AI response",
				// variant: "destructive",
				// });

				// Add error message to chat
				const errorMessage: Message = {
					id: generateId(),
					role: "assistant",
					content: "I apologize, but I encountered an error. Please try again in a moment.",
				};

				setConversations((prev) => prev.map((conv) => (conv.id === currentConversationId ? { ...conv, messages: [...conv.messages, errorMessage] } : conv)));
			} finally {
				setIsLoading(false);
			}
		},
		[activeConversation, activeConversationId],
	);

	const handleNewChat = useCallback(() => {
		setActiveConversationId(null);
	}, []);

	const handleSelectConversation = useCallback((id: string) => {
		setActiveConversationId(id);
	}, []);

	const handleDeleteConversation = useCallback(
		(id: string) => {
			setConversations((prev) => prev.filter((c) => c.id !== id));
			if (activeConversationId === id) {
				setActiveConversationId(null);
			}
		},
		[activeConversationId],
	);

	return {
		conversations,
		activeConversationId,
		messages,
		isLoading,
		sendMessage,
		handleNewChat,
		handleSelectConversation,
		handleDeleteConversation,
	};
};
