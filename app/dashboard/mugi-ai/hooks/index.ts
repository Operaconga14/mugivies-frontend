import { useState, useCallback } from "react";
import { Conversation, Message } from "../types";
import { suggestions } from "@/app/lib/mock-data";
import { Arrange, ChordProgression, defaultMugiAI, Lyrics, Melody } from "@/app/actions/mugiai.actions";

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
				let aiContent: string | "";

				switch (content) {
					case suggestions[0].prompt:
						aiContent = ((await ChordProgression(content)) || "") as string;
						break;
					case suggestions[1].prompt:
						aiContent = ((await Melody(content)) || "") as string;
						break;
					case suggestions[2].prompt:
						aiContent = ((await Arrange(content)) || "") as string;
						break;
					case suggestions[3].prompt:
						aiContent = ((await Lyrics(content)) || "") as string;
						break;
					default:
						aiContent = ((await defaultMugiAI(content)) || "") as string;
						break;
				}

				const aiResponse: Message = {
					id: generateId(),
					role: "assistant",
					content: aiContent || "I apologize, but I couldn't generate a response.",
				};

				// Add AI response to conversation
				setConversations((prev) => prev.map((conv) => (conv.id === currentConversationId ? { ...conv, messages: [...conv.messages, aiResponse] } : conv)));
			} catch (error) {
				console.error("Chat error:", error);

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
