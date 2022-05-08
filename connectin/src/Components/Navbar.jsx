import React from "react";
import "../Style/Navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  document.addEventListener("DOMContentLoaded", () => {
    // const className1 = document.getElementById("find");
    // className1.classList.remove("active");
    // const className2 = document.getElementById("host");
    // className2.classList.remove("active");
    // const className3 = document.getElementById("dash");
    // className3.classList.remove("active");
    // console.log(props.active);

    let classname = document.getElementById(props.active);
    console.log(classname);
    console.log(props.active);
    classname.classList.add("active");
  });

  return (
    <nav className="navbar  navbar-inside navbar-expand-lg bg-var fixed-top ps-lg-5 pe-lg-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width="150px" alt="" />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/findevent"} style={{ textDecoration: "none" }}>
                <a
                  className="nav-link find"
                  id="find"
                  aria-current="page"
                  href="#"
                >
                  Find Events
                </a>
              </Link>
            </li>
            <span className="span"></span>
            <li className="nav-item">
              <Link to={"/hostevent"} style={{ textDecoration: "none" }}>
                <a className="nav-link" id="host">
                  Host Event
                </a>
              </Link>
            </li>
            <span className="span"></span>
            <li className="nav-item">
              <Link to={"/upcoming"} style={{ textDecoration: "none" }}>
                <a className="nav-link" id="dash">
                  Dashboard
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
