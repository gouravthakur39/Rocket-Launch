import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import NewsItem from "./NewsItem";
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

function News() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  const itemsPerPage = 9;
  const pagesVisited = pageNumber * itemsPerPage;

  const baseURL_Articles = "http://localhost:3000/articles";

  useEffect(() => {
    memoizedFetchGet(baseURL_Articles)
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
  }, [baseURL_Articles]);

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

  const articleList = data
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((item) => (
      <NewsItem
        key={item.id}
        title={JSON.parse(JSON.stringify(item.title))}
        summary={JSON.parse(JSON.stringify(item.summary.substring(0, 120)))}
        image={JSON.parse(JSON.stringify(item.imageUrl))}
        source={JSON.parse(JSON.stringify(item.newsSite))}
        publishedAt={JSON.parse(JSON.stringify(item.publishedAt))}
        updatedAt={JSON.parse(JSON.stringify(item.updatedAt))}
        url={JSON.parse(JSON.stringify(item.url))}
      />
    ));

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Fragment>
      <Header />
      <h1 className="font-semibold flex justify-center mt-10 mb-2 text-3xl">
        Space and Astronomy News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">{articleList}</div>
      <div className="flex float-right m-1">
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
          // pageLinkClassName={"text-gray-700 px-1"}
          activeClassName={"text-indigo-700"}
        />
      </div>
    </Fragment>
  );
}

export default News;
