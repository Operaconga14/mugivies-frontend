import Button from "@/app/ui/button";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="min-h-screen flex justify-center items-center w-full px-5">
      <div className="border border-gray-200 shadow-lg rounded-xl h-fit w-full max-w-md">
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-500">
            SignUp
          </h1>
          <form>
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
                classname="mt-5 px-5 py-2 border border-gray-200 rounded-xl hover:bg-blue-500 hover:text-white"
                text="Sign Up"
              />
            </div>
          </form>

          {/* Other Means of Signup */}
          <div className="flex justify-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
