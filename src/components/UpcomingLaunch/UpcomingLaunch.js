import { data } from "autoprefixer";
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

  return (
    <Fragment>
      <Header />
      <div className="h-screen max-w-4xl flex-col justify-center items-center mx-auto">
    <UpcomingLaunchCard/>
    <UpcomingLaunchCard/>
    <UpcomingLaunchCard/>
    <UpcomingLaunchCard/>
    <UpcomingLaunchCard/>
        {/* <h4 className="mt-4">
          {data.result.map((item) => (
            <p>Hello, {item.provider.name} !</p>
          ))}
        </h4> */}
      </div>
    </Fragment>
  );
}

export default UpcomingLaunch;
