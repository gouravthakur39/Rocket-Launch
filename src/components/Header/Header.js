import React, { Fragment } from "react";
import LoginSignupButton from "./LoginSignupButton";
import Menu from './Menu'

const LOGO_SRC = "https://img.icons8.com/cute-clipart/64/000000/rocket.png"

function Header() {
  
  return (
    <Fragment>
      <div>
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img
                    className="h-8 w-8"
                    src= {LOGO_SRC}
                    alt="logo"
                  />
                </a>
               <Menu />
              </div>
              <LoginSignupButton />
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default Header;
