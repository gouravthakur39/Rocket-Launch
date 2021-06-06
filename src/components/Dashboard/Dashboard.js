import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Header from "../Header/Header"

function Dashboard() {
    return (
        <Fragment>
            <Header/>
            <div className="h-screen flex justify-center items-center">
            <h1>Dashboard</h1>
            </div>
            
        </Fragment>
    )
}

export default Dashboard
