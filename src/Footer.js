import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Surf's Up Inc</h4>
                        <ul className="list-unstyled">
                            <li>808-420-1981</li>
                            <li>Lahaina, Maui</li>
                            <li>123 Main Highway West</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Stuff</h4>
                        <ul className="list-unstyled">
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Chat</li>
                        </ul>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Community</h4>
                        <ul className="list-unstyled">
                            <li>Socials</li>
                            <li>Meetups</li>
                            <li>Classes</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Surf's Up inc | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
