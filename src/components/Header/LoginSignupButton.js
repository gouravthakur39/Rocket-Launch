import React, { Fragment, useState } from "react";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function LoginSignupButton() {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <Fragment>
      <div className="block">
        <div className="ml-4 flex items-center md:ml-6">
          <LoginButton />
          <SignupButton />
          {/* when logged out this is giving error. fix it */}
          {/* <h4 className="text-s text-gray-500">{currentUser.email}</h4> */}
          {error && (
            <span class="flex justify-center font-large tracking-wide text-red-500 text-xs mt-1 ml-1">
              {error}
            </span>
          )}
          <button
            type="submit"
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          >
            Log out
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginSignupButton;
