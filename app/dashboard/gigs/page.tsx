"use client";
import { filterGigs } from "@/app/actions/actions";
import { recentGigs } from "@/app/variables/activities";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

export default function Page() {
  const router = useRouter();

  const handleCreateGig = () => {
    router.push("/dashboard/gigs/create");
  };
  const handleFilter = async () => {
    const formData = new FormData();
    const input = document.querySelector(
      'input[name="filter"]'
    ) as HTMLInputElement;
    formData.append("filter", input.value);
    const response = await filterGigs(formData);
    console.log(response);
  };
  return (
    <div className="flex flex-col gap-4 px-3 pt-2">
      <div className="flex items-center justify-between gap-4 px-3 py-2 rounded-xl">
        <div className="text-gray-500 flex gap-3 items-center">
          <p className="text-sm">Filter</p>
          <div className="relative flex items-center">
            <input
              type="text"
              name="filter"
              placeholder="Search..."
              className="w-full md:w-190 lg:w-300 rounded-xl border border-gray-700 bg-transparent py-2 pl-4 pr-12 text-sm focus:border-blue-900 focus:outline-none focus:bg-transparent"
            />

            <button
              type="button"
              onClick={handleFilter}
              className="absolute right-2 p-2 rounded-lg hover:bg-gray-100"
            >
              🔍
            </button>
          </div>
        </div>
        <button
          onClick={handleCreateGig}
          className="bg-transparent w-fit backdrop-blur-xl border border-blue-900 text-gray-500 rounded-xl hover:bg-blue-900 hover:text-gray-400 px-2 py-1"
        >
          Create Gig
        </button>
      </div>

      {/* Gigs List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-8">
        {recentGigs.map((gig, index) => (
          <div
            key={index}
            onClick={() => alert(gig.id)}
            className="flex flex-col h-25 sm:flex-row sm:items-center justify-between p-4 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-purple-500 transition"
          >
            <div className="flex-1 mb-3 sm:mb-0">
              <div className="flex justify-between">
                <h3 className="font-semibold mb-1">{gig.title}</h3>
                <span
                  className={`px-2 py-1 h-6 rounded-full text-xs font-semibold ${
                    gig.status === "accepted"
                      ? "bg-green-500/20 text-green-400"
                      : gig.status === "pending"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {gig.status.charAt(0).toUpperCase() + gig.status.slice(1)}
                </span>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {gig.location}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {gig.date}
                </span>
                <span className="text-green-400 font-semibold">{gig.pay}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
