import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Login() {
  return (
    <Fragment>
      <Header />
      <section class="min-h-screen flex flex-col">
        <div class="flex flex-1 items-center justify-center">
          <div class="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
            <form class="text-center">
              <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                Log in
              </h1>
              <div class="py-2 text-left">
                <input
                  type="email"
                  class="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Email"
                />
              </div>
              <div class="py-2 text-left">
                <input
                  type="password"
                  class="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 "
                  placeholder="Password"
                />
              </div>
              <div class="py-2">
                <button
                  type="submit"
                  class="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700"
                >
                  Log in
                </button>
              </div>
            </form>
            <div class="text-center">
              <a href="#" class="hover:underline">
                <Link to="/reset">Forgot password?</Link>
              </a>
            </div>
            <div class="text-center mt-12">
              <span>Don't Have an account?</span>
              <a class="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">
                <Link to="/signup">Sign up now</Link>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Login;
