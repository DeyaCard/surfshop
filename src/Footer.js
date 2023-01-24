import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li>808-420-1981</li>
              <li>LAHAINA, HA</li>
              <li>123 WEST HIGHWAY RD</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>SERVICES</h4>
            <ul className="list-unstyled">
              <li>RENTALS</li>
              <li>LESSONS</li>
              <li>PRIVATE</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>ABOUT</h4>
            <ul className="list-unstyled">
              <li>SINCE 1981</li>
              <li>CULTURE</li>
              <li>COMMUNITY</li>
            </ul>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4>SOCIAL</h4>
            <ul className="list-unstyled">
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>YOUTUBE</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SURF'S UP INC | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;