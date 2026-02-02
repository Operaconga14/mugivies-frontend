"use client";
import { cn } from "@/lib/utils";
import { MugiSidebarProps } from "../types";
import { ChevronLeft, MessageSquare, Music, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Waveform from "./waveform";

export default function MugiSidebar({ isCollapsed, onToggleCollapse, currentSessionId, onDeleteSession, onNewChat, onSelectSession, sessions }: MugiSidebarProps) {
	const [hoveredSessionId, setHoveredSessionId] = useState<string | null>(null);
	return (
		<aside className={cn("h-full bg-gray-900/80 border-r border-gray-700 flex flex-col transition-all duration-300", isCollapsed ? "w-16" : "w-64")}>
			{/* Header */}
			<div className="p-3 border-b border-gray-600">
				<div className="flex items-center justify-between">
					{!isCollapsed && (
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
								<Music className="w-4 h-4 text-primary-foreground" />
							</div>
							<span className="font-display text-white font-semibold text-md">MUGI AI</span>
						</div>
					)}
					<Button variant="ghost" onClick={onToggleCollapse} className="h-8 w-8 text-white hover:text-gray-400 hover:bg-gray-800/50" size={"icon"}>
						<ChevronLeft className={cn("w-4 h-4 transition-transform duration-300", isCollapsed && "rotate-180")} />
					</Button>
				</div>
			</div>

			{/* New Chat button */}
			<div className="p-3">
				<Button
					onClick={onNewChat}
					variant="outline"
					className={cn("w-full justify-start gap-2 border-gray-700 text-white h-13 bg-transparent hover:bg-surface-hover hover:text-gray-500", isCollapsed && "justify-center px-0")}>
					<Plus className="w-4 h-4" />
					{!isCollapsed && <span>New composition</span>}
				</Button>
			</div>

			{/* Converstion List */}
			<div className="flex-1 overflow-y-auto scrollbar-thin p-2">{!isCollapsed && sessions.length > 0 && <p className="text-sm text-gray-400 px-2 mb-2">Recent</p>}</div>
			<div className="space-y-1">
				{sessions.map((conv) => (
					<div
						key={conv.id}
						onMouseEnter={() => setHoveredSessionId(conv.id)}
						onMouseLeave={() => setHoveredSessionId(null)}
						onClick={() => onSelectSession(conv.id)}
						className={cn(
							"group relative flex items-center rounded-lg transition-colors cursor-pointer",
							currentSessionId === conv.id ? "bg-gray-500/30" : "hover:bg-gray-500/50",
							isCollapsed ? "justify-center p-2" : "px-3 py-2",
						)}>
						<MessageSquare className="w-4 h-4 flex-shrink-0 text-gray-500" />
						{!isCollapsed && (
							<>
								<span className="ml-2 text-sm truncate flex-1">{conv.title}</span>

								{hoveredSessionId == conv.id && (
									<Button
										variant="ghost"
										size="icon"
										className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
										onClick={(e) => {
											e.stopPropagation();
											onDeleteSession(conv.id);
										}}>
										<Trash2 className="w-3 h-3 text-muted-foreground hover:text-destructive" />
									</Button>
								)}
							</>
						)}
					</div>
				))}
			</div>

			{/* Footer */}
			{!isCollapsed && (
				<div className="p-4 border-t border-sidebar-border">
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<Waveform className="h-1" hieght1={15} hieght2={10} hieght3={20} hieght4={12} hieght5={18} />
						<span className="font-display font-semibold text-white">Powered by AI</span>
					</div>
				</div>
			)}
		</aside>
	);
}
