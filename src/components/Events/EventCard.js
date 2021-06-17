import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import useDarkMode from "../../Hooks/useDarkMode";

function EventCard(props) {
  // console.log(props)
  useDarkMode();
  return (
    <Fragment>
      <div className="p-5  ">
        <div className=" w-full lg:max-w-full lg:flex  ">
          <div
            className="h-48  lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center bg-center overflow-hidden "
            style={{
              backgroundImage: `url("${props.eventImage}")`,
            }}
          ></div>

          <div className="w-screen  hover:bg-gray-100  shadow border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="flex flex-row justify-between text-gray-900 dark:text-red-900 font-bold text-xl mb-2">
                {props.eventTitle}
                {/* {props.eventTitle2} */}
              </div>
              <p className="text-gray-700 text-base leading-relaxed ">
                {props.eventDescription}
                <hr className="my-2" />
              </p>
            </div>

            <div className="flex items-center -my-2">
              <div className="text-sm">
                <p className="text-indigo-100 bg-indigo-500 px-3 py-1 rounded-xl inline-block align-middle mt-2">
                  {/* FIXME: */}
                  {props.eventDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EventCard;
