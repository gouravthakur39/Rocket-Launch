// import { data } from "autoprefixer";
import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UpcomingLaunchCard from "./UpcomingLaunchCard";

function UpcomingLaunch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL_UpcomingLaunch =
    "https://fdo.rocketlaunch.live/json/launches/next/5";

  // const baseURL_UpcomingLaunch =
  //   "https://spacelaunchnow.me/api/ll/2.2.0/launch/upcoming/?format=json&limit=10";

  useEffect(() => {
    fetch(baseURL_UpcomingLaunch)
      .then((response) => {
        if (response.ok) {
          return response.json();
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
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  const launchList = data.result.map((item) => (
    <UpcomingLaunchCard
      key={item.id}
      upcomingLaunchTitle={JSON.parse(JSON.stringify(item.vehicle.name))}
      upcomingLaunchdescription={JSON.parse(
        JSON.stringify(item.launch_description)
      )}
      upcomingLaunchProvider={JSON.parse(JSON.stringify(item.provider.name))}
      upcomingLaunchDate={JSON.parse(JSON.stringify(item.date_str))}
      upcomingLaunchPad={JSON.parse(JSON.stringify(item.pad.name))}
      upcomingLaunchLocation={JSON.parse(
        JSON.stringify(item.pad.location.name)
      )}
      upcomingLaunchTime={JSON.parse(JSON.stringify(item.win_open))}
      upcomingLaunchCountry={JSON.parse(
        JSON.stringify(item.pad.location.country)
      )}
      upcomingLaunchMission={JSON.parse(JSON.stringify(item.name))}
      upcomingLaunchTags={JSON.parse(JSON.stringify(item.slug))}
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
      </div>
    </Fragment>
  );
}

export default UpcomingLaunch;
