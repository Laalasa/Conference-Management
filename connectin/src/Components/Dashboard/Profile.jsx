import React from "react";
import { Link } from "react-router-dom";
import Card from "../Events/Card";
import Navbar from "../Navbar";
import "../../Style/Profile.css";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <nav className="navbar navbar-expand-lg bg-var ps-lg-5 pe-lg-5 mt-6">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse border-bottom"
            id="navbarNav"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to={"/upcoming"} style={{ textDecoration: "none" }}>
                  <a
                    className="nav-link find"
                    id="find"
                    aria-current="page"
                    href="#"
                  >
                    Upcoming Events
                  </a>
                </Link>
              </li>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <li className="nav-item">
                <Link to={"/past"} style={{ textDecoration: "none" }}>
                  <a className="nav-link" id="host">
                    Past Events
                  </a>
                </Link>
              </li>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <li className="nav-item">
                <Link to={"/hosted"} style={{ textDecoration: "none" }}>
                  <a className="nav-link" id="dash">
                    Hosted Events
                  </a>
                </Link>
              </li>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
              <li className="nav-item">
                <Link to={"/profile"} style={{ textDecoration: "none" }}>
                  <a className="nav-link" id="dash">
                    Profile
                  </a>
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-5 avatar m-5">LK</div>
          <div className="col details m-5">
            Name &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Laalasa Krishna
            <br />
            <br />{" "}
            Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            laalasa.krishna@gmail.com <br />
            <br /> Hosted Events&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 5
            Events
            <br />
            <br /> Attended Events&nbsp;&nbsp;&nbsp;: 6 Events <br />
            <br /> Registered Events&nbsp;: 9 Events
            <br />
            <br />
            <button className="ps-4 pe-4 nav-btn-tri">Reset Password?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
