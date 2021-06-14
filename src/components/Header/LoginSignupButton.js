import React, { Fragment } from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function LoginSignupButton() {
 
  const { currentUser } = useAuth();

  return (
    <Fragment>
      <div className="">
        <div className="ml-4 flex items-center justify-center md:ml-6">
          {/* when logged out this is giving error. fix it */}
          <h4 className="text-base text-gray-100 mr-2">{currentUser.email}</h4>
          {currentUser && <LogoutButton />}
          {!currentUser && <LoginButton />}
          {currentUser && (
            <a
            className="ml-1 mr-1 inline-block rounded-sm font-medium border border-solid cursor-pointer text-center py-1 px-3 text-gray-800 dark:text-indigo-100 bg-white dark:bg-gray-500 border-indigo-400 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-indigo-400"

              href="/#"
            >
               <Link to="/update-profile">Update profile</Link>
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default LoginSignupButton;
