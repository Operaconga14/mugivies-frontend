"use client";
import { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import Topbar from "../components/topbar";
import { usePathname } from "next/navigation";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const pathname = usePathname();

  useEffect(() => {
    const current = pathname.split("/")[2] || "overview";
    setActiveSection(current);
  }, [pathname]);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    setIsOpen(false); // close on mobile
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="z-90">
        <Sidebar
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      </div>
      <div className="md:ms-0 sticky top-0 z-1 lg:ms-64">
        <Topbar
          onMenuClick={openSidebar}
          title={"DASHBOARD"}
          className="fixed top-0 bg-blue-500"
        />
      </div>

      <main className="lg:ml-64 lg:px-1">{children}</main>
    </div>
  );
}
