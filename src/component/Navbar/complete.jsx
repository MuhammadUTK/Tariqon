import React from 'react'
import Navbar from "./Navbar.jsx";
import {Outlet} from "react-router-dom";

function Complete() {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>
        </>

    )
}

export default Complete
