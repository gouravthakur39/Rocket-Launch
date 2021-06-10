import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

function Menu() {
    return (
        <Fragment>
             <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      href="/#"
                    >
                      Home
                    </a>
                    <a
                      className="text-gray-400 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      href="/#"
                    >
                       <Link  to="/upcoming-launch" >Upcoming launch</Link>
                    </a>
                    <a
                      className="text-gray-400 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      href="/#"
                    >
                       <Link  to="/news" >News</Link>
                    </a>
                    <a
                      className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      href="/#"
                    >
                      <Link to="/rockets">Rockets</Link>
                    </a>
                    <a
                      className="text-gray-400  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      href="#"
                    >
                      <Link to="/dashboard">Dashboard</Link>
                    </a>
                  </div>
                </div>
        </Fragment>
    )
}

export default Menu
