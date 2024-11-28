import React from 'react'
import {Link} from "react-router-dom";
import "./SideBar.css"

function SideBar() {
    const sideBarList = [
        {label: "Dashboard", link: "/home/dashboard"},
        {label: "Profile", link: "/home/profile"},
        {label: "Settings", link: "/home/settings"},
        {label: "Messages", link: "/home/messages"},
        {label: "Notifications", link: "/home/notifications"},
        {label: "Friends", link: "/home/friends"},
        {label: "Groups", link: "/home/groups"},
        {label: "Events", link: "/home/events"},
        {label: "Photos", link: "/home/photos"},
        {label: "Videos", link: "/home/videos"},
        {label: "Marketplace", link: "/home/marketplace"},
        {label: "Favorites", link: "/home/favorites"},
        {label: "Help", link: "/home/help"},

    ];

    return (
            <div className="home-sidebar">
                <ul className="home-sidebar-list">
                    {sideBarList.map((item) => (
                        <li key={item.label} className="sidebar-list-item">
                            <Link to={item.link}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default SideBar
