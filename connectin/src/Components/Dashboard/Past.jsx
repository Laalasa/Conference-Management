import React from "react";
import { Link } from "react-router-dom";
import Card from "../Events/Card";
import Navbar from "../Navbar";

export default function Section() {
  return (
    <div>
      <Navbar />
      <div className="row mt-6">
        <div className="col-3 mt-6 ps-5 text-center">
          <div className="text-center card card card-out">
            <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"></img>
            <div className="p-3 row text-center">
              <strong>Laalasa Krishna</strong>
              <br />
              {/* <em>laalasa.krishna@gmail.com</em> */}
              <br />
              <em>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aut
                est corrupti qui quod quasi distinctio delectus illum nesciunt
                laudantium?
              </em>
            </div>
          </div>
          <p className="mt-2 mb-5 forgot-password">
            forgot password? <a href="#">Reset</a>
          </p>
        </div>
        <div className="col-9">
          <nav className="navbar navbar-expand-lg bg-var ps-lg-5 pe-lg-5">
            <div className="container-fluid">
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
                  <li className="nav-item">
                    <Link to={"/past"} style={{ textDecoration: "none" }}>
                      <a className="nav-link active-section" id="host">
                        Past Events
                      </a>
                    </Link>
                  </li>
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
          </div>
        </div>
      </div>
    </div>
  );
}
