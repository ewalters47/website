import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

export default function Navbar() {

    return (
        <nav className="NavbarItems">
            <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
            <div className="menu-icon">

            </div>
            <ul>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}
