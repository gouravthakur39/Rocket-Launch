import React, { Fragment, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { useAuth } from "../../contexts/AuthContext";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/')
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Fragment>
      <Header />
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={handleSubmit} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Sign Up
              </h1>

              <div className="py-2 text-left">
                <input
                  type="email"
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div classNameName="py-2 text-left">
                <input
                  type="password"
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <div className="py-2 text-left">
                <input
                  type="password"
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Confirm Password"
                  ref={passwordConfirmRef}
                />
              </div>
              {error && (
                <span className="flex justify-center font-large tracking-wide text-red-500 text-xs mt-1 ml-1">
                  {error}
                </span>
              )}
              <div className="py-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center">
              <a href="#" className="hover:underline">
                <Link to="/reset">Forgot password?</Link>
              </a>
            </div>
            <div className="text-center mt-12">
              <span>Already have an account?</span>
              <a
                href="#"
                className="font-light text-md text-indigo-600 underline hover:text-indigo-800"
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

export default SignUp;
