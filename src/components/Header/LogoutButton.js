import React, { Fragment, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function LogoutButton() {
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
      <div>
        <button
          type="submit"
          onClick={handleLogout}
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
        >
          Log out
        </button>
      </div>
      {error && (
        <span class="flex justify-center font-large tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </Fragment>
  );
}
export default LogoutButton;
