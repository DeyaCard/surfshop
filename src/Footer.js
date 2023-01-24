import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">SOCIAL</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">ABOUT</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">SINCE 1981</a></li>
                    <li><a href="#!">OUR MISSION</a></li>
                    <li><a href="#!">MEET OUR TEAM</a></li>
                    <li><a href="#!">ANNUAL SURF REPORT</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">LOCATION</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">123 WEST MAUI RD</a></li>
                    <li><a href="#!">LAHAINA, HI</a></li>
                    <li><a href="#!">808-420-1981</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">SERVICES</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">RENTALS</a></li>
                    <li><a href="#!">LESSONS</a></li>
                    <li><a href="#!">PRIVATE</a></li>
                    <li><a href="#!">SHOP</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright:
        <a> SURF'S UP INC</a>
    </div>

</footer>

export default Footer