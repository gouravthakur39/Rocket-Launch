import React, { Fragment } from "react";
import Header from "../Header/Header";

function Home() {
  return (
    <Fragment>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <h3>Welcome to the world to rockets</h3>
      </div>
    </Fragment>
  );
}

export default Home;
