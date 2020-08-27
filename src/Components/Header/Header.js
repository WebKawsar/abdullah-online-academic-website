import React from 'react';
import "./Header.css";
import logo from "../../images/computer-courses.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="main-menu">
                <nav className="navbar">
                    <a href="/logo" className="navbar-brand"><img src={logo} alt=""/></a>
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/courses">Courses</a>
                        </li>
                        <li>
                            <a href="/myaccount">Manage Account</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;