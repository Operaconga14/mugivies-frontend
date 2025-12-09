"use client";
import { useState } from "react";
import EditProfile from "./edit-profile/layout";
import EditAccount from "./edit-account/layout";
import EditSecurity from "./edit-security/layout";
import EditNotification from "./edit-notification/layout";

export default function Settings() {
  const [activeBar, setActiveBar] = useState("tab1");

  const renderContent = () => {
    switch (activeBar) {
      case "tab1":
        return (
          <div>
            <EditProfile />
          </div>
        );
      case "tab2":
        return (
          <div>
            <EditAccount />
          </div>
        );
      case "tab3":
        return (
          <div>
            <EditSecurity />
          </div>
        );
      case "tab4":
        return (
          <div className="w-full">
            <EditNotification />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col mt-10">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-4xl font-bold text-gray-500">My Settings</h1>
        <p className="text-sm text-gray-500 text-body">
          This is where you can manage your settings
        </p>
      </div>
      {/* Desktop View */}
      <div className="w-full hidden md:table mt-15 px-10 text-sm font-medium text-center text-body border-b border-default border-blue-900">
        <ul className="flex justify-between">
          <li className="me-2">
            <button
              onClick={() => setActiveBar("tab1")}
              className={
                "inline-block p-4 border-b border-transparent  rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab1" ? "active rounded bg-gray-800" : "")
              }
            >
              Profile
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveBar("tab2")}
              className={
                "inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab2"
                  ? "active border-blue-900 bg-gray-800 rounded"
                  : "")
              }
            >
              Account
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveBar("tab3")}
              className={
                "inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab3"
                  ? "active border-blue-900 bg-gray-800 rounded"
                  : "")
              }
            >
              Security
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => setActiveBar("tab4")}
              className={
                "inline-block p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab4"
                  ? "active border-blue-900 bg-gray-800 rounded"
                  : "")
              }
            >
              Notification
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-5 border-b border-default border-blue-800 px-2">
        <ul className="flex justify-between">
          <li className="">
            <button
              onClick={() => setActiveBar("tab1")}
              className={
                "inline-block p-2 border-b border-transparent  rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab1" ? "active rounded bg-gray-800" : "")
              }
            >
              Profile
            </button>
          </li>
          <li className="me-1">
            <button
              onClick={() => setActiveBar("tab2")}
              className={
                "inline-block p-2 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab2"
                  ? "active border-blue-900 bg-gray-800 rounded"
                  : "")
              }
            >
              Account
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActiveBar("tab3")}
              className={
                "inline-block p-2 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab3"
                  ? "active border-blue-900 bg-gray-800 rounded"
                  : "")
              }
            >
              Security
            </button>
          </li>
          <li className="">
            <button
              onClick={() => setActiveBar("tab4")}
              className={
                "inline-block p-2 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand" +
                (activeBar === "tab4"
                  ? "active border-blue-900 bg-gray-800 rounded"
                  : "")
              }
            >
              Notification
            </button>
          </li>
        </ul>
      </div>
      {renderContent()}
    </div>
  );
}
