import React from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"
import Logo from '../../assets/Tariqon_Logo.png';
import Account from '../../assets/account.png';
import Notification from '../../assets/notification.png';


function Navbar() {
    const mainNavbarItems = [
        {label: "Resume", link: "/"},
        {label: "Tariqon", link: "/tariqon"},
        {label: "Services", link: "/services"},
        {label: "About", link: "/about"},
        {label: "Contact", link: "/contact"},
    ]


    return (
        <div>
            <div className="navbar">
                <div className="Nav-Logo">
                    <Link to="/">
                        <img src={Logo} alt="Tariqon Logo"/>
                    </Link>
                </div>
                <div className="Nav-Items">
                    <ul className="listing-items">
                        {mainNavbarItems.map((item) => (
                            <li key={item.label} className="nav-list-item">
                                <Link to={item.link}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="User-Info">
                    <div className="Notification">
                        <Link>
                            <img src={Notification} alt="Notifications"/>
                        </Link>
                    </div>
                    <div className="Account">
                        <Link>
                            <img src={Account} alt="Account"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
