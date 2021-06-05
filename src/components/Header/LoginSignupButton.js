import React, { Fragment, useState, useEffect } from "react";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";

function LoginSignupButton() {
  
  return (
    <Fragment>
      <div className="block">
        <div className="ml-4 flex items-center md:ml-6">
          <SignupButton />
          <LoginButton />
        </div>
      </div>
    </Fragment>
  );
}

export default LoginSignupButton;
