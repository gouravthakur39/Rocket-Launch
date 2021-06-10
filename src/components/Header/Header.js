import React, { Fragment } from "react";
import LoginSignupButton from "./LoginSignupButton";
import Menu from "./Menu";
import SignupButton from "./SignupButton";
import { useAuth } from "../../contexts/AuthContext";
import LoginButton from "./LoginButton"
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";

const LOGO_SRC = "https://img.icons8.com/cute-clipart/64/000000/rocket.png";

function Header() {
  const { currentUser } = useAuth();
  return (
    <Fragment>
      <div>
        <nav className="bg-white dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex justify-center items-center " href="/">
                  <img className="h-8 w-8" src={LOGO_SRC} alt="logo" />
                </a>
                <Menu />
              </div>
              {currentUser && <LoginSignupButton />}
              {!currentUser && <LoginButton />}
              {!currentUser && <SignupButton />}
              <DarkModeToggler/>
              
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default Header;
