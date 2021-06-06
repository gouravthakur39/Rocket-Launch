import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Header from "../Header/Header"

function UpcomingLaunch() {
    return (
        <Fragment>
            <Header/>
            <div className="h-screen flex justify-center items-center">
            <h1>Upcoming Launch</h1>
            </div>
            
        </Fragment>
    )
}

export default UpcomingLaunch
