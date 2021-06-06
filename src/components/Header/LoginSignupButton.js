import React, { Fragment } from "react";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

function LoginSignupButton() {
 
  const { currentUser } = useAuth();

  return (
    <Fragment>
      <div className="block">
        <div className="ml-4 flex items-center md:ml-6">
          {/* when logged out this is giving error. fix it */}
          <h4 className="text-s text-gray-500">{currentUser.email}</h4>
          {currentUser && <LogoutButton />}
          {!currentUser && <LoginButton />}
          {currentUser && (
            <a
              className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
