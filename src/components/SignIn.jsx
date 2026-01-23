import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const SignIn = ({ open, onClose }) => {
  const [mode, setMode] = useState("login");

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[600px] bg-white z-50 shadow-2xl
      transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">
          {mode === "login" ? "Sign In" : "Create Account"}
        </h2>
        <button onClick={onClose} className="text-2xl">
          ×
        </button>
      </div>

      <div className="p-6">
        <button
          className="w-full border flex items-center justify-center gap-3 py-3 rounded mb-5 hover:bg-gray-50"
          onClick={() => alert("Google Sign In Hook Here")}
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <div className="text-center text-gray-400 mb-4">or</div>

        {mode === "signup" && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-3 rounded mb-4"
          />
        )}

        <input
          type="text"
          placeholder="Email or Phone"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />

        <button className="w-full bg-[#fc8019] text-white py-3 rounded">
          {mode === "login" ? "Login" : "Create Account"}
        </button>

        <p className="mt-4 text-sm text-center">
          {mode === "login" ? (
            <>
              New to Swiggy?{" "}
              <span
                onClick={() => setMode("signup")}
                className="text-[#fc8019] cursor-pointer font-semibold"
              >
                Create an account
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("login")}
                className="text-[#fc8019] cursor-pointer font-semibold"
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};
