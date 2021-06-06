import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <Fragment>
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={handleSubmit} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Forgot your password?
              </h1>
              <div className="py-2 text-left">
                <input
                  type="email"
                  ref={emailRef}
                  required
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                />
              </div>
              {error && (
                <span className="flex justify-center font-large tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {error}
                </span>
              )}

              {message && (
                <span className="flex justify-center font-large tracking-wide text-green-500 text-xs mt-1 ml-1">
                  {message}
                </span>
              )}
              <div className="py-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Reset password
                </button>
              </div>
            </form>

            <div className="text-center mt-12">
              <span>Already have an account?</span>
              <a
                href="#"
                className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"
              >
                <Link to="/login">Log in</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ForgotPassword;
