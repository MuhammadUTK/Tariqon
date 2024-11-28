import React from 'react'
import {MainContent, SideBar} from "./Index.jsx";
import "./HomeLayout.css"

function HomeLayout() {
    return (
        <>
            <div className="main-page">
                <div className="sidebar-section">
                    <SideBar />
                </div>
                <div className="main-section">
                    <MainContent />
                </div>
            </div>
        </>
    )
}

export default HomeLayout
