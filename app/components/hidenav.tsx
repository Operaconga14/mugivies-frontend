"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function HideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const hide = path.startsWith("/auth") || path.startsWith("/dashboard");

  return <>{!hide && children}</>;
}
