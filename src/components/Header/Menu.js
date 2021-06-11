import React, { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  const [activeItem, setActive] = useState("");

  const handleItemClick = (e) => {
    setActive(e.target.getAttribute("name"));
  };

  return (
    <Fragment>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <NavLink
            name="homelink"
            activeClassName="text-indigo-300"
            onClick={handleItemClick}
            exact
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            name="upcominglink"
            activeClassName="text-indigo-300"
            onClick={handleItemClick}
            exact
            to="/upcoming-launch"
          >
            Upcoming launch
          </NavLink>

          <NavLink
            name="newslink"
            activeClassName="text-indigo-300"
            onClick={handleItemClick}
            exact
            to="/news"
          >
            News
          </NavLink>

          <NavLink
            name="rocketlink"
            activeClassName="text-indigo-300"
            onClick={handleItemClick}
            exact
            to="/rockets"
          >
            Rockets
          </NavLink>

          <NavLink
            name="dashboardlink"
            activeClassName="text-indigo-300"
            onClick={handleItemClick}
            exact
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}

export default Menu;
