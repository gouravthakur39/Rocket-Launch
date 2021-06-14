import React, { Fragment, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function LogoutButton() {
  const { logout } = useAuth();
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
          // className="px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          className="ml-1 mr-1 inline-block rounded-sm font-medium border border-solid cursor-pointer text-center py-1 px-3 text-gray-800 dark:text-indigo-100 bg-white dark:bg-gray-500 border-indigo-400 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-indigo-400"
        >
          Log out
        </button>
      </div>
      {error && (
        <span className="flex justify-center font-large tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </Fragment>
  );
}
export default LogoutButton;
