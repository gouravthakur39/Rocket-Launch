import React, { Fragment, useState } from "react";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

function LoginSignupButton() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser } = useAuth();

  return (
    <Fragment>
      <div className="block">
        <div className="ml-4 flex items-center md:ml-6">
          {/* when logged out this is giving error. fix it */}
          <h4 className="text-s text-gray-500">{currentUser.email}</h4>
          {currentUser && <LogoutButton />}
          {!currentUser && <LoginButton />}
        </div>
      </div>
    </Fragment>
  );
}

export default LoginSignupButton;
