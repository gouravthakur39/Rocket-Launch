// import { data } from "autoprefixer";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UpcomingLaunchCard from "./UpcomingLaunchCard";

function UpcomingLaunch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentURL, setCurrentURL] = useState("http://localhost:3000/results")
  const [nextURL, setNextURL] = useState('')
  const [prevURL, setPrevURL] = useState('')


  // const baseURL_UpcomingLaunch =
  //   "https://fdo.rocketlaunch.live/json/launches/next/5";

  const baseURL_UpcomingLaunch = "http://localhost:3000/results";

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
      <h1 className="h-screen flex justify-center items-center  text-xl m-2">
        😓 Error!
      </h1>
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
      upcomingLaunchDate={JSON.parse(JSON.stringify(item.window_start))}
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
