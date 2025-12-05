"use client";
import { login } from "@/app/actions/actions";
import Button from "@/app/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.get("email");
    formData.get("password");
    await login(formData);
    router.push("/dashboard/profile");
  };

  return (
    <div className="min-h-screen flex justify-center items-center w-full px-5">
      <div className="border border-gray-200 shadow-lg rounded-xl h-70 w-full max-w-md">
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="border border-gray-200 rounded-xl p-2 focus:border-gray-100"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="border border-gray-200 rounded-xl p-2 focus:border-gray-100"
              />
            </div>
            <div className="flex justify-center">
              <Button
                type={"submit"}
                classname="mt-5 px-5 py-2 border border-gray-200 rounded-xl hover:bg-blue-500 hover:text-white"
                text="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
