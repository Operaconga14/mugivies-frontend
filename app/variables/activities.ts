import { title } from "process";

export const gigs = [
  {
    title: "Bass Cover up ",
    description: "I need someone to cover up for me on sunday",
  },
];

export const events = [
  {
    title: "The Experince",
    description: "The Experience is happening",
  },
  {
    title: "The Experince",
    description: "The Experience is happening",
  },
];

export const stats = [
  { number: "20k+", label: "Active Musicians" },
  { number: "500+", label: "Monthly Gigs" },
  { number: "1K+", label: "Bands Formed" },
  { number: "50+", label: "Cities Covered" },
];

export const demoMessage = [
  { title: "Hello", message: "Hello World", viewed: false, sender: "Opera" },
  { title: "Greetings", message: "Hello Opera", viewed: true, sender: "Conga" },
  { title: "Hi", message: "How are you", viewed: false, sender: "Opera" },
];

export const messageColumns = [
  { header: "Title", accessor: "title" },
  { header: "Message", accessor: "message" },
  { header: "Viewed", accessor: "viewed" },
  { header: "Sender", accessor: "sender" },
  { header: "Action", accessor: "action" },
];
