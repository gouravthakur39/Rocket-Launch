// import { data } from "autoprefixer";
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

function Events() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

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
      })

      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [baseURL_UpcomingLaunch]);

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

  const EventList = data
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => (
      <EventCard
        key={item.id}
        eventTitle={JSON.parse(JSON.stringify(item.name.substring(0, 40)))}
        eventDescription={JSON.parse(
          JSON.stringify(
            item.mission !== null
              ? item.description.substring(0, 200)
              : "To be updated"
          )
        )}
        eventDate={JSON.parse(JSON.stringify(item.date))}
        eventImage={JSON.parse(JSON.stringify(item.feature_image))}
      />
    ));

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <Header />
      <div className="h-screen max-w-4xl flex-col justify-center items-center mx-auto">
        <h1 className="font-semibold flex justify-center mt-10 mb-2 text-3xl">
          Events
        </h1>

        {EventList}
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"flex float-right m-4 px-2 text-xl"}
          previousLinkClassName={
            "text-indigo-100 font-bold rounded px-3 py-2 bg-indigo-700 hover:bg-indigo-500"
          }
          nextLinkClassName={
            "text-indigo-100 font-bold rounded px-3 py-2 bg-indigo-700 hover:bg-indigo-500"
          }
          pageClassName={"text-gray-700 px-3 hover:text-gray-500"}
          activeClassName={"text-indigo-700"}
        />
      </div>
    </Fragment>
  );
}

export default Events;
