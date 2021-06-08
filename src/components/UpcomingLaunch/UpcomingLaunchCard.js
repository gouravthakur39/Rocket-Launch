import React, { Fragment } from "react";

function UpcomingLaunchCard(props) {
  return (
    <Fragment>
      <div className="p-5 ">
        <div className=" w-full lg:max-w-full lg:flex ">
          <div
            className="h-48  lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center bg-center overflow-hidden "
            style={{
              backgroundImage:
                "url('https://cdn.mos.cms.futurecdn.net/Ycumh9efJ6sFekSpvQ9j5j-1024-80.jpg.webp')",
              
            }}
          ></div>
          <div className="hover:bg-gray-100  shadow border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              {/* <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
              <div className="text-gray-900 font-bold text-xl mb-2">
                {props.upcomingLaunchTitle}
              </div>
              <p className="text-gray-700 text-base leading-relaxed ">
                {props.upcomingLaunchdescription}
                <hr className="my-2" />
              </p>
            </div>

            <div className="flex items-center -my-2">
              {/* <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/SpaceX-Logo-Xonly.svg"
              /> */}
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
                <p className="text-gray-600 mt-2">
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
