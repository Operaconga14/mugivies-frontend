"use client";
import { useEffect, useRef, useState } from "react";
import { TopbarProps } from "../props/topbarProps";
import Notification from "./notification";
import { demoMessage } from "../variables/activities";

export default function Topbar({ onMenuClick, title, className }: TopbarProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (demoMessage.length > 0) {
      setShow(true);
    }
    const notifiHandler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", notifiHandler);
    return () => document.removeEventListener("mousedown", notifiHandler);
  });
  return (
    <header
      className={`sticky top-0  z-30 bg-gray-900 border-b border-gray-700 shadow-xl ${className}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-white">{title}</h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button
              onClick={() => setOpen(!open)}
              className="relative p-2 text-gray-400 hover:text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {show && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>

            {/* Notification Box */}
            {open && (
              <div
                ref={dropdownRef}
                className="absolute top-12 right-20 bg-gray-900 border border-gray-700 rounded-lg shadow-lg w-64"
              >
                <div className="flex flex-col px-2 py-1 ">
                  <div className="flex justify-between px-1">
                    <h1 className="text-md text-gray-300">Notifications</h1>
                    <button
                      onClick={() => setOpen(false)}
                      className="text-gray-400 hover:text-white text-xl cursor-pointer text-end"
                    >
                      ✗
                    </button>
                  </div>
                  <div className="">
                    <Notification />
                  </div>
                </div>
              </div>
            )}

            {/* User Avatar */}
            <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 text-lg font-bold cursor-pointer">
              JD
              {/* User avater or name */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
