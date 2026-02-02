"use client";

import { MugiWelcomeScreenProps } from "../types";
import { ChordProgression } from "@/app/actions/mugiai.actions";
import { ListMusic, Mic2, Music, Wand2 } from "lucide-react";
import Waveform from "./waveform";
import { Button } from "@/components/ui/button";

const suggestions = [
	{
		icon: Wand2,
		title: "Generate a chord progression",
		prompt: "Create a melancholic chord progression in A minor with jazz influences",
	},
	{
		icon: ListMusic,
		title: "Write a melody",
		prompt: "Write an uplifting melody suitable for a pop song chorus",
	},
	{
		icon: Music,
		title: "Arrange a song",
		prompt: "Help me arrange a folk song for a small ensemble with guitar, violin, and piano",
	},
	{
		icon: Mic2,
		title: "Lyrics and composition",
		prompt: "Write lyrics for a love song and suggest a matching melody",
	},
];

export default function MugiWelcomeScreen({ onPromptClick }: MugiWelcomeScreenProps) {
	const handlePromptClick = async (prompt: string) => {
		switch (prompt) {
			case suggestions[0].prompt:
				const response = await ChordProgression(suggestions[0].prompt);
				return response?.toString();
			case suggestions[1].prompt:
				const response2 = await ChordProgression(suggestions[1].prompt);
				return response2?.toString();
			case suggestions[2].prompt:
				const response3 = await ChordProgression(suggestions[2].prompt);
				return response3?.toString();
			case suggestions[3].prompt:
				const response4 = await ChordProgression(suggestions[3].prompt);
				return response4?.toString();
			default:
				return "";
		}
	};
	return (
		<div className="flex-1 flex flex-col items-center justify-center p-8 animate-fade-in">
			<div className="relative mb-8">
				<div className="absolute inset-0 bg-glow animate-pulse-glow" />
				<div className="relative w-30 h-30 rounded-2xl bg-gradient-to-r from-purple-800 to-pink-800 flex items-center justify-center shadow-glow">
					<Music className="w-15 h-15" />
				</div>
			</div>
			<h1 className="font-display text-4xl font-bold mb-3 text-center">
				<span className="bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent">MUGI AI</span>
			</h1>

			<p className="text-gray-400 text-center max-w-md mb-2">Your AI-powered music composition assistant</p>
			<div className="flex items-center gap-2 mb-12">
				<Waveform className="h-5 mt-2" hieght1={10} hieght2={30} hieght3={20} hieght4={30} hieght5={10} />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl w-full">
				{suggestions.map((suggestion, index) => (
					<button
						key={index}
						onClick={() => handlePromptClick(suggestion.prompt)}
						className="group flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-gray-600 hover:border-primary/50 hover:bg-surface-hover transition-all duration-300 text-left">
						<div className="p-2 rounded-lg bg-transparent group-hover:bg-primary/10 transition-colors">
							<suggestion.icon className="w-5 h-5 text-white" />
						</div>
						<div>
							<h3 className="font-medium text-sm text-whte group-hover:text-gray-400 transition-colors">{suggestion.title}</h3>
							<p className="text-xs text-gray-400 mt-1 line-clamp-2">{suggestion.prompt}</p>
						</div>
					</button>
				))}
			</div>
		</div>
	);
}
