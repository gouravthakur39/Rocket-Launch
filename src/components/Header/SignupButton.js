import React, { Fragment, useState } from "react";


function SignupButton(props) {
  return (
    <Fragment>
      <div>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
          id="sign-up"
        >
          Signup
        </button>
      </div>
    </Fragment>
  );
}

export default SignupButton;