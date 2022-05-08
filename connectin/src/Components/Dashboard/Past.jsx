import React from "react";
import { Link } from "react-router-dom";
import Card from "../Events/Card";
import Navbar from "../Navbar";

export default function Section() {
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
                <Link to={"/upcoming"} style={{ textDecoration: "none" }}>
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
      <div className="row m-4">
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
        <div className="col">
          <Card />
        </div>
      </div>
    </div>
  );
}
