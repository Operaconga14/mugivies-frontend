export interface MugiMessageProps {
	id?: string;
	role?: "user" | "assistant";
	content?: string;
	timestamp?: Date;
	isLoading?: boolean;
}

export interface MugiChatSessionProps {
	id: string;
	title?: string;
	messages?: MugiMessageProps[];
	createdAt?: Date;
	updatedAt?: Date;
}

export interface MugiWelcomeScreenProps {
	onPromptClick?: (prompt: string) => void;
}

export interface MugiChatInterfaceProps {
	messages?: MugiMessageProps[];
	onSendMessage?: (message: string) => void;
	isLoading?: boolean;
}

export interface MugiChatInputProps {
	onSendMessage: (message: string) => void;
	disabled?: boolean;
}

export interface MugiSidebarProps {
	sessions: MugiChatSessionProps[];
	currentSessionId: string | null;
	onSelectSession: (sessionId: string) => void;
	onNewChat: () => void;
	onDeleteSession: (sessionId: string) => void;
	isCollapsed: boolean;
	onToggleCollapse: () => void;
}

export interface Message {
	id: string;
	role: "user" | "assistant";
	content: string;
}

export interface Conversation {
	id: string;
	title: string;
	timestamp: Date;
	messages: Message[];
}
