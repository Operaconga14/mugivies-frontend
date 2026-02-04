"use server";
import { toast } from "sonner";
import { chordProgressionSysPrompt, defaultMugiSystemPrompt, lyricsSystemPrompt, melodySystemPrompt, songArrangmentSystemPrompt } from "../lib/mock-data";
import client from "../lib/mugi.ai";

export async function ChordProgression(prompt: string) {
	try {
		const response = await client.chat.completions.create({
			model: "meta-llama/llama-4-maverick-17b-128e-instruct",
			messages: [
				{
					role: "system",
					content: chordProgressionSysPrompt,
				},
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			max_completion_tokens: 500,
			top_p: 1,
			stream: false,
		});
		const aiResponse = response.choices[0].message.content;
		return aiResponse;
	} catch (error) {
		throw new Error(String(error));
	}
}

export async function Melody(prompt: string) {
	try {
		const response = await client.chat.completions.create({
			model: "meta-llama/llama-4-maverick-17b-128e-instruct",
			messages: [
				{
					role: "system",
					content: melodySystemPrompt,
				},
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			max_completion_tokens: 500,
			top_p: 1,
			stream: false,
		});
		const aiResponse = response.choices[0].message.content;
		return aiResponse;
	} catch (error) {
		throw new Error(String(error));
	}
}

export async function Arrange(prompt: string) {
	try {
		const response = await client.chat.completions.create({
			model: "meta-llama/llama-4-maverick-17b-128e-instruct",
			messages: [
				{
					role: "system",
					content: songArrangmentSystemPrompt,
				},
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			max_completion_tokens: 500,
			top_p: 1,
			stream: false,
		});
		const aiResponse = response.choices[0].message.content;
		return aiResponse;
	} catch (error) {
		throw new Error(String(error));
	}
}

export async function Lyrics(prompt: string) {
	try {
		const response = await client.chat.completions.create({
			model: "meta-llama/llama-4-maverick-17b-128e-instruct",
			messages: [
				{
					role: "system",
					content: lyricsSystemPrompt,
				},
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			max_completion_tokens: 500,
			top_p: 1,
			stream: false,
		});
		const aiResponse = response.choices[0].message.content;
		return aiResponse;
	} catch (error) {
		throw new Error(String(error));
	}
}

export async function defaultMugiAI(prompt: string) {
	try {
		const response = await client.chat.completions.create({
			model: "meta-llama/llama-4-maverick-17b-128e-instruct",
			messages: [
				{
					role: "system",
					content: defaultMugiSystemPrompt,
				},
				{
					role: "user",
					content: prompt,
				},
			],
			temperature: 0.7,
			max_completion_tokens: 500,
			top_p: 1,
			stream: false,
		});
		const aiResponse = response.choices[0].message.content;
		return aiResponse;
	} catch (error) {
		throw new Error(String(error));
	}
}
