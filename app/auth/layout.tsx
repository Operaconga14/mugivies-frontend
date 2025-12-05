import React from "react";

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {children}
    </div>
  );
}
