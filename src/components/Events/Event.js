import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Header from "../Header/Header";
import EventCard from "./EventCard";
import ReactPaginate from "react-paginate";

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

function Event(props) {
  // console.log(props);
  const eventID = props.match.params.eventId;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  const [event, setEvent] = useState({});

  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;

  const baseURL_UpcomingLaunch = "http://localhost:3000/events";

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

        const event = data.find((eventId) => eventId.id == eventID);
        console.log(event);
        setEvent(event);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseURL_UpcomingLaunch, eventID]);

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

  return (
    <Fragment>
      <Header />
      <div className="h-screen max-w-4xl flex-col justify-center items-center mx-auto">
        <h1 className="font-semibold flex justify-center mt-10 mb-2 text-3xl">
          Detailed Event
        </h1>

        {event.name}
      </div>
    </Fragment>
  );
}

export default Event;
