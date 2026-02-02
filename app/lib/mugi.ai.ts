import "server-only";
import { Groq } from "groq-sdk";

const client = new Groq({ apiKey: String(process.env.GQ_TOKEN) });

export default client;
