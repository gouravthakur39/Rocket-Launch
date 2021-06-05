import React, { Fragment } from "react";

function ForgotPassword() {
  return (
    <Fragment>
      <section class="min-h-screen flex flex-col">
        <div class="flex flex-1 items-center justify-center">
          <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form class="text-center">
              <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Forgot your password?
              </h1>
              <div class="py-2 text-left">
                <input
                  type="email"
                  class="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                />
              </div>

              <div class="py-2">
                <button
                  type="submit"
                  class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ForgotPassword;
