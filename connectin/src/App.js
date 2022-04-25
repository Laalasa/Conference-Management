import React from "react";
import GetStarted from "./GetStarted";
import "./Style/App.css";
import LogIn from "./Components/Authentication/LogIn";
import SignUp from "./Components/Authentication/SignUp";
import Navbar from "./Components/Navbar";
import { Authentication } from "./Components/Data/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PrivateRoute from "./Components/PrivateRoute";
import FindEvent from "./Components/Events/FindEvent";

function App() {
  return (
    <div className="App">
      <Authentication
        child={
          <Router>
            <Routes>
              <Route exact path="/" element={<GetStarted />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/findevent" element={<FindEvent />} />
            </Routes>
          </Router>
        }
      />
      {/* <GetStarted /> */}
      {/* <LogIn /> */}
      {/* <Navbar active="find" />
      <Navbar active="host" /> */}
      {/* <Navbar active="#dash" /> */}
      {/* <SignUp /> */}
      {/* <div className="box"></div> */}
    </div>
  );
}

export default App;
