import React, { Fragment } from "react";
import ReactDOM from "react-dom";

function UpcomingLaunchCard(props) {
  return (
    <Fragment>
      <div className="p-5 ">
        <div className=" w-full lg:max-w-full lg:flex ">
          <div
            className="h-48  lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center bg-center overflow-hidden "
            style={{
              backgroundImage: `url("${props.upcomingLaunchImage}")`,
            }}
          ></div>

          <div className="w-screen hover:bg-gray-100  shadow border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {props.upcomingLaunchTitle}
              </div>
              <p className="text-gray-700 text-base leading-relaxed ">
                {props.upcomingLaunchdescription}
                <hr className="my-2" />
              </p>
            </div>

            <div className="flex items-center -my-2">
              <img
                class="w-10 h-10 object-cover rounded-full mr-4 "
                alt="User avatar"
                src="https://i.pravatar.cc/200?u=007"
              ></img>
              <div className="text-sm">
                <p className="text-gray-900 leading-relaxed">
                  {props.upcomingLaunchProvider}
                </p>
                <p className="text-indigo-100 bg-indigo-500 px-3 py-1 rounded-xl inline-block align-middle mt-2">
                  {props.upcomingLaunchDate}
                </p>
                <p className="text-gray-900 leading-relaxed mt-2 ">
                  {props.upcomingLaunchTime}
                </p>
              </div>
              <div className="text-sm mx-10">
                <p className="text-gray-900 leading-relaxed">
                  {props.upcomingLaunchPad}
                </p>
                <p className="text-gray-600 mt-2">
                  {props.upcomingLaunchLocation}, {props.upcomingLaunchCountry}
                </p>
                <p
                  className={
                    "text-gray-600 px-3 py-1 rounded-xl inline-block align-middle mt-2 bg-green-300"
                    // `${props.upcomingLaunchMission === "Go"
                    //   ? 'bg-green-300'
                    //   : 'bg-red-300'}`
                  }
                >
                  {props.upcomingLaunchMission}
                </p>
              </div>
            </div>
            <div class="mt-4 flex flex-wrap ml-1">
              <span class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-xs leading-loose cursor-pointer">
                {props.upcomingLaunchTags}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default UpcomingLaunchCard;
