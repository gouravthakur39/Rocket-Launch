import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function SignupButton(props) {
  return (
    <Fragment>
      <div>
        <button
          type="button"
          className="ml-1 mr-1 inline-block rounded-sm font-medium border border-solid cursor-pointer text-center py-1 px-3 text-gray-800 dark:text-indigo-100 bg-white dark:bg-gray-500 border-indigo-400 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-indigo-400"
          id="sign-up"
        >
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </Fragment>
  );
}

export default SignupButton;
