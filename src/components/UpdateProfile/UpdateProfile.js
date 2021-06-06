import React, { Fragment, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import { useAuth } from "../../contexts/AuthContext";

function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Fragment>
      <Header />
      <section className="min-h-screen flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form onSubmit={handleSubmit} className="text-center">
              <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Update profile
              </h1>

              <div className="py-2 text-left">
                <input
                  type="email"
                  className="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                  required
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
                  Update profile
                </button>
              </div>
            </form>

            <div className="text-center mt-5">
              <a
                href="#"
                className="font-light text-md text-indigo-600 hover:underline hover:text-indigo-800"
              >
                <Link to="/">Cancel</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default UpdateProfile;
