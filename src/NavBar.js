import React from "./react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";


export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Surf's Up
            </Link>
            <ul>
                <CustomLink to="/rentals">Rentals</CustomLink>
                <CustomLink to="/lessons">Lessons</CustomLink>
                <CustomLink to="/shop">Shop</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}              
            </Link>
        </li>
    )
}