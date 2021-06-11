// import { data } from "autoprefixer";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UpcomingLaunchCard from "./UpcomingLaunchCard";

const memo = (callback) => {
  const cache = new Map();
  return (...args) => {
    const selector = JSON.stringify(args);
    if (cache.has(selector)) return cache.get(selector);
    const value = callback(...args);
    cache.set(selector, value);
    return value;
  };
};

const memoizedFetchGet = memo(fetch);

function UpcomingLaunch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const baseURL_UpcomingLaunch =
  //   "https://fdo.rocketlaunch.live/json/launches/next/5";

  const baseURL_UpcomingLaunch = "http://localhost:3000/results";

  useEffect(() => {
    memoizedFetchGet(baseURL_UpcomingLaunch)
      .then((response) => {
        if (response.ok) {
          return response.clone().json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })

      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseURL_UpcomingLaunch]);

  // if (loading) return "Loading...";
  // if (error) return "Error!";

  if (loading)
    return (
      <h1 className="h-screen flex justify-center items-center text-xl m-2">
        🚀 Loading...
      </h1>
    );
  if (error)
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl m-2">😓 Error fetching data!</p>
        <p className="text-xs m-2">
          Trying to run on localhost? Use
          <code className="bg-gray-700 m-1 text-gray-200 rounded-full p-2 font-bold leading-loose">
            npm run json:server
          </code>
          command to run local API server for mocking API response.
        </p>
      </div>
    );

  //     upcomingLaunchTags={JSON.parse(
  //       JSON.stringify(item.tags.length !== 0 ? item.tags[0].text : "")
  //     )}

  const launchList = data.map((item) => (
    <UpcomingLaunchCard
      key={item.id}
      upcomingLaunchTitle={JSON.parse(JSON.stringify(item.name))}
      upcomingLaunchdescription={JSON.parse(
        JSON.stringify(
          item.mission !== null
            ? item.mission.description.substring(0, 200)
            : "To be updated"
        )
      )}
      upcomingLaunchProvider={JSON.parse(
        JSON.stringify(item.launch_service_provider.name)
      )}
      upcomingLaunchDate={JSON.parse(
        JSON.stringify(Date(item.window_start).toString())
      )}
      upcomingLaunchPad={JSON.parse(JSON.stringify(item.pad.name))}
      upcomingLaunchLocation={JSON.parse(
        JSON.stringify(item.pad.location.name)
      )}
      upcomingLaunchCountry={JSON.parse(
        JSON.stringify(
          item.pad.location.country_code !== null
            ? item.pad.location.country_code
            : "To be updated"
        )
      )}
      upcomingLaunchMission={JSON.parse(JSON.stringify(item.status.abbrev))}
      upcomingLaunchTags={JSON.parse(
        JSON.stringify(item.rocket.configuration.name)
      )}
      upcomingLaunchImage={JSON.parse(JSON.stringify(item.image))}
      companyLogo={JSON.parse(
        JSON.stringify(item.launch_service_provider.logo_url)
      )}
    />
  ));

  return (
    <Fragment>
      <Header />
      <div className="h-screen max-w-4xl flex-col justify-center items-center mx-auto">
        <h1 className="font-semibold flex justify-center mt-10 mb-2 text-3xl">
          Upcoming Launches
        </h1>

        {launchList}
        <ul class="flex float-right m-4 ">
          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a class="flex items-center font-bold" href="#">
              <span class="mx-1">&lt; previous</span>
            </a>
          </li>

          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
            <a class="flex items-center font-bold" href="#">
              <span class="mx-1">Next &gt;</span>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default UpcomingLaunch;
