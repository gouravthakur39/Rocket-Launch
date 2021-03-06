import React, { Fragment } from "react";
import LoginSignupButton from "./LoginSignupButton";
import Menu from "./Menu";
import SignupButton from "./SignupButton";
import { useAuth } from "../../contexts/AuthContext";
import LoginButton from "./LoginButton";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";

// const LOGO_SRC = "https://img.icons8.com/cute-clipart/64/000000/rocket.png";

function Header() {
  const { currentUser } = useAuth();
  return (
    <Fragment>
      <div>
        <nav className="bg-gray-100 dark:bg-gray-800  shadow ">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex justify-center items-center " href="/">
                  {/* <img className="h-8 w-8" src={LOGO_SRC} alt="logo" /> */}

                  <svg
                    id="Capa_1"
                    enableBackground="new 0 0 512 512"
                    height="24"
                    viewBox="0 0 512 512"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <linearGradient
                      id="SVGID_1_"
                      gradientTransform="matrix(.707 .707 -.707 .707 253.91 -106.781)"
                      gradientUnits="userSpaceOnUse"
                      x1="258.004"
                      x2="258.004"
                      y1="441.317"
                      y2="-98.609"
                    >
                      <stop offset="0" stopColor="#addcff" />
                      <stop offset=".5028" stopColor="#eaf6ff" />
                      <stop offset="1" stopColor="#eaf6ff" />
                    </linearGradient>
                    <linearGradient
                      id="SVGID_2_"
                      gradientTransform="matrix(.707 .707 -.707 .707 253.91 -106.781)"
                      gradientUnits="userSpaceOnUse"
                      x1="258.004"
                      x2="258.004"
                      y1="610.868"
                      y2="6.315"
                    >
                      <stop offset="0" stopColor="#5558ff" />
                      <stop offset="1" stopColor="#00c0ff" />
                    </linearGradient>
                    <g>
                      <g>
                        <g>
                          <path
                            d="m293.995 218.006h-106.066l-53.033 95.459-10.606 10.606c-17.607 17.607-17.607 46.032 0 63.64 17.606 17.606 46.032 17.607 63.64 0l10.606-10.606 95.459-53.033zm-177.506 67.774c4.889-.932 8.98-4.215 10.958-8.784 11.104-25.646 35.787-63.463 66.043-101.156 3.066-3.833 4.071-8.918 2.672-13.631-2.863-9.701-12.181-10.447-14.097-11.466-2.952-.984-73.231-23.347-142.63 46.052-52.432 52.432-22.508 83.558-21.213 84.853 5.863 5.863 15.351 5.863 21.213 0 17.547-17.546 46.093-17.546 63.64 0 3.511 3.51 8.535 5.054 13.414 4.132zm233.304 30.059c-4.713-1.398-9.799-.394-13.631 2.672-39.008 31.302-75.821 55.353-101.032 65.98-4.599 1.947-7.934 6.049-8.898 10.948-.943 4.899.591 9.954 4.123 13.486 17.546 17.546 17.546 46.093 0 63.64-5.863 5.863-5.863 15.351 0 21.213 1.295 1.294 32.421 31.219 84.853-21.213 69.399-69.399 47.036-139.678 46.052-142.609-.973-1.827-1.788-11.275-11.467-14.117zm160.576-301.479c-1.06-6.576-6.151-11.667-12.729-12.729-3.817-.425-60.457-7.849-131.309 12.939l43.859 86.285 87.239 44.813c20.789-70.851 13.364-127.491 12.94-131.308zm-195.161 97.58c-23.335 23.335-23.335 61.518 0 84.853 23.546 23.546 61.518 23.335 84.853 0 23.546-23.546 23.546-61.307 0-84.853-23.335-23.335-61.306-23.546-84.853 0z"
                            fill="url(#SVGID_1_)"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="m366.332 14.571c-46.457 13.366-98.853 39.033-146.583 86.763-15.698 15.698-32.882 35.002-49.64 55.577-31.82 39.881-58.124 80.187-70.003 108.188-2.546 5.516-1.485 12.092 2.97 16.547l31.82 31.82 74.246-74.247c17.607-17.607 46.032-17.607 63.64 0 17.818 17.818 17.818 45.821 0 63.64l-74.246 74.246 31.82 31.82c4.242 4.242 10.818 5.727 16.333 3.182 27.789-11.667 67.247-37.124 108.4-70.216 20.575-16.758 39.881-33.941 55.578-49.638 47.73-47.73 73.397-100.126 86.761-146.584zm33.729 182.222c-23.335 23.335-61.306 23.546-84.853 0-23.335-23.335-23.335-61.518 0-84.853 23.546-23.546 61.518-23.335 84.853 0 23.546 23.546 23.546 61.307 0 84.853zm-296.789 212.144c-5.863-5.862-15.35-5.862-21.213 0l-77.662 77.453c-5.863 5.863-5.863 15.351 0 21.213s15.351 5.863 21.213 0l77.662-77.453c5.863-5.863 5.863-15.351 0-21.213zm21.213 42.426-21.213 21.213c-5.863 5.863-5.863 15.351 0 21.213 5.863 5.863 15.351 5.863 21.213 0l21.213-21.213c5.863-5.862 5.863-15.351 0-21.213s-15.35-5.862-21.213 0zm-84.853-42.426 21.213-21.213c5.863-5.863 5.863-15.351 0-21.213-5.863-5.863-15.351-5.863-21.213 0l-21.213 21.213c-5.863 5.862-5.863 15.351 0 21.213s15.351 5.862 21.213 0z"
                            fill="url(#SVGID_2_)"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <h1 className="text-2xl text-gray-800 dark:text-indigo-100 ml-3">Liftoff</h1>
                </a>
                <Menu />
              </div>
              <div className="flex items-center justify-between space-x-3">
              {currentUser && <LoginSignupButton />}
              {!currentUser && <LoginButton />}
              {!currentUser && <SignupButton />}
              <DarkModeToggler />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default Header;
