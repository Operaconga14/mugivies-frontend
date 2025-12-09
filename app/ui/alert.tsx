"use client";
import { AlertProps } from "../props/alertProps";

export default function Alert({ className, message, title }: AlertProps) {
  return (
    <div
      className={`fixed top-4 right-4 text-white px-4 py-2 rounded-lg ${
        className || ""
      }`}
    >
      <h1 className="font-bold text-white">{title}</h1>
      <p className="text-white">{message}</p>
    </div>
  );
}
