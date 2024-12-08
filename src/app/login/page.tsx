'use client'
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  // Local state to manage form inputs
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example validation
    if (email === "" || password === "") {
      setError("Both fields are required");
      return;
    }

    // Here you can make an API call or validation

    // On success, navigate to the home page or dashboard
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="p-8 w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-[#151875] mb-4">Login</h1>
        <p className="text-center text-[#8A8FB9] mb-6">
          Please login using account details below
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#8A8FB9] font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-[#8A8FB9] rounded-md"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-[#8A8FB9] font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-[#8A8FB9] rounded-md"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full p-3 bg-[#FB2E86] text-white rounded-md hover:bg-[#e01a72] transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-[#8A8FB9] text-sm">
            Don't have an account?create an account
            
          </p>
        </div>
      </Card>
    </div>
  );
}
