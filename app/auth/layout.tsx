import React from "react";

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 ">
      {children}
    </div>
  );
}
