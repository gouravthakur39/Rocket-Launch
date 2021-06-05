import React, { Fragment } from 'react'

function Menu() {
    return (
        <Fragment>
             <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      className="text-gray-800  hover:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Home
                    </a>
                    <a
                      className="text-gray-300 dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Upcoming launch
                    </a>
                    <a
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Rockets
                    </a>
                    <a
                      className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      href="/#"
                    >
                      Contact
                    </a>
                  </div>
                </div>
        </Fragment>
    )
}

export default Menu
