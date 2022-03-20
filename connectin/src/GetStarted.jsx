import React from "react";
import logo from "./Assets/logo_gs.png";
import "./Style/GetStarted.css";
import image from "./Assets/img_gs.png";

export default function GetStarted(props) {
  return (
    <div className="getStarted">
      <div className="container pt-2">
        <nav class="navbar navbar-dark bg-none justify-content-between">
          <a href="#" class="navbar-brand">
            <img src={logo} width="150"></img>
          </a>
          <form class="form-inline">
            <button class="btn btn-gs me-4">Log In</button>
            <button class="btn btn-gs">Sign Up</button>
          </form>
        </nav>
        <div className="mt-5 ms-5 me-5">
          <div className="row mt-5">
            <div className="col-lg-6 text-gs mt-5">
              <h1>
                All your conferences, <br />
                all on ConnectIn
              </h1>
              <p>
                Create immersive virtual, hybrid, and in-person event
                experiences for your audience, no matter where they are.
              </p>
              <div className="relative">
                <button class="btn btn-ctc mt-3 ps-4 pe-4 pt-2 pb-2">
                  Get Started
                </button>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block text-center">
              <img src={image} width="500px" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
