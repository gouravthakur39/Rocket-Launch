import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import Header from "../Header/Header"

function Rockets() {
    return (
        <Fragment>
            <Header/>
            <div className="h-screen flex justify-center items-center">
            <h1>Rockets</h1>
            </div>
            
        </Fragment>
    )
}

export default Rockets
